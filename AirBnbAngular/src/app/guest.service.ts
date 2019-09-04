import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private reservationUri = "http://localhost:8080/api/Reservation/";

  constructor(private http: HttpClient) { }

  GetGuestReservations(guestId : any) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('guestId' , guestId).set('status',status)
      
     };

    return this.http.get(this.reservationUri+"GetGuestReservations",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in guest service:  " + e.error.Message)))
    );
  }

  cancelReservationRequest(reservationId : any , status : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('reservationId' , reservationId).set('status',status)
      
     };

     return this.http.delete(this.reservationUri+"ChageReservationRequests",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );
  }

  GetGuestReservationRequest(guestId : any , status : any) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('guestId' , guestId).set('status',status)
      
     };

    return this.http.get(this.reservationUri+"GetGuestReservationRequest",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );
  }
}
