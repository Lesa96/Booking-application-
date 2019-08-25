using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class ApartmentBM
  {
    public int ID { get; set; }
    public ICollection<DateTime> RentDates { get; set; }
    public ICollection<DateTime> AvailableDates { get; set; }
    public ICollection<string> Pictures { get; set; }
    public double PricePerNight { get; set; }
    public DateTime SingUpTime { get; set; }
    public DateTime SingOutTime { get; set; }
    public string Type { get; set; }
    public int RoomNumber { get; set; }
    public int GuestNumber { get; set; }
    public string Status { get; set; }

    //Coment ids:
    public ICollection<int> CommentIDs { get; set; }
    //Location:
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    //Adress
    public string Streat { get; set; }
    public int StreatNumber { get; set; }
    public string Settlement { get; set; }
    public int ZipCode { get; set; }
    //Host:
    public int HostID { get; set; }
    public string HostName { get; set; }
    public string HostSurename { get; set; }


  }
}
