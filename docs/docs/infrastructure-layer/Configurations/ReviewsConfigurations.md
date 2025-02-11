# ReviewsConfigurations

The `ReviewsConfigurations` class implements `IEntityTypeConfiguration<Review>` and is responsible for configuring the `Review` entity in the database.

## Key Components

- **Configure Method**: 
  - Maps the `Review` entity to the `reviews` table.
  - Configures the primary key and properties like `Comment` and `Rating` with specific conversions.
  - Sets up relationships with `Booking`, `User`, and `Apartment` entities using foreign keys.

```csharp
public sealed class ReviewsConfigurations : IEntityTypeConfiguration<Review>
{
    public void Configure(EntityTypeBuilder<Review> builder)
    {
        builder.ToTable("reviews");

        builder.HasKey(r => r.Id);

        builder.Property(r => r.Comment)
            .HasMaxLength(1000)
            .HasConversion(commeent => commeent.Value, comment => new Comment(comment));

        builder.Property(r => r.Rating)
            .HasConversion(rating => rating.Value, value => Rating.Create(value).Value);

        builder.HasOne<Booking>()
            .WithMany()
            .HasForeignKey(r => r.BookingId);

        builder.HasOne<User>()
            .WithMany()
            .HasForeignKey(r => r.UserId);

        builder.HasOne<Apartment>()
            .WithMany()
            .HasForeignKey(r => r.ApartmentId);
    }
} 