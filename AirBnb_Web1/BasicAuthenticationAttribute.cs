using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace AirBnb_Web1
{
  public class BasicAuthenticationAttribute : AuthorizationFilterAttribute
  {
    public override void OnAuthorization(HttpActionContext actionContext)
    {
      if(actionContext.Request.Headers.Authorization == null)
      {
        actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.Unauthorized);
      }
      else
      {
        string token = actionContext.Request.Headers.Authorization.Parameter;

        string decodedToken = Encoding.UTF8.GetString(Convert.FromBase64String(token));

        string username = decodedToken.Split(':')[0];
        string password = decodedToken.Split(':')[1];
        AirBnbContext context = new AirBnbContext();
        User user = context.Users.Where(x => x.UserName == username && x.Password == password).FirstOrDefault();
        if (user != null)
        {
          string[] roles = new string[1];
          roles[0] = user.Role.ToString();

          Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity(username), roles);
        }
        else
        {
          actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.Unauthorized);
          
        }
      }
    }
  }
}
