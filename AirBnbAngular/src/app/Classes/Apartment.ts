export class Apartment {
    
    ID : number;
    Type : string;
    RoomNumber : number;
    GuestNumber : number;
    RentDates : Array<any>;
    AvailableDates : Array<any>;
    Pictures : Array<any>;
    PricePerNight : number;
    SingUpTime : any;
    SingOutTime : any;
    Status : string;

    //coments:
    CommentIDs : Array<number>;
    //Amenities:
    Amenities : Array<any>;
    //Location info:
    Latitude : number;
    Longitude : number;
    //Adress info:
    Streat : string;
    StreatNumber : number;
    Settlement : string;
    ZipCode : number;
    //Host info:
    HostID : number;
    HostName : string;
    HostSurname : string;
}