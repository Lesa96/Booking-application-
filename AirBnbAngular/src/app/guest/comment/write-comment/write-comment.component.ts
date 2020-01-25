import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestService } from 'src/app/guest.service';
import { Reservation } from 'src/app/Classes/Reservation';
import { GuestComment } from 'src/app/Classes/Comment';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent implements OnInit {

  constructor(private guestService: GuestService , private storageService: StorageService, private fb: FormBuilder,private router: Router) { }

  reservationID : number;
  reservation : any;
  commentForm = this.fb.group({
    comment : ["",Validators.required],
    rate : [,[Validators.required,Validators.min(1), Validators.max(10)]]
  });

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

  onAddComment()
  {
    var comm = new GuestComment();
    comm.ReservationID = this.reservationID;
    comm.Comment = this.commentForm.value.comment;
    comm.Rate = this.commentForm.value.rate;
    this.guestService.CommentReservation(comm).subscribe(data=>{
      alert(data);

    });
  }

}
