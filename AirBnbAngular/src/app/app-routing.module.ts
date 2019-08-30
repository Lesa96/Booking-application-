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
    component: AdminComponent 
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
    path: 'guest', 
    component: GuestComponent 
  },
  { 
    path: 'host', 
    component: HostComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
