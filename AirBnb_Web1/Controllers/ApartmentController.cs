using AirBnb_Web1.DataAccessLayer;
using AirBnb_Web1.Helper.BindingModels;
using AirBnb_Web1.Helper.Enums;
using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AirBnb_Web1.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  [RoutePrefix("api/Apartment")]
  public class ApartmentController : ApiController
  {

    private readonly AirBnbContext context = null;

    public ApartmentController()
    {
      context = AirBnbContext.Instance;
    }

    [HttpGet]
    [Route("GetAllApartments")]
    public IHttpActionResult GetAllApartments()
    {
      if (CheckRole("Admin"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }

      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.Deleted == false).ToList();
      foreach (var apartment in apartments)
      {
          ApartmentBM apartmentBM = GetApartmentInfo(apartment);
          apartmentsInfo.Add(apartmentBM);

      }

      return Ok(apartmentsInfo);

    }

    [HttpGet]
    [Route("GetActiveApartments")]
    public IHttpActionResult GetActiveApartments()
    {
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.Deleted == false).ToList();
      foreach (var apartment in apartments)
      {
        if(apartment.Status == Helper.Enums.ApartmanStatus.Active)
        {
          ApartmentBM apartmentBM = GetApartmentInfo(apartment);
          apartmentsInfo.Add(apartmentBM);
        }
        
      }

      return Ok(apartmentsInfo);
      
    }

    [HttpPut]
    [Route("GetSearchApartments")]
    public IHttpActionResult GetSearchApartments(SearchApartment apartmentDetails)
    {
      ICollection<Apartman> apartments = null;

      if (CheckRole("Admin"))
      {
        apartments = GetFiltredApartments(apartmentDetails, "Status");
      }
      else
      {
        apartments = GetFiltredApartments(apartmentDetails, "");
      }
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();

      foreach (var apartment in apartments)
      {
        ApartmentBM apartmentBM = GetApartmentInfo(apartment);
        apartmentsInfo.Add(apartmentBM);
      }


      return Ok(apartmentsInfo);
      

    }

    [HttpPut]
    [Route("GetSearchHostApartments")]
    public IHttpActionResult GetSearchHostApartments(SearchApartment apartmentDetails)
    {
      ICollection<Apartman> apartments = GetFiltredHostApartments(apartmentDetails);

      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();

      foreach (var apartment in apartments)
      {
        ApartmentBM apartmentBM = GetApartmentInfo(apartment);
        apartmentsInfo.Add(apartmentBM);
      }


      return Ok(apartmentsInfo);
    }

    [HttpGet]
    [Route("GetHostApartments")]
    public IHttpActionResult GetHostApartments(int hostId)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      List<ApartmentBM> apartmentsInfo = new List<ApartmentBM>();
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.HostID == hostId && x.Deleted == false).ToList();
      foreach (var apartment in apartments)
      {
          ApartmentBM apartmentBM = GetApartmentInfo(apartment);
          apartmentsInfo.Add(apartmentBM);
      }

      return Ok(apartmentsInfo);

    }

    [HttpGet]
    [Route("GetAllCommentsForApartment")]
    public IHttpActionResult GetAllCommentsForApartment(int apartmentID)
    {
      if (CheckRole("Admin"))
      {
        if(CheckRole("Host"))
        {
          return StatusCode(HttpStatusCode.Unauthorized);
        }
          
      }

      List<CommentBM> commentInfos = new List<CommentBM>();
      ICollection<Comment> comments = context.Comments.Where(x => x.ApartmanID == apartmentID && x.Deleted == false).ToList();

      foreach (var comment in comments)
      {
        if(comment.Deleted == false)
        {
          CommentBM commentBM = GetCommentInfo(comment);
          commentInfos.Add(commentBM);
        }
        
      }

      return Ok(commentInfos);
    }

    [HttpGet]
    [Route("GetApartmentAmenitieNames")]
    public IHttpActionResult GetApartmentAmenitieNames(int apartmentID)
    {
      Apartman apartman = context.Apartmans.Where(x => x.ID == apartmentID && x.Deleted == false).FirstOrDefault();
      List<string> amm = new List<string>();

      foreach (Amenitie item in apartman.Amenities)
      {
        if(item.Deleted == false)
          amm.Add(item.Name);
      }

      return Ok(amm);

    }

    [HttpGet]
    [Route("GetCommentsForApartment")]
    public IHttpActionResult GetCommentsForApartment(int apartmentID)
    {
      List<CommentBM> commentInfos = new List<CommentBM>();
      ICollection<Comment> comments = context.Comments.Where(x => x.ApartmanID == apartmentID && x.Deleted == false && x.Blocked == false).ToList();

      foreach (var comment in comments)
      {
        CommentBM commentBM = GetCommentInfo(comment);
        commentInfos.Add(commentBM);
      }

      return Ok(commentInfos);
    }

    [HttpPatch]
    [Route("ChangeApartment")]
    public IHttpActionResult ChangeApartment(ApartmentBM apartment)
    {
      Apartman app = context.Apartmans.Where(x => x.ID == apartment.ID && x.Deleted == false).FirstOrDefault();
      if(app == null)
      {
        return NotFound();
      }

      if (CheckRole("Admin"))
      {
        if (CheckRole("Host"))
        {
          return StatusCode(HttpStatusCode.Unauthorized);
        }
        else
        {
          apartment.Status = app.Status.ToString();
        }
      }
      
      SetApartment(app, apartment);

      return Ok();
    }

    [HttpDelete]
    [Route("DeleteApartmentComment")]
    public IHttpActionResult DeleteApartmentComment(int commentId )
    {
      if (CheckRole("Admin"))
      {        
          return StatusCode(HttpStatusCode.Unauthorized);
      }
      Comment comm = context.Comments.Where(x => x.ID == commentId).FirstOrDefault();
      comm.Deleted = true;
      //context.Comments.Remove(comm);
      context.SaveChanges();

      return Ok();
    }

    [HttpPatch]
    [Route("ChangeStatusApartmentComment")]
    public IHttpActionResult ChangeStatusApartmentComment(int commentId)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      Comment comm = context.Comments.Where(x => x.ID == commentId).FirstOrDefault();
      comm.Blocked = (comm.Blocked == true) ? false : true;
      context.SaveChanges();

      return Ok();
    }

    
    [HttpPut]
    [Route("AddApartment")]
    public IHttpActionResult AddApartment(ApartmentBM apartmentBM)
    {
      if (CheckRole("Host"))
      {
        return StatusCode(HttpStatusCode.Unauthorized);
      }
      // apartmentBM.HostID = 3; //ovo menjas kad uradis logovanje 
      GetApartmentFromBM(apartmentBM);

      
      

      return Ok(apartmentBM.ID);
    }

    

    [HttpDelete]
    [Route("DeleteApartment")]
    public IHttpActionResult DeleteApartment(int apartmentId)
    {
      if (CheckRole("Admin"))
      {
        if (CheckRole("Host"))
          return StatusCode(HttpStatusCode.Unauthorized);
      }
      Apartman app = context.Apartmans.Where(x => x.ID == apartmentId).FirstOrDefault();
      app.Deleted = true;
      //context.Apartmans.Remove(app);
      context.SaveChanges();

      return Ok();
    }

    [HttpDelete]
    [Route("DeletePicture")]
    public IHttpActionResult DeletePicture(int apartmentId, string picture)
    {
      if (CheckRole("Admin"))
      {
        if (CheckRole("Host"))
          return StatusCode(HttpStatusCode.Unauthorized);
      }
      Apartman app = context.Apartmans.Where(x => x.ID == apartmentId).FirstOrDefault();
      string[] picutres = app.Pictures.Split(';');
      app.Pictures = "";
      for (int i = 0; i < picutres.Length; i++)
      {
        if(picutres[i] == picture)
        {
          picutres[i] = "";
        }
        if(picutres[i] != "") //kad brisemo sliku, mora staviti ; tamo gde je slika nestala
        {
          picutres[i] += ';';
        }
        app.Pictures += picutres[i];
      }
      
      //context.Apartmans.Remove(app);
      context.SaveChanges();

      return Ok();
    }

    [HttpGet]
    [Route("GetHostApartmentRentDates")]
    public IHttpActionResult GetHostApartmentRentDates(int apartmanID)
    {
      if (CheckRole("Host"))
        if(CheckRole("Guest"))
        return StatusCode(HttpStatusCode.Unauthorized);

      ICollection<DatesModel> datesModels = context.DatesModels.Where(x => x.ApartmanID == apartmanID && x.Available == true && x.Deleted == false).ToList();
      ICollection<DatesModelBM> returnDates = new HashSet<DatesModelBM>();
      if(datesModels != null && datesModels.Count > 0)
      {
        foreach (DatesModel date in datesModels)
        {
          DatesModelBM retDate = new DatesModelBM();
          retDate.ApartmanID = apartmanID;
          retDate.ID = date.ID;
          retDate.CheckedDate = date.RentDate;

          returnDates.Add(retDate);
        }
      }

      return Ok(returnDates);
    }

    [HttpPut]
    [Route("AddHostRentDate")]
    public IHttpActionResult AddHostRentDate(AddRentDate rentDate)
    {

      if (CheckRole("Host"))
        return StatusCode(HttpStatusCode.Unauthorized);

      if (rentDate.RentDate.Year.ToString() != "0001") 
        return StatusCode(HttpStatusCode.NotAcceptable);


      DatesModel datesModel = new DatesModel();
      datesModel.ApartmanID = rentDate.ApartmentID;
      datesModel.Available = true;
      datesModel.RentDate = rentDate.RentDate;

      context.DatesModels.Add(datesModel);
      context.SaveChanges();

      return Ok();
    }

    

    [HttpDelete]
    [Route("DeleteHostRentDate")]
    public IHttpActionResult DeleteHostRentDate(int dateID)
    {
      if (CheckRole("Host"))
        return StatusCode(HttpStatusCode.Unauthorized);

      DatesModel datesModel = context.DatesModels.Where(x => x.ID == dateID && x.Deleted == false).FirstOrDefault();
      if(datesModel != null)
      {
        datesModel.Deleted = true;
        context.SaveChanges();
      }

      return Ok();
    }

    [HttpPut]
    [Route("AddRentDates")]
    public IHttpActionResult AddRentDates(DatesModelFirstAdd datesModelBM) //kad dodaje novi apartmant
    {
      foreach (DateTime item in datesModelBM.CheckedDates)
      {
        DatesModel datesModel = new DatesModel();
        datesModel.ApartmanID = datesModelBM.ApartmanID;
        datesModel.Available = true;
        datesModel.RentDate = item;

        context.DatesModels.Add(datesModel);
        context.SaveChanges();
      }

      return Ok();
    }

    private bool GetApartmentFromBM( ApartmentBM apartmentBM) //add apartment
    {
      Apartman apartman = new Apartman();
      apartman.Type = (apartmentBM.Type == ApartmanType.FullApartman.ToString()) ? ApartmanType.FullApartman : ApartmanType.Room;
      apartman.Status = ApartmanStatus.NotActive;
      apartman.HostID = apartmentBM.HostID;

      //promeni ovaj datetype :
      apartman.SingUpTime = apartmentBM.SingUpTime;
      apartman.SingOutTime = apartmentBM.SingOutTime;
      apartman.RoomNumber = apartmentBM.RoomNumber;
      
      apartman.PricePerNight = apartmentBM.PricePerNight;
      //pics
      apartman.Pictures = "";
      if(apartmentBM.Pictures != null)
        foreach (string pic in apartmentBM.Pictures)
        {
          apartman.Pictures = pic + ';';
        }
      

      
      apartman.GuestNumber = apartmentBM.GuestNumber;

      Adress adress1 = new Adress();
      adress1.Streat = apartmentBM.Streat;
      adress1.StreatNumber = apartmentBM.StreatNumber;
      adress1.ZipCode = apartmentBM.ZipCode;
      adress1.Settlement = apartmentBM.Settlement;
      context.Adresss.Add(adress1);
      context.SaveChanges();

      //location info:
      Location locationInfo = new Location();
      locationInfo.Latitude = apartmentBM.Latitude;
      locationInfo.Longitude = apartmentBM.Longitude;
      locationInfo.AdressID = adress1.ID;
      context.Locations.Add(locationInfo);
      context.SaveChanges();

      apartman.LocationID = locationInfo.ID;

      //Amenities:
      apartman.Amenities = new List<Amenitie>();
      foreach (string amm in apartmentBM.Amenities)
      {
        Amenitie amenitie = context.Amenities.Where(x => x.Name == amm).FirstOrDefault();
        
        apartman.Amenities.Add(amenitie);
      }
      context.SaveChanges();

      apartman.Deleted = false;
      context.Apartmans.Add(apartman);
      context.SaveChanges();
      //zbog slike mi treba ID:
      apartmentBM.ID = apartman.ID;


      return true;
    }

    private bool SetApartment(Apartman apartman , ApartmentBM apartmentBM) //change apartmant
    {
      apartman.Type = (apartmentBM.Type == ApartmanType.FullApartman.ToString() ) ? ApartmanType.FullApartman : ApartmanType.Room;
      apartman.Status = (apartmentBM.Status == ApartmanStatus.Active.ToString()) ? ApartmanStatus.Active : ApartmanStatus.NotActive;

      apartman.SingUpTime = apartmentBM.SingUpTime;
      apartman.SingOutTime = apartmentBM.SingOutTime;
      apartman.RoomNumber = apartmentBM.RoomNumber;
     // apartman.RentDates = apartmentBM.RentDates;
      apartman.PricePerNight = apartmentBM.PricePerNight;
      ////pic
      //apartman.Pictures = "";
      //foreach (string pic in apartmentBM.Pictures)
      //{
      //  apartman.Pictures = pic + ';';
      //}
      
      
      apartman.GuestNumber = apartmentBM.GuestNumber;
      context.SaveChanges();

      //location info:
      Location locationInfo = context.Locations.Where(x => x.ID == apartman.LocationID).FirstOrDefault();
      locationInfo.Latitude = apartmentBM.Latitude;
      locationInfo.Longitude = apartmentBM.Longitude;
      context.SaveChanges();

      //Adress
      locationInfo.Adress.Streat = apartmentBM.Streat  ;
      locationInfo.Adress.StreatNumber = apartmentBM.StreatNumber  ;
      locationInfo.Adress.ZipCode = apartmentBM.ZipCode ;
      locationInfo.Adress.Settlement = apartmentBM.Settlement ;
      context.SaveChanges();

      //Amenities
      apartman.Amenities.Clear(); //brise sve postojece
      foreach (string amm in apartmentBM.Amenities)
      {
        Amenitie amenitie = context.Amenities.Where(x => x.Name == amm).FirstOrDefault();

        apartman.Amenities.Add(amenitie);
      }
      context.SaveChanges();


      return true;
    }

    private CommentBM GetCommentInfo(Comment comment)
    {
      CommentBM commentBM = new CommentBM();
      commentBM.Id = comment.ID;
      commentBM.Rate = comment.Rate;
      commentBM.Text = comment.Text;
      commentBM.Blocked = comment.Blocked;

      commentBM.UserName = context.Users.Where(x => x.ID == comment.GuestID).FirstOrDefault().UserName;

      return commentBM;
    }

    private ApartmentBM GetApartmentInfo(Apartman apartman) //za sve GET Apartments
    {
      ApartmentBM apartmentBM = new ApartmentBM();
      apartmentBM.ID = apartman.ID;
      apartmentBM.Type = apartman.Type.ToString();
      apartmentBM.Status = apartman.Status.ToString();
      apartmentBM.SingUpTime = apartman.SingUpTime;
      apartmentBM.SingOutTime = apartman.SingOutTime;
      apartmentBM.RoomNumber = apartman.RoomNumber;
     // apartmentBM.RentDates = apartman.RentDates;
      apartmentBM.PricePerNight = apartman.PricePerNight;
      
      
      apartmentBM.GuestNumber = apartman.GuestNumber;

      //location info:
      Location locationInfo = context.Locations.Where(x => x.ID == apartman.LocationID).FirstOrDefault();
      apartmentBM.Latitude = locationInfo.Latitude;
      apartmentBM.Longitude = locationInfo.Longitude;

      //Coments into:
      apartmentBM.CommentIDs = new HashSet<int>();
      ICollection<Comment> comms = apartman.Comments; // wokrs
      if(comms != null)
        foreach (var comment in comms)
        {
          apartmentBM.CommentIDs.Add(comment.ID);
        }
      //Amenities into:
      apartmentBM.Amenities = new HashSet<string>();
      ICollection<Amenitie> amms = apartman.Amenities; // wokrs
      if (amms != null)
        foreach (var amm in amms)
        {
          apartmentBM.Amenities.Add(amm.Name);
        }


      //Adress
      apartmentBM.Streat = locationInfo.Adress.Streat;
      apartmentBM.StreatNumber = locationInfo.Adress.StreatNumber;
      apartmentBM.ZipCode = locationInfo.Adress.ZipCode;
      apartmentBM.Settlement = locationInfo.Adress.Settlement;

      //Host:
      User Host = context.Users.Where(x => x.ID == apartman.HostID).FirstOrDefault();
      apartmentBM.HostID = Host.ID;
      apartmentBM.HostName = Host.Name;
      apartmentBM.HostSurname = Host.Surname;

      //pictures
      
      if(apartman.Pictures != null && apartman.Pictures != "")
      {
        apartmentBM.Pictures = new List<string>();
        string[] pictures = apartman.Pictures.Split(';');
        for (int i=0; i<pictures.Length; i++)
        {
         // byte[] imageBits = System.IO.File.ReadAllBytes(@"D:\Fax\6.Semestar\Web\Projekat\AirBnb_Web1\AirBnb_Web1\Resource\Images\BodyPart_ae1d3ad9-2b71-4222-8517-4821aa41f3ef.jpg");
          //string imageBase64 = Convert.ToBase64String(imageBits);
          if(pictures[i] != "")
          {
            apartmentBM.Pictures.Add("http://localhost:8080/" + pictures[i]);
          }
            
        }
      }

      //RentDates:
      ICollection<DatesModel> datesModels = context.DatesModels.Where(x => x.ApartmanID == apartman.ID && x.Available == true && x.Deleted == false).ToList();  
      if(datesModels != null && datesModels.Count > 0)
      {
        if (apartmentBM.RentDates == null)
          apartmentBM.RentDates = new HashSet<DateTime>();

        foreach (DatesModel dateModel in datesModels)
        {
          apartmentBM.RentDates.Add(dateModel.RentDate);
        }
      }
      return apartmentBM;
    }

    public ICollection<Apartman> GetFiltredApartments(SearchApartment searchApartment , string user) //kada uradi search u home i za admina ulazi ovde
    {
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.Deleted == false).ToList();

      if(user != "Status") // ako nije admin 
      {
        apartments = context.Apartmans.Where(x => x.Status == ApartmanStatus.Active).ToList();
      }

      if ( searchApartment.ApartmentStatus != null && searchApartment.ApartmentStatus != "")
      {
        apartments = apartments.Where(x => x.Status.ToString() == searchApartment.ApartmentStatus).ToList();
      }      

       

      if(searchApartment.GuestNumber > 0)
      {
        apartments = apartments.Where(x => x.GuestNumber == searchApartment.GuestNumber).ToList();
      }
      if (searchApartment.MaxPrice > 0)
      {
        apartments = apartments.Where(x => x.PricePerNight <= searchApartment.MaxPrice).ToList();
      }
      if(searchApartment.MaxRooms > 0)
      {
        apartments = apartments.Where(x => x.RoomNumber <= searchApartment.MaxRooms).ToList();
      }
      if (searchApartment.MinRooms > 0)
      {
        apartments = apartments.Where(x => x.RoomNumber >= searchApartment.MinRooms).ToList();
      }
      if (searchApartment.Settlement != "" && searchApartment.Settlement != null)
      {
        apartments = apartments.Where(x => x.Location.Adress.Settlement == searchApartment.Settlement).ToList();
      }
      if (searchApartment.ApartmentType != "" && searchApartment.ApartmentType != null)
      {
        apartments = apartments.Where(x => x.Type.ToString() == searchApartment.ApartmentType).ToList();
      }
      if(searchApartment.Amenities.Count > 0)
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (string ammen in searchApartment.Amenities)
        {
          foreach (Apartman apar in helpApartments)
          {
            var helpApartment =  apar.Amenities.Where(x => x.Name == ammen).FirstOrDefault();
            if (helpApartment == null && apartments.Contains(apar))
              apartments.Remove(apar);
          }
        }
        
      }
      //za godinu dobija 0001 kao godinu ako nije odabrao
      if(searchApartment.CheckIn.Year.ToString() != "1" && searchApartment.CheckOut.Year.ToString() != "1")
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (Apartman apar in helpApartments)
        {
          DateTime currentDate = searchApartment.CheckIn;
          
         

          while(currentDate <= searchApartment.CheckOut)
          {
            var helpApartment = apar.RentDates.Where(x => x.RentDate.Year == currentDate.Year && x.RentDate.Month == currentDate.Month && x.RentDate.Day == currentDate.Day && x.Available == true).FirstOrDefault();
            if (helpApartment == null && apartments.Contains(apar))
            {
              apartments.Remove(apar);
              break;
            }

            currentDate =  currentDate.AddDays(1);
            
          }
        }

      }
      else if (searchApartment.CheckIn.Year.ToString() != "1")
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (Apartman apar in helpApartments)
        {
          var helpApartment = apar.RentDates.Where(x => x.RentDate.Year == searchApartment.CheckIn.Year && x.RentDate.Month == searchApartment.CheckIn.Month && x.RentDate.Day == searchApartment.CheckIn.Day && x.Available == true).FirstOrDefault();
          if (helpApartment == null && apartments.Contains(apar))
          {
            apartments.Remove(apar);
          }
        }
      }

      return apartments;
    }

    public ICollection<Apartman> GetFiltredHostApartments(SearchApartment searchApartment) //kada uradi search u home i za admina ulazi ovde
    {
      ICollection<Apartman> apartments = context.Apartmans.Where(x => x.Deleted == false && x.HostID == searchApartment.HostID).ToList();
      

      if (searchApartment.ApartmentStatus != null && searchApartment.ApartmentStatus != "")
      {
        apartments = apartments.Where(x => x.Status.ToString() == searchApartment.ApartmentStatus).ToList();
      }

      if (searchApartment.GuestNumber > 0)
      {
        apartments = apartments.Where(x => x.GuestNumber == searchApartment.GuestNumber).ToList();
      }
      if (searchApartment.MaxPrice > 0)
      {
        apartments = apartments.Where(x => x.PricePerNight <= searchApartment.MaxPrice).ToList();
      }
      if (searchApartment.MaxRooms > 0)
      {
        apartments = apartments.Where(x => x.RoomNumber <= searchApartment.MaxRooms).ToList();
      }
      if (searchApartment.MinRooms > 0)
      {
        apartments = apartments.Where(x => x.RoomNumber >= searchApartment.MinRooms).ToList();
      }
      if (searchApartment.Settlement != "" && searchApartment.Settlement != null)
      {
        apartments = apartments.Where(x => x.Location.Adress.Settlement == searchApartment.Settlement).ToList();
      }
      if (searchApartment.ApartmentType != "" && searchApartment.ApartmentType != null)
      {
        apartments = apartments.Where(x => x.Type.ToString() == searchApartment.ApartmentType).ToList();
      }
      if (searchApartment.Amenities.Count > 0)
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (string ammen in searchApartment.Amenities)
        {
          foreach (Apartman apar in helpApartments)
          {
            var helpApartment = apar.Amenities.Where(x => x.Name == ammen).FirstOrDefault();
            if (helpApartment == null && apartments.Contains(apar))
              apartments.Remove(apar);
          }
        }

      }
      //za godinu dobija 0001 kao godinu ako nije odabrao
      if (searchApartment.CheckIn.Year.ToString() != "1" && searchApartment.CheckOut.Year.ToString() != "1")
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (Apartman apar in helpApartments)
        {
          DateTime currentDate = searchApartment.CheckIn;



          while (currentDate <= searchApartment.CheckOut)
          {
            var helpApartment = apar.RentDates.Where(x => x.RentDate.Year == currentDate.Year && x.RentDate.Month == currentDate.Month && x.RentDate.Day == currentDate.Day && x.Available == true).FirstOrDefault();
            if (helpApartment == null && apartments.Contains(apar))
            {
              apartments.Remove(apar);
              break;
            }

            currentDate = currentDate.AddDays(1);

          }
        }

      }
      else if (searchApartment.CheckIn.Year.ToString() != "1")
      {
        ICollection<Apartman> helpApartments = new HashSet<Apartman>();
        foreach (Apartman apartment in apartments)
        {
          helpApartments.Add(apartment);
        }

        foreach (Apartman apar in helpApartments)
        {
          var helpApartment = apar.RentDates.Where(x => x.RentDate.Year == searchApartment.CheckIn.Year && x.RentDate.Month == searchApartment.CheckIn.Month && x.RentDate.Day == searchApartment.CheckIn.Day && x.Available == true).FirstOrDefault();
          if (helpApartment == null && apartments.Contains(apar))
          {
            apartments.Remove(apar);
          }
        }
      }

      return apartments;
    }

    public bool CheckRole(string role)
    {
      var headers = Request.Headers;
      string token = "";
      try
      {
        token = headers.GetValues("Role").First();
        if (token != role)
        {
          return true;
        }

        return false;
      }
      catch (Exception)
      {

        return false;
      }

      
    }


  }
}
