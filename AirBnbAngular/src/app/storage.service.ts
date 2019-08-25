import { Injectable } from '@angular/core';
import {Apartment } from '../app/Classes/Apartment'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public ApartmentStorage: Apartment | boolean = false;

    constructor() {}

    public getScope(): Apartment | boolean {
        return this.ApartmentStorage;
    }

    public setScope(app1: any): void {
        this.ApartmentStorage = app1;
    }


}
