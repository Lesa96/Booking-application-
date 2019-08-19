﻿using AirBnb_Web1.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AirBnb_Web1.Controllers
{
    [RoutePrefix("api/Users")]
    public class UserController : ApiController
    {
        private readonly AirBnbContext  context = null;

        public UserController()
        {
            context = AirBnbContext.Instance;
        }

        // Post api/users/
        [HttpPost]
        [Route("Login")]
        public HttpResponseMessage Login([FromBody]string username )
        {
            string streat = context.Adresss.Where(x => x.ID == 1).FirstOrDefault().Streat; //radi kako treba

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
