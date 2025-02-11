# BookingConfiguration

The `BookingConfiguration` class implements `IEntityTypeConfiguration<Booking>` and is responsible for configuring the `Booking` entity in the database.

## Key Components

- **Configure Method**: 
  - Maps the `Booking` entity to the `bookings` table.
  - Configures the primary key and owned entities like `Duration`, `PriceForPeriod`, `CleaningFee`, `AmenitiesUpCharge`, and `TotalPrice` with custom conversions for currency.
  - Configures the `Status` property with a conversion between `BookingStatus` and `int`.
  - Sets up relationships with `User` and `Apartment` entities using foreign keys.

```csharp
internal sealed class BookingConfiguration : IEntityTypeConfiguration<Booking>
{
    public void Configure(EntityTypeBuilder<Booking> builder)
    {
        builder.ToTable("bookings");

        builder.HasKey(booking => booking.Id);

        builder.OwnsOne(booking => booking.Duration);

        builder.OwnsOne(booking => booking.PriceForPeriod, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
                .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.OwnsOne(booking => booking.CleaningFee, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
                .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.OwnsOne(booking => booking.AmenitiesUpCharge, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
                .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.OwnsOne(booking => booking.TotalPrice, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
                .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.Property(booking => booking.Status)
            .HasConversion(status => (int)status, status => (BookingStatus)status);

        builder.HasOne<User>()
            .WithMany()
            .HasForeignKey(booking => booking.Id);

        builder.HasOne<Apartment>()
            .WithMany()
            .HasForeignKey(booking => booking.ApartmentId);
    }
} 