using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Permissions;
using System.Threading;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Security;

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
      if(CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      Amenitie amm = context.Amenities.Where(x => x.ID == amenitieId).FirstOrDefault();
      amm.Deleted = true;
      //context.Amenities.Remove(amm);
      context.SaveChanges();

      return Ok();

    }

    [HttpDelete]
    [Route("AddAmenitie")]
    public IHttpActionResult AddAmenitie(string amenitieName)
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

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

    [HttpGet]
    [Route("GetHolydaysNames")]
    public IHttpActionResult GetHolydaysNames() // za Guest kad hoce da vidi sve praznike
    {
      ICollection<HolidayDays> holidays = context.Holidays.Where(x => x.Deleted == false).ToList();
      List<string> amm = new List<string>();

      foreach (HolidayDays item in holidays)
      {
        amm.Add(item.Holiday.ToString());
      }


      return Ok(amm);

    }

    [HttpGet]
    [Route("GetHolydays")]
    public IHttpActionResult GetHolydays() // za Admina
    {

      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      ICollection<HolidayDays> holidays = context.Holidays.Where(x => x.Deleted == false).ToList();
      List<HolidayBM> amm = new List<HolidayBM>();

      foreach (HolidayDays item in holidays)
      {
        HolidayBM bM = new HolidayBM();
        bM.ID = item.ID;
        bM.HolidayDate = item.Holiday;

        amm.Add(bM);
      }


      return Ok(amm);

    }

    [HttpDelete]
    [Route("AddHoliday")]
    public IHttpActionResult AddHoliday(DateTime holiday)
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      HolidayDays test = context.Holidays.Where(x => x.Holiday == holiday && x.Deleted == false).FirstOrDefault();
      if(test != null)
      {
        return BadRequest("There is already a holiday with that date");
      }

      HolidayDays holidayDay = new HolidayDays();
      holidayDay.Holiday = holiday;
      holidayDay.Deleted = false;

      context.Holidays.Add(holidayDay);
      context.SaveChanges();

      return Ok("Succsesfuly added");

    }

    [HttpDelete]
    [Route("DeleteHoliday")]
    public IHttpActionResult DeleteHoliday(int holidayId)
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      HolidayDays holiday = context.Holidays.Where(x => x.ID == holidayId).FirstOrDefault();
      holiday.Deleted = true;
      //context.Amenities.Remove(amm);
      context.SaveChanges();

      return Ok("Succsesfuly deleted");

    }

    public bool CheckRole(string role)
    {
      var headers = Request.Headers;
      string token = headers.GetValues("Role").First();
      if (token != role)
      {
        return true;
      }

      return false;
    }

  }
}
