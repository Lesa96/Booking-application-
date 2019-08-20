namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Adress",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Streat = c.String(),
                        StreatNumber = c.Int(nullable: false),
                        Citysettlement = c.String(),
                        ZipCode = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Amenitie",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Apartman_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Apartman", t => t.Apartman_ID)
                .Index(t => t.Apartman_ID);
            
            CreateTable(
                "dbo.Apartman",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        LocationID = c.Int(nullable: false),
                        HostID = c.Int(nullable: false),
                        Type = c.Int(nullable: false),
                        RoomNumber = c.Int(nullable: false),
                        GuestNumber = c.Double(nullable: false),
                        PricePerNight = c.Double(nullable: false),
                        SingUpTime = c.DateTime(nullable: false),
                        SingOutTime = c.DateTime(nullable: false),
                        Status = c.Int(nullable: false),
                        User_ID = c.Int(),
                        User_ID1 = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.User", t => t.User_ID)
                .ForeignKey("dbo.User", t => t.User_ID1)
                .ForeignKey("dbo.User", t => t.HostID, cascadeDelete: true)
                .ForeignKey("dbo.Location", t => t.LocationID, cascadeDelete: true)
                .Index(t => t.LocationID)
                .Index(t => t.HostID)
                .Index(t => t.User_ID)
                .Index(t => t.User_ID1);
            
            CreateTable(
                "dbo.Comment",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        GuestID = c.Int(),
                        ApartmanID = c.Int(nullable: false),
                        Text = c.String(),
                        Rate = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Apartman", t => t.ApartmanID, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.GuestID)
                .Index(t => t.GuestID)
                .Index(t => t.ApartmanID);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        Password = c.String(),
                        Name = c.String(),
                        Surename = c.String(),
                        Gender = c.Int(nullable: false),
                        Role = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Reservation",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ApartmanID = c.Int(nullable: false),
                        GuestID = c.Int(),
                        SingUpDate = c.DateTime(nullable: false),
                        NumberOfNights = c.Int(nullable: false),
                        TotalPrice = c.Double(nullable: false),
                        Stauts = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Apartman", t => t.ApartmanID, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.GuestID)
                .Index(t => t.ApartmanID)
                .Index(t => t.GuestID);
            
            CreateTable(
                "dbo.Location",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        AdressID = c.Int(nullable: false),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Adress", t => t.AdressID, cascadeDelete: true)
                .Index(t => t.AdressID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Apartman", "LocationID", "dbo.Location");
            DropForeignKey("dbo.Location", "AdressID", "dbo.Adress");
            DropForeignKey("dbo.Apartman", "HostID", "dbo.User");
            DropForeignKey("dbo.Reservation", "GuestID", "dbo.User");
            DropForeignKey("dbo.Reservation", "ApartmanID", "dbo.Apartman");
            DropForeignKey("dbo.Apartman", "User_ID1", "dbo.User");
            DropForeignKey("dbo.Comment", "GuestID", "dbo.User");
            DropForeignKey("dbo.Apartman", "User_ID", "dbo.User");
            DropForeignKey("dbo.Comment", "ApartmanID", "dbo.Apartman");
            DropForeignKey("dbo.Amenitie", "Apartman_ID", "dbo.Apartman");
            DropIndex("dbo.Location", new[] { "AdressID" });
            DropIndex("dbo.Reservation", new[] { "GuestID" });
            DropIndex("dbo.Reservation", new[] { "ApartmanID" });
            DropIndex("dbo.Comment", new[] { "ApartmanID" });
            DropIndex("dbo.Comment", new[] { "GuestID" });
            DropIndex("dbo.Apartman", new[] { "User_ID1" });
            DropIndex("dbo.Apartman", new[] { "User_ID" });
            DropIndex("dbo.Apartman", new[] { "HostID" });
            DropIndex("dbo.Apartman", new[] { "LocationID" });
            DropIndex("dbo.Amenitie", new[] { "Apartman_ID" });
            DropTable("dbo.Location");
            DropTable("dbo.Reservation");
            DropTable("dbo.User");
            DropTable("dbo.Comment");
            DropTable("dbo.Apartman");
            DropTable("dbo.Amenitie");
            DropTable("dbo.Adress");
        }
    }
}