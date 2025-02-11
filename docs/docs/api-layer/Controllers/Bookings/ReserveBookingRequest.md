# ReserveBookingRequest

The `ReserveBookingRequest` class is a record type used to encapsulate the data required for reserving a booking.

## Key Components

- **Properties**: 
  - `ApartmentId`: The ID of the apartment to be booked.
  - `UserId`: The ID of the user making the booking.
  - `StartDate`: The start date of the booking.
  - `EndDate`: The end date of the booking.

```csharp
public sealed record ReserveBookingRequest(Guid ApartmentId, Guid UserId, DateOnly StartDate, DateOnly EndDate);
``` 