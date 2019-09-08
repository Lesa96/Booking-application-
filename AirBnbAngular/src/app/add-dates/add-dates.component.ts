import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostService } from '../host.service';
import { StorageService } from '../storage.service';
import { Observable } from 'rxjs';
import {DateModel} from '../Classes/DateModel';

@Component({
  selector: 'app-add-dates',
  templateUrl: './add-dates.component.html',
  styleUrls: ['./add-dates.component.css']
})
export class AddDatesComponent implements OnInit {

  dateModel : DateModel;
  addForm : any;
  constructor(private hostService: HostService,private fb: FormBuilder,private router: Router, private storageService: StorageService) { }

  ngOnInit() {
    this.dateModel = new DateModel();
    this.dateModel.ApartmanID = this.storageService.getApartmentID();
    this.dateModel.CheckedDates  = [];

    this.addForm = this.fb.group({
      date: ["" ,Validators.required]
    });
  }

  onAdd()
  {
    this.dateModel.CheckedDates.push(this.addForm.value.date);
    alert("Date vas added");
  }

  onDone()
  {
    this.hostService.addDates(this.dateModel).subscribe(data=> {
      this.storageService.setApartmentID(this.dateModel.ApartmanID);
      this.router.navigate(['host/apartments/pictures']);
    });
    
  }

}
