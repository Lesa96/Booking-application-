import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/Classes/Apartment';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  apartment : Apartment;
  apartmentComments : Observable<Comment>;
  amNames : any[] = [];

  editForm : any;
  commentForm : any;

  constructor(private homeService: HomeService ,private storageService: StorageService, private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.apartment = this.storageService.getGuestApartment();
    
    
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
      
    });

    this.GetApartmentAmenitieNames();

  }

  returnBack()
  {
    this.router.navigate(["/guest/apartments"]);
  }

  GetApartmentAmenitieNames()
  {
    this.homeService.GetApartmentAmenitieNames(this.apartment.ID).subscribe(data=>{
      this.amNames = data;
      
      this.getAllComments();
    });
  }

  getAllComments()
  {
    this.homeService.getCommentsForApartment(this.apartment.ID).subscribe(data=>{
      this.apartmentComments = data as Observable<Comment>;
      

      console.warn(this.apartmentComments);
    });
  }

  

}
