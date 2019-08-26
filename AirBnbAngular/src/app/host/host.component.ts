import { Component, OnInit } from '@angular/core';
import {HostService} from '../host.service'
import { Apartment } from '../Classes/Apartment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(private hostService : HostService) { }

  ngOnInit() {
    this.hostService.getHostApartments(3).subscribe(data => {
      var helpApp = data as Observable<Apartment>;
      console.log(helpApp);
    })
  }

}
