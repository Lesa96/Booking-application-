import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HolidayBM } from 'src/app/Classes/Amenitie';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private adminService: AdminService , private fb: FormBuilder,private router: Router) { }

  addForm = this.fb.group({
    holiday : ['', Validators.required]
  });

  holidays : any[] = [];

  ngOnInit() {
    this.adminService.GetHolydays().subscribe(data=>
      {
        this.holidays = data as HolidayBM[];
        
      });
  }

  onSubmit()
  {
    
    this.adminService.AddHoliday(this.addForm.value.holiday).subscribe(data=>{
      alert(data);
      this.ngOnInit();
    });
  }

  deleteHolyday(id)
  {
    this.adminService.DeleteHoliday(id).subscribe(data=>{
      //brisi sa view-a:
      var comm = this.holidays.find(x=> x.Id == id);
      var idx = this.holidays.indexOf(comm);
      this.holidays.splice(idx,1);
    });
  }

}
