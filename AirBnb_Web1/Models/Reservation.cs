using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Reservation
    {
        public int ID { get; set; }
        public int ApartmanID { get; set; }
        public int? GuestID { get; set; }
        public int? DatesModelID { get; set; }

        [ForeignKey("ApartmanID")]
        public virtual Apartman Apartman { get; set; }

        [ForeignKey("DatesModelID")]
        public DatesModel SingUpDate { get; set; }

        public int NumberOfNights { get; set; }

        public double TotalPrice { get; set; }

        [ForeignKey("GuestID")]
        public virtual User Guest { get; set; }

        public ReservationStatus Stauts { get; set; }

        public bool Deleted { get; set; }
    }
}
