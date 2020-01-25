import { Component, OnInit } from '@angular/core';
import {MarkerInfo} from 'src/app/Classes/MarkerInfo';
import {StorageService} from 'src/app/storage.service';
import { Apartment } from '../Classes/Apartment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})
export class MapComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  marketInfo = new MarkerInfo();
  apartment : Apartment;

  ngOnInit() {
     if(localStorage.Role == "Host")
       this.apartment = this.storageService.getHostApartment();
     else 
       this.apartment = this.storageService.getGuestApartment();
    
    console.warn(this.apartment);
    console.warn(localStorage.Role);

    this.marketInfo.Latitude = this.apartment.Latitude;
    this.marketInfo.Longitude = this.apartment.Longitude;
    this.marketInfo.Settlement = this.apartment.Settlement;
    this.marketInfo.Streat = this.apartment.Streat;
    this.marketInfo.StreatNumber = this.apartment.StreatNumber;
    this.marketInfo.ZipCode = this.apartment.ZipCode;
    this.marketInfo.IconUrl = "assets/map-marker-icon.png";
    
    console.warn(this.marketInfo);
    //this.marketInfo.Link = 

  }

}
