using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class DatesModelBM
  {
    public int ID { get; set; }

    public int ApartmanID { get; set; }

    public DateTime CheckedDate { get; set; }
  }

  public class DatesModelFirstAdd
  {
    public int ApartmanID { get; set; }
    public ICollection<DateTime> CheckedDates { get; set; }
  }
}
