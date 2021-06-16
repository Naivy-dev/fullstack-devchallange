using Microsoft.EntityFrameworkCore;
using serverside.api.Data;
using serverside.api.Entity;

namespace serverside.api.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ClassificadoMapping());
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Classificado> Classificado { get; set; }
    }
}
