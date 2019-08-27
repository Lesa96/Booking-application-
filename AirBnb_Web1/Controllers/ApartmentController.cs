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
    [Route("GetAllApartments")]
    public IHttpActionResult GetAllApartments()
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

    [HttpGet]
    [Route("GetActiveApartments")]
    public IHttpActionResult GetActiveApartments()
    {
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Set<Apartman>().ToList();
      foreach (var apartment in apartments)
      {
        if(apartment.Status == Helper.Enums.ApartmanStatus.Active)
        {
          ApartmentBM apartmentBM = GetApartmentInfo(apartment);
          apartmentsInfo.Add(apartmentBM);
        }
        
      }

      return Ok(apartmentsInfo);
      
    }

    [HttpGet]
    [Route("GetHostApartments")]
    public IHttpActionResult GetHostApartments(int hostId)
    {
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.HostID == hostId).ToList();
      foreach (var apartment in apartments)
      {
          ApartmentBM apartmentBM = GetApartmentInfo(apartment);
          apartmentsInfo.Add(apartmentBM);
      }

      return Ok(apartmentsInfo);

    }

    [HttpGet]
    [Route("GetCommentsForApartment")]
    public IHttpActionResult GetCommentsForApartment(int apartmentID)
    {
      List<CommentBM> commentInfos = new List<CommentBM>();
      ICollection<Comment> comments = context.Comments.Where(x => x.ApartmanID == apartmentID).ToList();

      foreach (var comment in comments)
      {
        CommentBM commentBM = GetCommentInfo(comment);
        commentInfos.Add(commentBM);
      }

      return Ok(commentInfos);
    }

    private CommentBM GetCommentInfo(Comment comment)
    {
      CommentBM commentBM = new CommentBM();
      commentBM.Id = comment.ID;
      commentBM.Rate = comment.Rate;
      commentBM.Text = comment.Text;
      commentBM.Blocked = comment.Blocked;

      commentBM.UserName = context.Users.Where(x => x.ID == comment.GuestID).FirstOrDefault().UserName;

      return commentBM;
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
