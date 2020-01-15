import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment, SearchApartment } from 'src/app/Classes/Apartment';
import { HomeService } from 'src/app/home.service';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  constructor(private adminService: AdminService ,private homeService: HomeService, private fb: FormBuilder, private router: Router,private storageService: StorageService) { }

  AllApartments : any[] = [];
  FiltredApartments : any[] = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati
  @Output() idOutput = new EventEmitter<number>();

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

  ngOnInit() {
    
    
    this.adminService.getAllApartments().subscribe(data=> {
     this.AllApartments = data as Apartment[];
     this.FiltredApartments = data as Apartment[]; //
      console.log(this.AllApartments);
      
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

  editApartment(id) {
    // const target = event.target || event.srcElement || event.currentTarget;
    // const idAttr = target.attributes.id;
    // const id = idAttr.nodeValue; //id kliknutog button-a
    console.log(id);

    var apartment = this.AllApartments.find(x => x.ID == id);

    this.storageService.setApartment(apartment);
    this.router.navigate(['/admin/apartments/edit']);

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
    //amenities
    searchApartment.Amenities = new Array();
        for(var i=0; i < this.amNames.length; i++)
        {
          if(this.searchForm.controls.amNames.value[i] == true)
          {
            searchApartment.Amenities.push(this.amNames[i]);
          }
        }
    
    this.adminService.GetSearchApartments(searchApartment).subscribe(data=>{
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
    this.FiltredApartments = this.AllApartments;
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
