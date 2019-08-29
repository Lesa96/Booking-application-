import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
      catchError(e => throwError(console.error("Eror in admin service:  " + e.error.Message)))
    );
  }
}
