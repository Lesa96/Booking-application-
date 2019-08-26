import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service'
import { Observable } from 'rxjs';
import { User } from 'src/app/Classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  AllUsers : Observable<User>
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(data=> 
      { 
        this.AllUsers = data as Observable<User>
        console.log(this.AllUsers);
      });
  }

}
