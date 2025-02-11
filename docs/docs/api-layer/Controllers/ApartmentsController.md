# ApartmentsController

The `ApartmentsController` class is an API controller responsible for handling HTTP requests related to apartments.

## Key Components

- **Constructor**: Initializes the controller with an `ISender` for sending queries.
- **SearchApartments Method**: Handles `GET` requests to search for apartments within a specified date range. It uses the `SearchApartmentsQuery` to retrieve results.

```csharp
[Route("api/[controller]")]
[ApiController]
public class ApartmentsController : ControllerBase
{
    private readonly ISender _sender;

    public ApartmentsController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet]
    public async Task<IActionResult> SearchApartments(DateOnly start, DateOnly end, CancellationToken cancellationToken)
    {
        var query = new SearchApartmentsQuery(start, end);

        var result = await _sender.Send(query, cancellationToken);

        return Ok(result);
    }
}
``` 