using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Adress
    {
        public int ID { get; set; }

        public string Streat { get; set; }

        public int StreatNumber { get; set; }

        public string Citysettlement { get; set; }

        public int ZipCode { get; set; }
    }
}