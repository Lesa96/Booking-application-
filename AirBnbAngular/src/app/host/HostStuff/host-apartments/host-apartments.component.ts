import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/host.service';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/Classes/Apartment';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-host-apartments',
  templateUrl: './host-apartments.component.html',
  styleUrls: ['./host-apartments.component.css']
})
export class HostApartmentsComponent implements OnInit {

  HostApartmants : any[] = [];

  constructor(private hostService : HostService,private fb: FormBuilder, private router: Router,private storageService: StorageService) { }


  ngOnInit() {
    this.hostService.getHostApartments(3).subscribe(data => {
       this.HostApartmants = data as Apartment[];
      console.log(this.HostApartmants);
    })
  }

  editApartment(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog button-a

    var apartment = this.HostApartmants.find(x => x.ID == id);

    this.storageService.setHostApartment(apartment);
    this.router.navigate(['host/apartments/edit']);

  }

}
