import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../../../../app/Classes/Apartment';
import { StorageService } from '../../../../../app/storage.service';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {Comment} from '../../../../Classes/Comment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HostService } from 'src/app/host.service';

@Component({
  selector: 'app-edit-host-apartment',
  templateUrl: './edit-host-apartment.component.html',
  styleUrls: ['./edit-host-apartment.component.css']
})
export class EditHostApartmentComponent implements OnInit {

  constructor(private hostService: HostService ,private storageService: StorageService, private fb: FormBuilder,private router: Router) { }
  apartment : Apartment;
  apartmentComments : Observable<Comment>;
  appReady = false;
  apartmentStatus = ['Active','NotActive'];
  apartmentTypes = ['FullApartman','Room'];

  editForm : any;
  commentForm : any;

  amNames = new Array();
  selectedNames = new Array();

  ngOnInit() {
    this.apartment = this.storageService.getHostApartment();
    this.GetAllStationNames()
    
    console.warn(this.apartment);

    this.editForm = this.fb.group({
      Type: [this.apartment.Type, Validators.required],
      RoomNumber: [this.apartment.RoomNumber,Validators.required],
      GuestNumber: [this.apartment.GuestNumber,Validators.required],
      PricePerNight: [this.apartment.PricePerNight,Validators.required],
      SingUpTime: [this.apartment.SingUpTime.split("T")[1],Validators.required],
      SingOutTime: [this.apartment.SingOutTime.split("T")[1],Validators.required],
      Status: [this.apartment.Status,Validators.required],
  
      Latitude: [this.apartment.Latitude,Validators.required],
      Longitude: [this.apartment.Longitude,Validators.required],
      Streat: [this.apartment.Streat,Validators.required],
      StreatNumber: [this.apartment.StreatNumber,Validators.required],
      Settlement: [this.apartment.Settlement,Validators.required],
      ZipCode: [this.apartment.ZipCode,Validators.required],
      HostName: [this.apartment.HostName,Validators.required],
      HostSurname: [this.apartment.HostSurname,Validators.required],
      amNames:  new FormArray([])
      
    });
    
    //this.getAllComments();
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
    this.apartment.Amenities = new Array();
        for(var i=0; i < this.amNames.length; i++)
        {
          if(this.editForm.controls.amNames.value[i] == true)
          {
            this.apartment.Amenities.push(this.amNames[i]);
          }
        }
    
    

    this.hostService.changeApartment(this.apartment).subscribe(data=>{
      this.router.navigate(["/host/apartments"]);
    });
  }
  onDelete()
  {
    this.hostService.deleteApartment(this.apartment.ID).subscribe(data=>{
      this.router.navigate(["/host/apartments"]);
    });
  }
  

  chageComment(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog comment-a
    
    this.hostService.ChangeStatusApartmentComment(id).subscribe(data=>{
      this.apartmentComments.forEach(comment=>{
        if(comment.Id == id)
        {
          if(comment.Blocked)
          comment.Blocked = false;
          else
          comment.Blocked = true;
        }
      });
    });

  }

  getAllComments()
  {
    this.hostService.getCommentsForApartment(this.apartment.ID).subscribe(data=>{
      this.apartmentComments = data as Observable<Comment>;
      

      console.warn(this.apartmentComments);
    });
  }

  returnBack()
  {
    this.router.navigate(["/host/apartments"]);
  }

  

  private GetAllStationNames()
  {
    this.hostService.GetAmenitieNames().subscribe(names => //all existing amenities
      {
        this.amNames = names;
        this.addCheckboxes();

        this.amNames.forEach(element => {
          console.warn(element);
        });
      });

      
  }

  private addCheckboxes()
  {
      this.amNames.map((o, i) => {  //o je trenutni element, i-index
        
        const control = new FormControl((this.apartment.Amenities.indexOf(o) != -1)); //
        (this.editForm.controls.amNames as FormArray).push(control);
      });

      this.getAllComments()

      
  }

}
