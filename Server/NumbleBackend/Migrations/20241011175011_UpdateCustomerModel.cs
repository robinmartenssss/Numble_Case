using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NumbleBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCustomerModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Postcode",
                table: "Customers",
                newName: "postcode");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Customers",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "Bus",
                table: "Customers",
                newName: "bus");

            migrationBuilder.RenameColumn(
                name: "Voornaam",
                table: "Customers",
                newName: "street");

            migrationBuilder.RenameColumn(
                name: "Telefoon",
                table: "Customers",
                newName: "phone");

            migrationBuilder.RenameColumn(
                name: "Straat",
                table: "Customers",
                newName: "numberPlate");

            migrationBuilder.RenameColumn(
                name: "Stad",
                table: "Customers",
                newName: "number");

            migrationBuilder.RenameColumn(
                name: "Nummerplaat",
                table: "Customers",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "Nummer",
                table: "Customers",
                newName: "firstName");

            migrationBuilder.RenameColumn(
                name: "Naam",
                table: "Customers",
                newName: "city");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "postcode",
                table: "Customers",
                newName: "Postcode");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Customers",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "bus",
                table: "Customers",
                newName: "Bus");

            migrationBuilder.RenameColumn(
                name: "street",
                table: "Customers",
                newName: "Voornaam");

            migrationBuilder.RenameColumn(
                name: "phone",
                table: "Customers",
                newName: "Telefoon");

            migrationBuilder.RenameColumn(
                name: "numberPlate",
                table: "Customers",
                newName: "Straat");

            migrationBuilder.RenameColumn(
                name: "number",
                table: "Customers",
                newName: "Stad");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "Customers",
                newName: "Nummerplaat");

            migrationBuilder.RenameColumn(
                name: "firstName",
                table: "Customers",
                newName: "Nummer");

            migrationBuilder.RenameColumn(
                name: "city",
                table: "Customers",
                newName: "Naam");
        }
    }
}
