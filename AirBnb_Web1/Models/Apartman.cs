using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Apartman
    {
        public int ID { get; set; }

        public ApartmanType Type { get; set; }

        public string RoomNumber { get; set; }

        public string GuestNumber { get; set; }

        public Location Location { get; set; }

        public List<DateTime> RentDates { get; set; }        // ??

        public List<DateTime> AvailableDates { get; set; }      //potrebno je da sam generise

        public User Host { get; set; }

        public List<Comment> Comments { get; set; }

        public List<string> Pictures { get; set; }

        public float PricePerNight { get; set; }

        public DateTime SingUpTime { get; set; }

        public DateTime SingOutTime { get; set; }

        public ApartmanStatus Status { get; set; }

        public List<Amenitie> Amenities { get; set; }

        public List<Reservation> Reservations { get; set; }
    }
}