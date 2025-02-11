# SqlConnectionFactory

The `SqlConnectionFactory` class implements the `ISqlConnectionFactory` interface and is responsible for creating and managing database connections.

## Key Components

- **Constructor**: Initializes the factory with a connection string.
- **CreateConnection Method**: Creates and opens a new `NpgsqlConnection` using the provided connection string.

```csharp
internal sealed class SqlConnectionFactory : ISqlConnectionFactory
{
    private readonly string _connectionString;

    public SqlConnectionFactory(string connectionString)
    {
        _connectionString = connectionString;
    }

    public IDbConnection CreateConnection()
    {
        var connection = new NpgsqlConnection(_connectionString);
        connection.Open();
        return connection;
    }
}
``` 