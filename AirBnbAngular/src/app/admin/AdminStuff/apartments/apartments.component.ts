import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/Classes/Apartment';
import { HomeService } from 'src/app/home.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  constructor(private homeService: HomeService , private fb: FormBuilder) { }

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
        apartment.HostSurename = element.HostSurename;

        this.ActiveApartments.push(apartment);
  }
}
