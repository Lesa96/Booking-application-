using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AirBnb_Web1.Controllers
{
  [RoutePrefix("api/Amenitie")]
  public class AmenitieController : ApiController
  {
    private readonly AirBnbContext context = null;

    public AmenitieController()
    {
      context = AirBnbContext.Instance;
    }

    [HttpGet]
    [Route("GetAllAmenities")]
    public IHttpActionResult GetAllAmenities()
    {     
      ICollection<Amenitie> Amenities = context.Set<Amenitie>().ToList();

      return Ok(Amenities);

    }

    [HttpDelete]
    [Route("DeleteAmenitie")]
    public IHttpActionResult DeleteAmenitie(int amenitieId)
    {
      Amenitie amm = context.Amenities.Where(x => x.ID == amenitieId).FirstOrDefault();
      context.Amenities.Remove(amm);
      context.SaveChanges();

      return Ok();

    }

    [HttpPut]
    [Route("AddAmenitie")]
    public IHttpActionResult AddAmenitie(string amenitieName)
    {
      Amenitie amm = context.Amenities.Where(x => x.Name == amenitieName).FirstOrDefault();
      if (amm == null)
      {
        Amenitie am1 = new Amenitie();
        am1.Name = amenitieName;

        context.Amenities.Add(am1);
        context.SaveChanges();
        return Ok();
      }

      else
        return BadRequest("Amenitie already exists");
      

    }

  }
}
