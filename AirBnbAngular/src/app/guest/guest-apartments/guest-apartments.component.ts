import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Apartment, SearchApartment } from 'src/app/Classes/Apartment';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-guest-apartments',
  templateUrl: './guest-apartments.component.html',
  styleUrls: ['./guest-apartments.component.css']
})
export class GuestApartmentsComponent implements OnInit {

  constructor(private homeService: HomeService ,private router : Router, private fb: FormBuilder , private storageService : StorageService) { }

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
      this.ActiveApartments = data as  Apartment[];
      this.FiltredApartments = data as  Apartment[];
      
      //amenities for search:
      this.homeService.GetAmenitieNames().subscribe(names => 
        {
          this.amNames = names;
          this.addCheckboxes();
  
          this.amNames.forEach(element => {
           // console.warn(element);
          });
        });

    }); 
  }

  moreDetails(id) {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const id = idAttr.nodeValue; //id kliknutog button-a

    

    var apartment = this.ActiveApartments.find(x => x.ID == id);

    this.storageService.setGuestApartment(apartment);
    this.router.navigate(['guest/apartments/details']);
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
