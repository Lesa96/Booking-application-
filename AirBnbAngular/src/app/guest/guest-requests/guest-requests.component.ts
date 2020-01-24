import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Classes/Reservation';
import { GuestService } from 'src/app/guest.service';

@Component({
  selector: 'app-guest-requests',
  templateUrl: './guest-requests.component.html',
  styleUrls: ['./guest-requests.component.css']
})
export class GuestRequestsComponent implements OnInit {

  createdReservations : any[] = [];
  acceptedReservations : any[] = [];
  constructor(private guestService: GuestService) { }

  ngOnInit() {
    this.guestService.GetGuestReservationRequest(localStorage.ID,'Created').subscribe(data=> 
      { 
        this.createdReservations = data as Reservation[];
        console.log(this.createdReservations);

        this.guestService.GetGuestReservationRequest(localStorage.ID,'Accepted').subscribe(data=> 
          { 
            this.acceptedReservations = data as Reservation[];
            console.log(this.acceptedReservations);
          });

      });
    
  }

  CancelRequest(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    this.guestService.cancelReservationRequest(id , 'Canceled').subscribe(data=> {

      var res = this.acceptedReservations.find(x=> x.ID == id);
      if(res != undefined)
      {
        var idx = this.acceptedReservations.indexOf(res);
        this.acceptedReservations.splice(idx,1);
      }

      res = this.createdReservations.find(x=> x.ID == id);
      if(res != undefined)
      {
        var idx = this.createdReservations.indexOf(res);
        this.createdReservations.splice(idx,1);
      }

      
      
    });
  }

}
