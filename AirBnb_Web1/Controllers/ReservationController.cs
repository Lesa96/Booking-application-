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

namespace AirBnb_Web1.Controllers
{

  [RoutePrefix("api/Reservation")]
  public class ReservationController : ApiController
   {
    private readonly AirBnbContext context = null;

    public ReservationController()
    {
      context = AirBnbContext.Instance;
    }

    [HttpGet]
    [Route("GetSearchHostReservations")]
    public IHttpActionResult GetSearchHostReservations(int hostId,string username,string status)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      List<Apartman> apps = context.Apartmans.Where(x => x.HostID == hostId && x.Deleted != true).ToList();
      ICollection<Reservation> reservations = null;
      ICollection<Reservation> finalReservations = new HashSet<Reservation>();

      //reservation logic:
      if (apps != null)
      {
        foreach (Apartman apartment in apps)
        {
          reservations = apartment.Reservations.ToList();



          if (username != "" && username != "null" && username != null && reservations != null && reservations.Count > 0)
          {
            User user = context.Users.Where(x => x.UserName == username && x.Blocked == false).FirstOrDefault();
            if (user != null)
              reservations = user.Reservations.ToList();
            else
              reservations = null;


          }
          if (status != "" && status != "null" && status != null && reservations != null && reservations.Count > 0)
          {
            reservations = reservations.Where(x => x.Stauts.ToString() == status && x.Deleted == false).ToList();
          }

          if (reservations != null && reservations.Count > 0)
          {
            foreach (Reservation res in reservations) //smesta u finalReservations jer host moze imati vise apartmana i za svaki apartman moze imati vise reservacija
            {
              finalReservations.Add(res);
            }
          }

        }
      }
      //--------------------------------------

      if (finalReservations != null && finalReservations.Count > 0)
      {
        foreach (Reservation res in finalReservations)
        {
          ReservationBM reservationBM = GetReservationInfo(res);
          reservationInfo.Add(reservationBM);
        }
      }

      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetSearchReservations")]
    public IHttpActionResult GetSearchReservations(string username, string status)
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      List<ReservationBM> reservationInfo = new List<ReservationBM>();      
      ICollection<Reservation> reservations = context.Reservations.Where(x => x.Deleted == false).ToList();

      //reservation logic:
      if (reservations != null)
      {       
        if (username != "" && username != "null" && username != null && reservations != null && reservations.Count > 0)
        {
          User user = context.Users.Where(x => x.UserName == username && x.Blocked == false).FirstOrDefault();
          if (user != null)
            reservations = user.Reservations.Where(x=> x.Deleted == false).ToList();
          else
            reservations = null;
        }

        if (status != "" && status != "null" && status != null && reservations != null && reservations.Count > 0)
        {
          reservations = reservations.Where(x => x.Stauts.ToString() == status && x.Deleted == false).ToList();
        }               
      }
      //--------------------------------------

