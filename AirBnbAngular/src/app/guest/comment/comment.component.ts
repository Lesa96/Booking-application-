import { Component, OnInit } from '@angular/core';
import { GuestService } from 'src/app/guest.service';
import { Reservation } from 'src/app/Classes/Reservation';
import { StorageService } from 'src/app/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  guestCommentReservations : any[] = [];

  constructor(private guestService: GuestService,private storageService: StorageService,private router: Router) { }

  ngOnInit() {
    this.guestService.GetGuestCommentReservations(localStorage.ID).subscribe(data=>{
      this.guestCommentReservations = data as Reservation[];
      
    })
  }

  commentReservation(reservationId)
  {
    this.storageService.setReservationID(reservationId);
    this.router.navigate(['guest/comments/write']);
  }

}
