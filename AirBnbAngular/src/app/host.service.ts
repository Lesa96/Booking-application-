import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private apartmentUri = "http://localhost:8080/api/Apartment/";
  private amenitieUri = "http://localhost:8080/api/Amenitie/";
  private reservationUri = "http://localhost:8080/api/Reservation/";
  private userUri = "http://localhost:8080/api/Users/";

  constructor(private http: HttpClient) { }


  getHostReservations(hostId : any) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('hostId' , hostId)
      
     };

    return this.http.get(this.reservationUri+"GetHostReservations",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );
  }

  changeUserStatus(reservationId : any , status : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('reservationId' , reservationId).set('status',status)
      
     };

     return this.http.delete(this.reservationUri+"ChageReservationRequests",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );
  }

  GetReservationRequests(hostId : any , status : any) : Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('hostId' , hostId).set('status',status)
      
     };

    return this.http.get(this.reservationUri+"GetReservationRequests",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );
  }

  getHostApartments(hostId : any) : Observable<any>
  {    
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('hostId' , hostId)
      
     };

    return this.http.get(this.apartmentUri+"GetHostApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e)))
    );
  }

  ChangeStatusApartmentComment(commentId : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
     };

     return this.http.patch(this.apartmentUri+"ChangeStatusApartmentComment?commentId="+commentId,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );;
  }

  changeApartment(apartment : any) : any
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
     };

    return this.http.patch(this.apartmentUri+"ChangeApartment",apartment,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );

  }

  getCommentsForApartment(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('apartmentID' , apartmentID)
     };

    return this.http.get(this.apartmentUri+"GetAllCommentsForApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );

  }

  deleteApartment(apartmentId : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
      params: new HttpParams().set('apartmentId' , apartmentId)
     };

     return this.http.delete(this.apartmentUri+"DeleteApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );;
  }

  addApartment(apartmentBM : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Role' : localStorage.Role }),
     };

     return this.http.put(this.apartmentUri+"AddApartment",apartmentBM,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );;
  }

  GetAmenitieNames() : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role })     
     };

    return this.http.get(this.amenitieUri+"GetAmenitieNames",httpOptions).pipe(
      catchError(e => throwError(alert("Eror in host service:  " + e.error.Message)))
    );

  }

  uploadDocument(document, apartmentID) : Observable<any> 
  { 
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role }),
      params: new HttpParams().append("apartmentID", apartmentID)
  };
    return this.http.post(this.userUri + "UploadPictures", document, httpOptions).pipe(
      catchError(e => throwError(alert("Eror in host service, pictures problem :  " + e.error.Message)))
    );
  }
  
}
