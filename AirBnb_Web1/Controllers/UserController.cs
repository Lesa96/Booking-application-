using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
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
        [BasicAuthentication]
        [HttpGet]
        [Route("Login")]
        public IHttpActionResult Login()
        {
            string username = Thread.CurrentPrincipal.Identity.Name;
            User user = context.Users.Where(x => x.UserName == username).FirstOrDefault();

            if (user != null)
            {
              LogBM logBM = new LogBM() { ID = user.ID, Role = user.Role.ToString() };
              return Ok(logBM);
            }

            else
              return BadRequest();
        }

        [AllowAnonymous]
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
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

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
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

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
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      User user = context.Users.Where(x => x.ID == id).FirstOrDefault();
      if (user.Blocked)
        user.Blocked = false;
      else
        user.Blocked = true;

      context.SaveChanges();

      return Ok();
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("UploadPictures")]
    public async Task<HttpResponseMessage> UploadPictures(int apartmentID)
    {
      if (CheckRole("Host"))
      {
        return Request.CreateResponse(HttpStatusCode.Unauthorized);
      }

      // Check if the request contains multipart/form-data.
      if (!Request.Content.IsMimeMultipartContent())
      {
        throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
      }

      string root = HttpContext.Current.Server.MapPath("~/Resource/Images");
      var provider = new MultipartFormDataStreamProvider(root);

      try
      {
        // Read the form data.
        await Request.Content.ReadAsMultipartAsync(provider);

        // This illustrates how to get the file names.
        foreach (MultipartFileData file in provider.FileData)
        {
          string filename = file.LocalFileName;
          string realName = file.Headers.ContentDisposition.FileName.Split('\"')[1];
          realName = realName.Split('.').Last();
          realName = filename + "." + realName;
          File.Move(filename, realName);

          Apartman apartment = context.Apartmans.Where(x => x.ID == apartmentID).FirstOrDefault();
          if (apartment.Pictures == null || apartment.Pictures == "")
            apartment.Pictures = "";

          var nameParts = realName.Split('\\').SkipWhile(p => !p.Equals("Resource"));
          var relativePath = "";
          foreach (var part in nameParts)
            relativePath += part + "\\";
          relativePath = relativePath.Remove(relativePath.Length - 1); // brise zadnje '//' linije
          apartment.Pictures = relativePath + ';';
          context.SaveChanges();
         
        }
        return Request.CreateResponse(HttpStatusCode.OK);
      }
      catch (System.Exception e)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
      }
    }

    public bool CheckRole(string role)
    {
      var headers = Request.Headers;
      string token = headers.GetValues("Role").First();
      if (token != role)
      {
        return true;
      }

      return false;
    }

  }
}
