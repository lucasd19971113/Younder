using Microsoft.EntityFrameworkCore;
using Younder.Models;

namespace Younder.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            // var assemblyName = typeof (IHostBuilder).Assembly.GetName ().Name;

            // string assemblyName = typeof(LogigoShopContext).Namespace;

            
                
            optionsBuilder.UseSqlServer (ConnectionString);
            

            // options.UseSqlServer(connection, b => b.MigrationsAssembly("logigoshop.api.configuration"))
        }

        public static string ConnectionString { get; set; }

        public DbSet<User> Users { get; set; }
    }
}