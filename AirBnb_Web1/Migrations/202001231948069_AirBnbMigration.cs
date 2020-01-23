namespace AirBnb_Web1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AirBnbMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.HolidayDays",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Holiday = c.DateTime(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.HolidayDays");
        }
    }
}
