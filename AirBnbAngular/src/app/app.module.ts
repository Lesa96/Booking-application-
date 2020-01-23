import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CreateHostComponent } from './admin/AdminStuff/create-host/create-host.component';
import { UsersComponent } from './admin/AdminStuff/users/users.component';
import { ApartmentsComponent } from './admin/AdminStuff/apartments/apartments.component';
import { ReservationsComponent } from './admin/AdminStuff/reservations/reservations.component';
import { LogedUserComponent } from './loged-user/loged-user.component';
import { HostComponent } from './host/host.component';
import { GuestComponent } from './guest/guest.component';
import { EditApartmentComponent } from './admin/AdminStuff/apartments/edit-apartment/edit-apartment.component';
import { AmenitieComponent } from './admin/AdminStuff/amenitie/amenitie.component';
import { HostApartmentsComponent } from './host/HostStuff/host-apartments/host-apartments.component';
import { HostReservationsComponent } from './host/HostStuff/host-reservations/host-reservations.component';
import { HostCreateApartmentComponent } from './host/HostStuff/host-create-apartment/host-create-apartment.component';
import { EditHostApartmentComponent } from './host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component';
import { HostRequestsComponent } from './host/HostStuff/host-requests/host-requests.component';
import { GuestReservationsComponent } from './guest/guest-reservations/guest-reservations.component';
import { GuestApartmentsComponent } from './guest/guest-apartments/guest-apartments.component';
import {ApartmentDetailsComponent} from './guest/guest-apartments/apartment-details/apartment-details.component';
import { GuestRequestsComponent } from './guest/guest-requests/guest-requests.component';
import { UploadPictureComponent } from './host/HostStuff/upload-picture/upload-picture.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeApartmentDetailsComponent } from './home-apartment-details/home-apartment-details.component';
import { AddDatesComponent } from './add-dates/add-dates.component';
import { HolidaysComponent } from './admin/AdminStuff/holidays/holidays.component'



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    CreateHostComponent,
    UsersComponent,
    ApartmentsComponent,
    ReservationsComponent,
    LogedUserComponent,
    HostComponent,
    GuestComponent,
    EditApartmentComponent,
    AmenitieComponent,
    HostApartmentsComponent,
    HostReservationsComponent,
    HostCreateApartmentComponent,
    EditHostApartmentComponent,
    HostRequestsComponent,
    GuestReservationsComponent,
    GuestApartmentsComponent,
    ApartmentDetailsComponent,
    GuestRequestsComponent,
    UploadPictureComponent,
    ProfileComponent,
    HomeApartmentDetailsComponent,
    AddDatesComponent,
    HolidaysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
