namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Airbnb : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Surname", c => c.String());
            DropColumn("dbo.User", "Surename");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "Surename", c => c.String());
            DropColumn("dbo.User", "Surname");
        }
    }
}
