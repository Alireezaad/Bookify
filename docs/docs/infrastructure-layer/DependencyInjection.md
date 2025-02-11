# DependencyInjection

The `DependencyInjection` class is a static class that provides an extension method to register infrastructure services with the dependency injection container.

## Key Components

- **AddInfrastracture Method**: 
  - Registers services like `IDateTimeProvider`, `IEmailService`, and repositories (`IBookingRepository`, `IUserRepository`, `IApartmentRepository`).
  - Configures `ApplicationDbContext` with a connection string from the configuration.
  - Adds a singleton for `ISqlConnectionFactory`.
  - Configures Dapper to use a custom type handler for `DateOnly`.

```csharp
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastracture(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient<IDateTimeProvider, DateTimeProvider>();

        services.AddTransient<IEmailService, EmailService>();

        var connectionString = configuration.GetConnectionString("Database") ??
            throw new ArgumentNullException(nameof(configuration));

        services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseNpgsql(connectionString).UseSnakeCaseNamingConvention(); // Use SnakeCaseNamingConventions
        });

        services.AddScoped<IBookingRepository, BookingRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IApartmentRepository, ApartmentRepository>();

        services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<ApplicationDbContext>());

        services.AddSingleton<ISqlConnectionFactory>(_ => new SqlConnectionFactory(connectionString));

        SqlMapper.AddTypeHandler(new DateOnlyTypeHandler());

        return services;
    }
} 