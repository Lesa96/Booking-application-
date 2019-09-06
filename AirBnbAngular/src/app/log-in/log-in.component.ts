import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import {LogBm} from '../Classes/LogBM'
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userInfo : LogBm;
  constructor(private router : Router,private fb: FormBuilder , private logingService: LoginService) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
 });

  ngOnInit() {
  }

  onSubmit()
  {
    this.logingService.TryLog(this.loginForm.value.username,this.loginForm.value.password).subscribe(data=>{
      this.userInfo = data as LogBm;
      console.log(this.userInfo);

      localStorage.setItem('Role', this.userInfo.Role);
      localStorage.setItem('ID', this.userInfo.ID);
          
          if (this.userInfo.Role == 'Admin')
          {
            this.router.navigate(['/admin'])
          }
          else if (this.userInfo.Role == 'Host')
          {
            this.router.navigate(['/host'])
          }
          else if (this.userInfo.Role == 'Guest')
          {
            this.router.navigate(['/guest'])
          }
          else
          {
            this.router.navigate(['/home'])
          }

    });
  }

}
