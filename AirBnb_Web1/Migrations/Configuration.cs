namespace AirBnb_Web1.Migrations
{
    using AirBnb_Web1.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AirBnb_Web1.DataAccessLayer.AirBnbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AirBnb_Web1.DataAccessLayer.AirBnbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

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
            location1.AdressID = adress1.ID;
            context.Locations.Add(location1);
            context.SaveChanges();

            User user1 = new User { ID = 1, Name = "Sasa", Surename = "Dragomirovic", Gender = Helper.Enums.Genders.Male, Password = "123", Role = Helper.Enums.Roles.Admin, UserName = "Sale96" };
            User user2 = new User { ID = 2, Name = "Biba", Surename = "Bibic", Gender = Helper.Enums.Genders.Male, Password = "123", Role = Helper.Enums.Roles.Guest, UserName = "Biba96" };
            User user3 = new User { ID = 3, Name = "Gruja", Surename = "Grujic", Gender = Helper.Enums.Genders.Male, Password = "123", Role = Helper.Enums.Roles.Host, UserName = "Gruja96" };
            context.Users.Add(user1);
            context.Users.Add(user2);
            context.Users.Add(user3);
            context.SaveChanges();

            Apartman apartman1 = new Apartman { ID = 1, SingUpTime = DateTime.Now , SingOutTime = DateTime.Now.AddDays(2), Status= Helper.Enums.ApartmanStatus.Active, GuestNumber = 3, HostID = user3.ID, LocationID = location1.ID, PricePerNight = 20, RoomNumber = 2 };
            context.Apartmans.Add(apartman1);
            context.SaveChanges();

            Comment comment1 = new Comment { ID = 1, ApartmanID = apartman1.ID, GuestID = user2.ID, Rate = 9.5, Text = "Nice one" };
            context.Comments.Add(comment1);
            context.SaveChanges();

            Reservation reservation1 = new Reservation { ID = 1, ApartmanID = apartman1.ID, GuestID = user2.ID, NumberOfNights = 10, SingUpDate = DateTime.Now, Stauts = Helper.Enums.ReservationStatus.Accepted, TotalPrice = 100 };
            context.Reservations.Add(reservation1);
            context.SaveChanges();
        }
    }
}
