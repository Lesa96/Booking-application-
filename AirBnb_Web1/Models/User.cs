using AirBnb_Web1.Helper.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class User
    {
        public int ID { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public Genders Gender { get; set; }

        public Roles Role { get; set; }

        public bool Blocked { get; set; }

       public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Apartman> ApartmantsToRent { get; set; }    

        public virtual ICollection<Apartman> RentedApartmants { get; set; }    

        public virtual ICollection<Reservation> Reservations { get; set; }    
    }
}
