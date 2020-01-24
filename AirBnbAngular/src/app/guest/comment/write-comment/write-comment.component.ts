import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/guest.service';
import { Reservation } from 'src/app/Classes/Reservation';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent implements OnInit {

  constructor(private guestService: GuestService , private storageService: StorageService, private fb: FormBuilder,private router: Router) { }

  reservationID : number;
  reservation : any;
  ngOnInit() {
    this.reservationID = this.storageService.getReservationID();
    this.guestService.GetReservation(this.reservationID).subscribe(data=>{
      this.reservation = data as Reservation;
    });

  }

  returnBack()
  {
    this.router.navigate(['guest/comments']);
  }

}
