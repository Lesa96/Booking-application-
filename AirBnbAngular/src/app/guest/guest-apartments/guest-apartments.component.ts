import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/Classes/Apartment';
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

  ngOnInit() {
    
    
    this.homeService.getActiveApartments().subscribe(data=> {
      this.ActiveApartments = data as  Apartment[];
      console.log(this.ActiveApartments);
      
    }); 
  }

  moreDetails(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    

    var apartment = this.ActiveApartments.find(x => x.ID == id);

    this.storageService.setGuestApartment(apartment);
    this.router.navigate(['guest/apartments/details']);
  }

}
