import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Observable } from 'rxjs';
import {Reservation} from '../../../Classes/Reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  AllReservations : Observable<Reservation>
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllReservations().subscribe(data=> 
      { 
        this.AllReservations = data as Observable<Reservation>
        console.log(this.AllReservations);
      });
  }

}
