# BookingsController

The `BookingsController` class is an API controller responsible for handling HTTP requests related to bookings.

## Key Components

- **Constructor**: Initializes the controller with an `ISender` for sending queries and commands.
- **GetBooking Method**: Handles `GET` requests to retrieve booking details by ID. It uses the `GetBookingQuery` to fetch the booking.
- **Reserve Method**: Handles `POST` requests to reserve a booking. It uses the `ReserveBookingCommand` to create a new booking.

```csharp
[Route("api/[controller]")]
[ApiController]
public class BookingsController : ControllerBase
{
    private readonly ISender _sender;

    public BookingsController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetBooking(Guid id, CancellationToken cancellationToken)
    {
        var query = new GetBookingQuery(id);

        var result = await _sender.Send(query, cancellationToken);

        return result.IsSuccess ? Ok(result.Value) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> Reserve(ReserveBookingRequest request, CancellationToken cancellationToken)
    {
        var command = new ReserveBookingCommand(
            request.ApartmentId,
            request.UserId,
            request.StartDate,
            request.EndDate);

        var result = await _sender.Send(command, cancellationToken);

        return result.IsSuccess 
            ?  CreatedAtAction(nameof(GetBooking), new { result.Value }, result.Value)
            : BadRequest(result.Error);
    }
} 