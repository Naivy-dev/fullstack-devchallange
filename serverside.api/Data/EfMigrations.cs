using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using serverside.api.Models;
using System.Linq;

namespace serverside.api.Data
{
    public static class EntityFrameworkExtensions
    {
          public static IApplicationBuilder UseApplyMigration(this IApplicationBuilder app)
          {
             using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
             {
                    using (var context = serviceScope.ServiceProvider.GetService<Context>())
                    {
                     var pendingMigrations = context.Database.GetPendingMigrations();

                     if (pendingMigrations.Count() == 0)
                     {
                            return app;
                     }

                        context.Database.Migrate();
                    }
             }
                return app;
          }
    }
}
