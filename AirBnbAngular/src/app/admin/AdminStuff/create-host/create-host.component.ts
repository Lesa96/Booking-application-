import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
import { RegistUser, User } from 'src/app/Classes/User';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-create-host',
  templateUrl: './create-host.component.html',
  styleUrls: ['./create-host.component.css']
})
export class CreateHostComponent implements OnInit {

  constructor(private fb: FormBuilder , private router : Router , private adminService: AdminService) { }

  invalidPass = false;
  registUser : any;
  genders = ["Male" , "Famale"];

  registerForm = this.fb.group({
    username: ['', Validators.required],
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

      this.registUser = new User();
      this.registUser.Name =  this.registerForm.value.name;
      this.registUser.Surname = this.registerForm.value.surname ; 
      this.registUser.Username = this.registerForm.value.username; 
      this.registUser.Password =  this.registerForm.value.password;
      this.registUser.Gender =  this.registerForm.value.gender;
      
      this.adminService.CreateHost(this.registUser).subscribe(data=> {
        alert("Host was created");
        console.log(this.registUser);
        this.router.navigate(["admin"]);
      });

      
    }
    else
    {
      this.invalidPass = true;
    }
  }

}
