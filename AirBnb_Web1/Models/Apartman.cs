using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Apartman
    {
        public int ID { get; set; }
        public int LocationID { get; set; }
        public int HostID { get; set; }

        public ApartmanType Type { get; set; }

        public int RoomNumber { get; set; }

        public int GuestNumber { get; set; }

        [ForeignKey("LocationID")]
        public virtual Location Location { get; set; }

        public ICollection<DateTime> RentDates { get; set; }        // ??

        public ICollection<DateTime> AvailableDates { get; set; }      //potrebno je da sam generise

        [ForeignKey("HostID")]
        public virtual User Host { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public  ICollection<string> Pictures { get; set; }

        public double PricePerNight { get; set; }

        public DateTime SingUpTime { get; set; }

        public DateTime SingOutTime { get; set; }

        public ApartmanStatus Status { get; set; }

        public virtual ICollection<Amenitie> Amenities { get; set; }

        public virtual ICollection<Reservation> Reservations { get; set; }

        public bool Deleted { get; set; }
    }
}
