import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Observable } from 'rxjs';
import {Reservation} from '../../../Classes/Reservation';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  AllReservations : any[] = [];
  FiltredReservations : any[] = [];

  ReservationStatus = ["","Created","Rejected","Canceled","Accepted","Done"];

  searchForm= this.fb.group({
    reservationStatus: [],
    guestUsername: [],

  });
  constructor(private adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {
    this.adminService.getAllReservations().subscribe(data=> 
      { 
        this.AllReservations = data as Reservation[];
        this.FiltredReservations = data as Reservation[];
        console.log(this.AllReservations);
      });
  }

  onSearch()
  {
    this.adminService.GetSearchReservations(this.searchForm.value.guestUsername,this.searchForm.value.reservationStatus).subscribe(data=>{
      this.FiltredReservations = data as Reservation[];
      console.warn(this.FiltredReservations);
    });
  }

  reset()
  {
    this.FiltredReservations = this.AllReservations;
  }

  sortLow()
  {
    this.FiltredReservations.sort((a,b) => a.TotalPrice - b.TotalPrice);
  }

  sortHigh()
  {
    this.FiltredReservations.sort((a,b) => b.TotalPrice - a.TotalPrice);
  }

}
