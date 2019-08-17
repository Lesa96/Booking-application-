using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Comment
    {
        public int ID { get; set; }

        public User Guest { get; set; }

        public Apartman Apartman { get; set; }

        public string Text { get; set; }

        public float Rate { get; set; }
    }
}