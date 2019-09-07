import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/Classes/Reservation';
import {GuestService} from '../../guest.service';

@Component({
  selector: 'app-guest-reservations',
  templateUrl: './guest-reservations.component.html',
  styleUrls: ['./guest-reservations.component.css']
})
export class GuestReservationsComponent implements OnInit {

  guestReservations : Observable<Reservation>
  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.guestService.GetGuestReservations(localStorage.ID).subscribe(data=> 
      { 
        this.guestReservations = data as Observable<Reservation>
        console.log(this.guestReservations);
      });
  }

}
