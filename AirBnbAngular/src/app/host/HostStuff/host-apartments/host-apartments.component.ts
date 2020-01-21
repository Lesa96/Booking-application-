import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/host.service';
import { Observable } from 'rxjs';
import { Apartment, SearchApartment } from 'src/app/Classes/Apartment';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-host-apartments',
  templateUrl: './host-apartments.component.html',
  styleUrls: ['./host-apartments.component.css']
})
export class HostApartmentsComponent implements OnInit {

  HostApartmants : any[] = [];
  FiltredApartments : any[] = [];
  apartmentPictures : any;

  ApartmentType = ["","FullApartman" , "Room"];
  ApartmentStatus = ["" , "Active", "NotActive"];
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
    apartmentStatus: [],
    
  });

  constructor(private _sanitizer: DomSanitizer , private hostService : HostService,private fb: FormBuilder, private router: Router,private storageService: StorageService, private homeService: HomeService) { }


  ngOnInit() {
     this.hostService.getHostApartments(localStorage.ID).subscribe(data => {
        this.HostApartmants = data as Apartment[];
        this.FiltredApartments = data as Apartment[]; //
        console.warn(this.FiltredApartments);
        //amenities for search:
        this.homeService.GetAmenitieNames().subscribe(names => 
          {
            this.amNames = names;
            this.addCheckboxes();
    
            this.amNames.forEach(element => {
              console.warn(element);
            });
          });
       
     })

    
  }

  editApartment(id) {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const id = idAttr.nodeValue; //id kliknutog button-a

    var apartment = this.HostApartmants.find(x => x.ID == id);

    this.storageService.setHostApartment(apartment);
    this.router.navigate(['host/apartments/edit']);

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
    searchApartment.ApartmentStatus = this.searchForm.value.apartmentStatus;
    searchApartment.HostID = localStorage.ID;
    //amenities
    searchApartment.Amenities = new Array();
        for(var i=0; i < this.amNames.length; i++)
        {
          if(this.searchForm.controls.amNames.value[i] == true)
          {
            searchApartment.Amenities.push(this.amNames[i]);
          }
        }
    
    this.hostService.GetSearchHostApartments(searchApartment).subscribe(data=>{
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
    this.FiltredApartments = this.HostApartmants;
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
