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
      this.ActiveApartments = data as Apartment[];
      this.FiltredApartments = data as Apartment[];

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
      this.FiltredApartments = data as Apartment[]; 
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

  sortLow()
  {
    this.FiltredApartments.sort((a,b) => a.PricePerNight - b.PricePerNight);
  }

  sortHigh()
  {
    this.FiltredApartments.sort((a,b) => b.PricePerNight - a.PricePerNight);
  }

 

}
