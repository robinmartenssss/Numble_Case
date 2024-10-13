using System.ComponentModel.DataAnnotations;

namespace NumbleBackend.Models
{
  public class Customer{
    [Key]
    public int Id {get; set;}
  
    public string Gender {get; set;}
    
    public string FirstName {get; set;}
    
    public string LastName  {get; set;}
   
    public string NumberPlate  {get; set;}
   
    public string Email  {get; set;}

    public string Street  {get; set;}

    public string Number  {get; set;}
    public string Bus  {get; set;}
   
    public string City  {get; set;}
   
    public string Postcode  {get; set;}
   
    public string Phone  {get; set;}
 
    public string Subscription {get; set;}

  }
}