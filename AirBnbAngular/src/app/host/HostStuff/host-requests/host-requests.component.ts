import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/host.service';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/Classes/Reservation';

@Component({
  selector: 'app-host-requests',
  templateUrl: './host-requests.component.html',
  styleUrls: ['./host-requests.component.css']
})
export class HostRequestsComponent implements OnInit {

  createdReservations : any[] = [];
  acceptedReservations : any[] = [];
  constructor(private hostService: HostService) { }

  ngOnInit() {
    this.hostService.GetReservationRequests(localStorage.ID,'Created').subscribe(data=> 
      { 
        this.createdReservations = data as Reservation[];
        console.log(this.createdReservations);

        this.hostService.GetReservationRequests(3,'Accepted').subscribe(data=> 
          { 
            this.acceptedReservations = data as Reservation[];
            console.log(this.acceptedReservations);
          });

      });
    
  }

  acceptRequest(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    this.hostService.changeUserStatus(id , 'Accepted').subscribe(data=> {
      this.createdReservations.forEach(reservation=>{
        if(reservation.ID == id)
        {
          //prebaci u Accepted listu
          var res = reservation;
          res.Stauts = 'Accepted';
          this.acceptedReservations.push(res);

          //brisi iz Created liste
          var idx = this.createdReservations.indexOf(reservation);
          this.createdReservations.splice(idx,1);


        }
      });
    });
  }

  rejectRequest(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    this.hostService.changeUserStatus(id , 'Rejected').subscribe(data=> {

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

  doneReservation(id)
  {
    this.hostService.changeUserStatus(id , 'Done').subscribe(data=>{
      
    if(data == undefined || data == "")
    {
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
    }
    else
    {
      alert(data);
    }

    });
  }

}
