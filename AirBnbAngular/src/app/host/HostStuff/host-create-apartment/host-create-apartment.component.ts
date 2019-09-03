import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HostService } from 'src/app/host.service';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/Classes/Apartment';

@Component({
  selector: 'app-host-create-apartment',
  templateUrl: './host-create-apartment.component.html',
  styleUrls: ['./host-create-apartment.component.css']
})
export class HostCreateApartmentComponent implements OnInit {

  addForm : any;
  apartmentTypes = ['FullApartman','Room'];
  apartment : any;
  amNames = new Array();
  

  constructor(private hostService: HostService , private fb: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.hostService.GetAmenitieNames().subscribe(names => 
      {
        this.amNames = names;
        this.addCheckboxes();

        this.amNames.forEach(element => {
          console.warn(element);
        });
      });


    this.addForm = this.fb.group({
      Type: ["", Validators.required],
      RoomNumber: [,Validators.required],
      GuestNumber: [,Validators.required],
      PricePerNight: [,Validators.required],
      SingUpTime: [,Validators.required],
      SingOutTime: [,Validators.required],
  
      Latitude: [,Validators.required],
      Longitude: [,Validators.required],
      Streat: [,Validators.required],
      StreatNumber: [,Validators.required],
      Settlement: [,Validators.required],
      ZipCode: [,Validators.required],
      amNames : new FormArray([])
      
    });
  }

  createApartment()
  {
    this.AddApartmentInfos(this.addForm.value);

    this.hostService.addApartment(this.apartment).subscribe(data=>{
      alert("Succsesfuly added apartment");
    });
  }

  AddApartmentInfos(element : any)
  {
     this.apartment = new Apartment();
        this.apartment.ID = element.ID;
        this.apartment.Type = element.Type;
        this.apartment.RoomNumber = element.RoomNumber;
        this.apartment.GuestNumber = element.GuestNumber;
        this.apartment.PricePerNight = element.PricePerNight;
        this.apartment.RentDates = element.RentDates;
        this.apartment.AvailableDates = element.AvailableDates;
        this.apartment.Pictures = element.Pictures;
        this.apartment.SingUpTime = element.SingUpTime;
        this.apartment.SingOutTime = element.SingOutTime;
        this.apartment.Status = element.Status;

        this.apartment.CommentIDs = element.CommentIDs;
        this.apartment.Latitude = element.Latitude;
        this.apartment.Longitude = element.Longitude;
        this.apartment.Streat = element.Streat;
        this.apartment.StreatNumber = element.StreatNumber;
        this.apartment.Settlement = element.Settlement;
        this.apartment.ZipCode = element.ZipCode;
        this.apartment.HostID = element.HostID;
        this.apartment.HostName = element.HostName;
        this.apartment.HostSurname = element.HostSurname;

        this.apartment.Amenities = new Array();
        for(var i=0; i < this.amNames.length; i++)
        {
          if(this.addForm.controls.amNames.value[i] == true)
          {
            this.apartment.Amenities.push(this.amNames[i]);
          }
        }

        
  }

  private addCheckboxes()
  {
      this.amNames.map((o, i) => {
        const control = new FormControl(); 
        (this.addForm.controls.amNames as FormArray).push(control);
      });
  } 

}
