import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Classes/Apartment';
import { StorageService } from 'src/app/storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import {Comment} from '../../../../Classes/Comment';
import { AdminService } from 'src/app/admin.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {

  constructor(private adminService: AdminService ,private storageService: StorageService, private fb: FormBuilder,private router: Router) { }
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
      SingUpTime: [this.apartment.SingUpTime.split("T")[0],Validators.required],
      SingOutTime: [this.apartment.SingOutTime.split("T")[0],Validators.required],
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
    this.apartment.Type = this.editForm.value.Type;
    this.apartment.RoomNumber = this.editForm.value.RoomNumber;
    this.apartment.GuestNumber = this.editForm.value.GuestNumber;
    this.apartment.PricePerNight = this.editForm.value.PricePerNight;
    this.apartment.SingUpTime = this.editForm.value.SingUpTime;
    this.apartment.SingOutTime = this.editForm.value.SingOutTime;
    this.apartment.Status = this.editForm.value.Status;
    this.apartment.Latitude = this.editForm.value.Latitude;
    this.apartment.Longitude = this.editForm.value.Longitude;
    this.apartment.Streat = this.editForm.value.Streat;
    this.apartment.StreatNumber = this.editForm.value.StreatNumber;
    this.apartment.Settlement = this.editForm.value.Settlement;
    this.apartment.ZipCode = this.editForm.value.ZipCode;
    

    this.adminService.changeApartment(this.apartment).subscribe(data=>{
      this.router.navigate(["/admin/apartments"]);
    });
  }
  onDelete()
  {
    this.adminService.deleteApartment(this.apartment.ID).subscribe(data=>{
      this.router.navigate(["/admin/apartments"]);
    });
  }
  

  deleteComment(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog comment-a
    
    this.adminService.deleteApartmentComment(id).subscribe(data=>{
      //brisi sa view-a:
      var comm = this.apartmentComments.find(x=> x.Id == id);
      var idx = this.apartmentComments.indexOf(comm);
      this.apartmentComments.splice(idx,1);
    });

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
