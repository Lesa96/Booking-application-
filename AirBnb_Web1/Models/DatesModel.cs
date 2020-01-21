using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
  public class DatesModel
  {
    public int ID { get; set; }
    public int? ApartmanID { get; set; }

    public DateTime RentDate { get; set; }

    public bool Available { get; set; }

    [ForeignKey("ApartmanID")]
    public virtual Apartman Apartman { get; set; }

    public bool Deleted { get; set; }

  }
}
