import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUri = "http://localhost:8080/api/Users/";

  constructor(private http: HttpClient) { }

  Register(user : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
     };

    return this.http.put(this.userUri+"Register",user,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in User service:  " + e.error.Message)))
    );
  }

  GetUser() : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role }),
      params: new HttpParams().set('userId' , localStorage.ID) 
     };

    return this.http.get(this.userUri+"GetUser",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in User service:  " + e.error.Message)))
    );
  }

  ProfileChange(user : any) : any
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Role' : localStorage.Role }),
     };

    return this.http.patch(this.userUri+"ChangeUser",user,httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in User service:  " + e.error.Message)))
    );
  }
}
