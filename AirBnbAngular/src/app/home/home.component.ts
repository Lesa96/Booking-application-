import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {Apartment, SearchApartment} from '../Classes/Apartment'
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private storageService : StorageService, private homeService: HomeService ,private router : Router, private fb: FormBuilder) { }

  ActiveApartments : any[] = [];
  FiltredApartments : any[] = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati

  ApartmentType = ["","FullApartman" , "Room"];
  amNames = new Array();


  searchForm= this.fb.group({
    settlement: [],
    checkIn: [],
    checkOut: [],
    guestNumber: [],
    minRooms: [],
    maxRooms: [],
    maxPrice: [],
    apartmentType: [],
    amNames: new FormArray([]),
    
  });

  ngOnInit() {
  
    this.homeService.getActiveApartments().subscribe(data=> {
      var helpApp = data as Observable<Apartment>;
      console.log(helpApp);
      helpApp.forEach(element => {
        this.AddApartmentInfos(element, this.ActiveApartments);
        this.AddApartmentInfos(element, this.FiltredApartments);
        });


        //amenities for search:
        this.homeService.GetAmenitieNames().subscribe(names => 
          {
            this.amNames = names;
            this.addCheckboxes();
    
            this.amNames.forEach(element => {
              console.warn(element);
            });
          });
    }); 
  }

  moreDetails(id) {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const value = idAttr.nodeValue; //id kliknutog button-a

    console.log(id); // id
    var apartment = this.ActiveApartments.find(x => x.ID == id);

    this.storageService.setGuestApartment(apartment);
    this.router.navigate(['home/details']);
  }

  AddApartmentInfos(element : any, App : any)
  {
    var apartment = new Apartment();
        apartment.ID = element.ID;
        apartment.Type = element.Type;
        apartment.RoomNumber = element.RoomNumber;
        apartment.GuestNumber = element.GuestNumber;
        apartment.PricePerNight = element.PricePerNight;
        apartment.Pictures = element.Pictures;
        apartment.SingUpTime = element.SingUpTime;
        apartment.SingOutTime = element.SingOutTime;
        apartment.Status = element.Status;

        apartment.CommentIDs = element.CommentIDs;
        apartment.Latitude = element.Latitude;
        apartment.Longitude = element.Longitude;
        apartment.Streat = element.Streat;
        apartment.StreatNumber = element.StreatNumber;
        apartment.Settlement = element.Settlement;
        apartment.ZipCode = element.ZipCode;
        apartment.HostID = element.HostID;
        apartment.HostName = element.HostName;
        apartment.HostSurname = element.HostSurname;

        App.push(apartment);
  }

  onSearch()
  {

    var searchApartment = new SearchApartment();
    searchApartment.CheckIn = this.searchForm.value.checkIn;
    searchApartment.CheckOut = this.searchForm.value.checkOut;
    searchApartment.GuestNumber = this.searchForm.value.guestNumber;
    searchApartment.MaxPrice = this.searchForm.value.maxPrice;
    searchApartment.MaxRooms = this.searchForm.value.maxRooms;
    searchApartment.MinRooms = this.searchForm.value.minRooms;
    searchApartment.Settlement = this.searchForm.value.settlement;
    searchApartment.ApartmentType = this.searchForm.value.apartmentType;
    //amenities
    searchApartment.Amenities = new Array();
        for(var i=0; i < this.amNames.length; i++)
        {
          if(this.searchForm.controls.amNames.value[i] == true)
          {
            searchApartment.Amenities.push(this.amNames[i]);
          }
        }
    
    this.homeService.GetSearchApartments(searchApartment).subscribe(data=>{
      var filtredAps = data as Observable<Apartment>;
  //    console.warn(filtredAps);
      this.FiltredApartments = [];
      filtredAps.forEach(element => {
        this.AddApartmentInfos(element, this.FiltredApartments);
        });

    });

  }

  private addCheckboxes()
  {
      this.amNames.map((o, i) => {
        const control = new FormControl(); 
        (this.searchForm.controls.amNames as FormArray).push(control);
      });
  } 

  logIn()
  {
    this.router.navigate(["login"]);
  }

  reset()
  {
    this.FiltredApartments = this.ActiveApartments;
  }

}
