import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.LogInUri = "http://localhost:8080/api/Users/";
    }
    TryLog(username, password) {
        return this.http.get(this.LogInUri + "Login");
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map