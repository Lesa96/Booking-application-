using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Models
{
  public class HolidayDays
  {
    public int ID { get; set; }

    public DateTime Holiday { get; set; }

    public bool Deleted { get; set; }
  }
}
