import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { RegistUser } from '../Classes/User';
let RegisterComponent = class RegisterComponent {
    constructor(fb, router, registerService) {
        this.fb = fb;
        this.router = router;
        this.registerService = registerService;
        this.genders = ["Male", "Famale"];
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ["", [Validators.required, Validators.minLength(6)]],
            confirmPassword: [, [Validators.required, Validators.minLength(6)]],
            name: ['', Validators.required],
            surname: ['', Validators.required],
            gender: ['', Validators.required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.registUser = new RegistUser(this.registerForm.value.name, this.registerForm.value.surname, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.gender);
        this.registerService.registeUser(this.registUser);
        alert("Account was created");
        console.log(this.registUser);
        this.router.navigate(["login"]);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, RegisterService])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map