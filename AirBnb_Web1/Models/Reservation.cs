using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Reservation
    {
        public int ID { get; set; }

        public Apartman Apartman { get; set; }

        public DateTime SingUpDate { get; set; }

        public int NumberOfNights { get; set; }

        public float TotalPrice { get; set; }

        public User Guest { get; set; }

        public ReservationStatus Stauts { get; set; }
    }
}