using System.ComponentModel.DataAnnotations;

namespace NumbleBackend.Models
{
  public class Customer{
    [Key]
    public int Id {get; set;}
    [Required]
    public string Gender {get; set;}
    [Required]
    public string FirstName {get; set;}
    [Required]
    public string LastName  {get; set;}
    [Required]
    public string NumberPlate  {get; set;}
    [Required]
    public string Email  {get; set;}
    [Required]
    public string Street  {get; set;}
    [Required]
    public string Number  {get; set;}
    
    public string Bus  {get; set;}
    [Required]
   
    public string City  {get; set;}
    [Required]
   
    public string Postcode  {get; set;}
    [Required]
   
    public string Phone  {get; set;}

    [Required]
 
    public string Subscription {get; set;}

  }
}