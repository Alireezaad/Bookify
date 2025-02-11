# DateTimeProvider

The `DateTimeProvider` class implements the `IDateTimeProvider` interface and provides the current UTC date and time.

## Key Components

- **UtcNow Property**: Returns the current UTC date and time using `DateTime.UtcNow`.

```csharp
internal sealed class DateTimeProvider : IDateTimeProvider
{
    public DateTime UtcNow => DateTime.UtcNow; 
}
``` 