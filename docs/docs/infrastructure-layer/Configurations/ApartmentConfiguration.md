# ApartmentConfiguration

The `ApartmentConfiguration` class implements `IEntityTypeConfiguration<Apartment>` and is responsible for configuring the `Apartment` entity in the database.

## Key Components

- **Configure Method**: 
  - Maps the `Apartment` entity to the `apartments` table.
  - Configures the primary key and properties like `Name` and `Description` with specific conversions.
  - Configures owned entities like `Address`, `Price`, and `CleaningFee` with custom conversions for currency.
  - Adds a `Version` property for pessimistic concurrency control.

```csharp
internal sealed class ApartmentConfiguration : IEntityTypeConfiguration<Apartment>
{
    public void Configure(EntityTypeBuilder<Apartment> builder)
    {
        builder.ToTable("apartments");

        builder.HasKey(apartment => apartment.Id);

        builder.Property(apartment => apartment.Name)
            .HasMaxLength(200)
            .HasConversion(name => name.value, value => new Name(value));

        builder.Property(apartment => apartment.Description)
            .HasMaxLength(2000)
            .HasConversion(description => description.value, value => new Description(value));

        builder.OwnsOne(apartment => apartment.Address);

        builder.OwnsOne(apartment => apartment.Price, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
            .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.OwnsOne(apartment => apartment.CleaningFee, priceBuilder =>
        {
            priceBuilder.Property(money => money.Currency)
            .HasConversion(currency => currency.Code, code => Currency.FromCode(code));
        });

        builder.Property<uint>("Version").IsRowVersion(); //For pessimistic concurrency 
    }
} 