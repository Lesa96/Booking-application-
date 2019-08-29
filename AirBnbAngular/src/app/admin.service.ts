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
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );
  }

  getAllApartments() : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      
     };

    return this.http.get(this.apartmentUri+"GetAllApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );

  }

  getCommentsForApartment(apartmentID : any) : Observable<any>
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('apartmentID' , apartmentID)
     };

    return this.http.get(this.apartmentUri+"GetCommentsForApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );

  }

  changeApartment(apartment : any) : any
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     };

    return this.http.patch(this.apartmentUri+"ChangeApartment",apartment,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );

  }

  changeUserStatus(id : any) : any
  {   
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     };

    return this.http.patch(this.userUri+"ChangeUserStatus?id="+id,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );

  }

  deleteApartmentComment(commentId : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('commentId' , commentId)
     };

     return this.http.delete(this.apartmentUri+"DeleteApartmentComment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );;
  }

  deleteApartment(apartmentId : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('apartmentId' , apartmentId)
     };

     return this.http.delete(this.apartmentUri+"DeleteApartment",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );;
  }

  CreateHost(user : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     };

    return this.http.put(this.userUri+"CreateHost",user,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );
  }

}
