# UserRepository

The `UserRepository` class extends the `Repository<User>` and implements the `IUserRepository` interface. It provides a specialized repository for handling `User` entities.

## Key Components

- **Constructor**: Initializes the repository with an `ApplicationDbContext`.

```csharp
internal sealed class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    } 
} 