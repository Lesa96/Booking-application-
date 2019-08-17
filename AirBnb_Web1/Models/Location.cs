using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Location
    {
        public int ID { get; set; }

        public Adress Adress { get; set; }

        public float Latitude { get; set; }

        public float Longitude { get; set; }

    }
}