import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SearchApartment } from './Classes/Apartment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  private apartmentUri = "http://localhost:8080/api/Apartment/";
  private amenitieUri = "http://localhost:8080/api/Amenitie/";
  private reservationUri = "http://localhost:8080/api/Reservation/";

  constructor(private http: HttpClient) { }

  SearchUsers(userRole : any ,userGender : any , username : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role }),
      params: new HttpParams().set('userRole' , userRole).set('userGender' , userGender).set('username' , username)
     };

    return this.http.get(this.apartmentUri+"GetSearchApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );

  }

  getActiveApartments() : Observable<any>
  {    
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      
     };

    return this.http.get(this.apartmentUri+"GetActiveApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in home service:  " + e)))
    );
  }

  getCommentsForApartment(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      params: new HttpParams().set('apartmentID' , apartmentID)
     };

    return this.http.get(this.apartmentUri+"GetCommentsForApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in home service:  " + e.error.Message)))
    );

  }

  GetApartmentAmenitieNames(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('apartmentID' , apartmentID)     
     };

    return this.http.get(this.apartmentUri+"GetApartmentAmenitieNames",httpOptions).pipe(
      catchError(e => throwError(alert("Eror in home service:  " + e.error.Message)))
    );

  }

  GetSearchApartments(apartmentDetails : any) : Observable<any>
  {
    const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
     // params: new HttpParams().set('apartmentDetails' , apartmentDetails)     
     };

    return this.http.put(this.apartmentUri+"GetSearchApartments",apartmentDetails,httpOptions).pipe(
      catchError(e => throwError(alert("Eror in home service:  " + e.error.Message)))
    );
  }

  GetAmenitieNames() : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})     
     };

    return this.http.get(this.amenitieUri+"GetAmenitieNames",httpOptions).pipe(
      catchError(e => throwError(alert("Eror in host service:  " + e.error.Message)))
    );

  }

  GetApartmentRentDates(apartmanID : any ): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role}),
      params: new HttpParams().set('apartmanID', apartmanID)     
      };
 
     return this.http.get(this.apartmentUri+"GetHostApartmentRentDates",httpOptions).pipe(
       catchError(e => throwError(alert("Eror in home service, rent date problem :   " + e.error.Message)))
     );
  }

  RequestApartmentRentDates(rentD : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',  'Role' : localStorage.Role}),
      // params: new HttpParams().set('apartmentDetails' , apartmentDetails)     
      };
 
     return this.http.put(this.reservationUri+"RequestApartmentRentDates",rentD,httpOptions).pipe(
       catchError(e => throwError(alert("Eror in home service, rent request:  " + e.error.Message)))
     );
  }

  GetHolydaysNames() : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})     
     };

    return this.http.get(this.amenitieUri+"GetHolydaysNames",httpOptions).pipe(
      catchError(e => throwError(alert("Eror in host service:, Holydays:  " + e.error.Message)))
    );

  }


}
