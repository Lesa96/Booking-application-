using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
    public class Amenitie
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Apartman> Apartmens { get; set; }

        public bool Deleted { get; set; }
    }
}
