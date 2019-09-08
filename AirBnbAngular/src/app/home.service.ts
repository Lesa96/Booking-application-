import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  
  private apartmentUri = "http://localhost:8080/api/Apartment/";

  constructor(private http: HttpClient) { }

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
      catchError(e => throwError(console.error("Eror in host service:  " + e.error.Message)))
    );

  }

  GetApartmentAmenitieNames(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('apartmentID' , apartmentID)     
     };

    return this.http.get(this.apartmentUri+"GetApartmentAmenitieNames",httpOptions).pipe(
      catchError(e => throwError(alert("Eror in host service:  " + e.error.Message)))
    );

  }

}
