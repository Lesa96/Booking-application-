import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service'
import { Observable } from 'rxjs';
import { User } from 'src/app/Classes/User';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  AllUsers : Observable<User>
  SearchedUsers : Observable<User>
  roles = ['Host','Guest'];
  genders = ['Male','Famale'];
  searchForm : any;
  constructor(private fb: FormBuilder , private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(data=> 
      { 
        this.AllUsers = data as Observable<User>;
        this.SearchedUsers = data as Observable<User>;
        console.log(this.AllUsers);
      });

      this.searchForm = this.fb.group({
        Role: ["", ],
        Gender: ["", ],
        Username: ["",]
               
      });
  }

  changeStatus(id)
  {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const id = idAttr.nodeValue; //id kliknutog comment-a
    console.log(id);
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
      if(this.AllUsers !== this.SearchedUsers)
          this.SearchedUsers.forEach(user=>{
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

  onSearch()
  {
    this.adminService.SearchUsers(this.searchForm.value.Role ,this.searchForm.value.Gender ,this.searchForm.value.Username).subscribe(data=>{
        this.SearchedUsers = data as Observable<User>;
        console.log(this.SearchedUsers);
    })
  }
  onReset()
  {
    this.SearchedUsers = this.AllUsers;
  }

}
