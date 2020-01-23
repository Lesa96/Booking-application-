import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate{

  constructor(private router : Router) { }

  canActivate()
  {
    
    if(localStorage.Role == "Host")
      return true;
    else
    {

      window.alert("You don't have permission to view this page"); (4)
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
