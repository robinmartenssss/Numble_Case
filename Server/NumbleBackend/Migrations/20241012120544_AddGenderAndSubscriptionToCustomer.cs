using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NumbleBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddGenderAndSubscriptionToCustomer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "street",
                table: "Customers",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "postcode",
                table: "Customers",
                newName: "Postcode");

            migrationBuilder.RenameColumn(
                name: "phone",
                table: "Customers",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "numberPlate",
                table: "Customers",
                newName: "NumberPlate");

            migrationBuilder.RenameColumn(
                name: "number",
                table: "Customers",
                newName: "Number");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "Customers",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "firstName",
                table: "Customers",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Customers",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "city",
                table: "Customers",
                newName: "City");

            migrationBuilder.RenameColumn(
                name: "bus",
                table: "Customers",
                newName: "Bus");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Subsrciption",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "Subsrciption",
                table: "Customers");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Customers",
                newName: "street");

            migrationBuilder.RenameColumn(
                name: "Postcode",
                table: "Customers",
                newName: "postcode");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Customers",
                newName: "phone");

            migrationBuilder.RenameColumn(
                name: "NumberPlate",
                table: "Customers",
                newName: "numberPlate");

            migrationBuilder.RenameColumn(
                name: "Number",
                table: "Customers",
                newName: "number");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Customers",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Customers",
                newName: "firstName");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Customers",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Customers",
                newName: "city");

            migrationBuilder.RenameColumn(
                name: "Bus",
                table: "Customers",
                newName: "bus");
        }
    }
}
