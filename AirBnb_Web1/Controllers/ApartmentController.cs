using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AirBnb_Web1.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
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
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Set<Apartman>().ToList();
      foreach (var apartment in apartments)
      {
        ApartmentBM apartmentBM = GetApartmentInfo(apartment);
        apartmentsInfo.Add(apartmentBM);
      }

      return Ok(apartmentsInfo);
      
    }


    private ApartmentBM GetApartmentInfo(Apartman apartman)
    {
      ApartmentBM apartmentBM = new ApartmentBM();
      apartmentBM.ID = apartman.ID;
      apartmentBM.Type = apartman.Type.ToString();
      apartmentBM.Status = apartman.Status.ToString();
      apartmentBM.SingUpTime = apartman.SingUpTime;
      apartmentBM.SingOutTime = apartman.SingOutTime;
      apartmentBM.RoomNumber = apartman.RoomNumber;
      apartmentBM.RentDates = apartman.RentDates;
      apartmentBM.PricePerNight = apartman.PricePerNight;
      apartmentBM.Pictures = apartman.Pictures;
      apartmentBM.AvailableDates = apartman.AvailableDates;
      apartmentBM.GuestNumber = apartman.GuestNumber;

      //location info:
      Location locationInfo = context.Locations.Where(x => x.ID == apartman.LocationID).FirstOrDefault();
      apartmentBM.Latitude = locationInfo.Latitude;
      apartmentBM.Longitude = locationInfo.Longitude;

      //Coments into:
      apartmentBM.CommentIDs = new HashSet<int>();
      ICollection<Comment> test = apartman.Comments; // wokrs
      foreach (var comment in test)
      {
        apartmentBM.CommentIDs.Add(comment.ID);
      }
      

      //Adress
      apartmentBM.Streat = locationInfo.Adress.Streat;
      apartmentBM.StreatNumber = locationInfo.Adress.StreatNumber;
      apartmentBM.ZipCode = locationInfo.Adress.ZipCode;
      apartmentBM.Settlement = locationInfo.Adress.Settlement;

      //Host:
      User Host = context.Users.Where(x => x.ID == apartman.HostID).FirstOrDefault();
      apartmentBM.HostID = Host.ID;
      apartmentBM.HostName = Host.Name;
      apartmentBM.HostSurename = Host.Surename;


      return apartmentBM;
    }


  }
}
