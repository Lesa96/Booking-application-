using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class DatesModelBM
  {
    public int ApartmanID { get; set; }

    public List<DateTime> CheckedDates { get; set; }
  }
}
