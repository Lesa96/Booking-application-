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

        [HttpPut]
        [Route("Register")]
        public IHttpActionResult Register(UserBM user)
        {
          User us = new User();
          us.Blocked = false;
          us.Name = user.Name;
          us.Password = user.Password;
          us.Role = Helper.Enums.Roles.Guest;
          us.UserName = user.UserName;
          us.Surname = user.Surname;
          us.Gender = (user.Gender == "Male") ? Helper.Enums.Genders.Male : Helper.Enums.Genders.Famale;

          context.Users.Add(us);
          context.SaveChanges();

          return Ok();
        }

    // admin
    [HttpPut]
    [Route("CreateHost")]
    public IHttpActionResult CreateHost(UserBM user)
    {
      User us = new User();
      us.Blocked = false;
      us.Name = user.Name;
      us.Password = user.Password;
      us.Role = Helper.Enums.Roles.Host;
      us.UserName = user.UserName;
      us.Surname = user.Surname;
      us.Gender = (user.Gender == "Male") ? Helper.Enums.Genders.Male : Helper.Enums.Genders.Famale;

      context.Users.Add(us);
      context.SaveChanges();

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
        if(user.Role != Helper.Enums.Roles.Admin)
        {
          UserBM userBM = new UserBM();
          userBM.ID = user.ID;
          userBM.Name = user.Name;
          userBM.Password = user.Password;
          userBM.Role = user.Role.ToString();
          userBM.Surname = user.Surname;
          userBM.UserName = user.UserName;
          userBM.Gender = user.Gender.ToString();
          userBM.Blocked = user.Blocked;

          usersBM.Add(userBM);
        }
        
      }

      return Ok(usersBM);
    }

    [HttpPatch]
    [Route("ChangeUserStatus")]
    public IHttpActionResult ChangeUserStatus(int id)
    {
      User user = context.Users.Where(x => x.ID == id).FirstOrDefault();
      if (user.Blocked)
        user.Blocked = false;
      else
        user.Blocked = true;

      context.SaveChanges();

      return Ok();
    }

  }
}
