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
      List<ReservationBM> reservationInfo = new List<ReservationBM>();
      ICollection<Reservation> reservations = context.Reservations.Where(x => x.Deleted == false).ToList(); ;
      foreach (var reservation in reservations)
      {
        ReservationBM reservationBM = GetReservationInfo(reservation);
        reservationInfo.Add(reservationBM);

      }

      return Ok(reservationInfo);

    }

    private ReservationBM GetReservationInfo(Reservation reservation)
    {
      ReservationBM reservationBM = new ReservationBM();
      reservationBM.ID = reservation.ID;
      reservationBM.GuestID = (int)reservation.GuestID;
      reservationBM.ApartmanID = reservation.ApartmanID;
      reservationBM.SingUpDate = reservation.SingUpDate;
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
  }
}
