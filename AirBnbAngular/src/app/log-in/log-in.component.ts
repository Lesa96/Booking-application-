import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private fb: FormBuilder , private logingService: LoginService) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
 });

  ngOnInit() {
  }

  onSubmit()
  {
    this.logingService.TryLog("user","pw").subscribe();
  }

}
