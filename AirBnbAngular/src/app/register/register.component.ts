import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {  RegistUser, User } from '../Classes/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private userService: UserService) { }

  invalidPass = false;
  registUser : any;
  genders = ["Male" , "Famale"];

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ["", [Validators.required]],
    confirmPassword: [, [Validators.required]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    gender: ['', Validators.required]
    
  });

  ngOnInit() {
    
  }

  onSubmit()
  {
    if(this.registerForm.value.password === this.registerForm.value.confirmPassword)
    {
      this.invalidPass = false;

      this.registUser = new User();
      this.registUser.Name =  this.registerForm.value.name;
      this.registUser.Surname = this.registerForm.value.surname ; 
      this.registUser.Username = this.registerForm.value.username; 
      this.registUser.Password =  this.registerForm.value.password;
      this.registUser.Gender =  this.registerForm.value.gender;
      
      this.userService.Register(this.registUser).subscribe(data=>{
        alert("Account was created");
         
         this.router.navigate(["login"]);
      });
      
    }
    else
    {
      this.invalidPass = true;
    }
  }

}
