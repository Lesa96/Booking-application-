namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AirBnbMigration : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Reservation", "DatesModelID", "dbo.DatesModel");
            DropIndex("dbo.Reservation", new[] { "DatesModelID" });
            AddColumn("dbo.Reservation", "SingUpDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.Reservation", "DatesModelID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Reservation", "DatesModelID", c => c.Int());
            DropColumn("dbo.Reservation", "SingUpDate");
            CreateIndex("dbo.Reservation", "DatesModelID");
            AddForeignKey("dbo.Reservation", "DatesModelID", "dbo.DatesModel", "ID");
        }
    }
}
