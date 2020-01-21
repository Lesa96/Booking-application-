namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FinalMigrationAdd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DatesModel", "Deleted", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.DatesModel", "Deleted");
        }
    }
}
