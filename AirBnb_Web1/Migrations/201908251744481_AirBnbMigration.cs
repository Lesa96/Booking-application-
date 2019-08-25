namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AirBnbMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Adress", "Settlement", c => c.String());
            DropColumn("dbo.Adress", "Citysettlement");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Adress", "Citysettlement", c => c.String());
            DropColumn("dbo.Adress", "Settlement");
        }
    }
}
