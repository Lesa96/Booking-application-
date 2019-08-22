import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {  RegistUser } from '../Classes/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private registerService: RegisterService) { }

  invalidPass = false;
  registUser : any;
  genders = ["Male" , "Famale"];

  registerForm = this.fb.group({
    email: ['', Validators.required],
    password: ["", [Validators.required,Validators.minLength(6)]],
    confirmPassword: [, [Validators.required , Validators.minLength(6)]],
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

      this.registUser = new RegistUser(
        this.registerForm.value.name,this.registerForm.value.surname , this.registerForm.value.email, 
        this.registerForm.value.password,this.registerForm.value.gender
      );
      
      this.registerService.registeUser(this.registUser);

      alert("Account was created");
      console.log(this.registUser);
      this.router.navigate(["login"]);
    }
    else
    {
      this.invalidPass = true;
    }
  }

}
