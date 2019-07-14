using Microsoft.EntityFrameworkCore;
using RoofStock.Models;

namespace RoofStock.Persistence
{
    public class RoofStockDbContext : DbContext
    {
        public RoofStockDbContext(DbContextOptions<RoofStockDbContext> options) : base(options)
        {

        }
        public DbSet<Property> Property { get; set; }
    }
}