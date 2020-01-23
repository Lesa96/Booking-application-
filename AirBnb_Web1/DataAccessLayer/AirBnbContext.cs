using AirBnb_Web1.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace AirBnb_Web1.DataAccessLayer
{
    public class AirBnbContext : DbContext
    {
        private static AirBnbContext instance = null;

        public AirBnbContext() : base("AirBnbContext")
        {

        }

        public DbSet<Adress> Adresss { get; set; }
        public DbSet<Amenitie> Amenities { get; set; }
        public DbSet<Apartman> Apartmans { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<DatesModel> DatesModels { get; set; }
        public DbSet<HolidayDays> Holidays { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder) 
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>(); //da ne bi dodavao 's'
        }

        public static AirBnbContext Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new AirBnbContext();
                }
                return instance;
            }
        }
    }
}
