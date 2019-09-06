using AirBnb_Web1.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1
{
  public class UserSecurity
  {
    public static bool LogIn(string username, string password)
    {
      using (AirBnbContext context = new AirBnbContext())
      {
        return context.Users.Any(x => x.UserName == username && x.Password == password);
      }
    }
  }
}
