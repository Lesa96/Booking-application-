import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/Classes/Reservation';
import { HostService } from 'src/app/host.service';

@Component({
  selector: 'app-host-reservations',
  templateUrl: './host-reservations.component.html',
  styleUrls: ['./host-reservations.component.css']
})
export class HostReservationsComponent implements OnInit {

  hostReservations : Observable<Reservation>
  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.hostService.getHostReservations(3).subscribe(data=> 
      { 
        this.hostReservations = data as Observable<Reservation>
        console.log(this.hostReservations);
      });
  }

}
