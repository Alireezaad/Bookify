using Bookify.Infrastracture;
using Microsoft.EntityFrameworkCore;

namespace Bookify.Api.Extensions;
public static class ApplicationBuilderExtensions{
    // add a method name ApplyMigrations using IApplicationBuilder
    public static void ApplyMigrations(this IApplicationBuilder app){
        using var scope = app.ApplicationServices.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        dbContext.Database.Migrate();
    }
}
