import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {Apartment} from '../Classes/Apartment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ActiveApartments : any[] = [];
  FiltredApartments : any[] = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati

  ngOnInit() {
    
    this.TestData();
    
    this.homeService.getActiveApartments(); //doesnt do shit now
  }

  TestData()
  {
    for (let i = 0; i<5; i++)
    {
      var apartment = new Apartment();
    apartment.Type = "Room";
    apartment.RoomNumber = 2;
    apartment.GuestNumber = 2;
    apartment.PricePerNight = 50;

    this.ActiveApartments.push(apartment);
    }
    var apartment = new Apartment();
    apartment.Type = "Full Apartman";
    apartment.RoomNumber = 4;
    apartment.GuestNumber = 10;

    this.ActiveApartments.push(apartment);
  }

}
