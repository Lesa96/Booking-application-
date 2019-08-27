import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private userUri = "http://localhost:8080/api/Users/";
  private apartmentUri = "http://localhost:8080/api/Apartment/";
  

  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<any>
  {    
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      
     };

    return this.http.get(this.userUri+"GetUsers",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e)))
    );
  }

  getAllApartments() : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      
     };

    return this.http.get(this.apartmentUri+"GetAllApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in home service:  " + e)))
    );

  }

  getCommentsForApartment(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('apartmentID' , apartmentID)
     };

    return this.http.get(this.apartmentUri+"GetCommentsForApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in home service:  " + e)))
    );

  }
}
