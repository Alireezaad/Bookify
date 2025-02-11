# Program.cs

The `Program.cs` file is the entry point for the `Bookify.Api` application, responsible for configuring and starting the web application.

## Key Components

- **WebApplication Builder**: Initializes the application with default configurations and services.
- **Service Registration**: Adds controllers, Swagger for API documentation, and application-specific services.
- **Middleware Configuration**: Configures the HTTP request pipeline with Swagger, exception handling, and authorization.
- **Application Execution**: Maps controllers and runs the application.

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddApplication();
builder.Services.AddInfrastracture(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.ApplyMigrations();
    
    //app.SeedData();
}

app.UseHttpsRedirection();

app.UseCustomExceptionHandling();

app.UseAuthorization();

app.MapControllers();

app.Run();
``` 