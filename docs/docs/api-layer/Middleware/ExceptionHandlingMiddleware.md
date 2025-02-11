# ExceptionHandlingMiddleware

The `ExceptionHandlingMiddleware` class is a custom middleware for handling exceptions in the HTTP request pipeline.

## Key Components

- **Constructor**: Initializes the middleware with the next request delegate and a logger.
- **InvokeAsync Method**: Catches exceptions during request processing, logs them, and returns a structured error response.
- **GetExceptionDetails Method**: Maps exceptions to `ExceptionDetails`, providing status codes and error messages.
- **ExceptionDetails Record**: Represents structured error information, including status, type, title, detail, and optional errors.

```csharp
public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception exception)
        {
            _logger.LogError(exception, "Exception occured: {message}", exception.Message);

            var exceptionDetails = GetExceptionDetails(exception);
            
            var problemDetails = new ProblemDetails
            {
                Status = exceptionDetails.Status,
                Type = exceptionDetails.Type,
                Title = exceptionDetails.Title,
                Detail = exceptionDetails.Detail
            };

            if(exceptionDetails.Errors is not null){
                problemDetails.Extensions["errors"] = exceptionDetails.Errors;
            }

            context.Response.StatusCode = exceptionDetails.Status;

            await context.Response.WriteAsJsonAsync(problemDetails);
        }
    }

    private static ExceptionDetails GetExceptionDetails(Exception exception)
    {
        return exception switch
        {
            ValidationException validationException => new ExceptionDetails(
                StatusCodes.Status400BadRequest,
                "ValidationFailure",
                "Validation error",
                "One or more validation errors has occured",
                validationException.Errors),
            _=> new ExceptionDetails(
                StatusCodes.Status500InternalServerError,
                "ServerError",
                "Server error",
                "An unexpected error has occured",
                null
            )
        };
    }

    internal record ExceptionDetails(
        int Status,
        string Type,
        string Title,
        string Detail,
        IEnumerable<object>? Errors
    );
} 