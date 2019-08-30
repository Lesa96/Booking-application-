import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Amenitie} from '../../../Classes/Amenitie'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-amenitie',
  templateUrl: './amenitie.component.html',
  styleUrls: ['./amenitie.component.css']
})
export class AmenitieComponent implements OnInit {

  allAmenities : any[] = [];
  constructor(private adminService: AdminService , private fb: FormBuilder,private router: Router) { }

  addForm = this.fb.group({
    Name : ['', Validators.required]
  });

  ngOnInit() {
    this.adminService.GetAllAmenities().subscribe(data=>{ data as Observable<Amenitie>
      console.log(data);
      this.allAmenities = data;
      
    });
  }

  deleteAmenitie(event)
  {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const id = idAttr.nodeValue; //id kliknutog 
    
    this.adminService.DeleteAmenitie(id).subscribe(data=>{
      //brisi sa view-a:
      var comm = this.allAmenities.find(x=> x.Id == id);
      var idx = this.allAmenities.indexOf(comm);
      this.allAmenities.splice(idx,1);
    });
  }

  onSubmit()
  {
    this.adminService.AddAmenitie(this.addForm.value.Name).subscribe(data=>{
      alert("Succsecfuly added!");
      this.ngOnInit();
    });
  }

}
