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

  changeStatus(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog comment-a

    this.adminService.changeUserStatus(id).subscribe(data=> {
      this.AllUsers.forEach(user=>{
        if(user.ID == id)
        {
          if(user.Blocked)
            user.Blocked = false;
          else
          user.Blocked = true;
        }
      });
    });

    
  }

}
