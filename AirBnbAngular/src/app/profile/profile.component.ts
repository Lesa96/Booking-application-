import { Component, OnInit } from '@angular/core';
import { RegistUser, User } from '../Classes/User';
import { UserService } from '../user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  logedUser : User;
  genders = ["Male" , "Famale"];
  invalidPass = false;

  userForm : any;
  passForm : any;
  constructor(private userService :UserService,private fb: FormBuilder , private router : Router) { }

  ngOnInit() {
    this.userService.GetUser().subscribe(data=>{
      this.logedUser = data as User;
      console.log(this.logedUser);

      this.userForm = this.fb.group({
        role: [this.logedUser.Role,Validators.required],
        username: [this.logedUser.UserName, Validators.required],
        
        name: [this.logedUser.Name, Validators.required],
        surname: [this.logedUser.Surname, Validators.required],
        gender: [this.logedUser.Gender, Validators.required]
        
      });

      this.passForm = this.fb.group({
         password: ["", [Validators.required]],
         confirmPassword: [, [Validators.required ]],
      })
    });
  }

  onSubmit()
  {        
      this.logedUser.Name =  this.userForm.value.name;
      this.logedUser.Surname = this.userForm.value.surname ; 
      this.logedUser.UserName = this.userForm.value.username; 
      
      this.logedUser.Gender =  this.userForm.value.gender;
      
      this.userService.ProfileChange(this.logedUser).subscribe(data=>{
        alert("Succesfuly changed");
         
        this.returnBack();
      });         
    
  }

  returnBack()
  {
    if(localStorage.Role == "Admin")
         this.router.navigate(["/admin"]);
        else if(localStorage.Role == "Host")
        this.router.navigate(["/host"]);
        else if(localStorage.Role == "Guest")
        this.router.navigate(["/guest"]);
  }

  onChange()
  {
    if(this.passForm.value.password === this.passForm.value.confirmPassword)
    {
      this.invalidPass = false;
      this.logedUser.Password =  this.passForm.value.password;

      this.userService.ProfileChange(this.logedUser).subscribe(data=>{
        alert("Succesfuly changed");
         
        this.returnBack();
      }); 
    }
    else
    {
      this.invalidPass = true;
    }
  }

}
