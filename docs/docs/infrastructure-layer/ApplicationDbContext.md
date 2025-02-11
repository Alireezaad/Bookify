# ApplicationDbContext

The `ApplicationDbContext` class is a crucial part of the infrastructure layer, serving as the bridge between the domain and the database. It extends `DbContext` and implements `IUnitOfWork`, providing methods for saving changes and publishing domain events.

## Key Components

- **Constructor**: Initializes the context with `DbContextOptions` and an `IPublisher` for domain events.
- **OnModelCreating**: Applies configurations from the assembly.
- **SaveChangesAsync**: Overrides the default method to include domain event publishing and handles concurrency exceptions.
- **PublishDomainEventsAsync**: Publishes domain events using the `_publisher`.

```csharp
public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    private readonly IPublisher _publisher;
    public ApplicationDbContext(DbContextOptions options, IPublisher publisher) : base(options)
    {
        _publisher = publisher;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        base.OnModelCreating(modelBuilder);
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            var result = await base.SaveChangesAsync(cancellationToken);
            await PublishDomainEventsAsync();
            return result;
        }
        catch (DbUpdateConcurrencyException ex)
        {
            throw new ConcurrencyException("Concurrency exception occured.", ex);
        }
    }

    private async Task PublishDomainEventsAsync()
    {
        var domainEvents = ChangeTracker
            .Entries<Entity>()
            .Select(entry => entry.Entity)
            .SelectMany(entity =>
            {
                var domainEvents = entity.GetDomainEvents();
                entity.ClearDomainEvents();
                return domainEvents;
            })
        .ToList();

        foreach (var domainEvent in domainEvents)
        {
            await _publisher.Publish(domainEvent);
        }
    }
} 