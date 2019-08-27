import { Injectable } from '@angular/core';
import {Apartment } from '../app/Classes/Apartment'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public ApartmentStorage: Apartment ;

    constructor() {}

    public getApartment(): Apartment  {
        return this.ApartmentStorage;
    }

    public setApartment(app1: Apartment): void {
        this.ApartmentStorage = app1;
    }


}
