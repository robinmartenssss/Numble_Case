using Microsoft.EntityFrameworkCore;
using NumbleBackend.Models;

namespace NumbleBackend.Data

{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {

    }

    public DbSet<Customer> Customers {get; set;}
  }
}