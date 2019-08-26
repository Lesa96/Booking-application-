import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loged-user',
  templateUrl: './loged-user.component.html',
  styleUrls: ['./loged-user.component.css']
})
export class LogedUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logOut()
  {
    alert("Log out"); //for now
  }

  changeProfil()
  {
    alert("Change profil"); //for now
  }

}
