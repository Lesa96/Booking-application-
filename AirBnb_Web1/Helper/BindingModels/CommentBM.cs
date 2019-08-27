using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class CommentBM
  {
    public int Id { get; set; }

    public string UserName { get; set; }

    public string Text { get; set; }

    public double Rate { get; set; }

    public bool Blocked { get; set; }
  }
}
