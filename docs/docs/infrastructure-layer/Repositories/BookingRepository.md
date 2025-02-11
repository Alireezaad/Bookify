# BookingRepository

The `BookingRepository` class extends the `Repository<Booking>` and implements the `IBookingRepository` interface. It provides specialized methods for handling `Booking` entities.

## Key Components

- **Constructor**: Initializes the repository with an `ApplicationDbContext`.
- **IsOverlappingAsync Method**: Checks if a booking overlaps with a given date range for a specific apartment, considering only active booking statuses.

```csharp
internal sealed class BookingRepository : Repository<Booking>, IBookingRepository
{
    private static readonly BookingStatus[] ActiveBookingStatuses =
    {
        BookingStatus.Reserved,
        BookingStatus.Confirmed,
        BookingStatus.Completed,
    };
    public BookingRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }

    public async Task<bool> IsOverlappingAsync(Apartment apartment, DateRange duration, CancellationToken cancellationToken = default)
    {
        return await DbContext
            .Set<Booking>()
            .AnyAsync(
                booking =>
                    booking.Id == apartment.Id &&
                    booking.Duration.Start <= duration.End &&
                    booking.Duration.End >= duration.Start &&
                    ActiveBookingStatuses.Contains(booking.Status),
            cancellationToken);
    }
} 