import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private apartmentUri = "http://localhost:8080/api/Apartment/";

  constructor(private http: HttpClient) { }

  getHostApartments(hostId : any) : Observable<any>
  {    
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams().set('hostId' , hostId)
      
     };

    return this.http.get(this.apartmentUri+"GetHostApartments",httpOptions).pipe(
      catchError(e => throwError(console.error("Eror in home service:  " + e)))
    );
  }
}
