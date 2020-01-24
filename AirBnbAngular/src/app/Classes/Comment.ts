export class Comment {
    Id : number;
    UserName : string;
    Text : string;
    Rate : number;
    Blocked : boolean;
    
}

export class GuestComment {
    ReservationID : number;
    Comment : string;    
    Rate : number;
    
}