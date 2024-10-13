using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NumbleBackend.Migrations
{
    /// <inheritdoc />
    public partial class ChangeSubscriptionTypings : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Subsrciption",
                table: "Customers",
                newName: "Subscription");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Subscription",
                table: "Customers",
                newName: "Subsrciption");
        }
    }
}
