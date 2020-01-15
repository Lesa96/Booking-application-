export class Apartment {
    
    ID : number;
    Type : string;
    RoomNumber : number;
    GuestNumber : number;
    Pictures : Array<any>;
    PricePerNight : number;
    SingUpTime : any;
    SingOutTime : any;
    Status : string;

    RentDates: Array<any>;

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

export class SearchApartment {

    Settlement: string;
    CheckIn : any;
    CheckOut: any;
    GuestNumber: number;
    MinRooms: number;
    MaxRooms: number;
    MaxPrice: number;
    ApartmentType: string;
    ApartmentStatus: string;
    Amenities: Array<any>;
}