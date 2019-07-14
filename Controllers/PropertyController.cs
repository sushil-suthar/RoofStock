using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace RoofStock.Controllers
{
    [Route("api/[controller]")]
    public class PropertyController : Controller
    {


        [HttpGet("[action]")]
        public IEnumerable<string> WeatherForecasts()
        {
            return null;
        }

    }
}
