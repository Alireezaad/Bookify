# Repository

The `Repository` class is an abstract class that provides a base implementation for repositories handling entities.

## Key Components

- **Constructor**: Initializes the repository with an `ApplicationDbContext`.
- **GetByIdAsync Method**: Asynchronously retrieves an entity by its ID.
- **Add Method**: Adds a new entity to the context.

```csharp
internal abstract class Repository<T> where T : Entity
{
    protected readonly ApplicationDbContext DbContext;

    protected Repository(ApplicationDbContext dbContext)
    {
        DbContext = dbContext;
    }

    public async Task<T> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return await DbContext
            .Set<T>()
            .FirstOrDefaultAsync(entity => entity.Id == id, cancellationToken);
    }

    public void Add(T entity)
    {
        DbContext.Add(entity);
    }
}
``` 