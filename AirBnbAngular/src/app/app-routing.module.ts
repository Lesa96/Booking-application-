import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CreateHostComponent } from './admin/AdminStuff/create-host/create-host.component';
import { ApartmentsComponent } from './admin/AdminStuff/apartments/apartments.component';
import { ReservationsComponent } from './admin/AdminStuff/reservations/reservations.component';
import { UsersComponent } from './admin/AdminStuff/users/users.component';
import { GuestComponent } from './guest/guest.component';
import { HostComponent } from './host/host.component';
import { EditApartmentComponent } from './admin/AdminStuff/apartments/edit-apartment/edit-apartment.component';
import { AmenitieComponent } from './admin/AdminStuff/amenitie/amenitie.component';
import { HostApartmentsComponent } from './host/HostStuff/host-apartments/host-apartments.component';
import { HostCreateApartmentComponent } from './host/HostStuff/host-create-apartment/host-create-apartment.component';
import { HostReservationsComponent } from './host/HostStuff/host-reservations/host-reservations.component';
import { EditHostApartmentComponent } from './host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component';
import { HostRequestsComponent } from './host/HostStuff/host-requests/host-requests.component';
import { GuestApartmentsComponent } from './guest/guest-apartments/guest-apartments.component';
import { GuestReservationsComponent } from './guest/guest-reservations/guest-reservations.component';
import { ApartmentDetailsComponent } from './guest/guest-apartments/apartment-details/apartment-details.component';
import { GuestRequestsComponent } from './guest/guest-requests/guest-requests.component';
import { UploadPictureComponent } from './host/HostStuff/upload-picture/upload-picture.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeApartmentDetailsComponent } from './home-apartment-details/home-apartment-details.component';
import { AddDatesComponent } from './add-dates/add-dates.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LogInComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'admin', 
    component: ApartmentsComponent 
  },
  { 
    path: 'admin/createhost', 
    component: CreateHostComponent 
  },
  { 
    path: 'admin/apartments', 
    component: ApartmentsComponent 
  },
  { 
    path: 'admin/apartments/edit', 
    component: EditApartmentComponent 
  },
  { 
    path: 'admin/reservations', 
    component: ReservationsComponent 
  },
  { 
    path: 'admin/users', 
    component: UsersComponent 
  },
  { 
    path: 'admin/amenities', 
    component: AmenitieComponent 
  },
  { 
    path: 'host', 
    component: HostApartmentsComponent 
  },
  { 
    path: 'host/createapartment', 
    component: HostCreateApartmentComponent 
  },
  { 
    path: 'host/apartments', 
    component: HostApartmentsComponent 
  },
  { 
    path: 'host/reservations', 
    component: HostReservationsComponent 
  },
  { 
    path: 'host/apartments/edit', 
    component: EditHostApartmentComponent 
  },
  { 
    path: 'host/requests', 
    component: HostRequestsComponent 
  },
  { 
    path: 'guest', 
    component: GuestApartmentsComponent
  },
  { 
    path: 'guest/apartments', 
    component: GuestApartmentsComponent
  },
  { 
    path: 'guest/apartments/details', 
    component: ApartmentDetailsComponent
  },
  { 
    path: 'guest/reservations', 
    component: GuestReservationsComponent
  },
  { 
    path: 'guest/requests', 
    component: GuestRequestsComponent
  },
  { 
    path: 'host/apartments/pictures', 
    component: UploadPictureComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'home/details',
    component: HomeApartmentDetailsComponent
  },
  {
    path: 'apartment/dates',
    component: AddDatesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
