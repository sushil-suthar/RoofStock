using System.ComponentModel.DataAnnotations;

namespace RoofStock.Models
{
    public class Property
    {
        public int PropertyId { get; set; }
        [StringLength(255)]
        public string Address { get; set; }
        public int? YearBuilt { get; set; }
        public double? ListPrice { get; set; }
        public double? MonthlyRent { get; set; }
        public double? GrossYield { get; set; }
    }

}