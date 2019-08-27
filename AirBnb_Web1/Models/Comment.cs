using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public int? GuestID { get; set; }
        public int ApartmanID { get; set; }

        [ForeignKey("GuestID")]
        public virtual User Guest { get; set; }

        [ForeignKey("ApartmanID")]
        public virtual Apartman Apartman { get; set; }

        public string Text { get; set; }

        public double Rate { get; set; }

        public bool Blocked { get; set; }
    }
}
