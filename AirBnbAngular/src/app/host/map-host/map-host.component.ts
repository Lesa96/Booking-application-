import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Classes/Apartment';
import { MarkerInfo } from 'src/app/Classes/MarkerInfo';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-map-host',
  templateUrl: './map-host.component.html',
  styleUrls: ['./map-host.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})
export class MapHostComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  marketInfo = new MarkerInfo();
  apartment : Apartment;
  locationMarkUri : string;

  ngOnInit() {      
    this.marketInfo.IconUrl = "assets/map-marker-icon.png";

  }

  placeMarker($event){       
    this.marketInfo.Latitude = $event.coords.lat;
    this.marketInfo.Longitude = $event.coords.lng;
    //console.log(this.marketInfo.Latitude + " " + this.marketInfo.Longitude);
    this.storageService.setLocation(this.marketInfo);
  }

}
