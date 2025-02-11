# ApplicationBuilderExtensions

The `ApplicationBuilderExtensions` class provides extension methods for the `IApplicationBuilder` interface to enhance the application's middleware pipeline.

## Key Components

- **ApplyMigrations Method**: Applies pending migrations to the database using the `ApplicationDbContext`.
- **UseCustomExceptionHandling Method**: Adds custom exception handling middleware to the application's request pipeline.

```csharp
public static class ApplicationBuilderExtensions{
    public static void ApplyMigrations(this IApplicationBuilder app){

        using var scope = app.ApplicationServices.CreateScope();
        
        using var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        
        dbContext.Database.Migrate();
    }

    public static void UseCustomExceptionHandling(this IApplicationBuilder app){
        app.UseMiddleware<ExceptionHandlingMiddleware>();
    }
}
``` 