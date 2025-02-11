# ApartmentRepository

The `ApartmentRepository` class extends the `Repository<Apartment>` and implements the `IApartmentRepository` interface. It provides a specialized repository for handling `Apartment` entities.

## Key Components

- **Constructor**: Initializes the repository with an `ApplicationDbContext`.

```csharp
internal sealed class ApartmentRepository : Repository<Apartment>, IApartmentRepository
{
    public ApartmentRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }
} 