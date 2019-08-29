using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.DataAccessLayer
{
    public class AirBnbInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<AirBnbContext>
    {
        protected override void Seed(AirBnbContext context)
        {
            Adress adress1 = new Adress();
            adress1.ID = 1;
            adress1.Streat = "Bulevar Oslobodjenja";
            adress1.StreatNumber = 30;
            adress1.ZipCode = 21000;
            adress1.Settlement = "Novi Sad";
            context.Adresss.Add(adress1);
            context.SaveChanges();

            Amenitie amenitie1 = new Amenitie();
            amenitie1.Name = "Klima";
            context.Amenities.Add(amenitie1);
            context.SaveChanges();

            Location location1 = new Location();
            location1.ID = 1;
            location1.Latitude = 45.23;
            location1.Longitude = 25.23;
            location1.AdressID = 1;

            User user1 = new User { ID = 1, Name = "Sasa", Surname = "Dragomirovic", Gender = Helper.Enums.Genders.Male,  Password = "123", Role = Helper.Enums.Roles.Admin, UserName = "Sale96" };
            User user2 = new User { ID = 2, Name = "Biba", Surname = "Bibic", Gender = Helper.Enums.Genders.Male, Password = "123", Role = Helper.Enums.Roles.Guest, UserName = "Biba96" };
            User user3 = new User { ID = 3, Name = "Gruja", Surname = "Grujic", Gender = Helper.Enums.Genders.Male, Password = "123", Role = Helper.Enums.Roles.Host, UserName = "Gruja96" };
            context.Users.Add(user1);
            context.Users.Add(user2);
            context.Users.Add(user3);
            context.SaveChanges();

            Apartman apartman1 = new Apartman { ID = 1, GuestNumber = 3, HostID = 3, LocationID = 1, PricePerNight = 20, RoomNumber = 2 };
            context.Apartmans.Add(apartman1);
            context.SaveChanges();

            Comment comment1 = new Comment { ID = 1, ApartmanID = 1, GuestID = 2, Rate = 9.5, Text = "Nice one" };
            context.Comments.Add(comment1);
            context.SaveChanges();

            Reservation reservation1 = new Reservation { ID = 1, ApartmanID = 1, GuestID = 2, NumberOfNights = 10, SingUpDate = DateTime.Now, Stauts = Helper.Enums.ReservationStatus.Accepted, TotalPrice = 100 };
            context.Reservations.Add(reservation1);
            context.SaveChanges();
        }
    }
}