      if (reservations != null && reservations.Count > 0)
      {
        foreach (Reservation res in reservations)
        {
          ReservationBM reservationBM = GetReservationInfo(res);
          reservationInfo.Add(reservationBM);
        }
      }

      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetAllReservations")]
    public IHttpActionResult GetAllReservations()
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      ICollection<Reservation> reservations = context.Reservations.Where(x => x.Deleted == false).ToList(); 
      foreach (var reservation in reservations)
      {
        ReservationBM reservationBM = GetReservationInfo(reservation);
        reservationInfo.Add(reservationBM);

      }

      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetHostReservations")]
    public IHttpActionResult GetHostReservations(int hostId)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      List<Apartman> apps = context.Apartmans.Where(x => x.HostID == hostId && x.Deleted != true).ToList();
      if (apps != null && apps.Count > 0)
      {
        foreach (var apartment in apps)
        {
          if (apartment.Reservations != null && apartment.Reservations.Count > 0)
          {
            foreach (var reservation in apartment.Reservations)
            {
              ReservationBM reservationBM = GetReservationInfo(reservation);
              reservationInfo.Add(reservationBM);

            }
          }
        }
      }

      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetGuestReservations")]
    public IHttpActionResult GetGuestReservations(int guestId)
    {
      if (CheckRole("Guest"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      List<Reservation> ress = context.Reservations.Where(x => x.GuestID == guestId && x.Deleted != true).ToList();

      if (ress != null && ress.Count > 0)
      {
        foreach (var reservation in ress)
        {
          ReservationBM reservationBM = GetReservationInfo(reservation);
          reservationInfo.Add(reservationBM);

        }
      }
      

      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetGuestReservationRequest")]
    public IHttpActionResult GetGuestReservationRequest(int guestId, Helper.Enums.ReservationStatus status)
    {
      if (CheckRole("Guest"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      List<Reservation> ress = context.Reservations.Where(x => x.GuestID == guestId && x.Deleted != true).ToList();

      if (ress != null && ress.Count > 0)
      {
        foreach (var reservation in ress)
        {
          if (reservation.Stauts == status)
          {
            ReservationBM reservationBM = GetReservationInfo(reservation);
            reservationInfo.Add(reservationBM);
          }


        }
      }
      return Ok(reservationInfo);

    }

    [HttpGet]
    [Route("GetReservationRequests")]
    public IHttpActionResult GetReservationRequests(int hostId, Helper.Enums.ReservationStatus status)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      List<Apartman> apps = context.Apartmans.Where(x => x.HostID == hostId && x.Deleted != true).ToList();

      if(apps != null)
        foreach (var apartment in apps)
        {
          if(apartment.Reservations != null)
            foreach (var reservation in apartment.Reservations.Where(x=> x.Stauts == status))
            {
              ReservationBM reservationBM = GetReservationInfo(reservation);
              reservationInfo.Add(reservationBM);

            }
        }

      return Ok(reservationInfo);

    }

    [HttpDelete]
    [Route("ChageReservationRequests")]
    public IHttpActionResult ChageReservationRequests(int reservationId, Helper.Enums.ReservationStatus status)
    {
      if (CheckRole("Host"))
      {
        if(CheckRole("Guest"))
          return StatusCode(HttpStatusCode.Unauthorized);
      }

      Reservation reservation = context.Reservations.Where(x => x.ID == reservationId && x.Deleted == false ).FirstOrDefault();
      if (reservation == null)
        return NotFound();

      DateTime currentDate = reservation.SingUpDate;
      
      if (status == ReservationStatus.Rejected || status == ReservationStatus.Canceled)
      {
        for (int i = 0; i < reservation.NumberOfNights; i++)
        {
          DatesModel datesModel = context.DatesModels.Where(x => x.ApartmanID == reservation.ApartmanID && x.RentDate == currentDate && x.Deleted == false).FirstOrDefault();
          if (datesModel == null)
          {
            continue;
          }
          datesModel.Available = true;
          context.SaveChanges();
          currentDate = currentDate.AddDays(1);
        }


      }

      if(status == ReservationStatus.Done)
      {
        DateTime checkIfDateIsDone = reservation.SingUpDate.AddDays(reservation.NumberOfNights);
        if (checkIfDateIsDone >= DateTime.Now)
          return Ok("Date is not done");
      }

      reservation.Stauts = status;
      context.SaveChanges();

      
      return Ok();

    }

    [HttpPut]
    [Route("RequestApartmentRentDates")]
    public IHttpActionResult RequestApartmentRentDates(RentDateModelBM rentD)
    {

      if (CheckRole("Guest"))
        return StatusCode(HttpStatusCode.Unauthorized);

      Apartman apartman = context.Apartmans.Where(x => x.Deleted == false && x.ID == rentD.ApartmanID).FirstOrDefault();
      if (apartman == null)
        return BadRequest("Apartmant doesn't exist");

      bool Available = true;
      DateTime currentDate = rentD.RentDate;
      int normalPriceDays = 0;
      int discountPriceDays = 0;
      int holidayPriceDays = 0;
      for (int i = 0; i < rentD.RentDays; i++)
      {
        DatesModel datesModel = context.DatesModels.Where(x => x.ApartmanID == rentD.ApartmanID && x.RentDate.Year == currentDate.Year && x.RentDate.Month == currentDate.Month && x.RentDate.Day == currentDate.Day && x.Available == true && x.Deleted == false).FirstOrDefault();
        if (datesModel == null)
        {
          Available = false;
          break;
        }

        //praznici: 
        var holidayCheck = context.Holidays.Where(x => x.Deleted == false && x.Holiday.Year == datesModel.RentDate.Year && x.Holiday.Month == datesModel.RentDate.Month && x.Holiday.Day == datesModel.RentDate.Day).FirstOrDefault();
        if(holidayCheck != null)
        {
          holidayPriceDays++;
        }
        else
        {
          if (datesModel.RentDate.DayOfWeek == DayOfWeek.Friday || datesModel.RentDate.DayOfWeek == DayOfWeek.Saturday || datesModel.RentDate.DayOfWeek == DayOfWeek.Sunday) // popust za vikend
          {
            discountPriceDays++;
          }
          else
          {
            normalPriceDays++;
          }
        }

        
        currentDate = currentDate.AddDays(1);
      }

      if (!Available)
      {
        return BadRequest("The dates you entered are not available");
      }

      Reservation reservation = new Reservation();
      reservation.ApartmanID = rentD.ApartmanID;
      reservation.GuestID = rentD.GuestID;
      reservation.SingUpDate = rentD.RentDate;
      reservation.NumberOfNights = rentD.RentDays;
      reservation.Stauts = ReservationStatus.Created;
      // popust za vikend:
      reservation.TotalPrice = 0;
      //ako je praznik onda se povecava cena za 5 % praznik
      if (holidayPriceDays != 0) 
      {
        reservation.TotalPrice += holidayPriceDays * (apartman.PricePerNight + ((5 * apartman.PricePerNight) / 100 ));
      }
      if (normalPriceDays != 0)
      {
        reservation.TotalPrice += normalPriceDays * apartman.PricePerNight;
      }
      if (discountPriceDays != 0)
      {
        reservation.TotalPrice += discountPriceDays * (apartman.PricePerNight - ((10 * apartman.PricePerNight) / 100)); //10% popusta
      }

      
      

      context.Reservations.Add(reservation);
      context.SaveChanges();

      currentDate = rentD.RentDate;
      for (int i = 0; i < rentD.RentDays; i++)
      {
        DatesModel datesModel = context.DatesModels.Where(x => x.ApartmanID == rentD.ApartmanID && x.RentDate.Year == currentDate.Year && x.RentDate.Month == currentDate.Month && x.RentDate.Day == currentDate.Day && x.Available == true && x.Deleted == false).FirstOrDefault();
        datesModel.Available = false;
        context.SaveChanges();

        currentDate = currentDate.AddDays(1);
      }

      return Ok("Request sent");
    }

    private ReservationBM GetReservationInfo(Reservation reservation)
    {
      ReservationBM reservationBM = new ReservationBM();
      reservationBM.ID = reservation.ID;
      reservationBM.GuestID = (int)reservation.GuestID;
      reservationBM.ApartmanID = reservation.ApartmanID;
      //SingUpDate za rezervaciju:
      //DatesModel singUpDate = context.DatesModels.Where(x => x.ID == reservation.DatesModelID).FirstOrDefault();
      reservationBM.SingUpDate = reservation.SingUpDate;  //ovde puca, proveri ovo kako treba

      reservationBM.NumberOfNights = reservation.NumberOfNights;
      reservationBM.TotalPrice = reservation.TotalPrice;
      reservationBM.Stauts = reservation.Stauts.ToString();

      reservationBM.GuestUserName = reservation.Guest.UserName;

      reservationBM.HostUserName = reservation.Apartman.Host.UserName;

      reservationBM.ApartmentStreat = reservation.Apartman.Location.Adress.Streat;
      reservationBM.ApartmentStreatNumber = reservation.Apartman.Location.Adress.StreatNumber;
      reservationBM.ApartmentSettlement = reservation.Apartman.Location.Adress.Settlement;
      reservationBM.ApartmentZipCode = reservation.Apartman.Location.Adress.ZipCode;

      return reservationBM;
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
