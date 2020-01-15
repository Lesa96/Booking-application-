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

  [RoutePrefix("api/Reservation")]
  public class ReservationController : ApiController
   {
    private readonly AirBnbContext context = null;

    public ReservationController()
    {
      context = AirBnbContext.Instance;
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
      foreach (var apartment in apps)
      {
        foreach (var reservation in apartment.Reservations)
        {
          ReservationBM reservationBM = GetReservationInfo(reservation);
          reservationInfo.Add(reservationBM);

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
           
      foreach (var reservation in ress)
      {
        ReservationBM reservationBM = GetReservationInfo(reservation);
        reservationInfo.Add(reservationBM);

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

      foreach (var reservation in ress)
      {
        if(reservation.Stauts == status)
        {
          ReservationBM reservationBM = GetReservationInfo(reservation);
          reservationInfo.Add(reservationBM);
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
      foreach (var apartment in apps)
      {
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
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      Reservation reservation = context.Reservations.Where(x => x.ID == reservationId && x.Deleted != true ).FirstOrDefault();
      reservation.Stauts = status;
      context.SaveChanges();
      return Ok();

    }

    private ReservationBM GetReservationInfo(Reservation reservation)
    {
      ReservationBM reservationBM = new ReservationBM();
      reservationBM.ID = reservation.ID;
      reservationBM.GuestID = (int)reservation.GuestID;
      reservationBM.ApartmanID = reservation.ApartmanID;
      //SingUpDate za rezervaciju:
      DatesModel singUpDate = context.DatesModels.Where(x => x.ID == reservation.DatesModelID).FirstOrDefault();
      reservationBM.SingUpDate = singUpDate.RentDate;  //ovde puca, proveri ovo kako treba

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
