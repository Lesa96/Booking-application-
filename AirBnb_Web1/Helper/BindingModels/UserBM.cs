using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.Helper.BindingModels
{
  public class UserBM
  {
    public int ID { get; set; }

    public string UserName { get; set; }

    public string Password { get; set; }

    public string Name { get; set; }

    public string Surname { get; set; }

    public string Gender { get; set; }

    public string Role { get; set; }

    public bool Blocked { get; set; }
  }
}
