using Microsoft.EntityFrameworkCore.Migrations;

namespace RoofStock.Migrations
{
    public partial class YearBuiltColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "YearBuilt",
                table: "Property",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "YearBuilt",
                table: "Property");
        }
    }
}
