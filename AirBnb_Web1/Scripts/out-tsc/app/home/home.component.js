import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HomeService } from '../home.service';
let HomeComponent = class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
        this.homeService.getActiveApartments(); //doesnt do shit now
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [HomeService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map