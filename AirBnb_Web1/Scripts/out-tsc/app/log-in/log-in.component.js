import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
let LogInComponent = class LogInComponent {
    constructor(fb, logingService) {
        this.fb = fb;
        this.logingService = logingService;
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.logingService.TryLog("user", "pw").subscribe();
    }
};
LogInComponent = tslib_1.__decorate([
    Component({
        selector: 'app-log-in',
        templateUrl: './log-in.component.html',
        styleUrls: ['./log-in.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService])
], LogInComponent);
export { LogInComponent };
//# sourceMappingURL=log-in.component.js.map