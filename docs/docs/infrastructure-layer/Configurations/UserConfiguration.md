# UserConfiguration

The `UserConfiguration` class implements `IEntityTypeConfiguration<User>` and is responsible for configuring the `User` entity in the database.

## Key Components

- **Configure Method**: 
  - Maps the `User` entity to the `users` table.
  - Configures the primary key and properties like `FirstName`, `LastName`, and `Email` with specific conversions.
  - Ensures the `Email` property is unique by creating an index.

```csharp
internal sealed class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users");

        builder.HasKey(user => user.Id);

        builder.Property(user => user.FirstName)
            .HasMaxLength(200)
            .HasConversion(firstName => firstName.Value, value => new FirstName(value));

        builder.Property(user => user.LastName)
            .HasMaxLength(300)
            .HasConversion(lastName => lastName.Value, value => new LastName(value));

        builder.Property(user => user.Email)
            .HasMaxLength(400)
            .HasConversion(email => email.Value, value => new Domain.Users.Email(value));

        builder.HasIndex(user => user.Email)
               .IsUnique();
    }
} 