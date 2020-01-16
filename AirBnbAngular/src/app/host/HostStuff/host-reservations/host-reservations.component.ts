import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/Classes/Reservation';
import { HostService } from 'src/app/host.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-host-reservations',
  templateUrl: './host-reservations.component.html',
  styleUrls: ['./host-reservations.component.css']
})
export class HostReservationsComponent implements OnInit {

  hostReservations : any[] = [];
  FiltredReservations : any[] = [];

  ReservationStatus = ["","Created","Rejected","Canceled","Accepted","Done"];

  searchForm= this.fb.group({
    reservationStatus: [],
    guestUsername: [],

  });

  constructor(private hostService: HostService,private fb: FormBuilder) { }

  ngOnInit() {
    this.hostService.getHostReservations(3).subscribe(data=> 
      { 
        this.hostReservations = data as Reservation[];
        this.FiltredReservations = data as Reservation[];
        
      });
  }

  onSearch()
  {
    this.hostService.GetSearchHostReservations(this.searchForm.value.guestUsername,this.searchForm.value.reservationStatus).subscribe(data=>{
      this.FiltredReservations = data as Reservation[];
      console.warn(this.FiltredReservations);
    });
  }

  reset()
  {
    this.FiltredReservations = this.hostReservations;
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
