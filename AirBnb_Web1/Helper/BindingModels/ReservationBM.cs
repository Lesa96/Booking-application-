using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class ReservationBM
  {
    public int ID { get; set; }
    public int ApartmanID { get; set; }
    public int GuestID { get; set; }

    public DateTime SingUpDate { get; set; }

    public int NumberOfNights { get; set; }

    public double TotalPrice { get; set; }
    public string Stauts { get; set; }

    //Guest
    public string GuestUserName { get; set; }
    //Host
    public string HostUserName { get; set; }
    //location
    public string ApartmentStreat { get; set; }

    public int ApartmentStreatNumber { get; set; }

    public string ApartmentSettlement { get; set; }

    public int ApartmentZipCode { get; set; }
  }
}
