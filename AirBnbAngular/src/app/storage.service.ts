import { Injectable } from '@angular/core';
import {Apartment } from '../app/Classes/Apartment'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public ApartmentStorage: Apartment ;
  public HostApartmentStorage: Apartment ;
  public GuestApartmentStorage: Apartment ;

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


}
