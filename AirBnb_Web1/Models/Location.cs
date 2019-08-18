using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Location
    {
        public int ID { get; set; }
        public int AdressID { get; set; }

        [ForeignKey("AdressID")]
        public virtual Adress Adress { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

    }
}