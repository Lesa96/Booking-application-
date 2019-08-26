using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AirBnb_Web1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Users")]
    public class UserController : ApiController
    {
        private readonly AirBnbContext  context = null;

        public UserController()
        {
            context = AirBnbContext.Instance;
        }

        // Get api/users/
        [HttpGet]
        [Route("Login")]
        public IHttpActionResult Login()
        {
            string streat = context.Adresss.Where(x => x.ID == 1).FirstOrDefault().Streat; //radi kako treba

            return Ok();
        }

    [HttpGet]
    [Route("GetUsers")]
    public IHttpActionResult GetUsers()
    {
      ICollection<User> users = context.Set<User>().ToList();
      ICollection<UserBM> usersBM = new List<UserBM>();

      foreach (User user in users)
      {
        UserBM userBM = new UserBM();
        userBM.ID = user.ID;
        userBM.Name = user.Name;
        userBM.Password = user.Password;
        userBM.Role = user.Role.ToString();
        userBM.Surename = user.Surename;
        userBM.UserName = user.UserName;
        userBM.Gender = user.Gender.ToString();

        usersBM.Add(userBM);
      }

      return Ok(usersBM);
    }

  }
}
