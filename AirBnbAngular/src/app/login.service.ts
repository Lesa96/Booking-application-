import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LogInUri = "http://localhost:8080/api/Users/";
  constructor(private http: HttpClient) { }

  TryLog(username : any , password : any) : any
  {
    return this.http.get(this.LogInUri+"Login");
  }
}
