# DateOnlyTypeHandler

The `DateOnlyTypeHandler` class is a custom type handler for Dapper, designed to handle `DateOnly` types.

## Key Components

- **Parse Method**: Converts a `DateTime` object to a `DateOnly` object.
- **SetValue Method**: Sets the `DbType` to `Date` and assigns the `DateOnly` value to the database parameter.

```csharp
internal sealed class DateOnlyTypeHandler : SqlMapper.TypeHandler<DateOnly>
{
    public override DateOnly Parse(object value) => DateOnly.FromDateTime((DateTime)value);

    public override void SetValue(IDbDataParameter parameter, DateOnly value)
    {
        parameter.DbType = DbType.Date;
        parameter.Value = value;
    }
}
``` 