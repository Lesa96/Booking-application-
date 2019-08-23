import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {Apartment} from '../Classes/Apartment'
import { Observable } from 'rxjs';

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
    
    //this.TestData();
    
    this.homeService.getActiveApartments().subscribe(data=> {
      var helpApp = data as number;
      console.log(helpApp);
      // helpApp.forEach(element => {
      //   var apartment = new Apartment();
      //   apartment.ID = element.ID;
      //   apartment.Type = element.Type;
      //   apartment.RoomNumber = element.RoomNumber;
      //   apartment.GuestNumber = element.GuestNumber;
      //   apartment.PricePerNight = element.PricePerNight;

      //   this.ActiveApartments.push(apartment);
      // });
    }); //doesnt do shit now
  }

  moreDetails(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue; //id kliknutog button-a

    console.log(value); // id
  }

  TestData()
  {
    for (let i = 0; i<5; i++)
    {
      var apartment = new Apartment();
      apartment.ID = 2;
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
