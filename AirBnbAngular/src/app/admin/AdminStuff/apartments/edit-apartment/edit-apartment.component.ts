import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Classes/Apartment';
import { StorageService } from 'src/app/storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import {Comment} from '../../../../Classes/Comment';
import { AdminService } from 'src/app/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {

  constructor(private adminService: AdminService ,private storageService: StorageService, private fb: FormBuilder,) { }
  apartment : Apartment;
  apartmentComments : any[] = [];
  appReady = false;
  apartmentStatus = ['Active','NotActive'];
  apartmentTypes = ['FullApartman','Room'];

  editForm : any;
  commentForm : any;

  ngOnInit() {
    this.apartment = this.storageService.getApartment();
    
    console.warn(this.apartment);

    this.editForm = this.fb.group({
      Type: [this.apartment.Type, Validators.required],
      RoomNumber: [this.apartment.RoomNumber,Validators.required],
      GuestNumber: [this.apartment.GuestNumber,Validators.required],
      PricePerNight: [this.apartment.PricePerNight,Validators.required],
      SingUpTime: [this.apartment.SingUpTime,Validators.required],
      SingOutTime: [this.apartment.SingOutTime,Validators.required],
      Status: [this.apartment.Status,Validators.required],
  
      Latitude: [this.apartment.Latitude,Validators.required],
      Longitude: [this.apartment.Longitude,Validators.required],
      Streat: [this.apartment.Streat,Validators.required],
      StreatNumber: [this.apartment.StreatNumber,Validators.required],
      Settlement: [this.apartment.Settlement,Validators.required],
      ZipCode: [this.apartment.ZipCode,Validators.required],
      HostName: [this.apartment.HostName,Validators.required],
      HostSurename: [this.apartment.HostSurename,Validators.required],
      
    });
    
    this.getAllComments();
  }

  onChange()
  {

  }
  onDelete()
  {
    
  }

  deleteComment(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    alert(id);
  }

  getAllComments()
  {
    this.adminService.getCommentsForApartment(this.apartment.ID).subscribe(data=>{
      var helpComm = data as Observable<Comment>;
      helpComm.forEach(element=>{
        var comm1 = new Comment();
        comm1.Id = element.Id;
        comm1.UserName = element.UserName;
        comm1.Text = element.Text;
        comm1.Rate = element.Rate;
        comm1.Blocked = element.Blocked;

        this.apartmentComments.push(comm1);
      });

      console.warn(this.apartmentComments);
    });
  }

  

}
