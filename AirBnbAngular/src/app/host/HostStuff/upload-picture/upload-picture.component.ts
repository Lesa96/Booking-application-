import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/app/host.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {

  constructor(private hostService : HostService, private router : Router ,private storageService : StorageService) { }

  url: string;
  selectedFile: File = null;
  apartmantID : number;

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];

      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result as string;
      }
    }
  }

  ngOnInit() {
    this.apartmantID = this.storageService.getApartmentID();
    console.log(this.apartmantID);
  }

  onDone()
  {
    alert("Apartment is added");
    this.router.navigate(['host/apartments']);
    
  }

  onConfirm()
  {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.hostService.uploadDocument(fd, this.apartmantID).subscribe(() => {
      alert("Successful Added image.");

    })
  }

}
