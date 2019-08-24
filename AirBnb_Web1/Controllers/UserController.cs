using AirBnb_Web1.DataAccessLayer;
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
    }
}
