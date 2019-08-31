using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Helper.Enums;
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

    [HttpPatch]
    [Route("ChangeApartment")]
    public IHttpActionResult ChangeApartment(ApartmentBM apartment)
    {
      Apartman app = context.Apartmans.Where(x => x.ID == apartment.ID).FirstOrDefault();
      SetApartment(app, apartment);

      return Ok();
    }

    [HttpDelete]
    [Route("DeleteApartmentComment")]
    public IHttpActionResult DeleteApartmentComment(int commentId )
    {
      Comment comm = context.Comments.Where(x => x.ID == commentId).FirstOrDefault();
      context.Comments.Remove(comm);
      context.SaveChanges();

      return Ok();
    }

    [HttpPatch]
    [Route("ChangeStatusApartmentComment")]
    public IHttpActionResult ChangeStatusApartmentComment(int commentId)
    {
      Comment comm = context.Comments.Where(x => x.ID == commentId).FirstOrDefault();
      comm.Blocked = (comm.Blocked == true) ? false : true;
      context.SaveChanges();

      return Ok();
    }

    [HttpPut]
    [Route("AddApartment")]
    public IHttpActionResult AddApartment(ApartmentBM apartmentBM)
    {
      apartmentBM.HostID = 3; //ovo menjas kad uradis logovanje 
       GetApartmentFromBM(apartmentBM);
      

      return Ok();
    }

    [HttpDelete]
    [Route("DeleteApartment")]
    public IHttpActionResult DeleteApartment(int apartmentId)
    {
      Apartman app = context.Apartmans.Where(x => x.ID == apartmentId).FirstOrDefault();
      context.Apartmans.Remove(app);
      context.SaveChanges();

      return Ok();
    }

    private bool GetApartmentFromBM( ApartmentBM apartmentBM)
    {
      Apartman apartman = new Apartman();
      apartman.Type = (apartmentBM.Type == ApartmanType.FullApartman.ToString()) ? ApartmanType.FullApartman : ApartmanType.Room;
      apartman.Status = ApartmanStatus.NotActive;
      apartman.HostID = apartmentBM.HostID;

      //promeni ovaj datetype :
      apartman.SingUpTime = new DateTime(apartmentBM.SingUpTime.Year, apartmentBM.SingUpTime.Month, apartmentBM.SingUpTime.Day, apartmentBM.SingUpTime.Hour, apartmentBM.SingUpTime.Minute, apartmentBM.SingUpTime.Second);
      apartman.SingOutTime = new DateTime(apartmentBM.SingOutTime.Year, apartmentBM.SingOutTime.Month, apartmentBM.SingOutTime.Day, apartmentBM.SingOutTime.Hour, apartmentBM.SingOutTime.Minute, apartmentBM.SingOutTime.Second);
      apartman.RoomNumber = apartmentBM.RoomNumber;
      apartman.RentDates = apartmentBM.RentDates;
      apartman.PricePerNight = apartmentBM.PricePerNight;
      apartman.Pictures = apartmentBM.Pictures;
      apartman.AvailableDates = apartmentBM.AvailableDates;
      apartman.GuestNumber = apartmentBM.GuestNumber;

      Adress adress1 = new Adress();
      adress1.Streat = apartmentBM.Streat;
      adress1.StreatNumber = apartmentBM.StreatNumber;
      adress1.ZipCode = apartmentBM.ZipCode;
      adress1.Settlement = apartmentBM.Settlement;
      context.Adresss.Add(adress1);
      context.SaveChanges();

      //location info:
      Location locationInfo = new Location();
      locationInfo.Latitude = apartmentBM.Latitude;
      locationInfo.Longitude = apartmentBM.Longitude;
      locationInfo.AdressID = adress1.ID;
      context.Locations.Add(locationInfo);
      context.SaveChanges();

      apartman.LocationID = locationInfo.ID;
      context.Apartmans.Add(apartman);
      context.SaveChanges();

      return true;
    }

    private bool SetApartment(Apartman apartman , ApartmentBM apartmentBM)
    {
      apartman.Type = (apartmentBM.Type == ApartmanType.FullApartman.ToString() ) ? ApartmanType.FullApartman : ApartmanType.Room;
      apartman.Status = (apartmentBM.Status == ApartmanStatus.Active.ToString()) ? ApartmanStatus.Active : ApartmanStatus.NotActive;

      apartman.SingUpTime = new DateTime(apartmentBM.SingUpTime.Year, apartmentBM.SingUpTime.Month, apartmentBM.SingUpTime.Day, apartman.SingUpTime.Hour, apartman.SingUpTime.Minute, apartman.SingUpTime.Second) ;
      apartman.SingOutTime = new DateTime(apartmentBM.SingOutTime.Year, apartmentBM.SingOutTime.Month, apartmentBM.SingOutTime.Day, apartman.SingOutTime.Hour, apartman.SingOutTime.Minute, apartman.SingOutTime.Second);
      apartman.RoomNumber = apartmentBM.RoomNumber;
      apartman.RentDates = apartmentBM.RentDates;
      apartman.PricePerNight = apartmentBM.PricePerNight;
      apartman.Pictures = apartmentBM.Pictures;
      apartman.AvailableDates = apartmentBM.AvailableDates;
      apartman.GuestNumber = apartmentBM.GuestNumber;
      context.SaveChanges();

      //location info:
      Location locationInfo = context.Locations.Where(x => x.ID == apartman.LocationID).FirstOrDefault();
      locationInfo.Latitude = apartmentBM.Latitude;
      locationInfo.Longitude = apartmentBM.Longitude;
      context.SaveChanges();

      //Adress
      locationInfo.Adress.Streat = apartmentBM.Streat  ;
      locationInfo.Adress.StreatNumber = apartmentBM.StreatNumber  ;
      locationInfo.Adress.ZipCode = apartmentBM.ZipCode ;
      locationInfo.Adress.Settlement = apartmentBM.Settlement ;
      context.SaveChanges();

      return true;
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
      if(test != null)
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
      apartmentBM.HostSurname = Host.Surname;


      return apartmentBM;
    }


  }
}
