using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
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
      ICollection<Amenitie> Amenities = context.Amenities.Where(x => x.Deleted == false).ToList();
      ICollection<AmenitieBM> amms = new HashSet<AmenitieBM>();
      foreach (Amenitie item in Amenities)
      {
        AmenitieBM bM = new AmenitieBM();
        bM.ID = item.ID;
        bM.Name = item.Name;

        amms.Add(bM);
      }
      return Ok(amms);

    }

    [HttpGet]
    [Route("GetAmenitieNames")]
    public IHttpActionResult GetAmenitieNames()
    {
      ICollection<Amenitie> Amenities = context.Amenities.Where(x => x.Deleted == false).ToList();
      List<string> amm = new List<string>();

      foreach (Amenitie item in Amenities)
      {
        amm.Add(item.Name);
      }

      return Ok(amm);

    }

    [HttpDelete]
    [Route("DeleteAmenitie")]
    public IHttpActionResult DeleteAmenitie(int amenitieId)
    {
      Amenitie amm = context.Amenities.Where(x => x.ID == amenitieId).FirstOrDefault();
      amm.Deleted = true;
      //context.Amenities.Remove(amm);
      context.SaveChanges();

      return Ok();

    }

    [HttpPut]
    [Route("AddAmenitie")]
    public IHttpActionResult AddAmenitie(string amenitieName)
    {
      Amenitie amm = context.Amenities.Where(x => x.Name == amenitieName && x.Deleted == false).FirstOrDefault();
      if (amm == null)
      {
        Amenitie am1 = new Amenitie();
        am1.Deleted = false;
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
