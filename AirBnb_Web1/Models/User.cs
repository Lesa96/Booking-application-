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

        public string Surename { get; set; }

        public Genders Gender { get; set; }

        public Roles Role { get; set; }

        public List<string> ApartmantsToRent { get; set; }    //promeni

        public List<string> RentedApartmants { get; set; }    //promeni

        public List<string> Reservations { get; set; }    //promeni
    }
}