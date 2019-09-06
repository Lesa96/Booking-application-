import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loged-user',
  templateUrl: './loged-user.component.html',
  styleUrls: ['./loged-user.component.css']
})
export class LogedUserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logOut()
  {
    localStorage.removeItem('Role');
    localStorage.removeItem('ID');

    this.router.navigate(['/home']);
  }

  changeProfil()
  {
    alert("Change profil"); //for now
  }

}
