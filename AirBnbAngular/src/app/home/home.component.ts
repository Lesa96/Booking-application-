import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {Apartment} from '../Classes/Apartment'
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService ,private router : Router, private fb: FormBuilder) { }

  ActiveApartments : any[] = [];
  FiltredApartments : any[] = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati

  searchForm= this.fb.group({
    settlement: [],
    checkIn: [],
    checkOut: [],
    guestNumber: [],
    minRooms: [],
    maxRooms: [],
    maxPrice: [],
    
  });

  ngOnInit() {
    
    
    this.homeService.getActiveApartments().subscribe(data=> {
      var helpApp = data as Observable<Apartment>;
      console.log(helpApp);
      helpApp.forEach(element => {
        this.AddApartmentInfos(element);
        });
    }); 
  }

  moreDetails(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue; //id kliknutog button-a

    console.log(value); // id
  }

  AddApartmentInfos(element : any)
  {
    var apartment = new Apartment();
        apartment.ID = element.ID;
        apartment.Type = element.Type;
        apartment.RoomNumber = element.RoomNumber;
        apartment.GuestNumber = element.GuestNumber;
        apartment.PricePerNight = element.PricePerNight;
        apartment.RentDates = element.RentDates;
        apartment.AvailableDates = element.AvailableDates;
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

        this.ActiveApartments.push(apartment);
  }

  onSearch()
  {
    console.log(this.searchForm.value);
  }

  logIn()
  {
    this.router.navigate(["login"]);
  }

}
