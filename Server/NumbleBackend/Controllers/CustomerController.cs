using Microsoft.AspNetCore.Mvc;
using NumbleBackend.Data;
using NumbleBackend.Models;


[Route("api/[controller]")]
[ApiController]

public class CustomerController : ControllerBase
{
  private readonly AppDbContext _context;

  public CustomerController(AppDbContext context)
  {
    _context = context;
  }

  [HttpGet]
  public IActionResult GetCustomer()
  {
    var customer = _context.Customers.ToList();
    return Ok(customer);
  }

  [HttpPost]
  public IActionResult AddCustomer(Customer customer)
  {
    _context.Customers.Add(customer);
    _context.SaveChanges();
    return Ok(customer);
  }
}