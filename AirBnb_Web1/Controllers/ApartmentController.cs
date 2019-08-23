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
  [RoutePrefix("api/Apartment")]
  public class ApartmentController : ApiController
  {

    private readonly AirBnbContext context = null;

    public ApartmentController()
    {
      context = AirBnbContext.Instance;
    }

    [HttpGet]
    [Route("GetActiveApartments")]
    public IHttpActionResult GetActiveApartments()
    {
      List<Apartman> apartments = new List<Apartman>();

      foreach (var apartment in context.Apartmans)
      {
        apartments.Add(apartment);
      }

      //return Ok(apartments);
      return Ok(5);
    }


  }
}
