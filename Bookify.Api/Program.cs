using Bookify.Api.Extensions;
using Bookify.Application;
using Bookify.Infrastracture;

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
