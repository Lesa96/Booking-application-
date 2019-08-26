import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private userUri = "http://localhost:8080/api/Users/";

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
}
