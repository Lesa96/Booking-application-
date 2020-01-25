import { Injectable } from '@angular/core';
import {Apartment } from '../app/Classes/Apartment'
import { MarkerInfo } from './Classes/MarkerInfo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public ApartmentStorage: Apartment ;
  public HostApartmentStorage: Apartment ;
  public GuestApartmentStorage: Apartment ;
  public apartmentID: number ;
  public reservationID: number ;
  public location : MarkerInfo;

    constructor() {}

    public getApartment(): Apartment  {
        return this.ApartmentStorage;
    }

    public setApartment(app1: Apartment): void {
        this.ApartmentStorage = app1;
    }

    public getHostApartment(): Apartment  {
      return this.HostApartmentStorage;
  }

  public setHostApartment(app1: Apartment): void {
      this.HostApartmentStorage = app1;
  }

  public getGuestApartment(): Apartment  {
    return this.GuestApartmentStorage;
}

public setGuestApartment(app1: Apartment): void {
    this.GuestApartmentStorage = app1;
}

public getApartmentID(): number  {
  return this.apartmentID;
}

public setApartmentID(app1: number): void {
  this.apartmentID = app1;
}

public getReservationID(): number  {
  return this.reservationID;
}

public setReservationID(app1: number): void {
  this.reservationID = app1;
}

public getLocation(): MarkerInfo  {
  return this.location;
}

public setLocation(app1: MarkerInfo): void {
  this.location = app1;
}

public setLocationNull(): void {
  this.location = null;
}


}
