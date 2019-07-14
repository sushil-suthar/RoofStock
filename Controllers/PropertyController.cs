using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RoofStock.Models;
using RoofStock.Persistence;

namespace RoofStock.Controllers
{
    [Route("api/[controller]")]
    public class PropertyController : Controller
    {
        private readonly RoofStockDbContext db;

        public PropertyController(RoofStockDbContext db)
        {
            this.db = db;
        }
        public IEnumerable<Property> GetProperty()
        {
            return db.Property;
        }

        [HttpPost]
        public Object SaveProperty([FromBody] Property property)
        {
            try
            {
                db.Property.Add(property);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                return ex.Message;
            }

            return property;
        }

    }
}
