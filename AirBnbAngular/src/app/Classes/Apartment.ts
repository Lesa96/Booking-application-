export class Apartment {
    
    ID : number;
    Type : string;
    RoomNumber : number;
    GuestNumber : number;
    RentDates : Array<any>;
    AvailableDates : Array<any>;
    Comments : Array<any>;
    Pictures : Array<string>;
    PricePerNight : number;
    SingUpTime : any;
    SingOutTime : any;
    Status : string;

    //coments:
    CommentIDs : Array<number>;
    //Location info:
    Latitude : number;
    Longitude : number;
    //Adress info:
    Streat : string;
    StreatNumber : number;
    Citysettlement : string;
    ZipCode : number;
    //Host info:
    HostID : number;
    HostName : string;
    HostSurename : string;
}