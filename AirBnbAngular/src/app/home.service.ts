import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private homeUri = "http://localhost:8080/api/Apartment/";

  constructor(private http: HttpClient) { }

  getActiveApartments() : Observable<any>
  {    
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      
    // };

    return this.http.get(this.homeUri+"GetActiveApartments").pipe(
      catchError(e => throwError( alert("Eror in home service:  " + e)))
    );
  }
}
