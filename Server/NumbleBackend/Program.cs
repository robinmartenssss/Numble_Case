using Microsoft.EntityFrameworkCore;
using NumbleBackend.Data;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();

//Add Cors Polcy

builder.Services.AddCors(options => 
{
  options.AddPolicy("AllowAllOrigins", builder => 
  {
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
  });
});

// Add EF Core and configure the connection string from appsettings.json 

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

//eNABLE cors
app.UseCors("AllowAllOrigins");

// Configure the HTTP request pipeline. if (app.Environment.IsDevelopment()) { app.UseDeveloperExceptionPage(); }

if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();