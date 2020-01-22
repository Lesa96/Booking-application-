(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-dates/add-dates.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-dates/add-dates.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add rent dates:</h1>\n<div>\n  <form [formGroup]=\"addForm\">\n    <table >\n      <tr>\n        <td>\n          Choose date: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"date\" required>\n        </td>\n        <td>\n          <button (click)=\"onAdd()\" [disabled]=\"addForm.invalid\">Add date</button>\n        </td>\n        <td>\n          <button (click)=\"onDone()\">Done</button>\n        </td>\n      </tr>   \n    </table>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/amenitie/amenitie.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/amenitie/amenitie.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<br><br><br>\n<div>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\" >\n    <table >\n      <tr>\n        <td>\n          Item name: \n        </td>\n        <td>\n            <input type=\"text\" formControlName=\"Name\" required />\n        </td>\n        <td>\n            <button type=\"submit\" [disabled]=\"addForm.invalid\" >Add</button>\n        </td>\n      </tr>\n      \n    </table>\n  </form>\n</div>\n<br><br>\n\n<div>\n\n    <table  class=\"comment-table\">\n      <tr>\n        <td align=\"*\" >\n            <b><i> Amenities :</i> </b>\n        </td>\n      </tr>\n      <tr *ngFor=\"let amenitie of allAmenities\">\n        <td align=\"*\">\n          <p>{{amenitie.Name}}</p>\n         \n        </td>\n        <td>\n            <button id=\"{{amenitie.ID}}\" (click)=\"deleteAmenitie($event)\" >Delete</button>\n        </td>\n        \n      </tr>\n      \n    </table>\n \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/apartments/apartments.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/apartments/apartments.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<br><br><br>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          WHERE: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"settlement\">\n        </td>\n        <td>\n          CHECK-IN: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkIn\">\n        </td>\n        <td>\n          CHECKOUT: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkOut\">\n        </td>\n        <td>\n          GUEST NUMBER: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"guestNumber\" min=\"1\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n         MINIMUM ROOMS: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"minRooms\" min=\"1\">\n        </td>\n        <td>\n          MAXIMUM ROOMS: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxRooms\" min=\"1\">\n         </td>\n         <td>\n          MAXIMUM PRICE: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxPrice\" min=\"1\">\n         </td>\n         <td>\n          TYPE: \n         </td>\n         <td>\n          <select formControlName=\"apartmentType\">\n            <option *ngFor=\"let type of ApartmentType\" >{{type}}</option> \n          </select>\n        </td>       \n      </tr>\n\n      <tr>\n        <td>\n          STATUS: \n         </td>\n         <td>\n          <select formControlName=\"apartmentStatus\">\n            <option *ngFor=\"let status of ApartmentStatus\" >{{status}}</option> \n          </select>\n        </td>  \n\n        <td>\n          Amenities: \n        </td>\n        <td colspan=\"6\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of searchForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}  \n          </label>\n        </td>      \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n<br><br>\n\n<h3>Apartments:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let apartment of FiltredApartments\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Apartment type:</i> {{apartment.Type}} , <i>Number of rooms:</i> {{apartment.RoomNumber}} ,  \n            <i>Guest Number :</i>{{apartment.GuestNumber}}<i>, Price per nigth :</i>{{apartment.PricePerNight}},\n            <i>Settlement :</i>{{apartment.Settlement}}\n\n          </p>           \n        </td>\n        <td align=\"3\">\n            <img src=\"{{apartment.Pictures[0]}}\" alt=\"No pictures available\" height=\"100px\" width=\"150px\"/>\n        </td>\n        <td align=\"1\">\n          <button id=\"{{apartment.ID}}\" (click)=\"editApartment(apartment.ID)\" >Edit Apartment</button>\n        </td>\n        \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button (click) = \"returnBack()\"> < Back</button>\n<div  class=\"login-form\">\n  <form [formGroup]=\"editForm\" >\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Edit apartment</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Type:\n        </td>\n        <td>\n          <select formControlName=\"Type\">\n            <option *ngFor=\"let type of apartmentTypes\" [value]=\"type\">{{type}}</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Room Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"RoomNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Guest Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"GuestNumber\" required >\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Price Per Night:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"PricePerNight\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Up Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingUpTime\" required>          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Out Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingOutTime\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Status:\n        </td>\n        <td>\n          <select formControlName=\"Status\">\n            <option *ngFor=\"let status of apartmentStatus\" [value]=\"status\">{{status}}</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Latitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Latitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Longitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Longitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Streat\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat Number:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"StreatNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Settlement:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Settlement\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Zip Code:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"ZipCode\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Host Name:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"HostName\" readonly required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Host Surname:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"HostSurname\" readonly required>\n        </td>\n    </tr> \n      <tr>\n        <td colspan=\"2\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of editForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}\n            <br>\n          </label>\n        </td>\n      </tr>\n      \n\n      <tr>\n        <td colspan=\"1\" align=\"right\">\n          <button (click)=\"onChange()\" class=\"registerbtn\"  [disabled]=\"editForm.invalid\">Change</button>\n        </td>\n        <td colspan=\"1\" align=\"right\">\n          <button (click)=\"onDelete()\" class=\"deletebtn\"  >Delete</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n\n<div style=\"overflow-x: scroll; height: 600px; width: 90%;\">\n  <table>\n    <tr align=\"center\">\n      <b>Click on the picture to delete it : </b>\n    </tr>\n    <tr>\n      <td *ngFor=\"let picture of apartment.Pictures; let i = index\">\n        <img id=\"{{picture}}\" src=\"{{picture}}\" width=\"500px\" height=\"500px\" (click)=\"deletePicture($event)\" />\n      </td>\n    </tr>\n    <tr colspan=\"*\" align=\"left\">\n      <button (click)=\"addNewPicutres()\">Add new picture</button>\n    </tr>\n  </table>\n</div>\n\n<div>\n  <table *ngFor=\"let comment of apartmentComments\" class=\"comment-table\">\n    <tr>\n      <td align=\"*\">\n        <p><b>{{comment.UserName}}: </b> <i> {{comment.Rate}}*   </i></p>  \n\n        <p class=\"p-table-home\">  {{comment.Text}} </p> \n        <p>Blocked: {{comment.Blocked}} </p>\n        <button id=\"{{comment.Id}}\" (click)=\"deleteComment(comment.Id)\" >Delete comment</button>\n      </td>\n      \n    </tr>\n    \n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/create-host/create-host.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/create-host/create-host.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<br><br>\n\n<div class=\"login-form\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Create host</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Name:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"name\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Surname:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"surname\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Username:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"username\" required >\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Password:\n        </td>\n        <td>\n          <input type=\"password\" formControlName=\"password\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Confirm Password:\n        </td>\n        <td>\n          <input type=\"password\" formControlName=\"confirmPassword\" required>\n          <br />\n          <font *ngIf=\"invalidPass\" color=\"red\" size=\"2\">\n          Passwords must be equal\n          </font> \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Gender:\n        </td>\n        <td>\n          <select formControlName=\"gender\">\n            <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option> \n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\" align=\"right\">\n          <button type=\"submit\" class=\"registerbtn\"  [disabled]=\"registerForm.invalid\">Create host</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/reservations/reservations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/reservations/reservations.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<br><br><br>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          USERNAME: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"guestUsername\">\n        </td>\n        <td>\n          STATUS: \n         </td>\n         <td>\n          <select formControlName=\"reservationStatus\">\n            <option *ngFor=\"let status of ReservationStatus\" >{{status}}</option> \n          </select>\n        </td> \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n<h3>Reservations:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of FiltredReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td>               \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/users/users.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/AdminStuff/users/users.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<br><br><br>\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          Role: \n        </td>\n        <td>\n          <select formControlName=\"Role\">\n              <option *ngFor=\"let role of roles\" [value]=\"role\">{{role}}</option>\n            </select>\n        </td>\n        <td>\n          Gender: \n        </td>\n        <td>\n          <select formControlName=\"Gender\">\n              <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option>\n            </select>\n        </td>\n        <td>\n          Username: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Username\">\n        </td>             \n        \n      <td align=\"2\" >\n        <button type=\"submit\" >Search</button>\n      </td>\n      \n    </tr>\n    </table>\n  </form>\n</div>\n<br><br>\n\n<h3>Users:</h3> \n<button  (click)=\"onReset()\" >Show all</button>\n<br>\n\n<div >\n  <table >\n      <tr *ngFor=\"let user of SearchedUsers\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Name:</i> {{user.Name}} , <i>Surname:</i> {{user.Surname}} ,  \n            <i>Username :</i>{{user.UserName}}<i>, Gender :</i>{{user.Gender}},\n            <i>Role :</i>{{user.Role}},<i>Blocked :</i>{{user.Blocked}}\n\n          </p>           \n        </td>\n        <td align=\"1\">\n          <button id=\"{{user.ID}}\" (click)=\"changeStatus(user.ID)\" >Change Status</button>\n        </td>\n        \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a href=\"admin/createhost\" >Create host </a>\n  <a href=\"admin/apartments\" >Apartments </a>\n  <a href=\"admin/reservations\" >Reservations </a>\n  <a href=\"admin/users\" >Users </a>\n  <a href=\"admin/amenities\" >Amenities </a>\n</nav>\n<app-loged-user></app-loged-user>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-apartments/apartment-details/apartment-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-apartments/apartment-details/apartment-details.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click) = \"returnBack()\"> < Back</button>\n<div  class=\"normal-form\">\n  <form [formGroup]=\"editForm\" >\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Selected apartment:</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Type:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Type\" readonly>           \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Room Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"RoomNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Guest Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"GuestNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Price Per Night:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"PricePerNight\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Up Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingUpTime\" required readonly>          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Out Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingOutTime\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Status:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Status\" readonly>            \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Latitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Latitude\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Longitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Longitude\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Streat\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat Number:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"StreatNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Settlement:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Settlement\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Zip Code:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"ZipCode\" required readonly>\n        </td>\n      </tr>            \n    </table>\n  </form>\n</div>\n<br>\n<!--Pictures-->\n<div style=\"overflow-x: scroll; height: 600px; width: 90%;\">\n    <table>\n      <tr align=\"center\">\n        <b>Apartment pictures : </b>\n      </tr>\n      <tr>\n        <td *ngFor=\"let picture of apartment.Pictures; let i = index\">\n          <img id=\"{{picture}}\" src=\"{{picture}}\" width=\"500px\" height=\"500px\"  />\n        </td>\n      </tr>\n    </table>\n  </div>\n\n<!--Amenities-->\n<div>\n  <table >\n    <tr>\n      <td>\n        Apartment Amenities:\n      </td>\n    </tr>\n    <tr *ngFor=\"let amenitie of amNames\">\n      <td >\n        <b>{{amenitie}}</b> ;  \n      </td>\n    </tr>\n  </table>\n</div>\n<br>\n<!--Map with location-->\n\n<h4>Comments:</h4>\n<!--Comments-->\n<div>\n  <table *ngFor=\"let comment of apartmentComments\" class=\"comment-table\">\n    <tr>\n      <td align=\"*\">\n        <p><b>{{comment.UserName}}: </b> <i> {{comment.Rate}}*   </i></p>  \n        <p class=\"p-table-home\">  {{comment.Text}} </p> \n      </td>      \n    </tr>\n    \n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-apartments/guest-apartments.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-apartments/guest-apartments.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-guest></app-guest>\n<br><br><br>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          WHERE: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"settlement\">\n        </td>\n        <td>\n          CHECK-IN: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkIn\">\n        </td>\n        <td>\n          CHECKOUT: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkOut\">\n        </td>\n        <td>\n          GUEST NUMBER: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"guestNumber\" min=\"1\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n         MINIMUM ROOMS: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"minRooms\" min=\"1\">\n        </td>\n        <td>\n          MAXIMUM ROOMS: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxRooms\" min=\"1\">\n         </td>\n         <td>\n          MAXIMUM PRICE: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxPrice\" min=\"1\">\n         </td>\n         <td>\n          TYPE: \n         </td>\n         <td>\n          <select formControlName=\"apartmentType\">\n            <option *ngFor=\"let type of ApartmentType\" >{{type}}</option> \n          </select>\n        </td>       \n      </tr>\n\n      <tr>\n        <td>\n          Amenities: \n        </td>\n        <td colspan=\"6\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of searchForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}  \n          </label>\n        </td>      \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n<br><br>\n<!--Active-->\n<h3>Active Apartments:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let apartment of FiltredApartments\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Apartment type:</i> {{apartment.Type}} , <i>Number of rooms:</i> {{apartment.RoomNumber}} ,  \n            <i>Guest Number :</i>{{apartment.GuestNumber}}<i>, Price per nigth :</i>{{apartment.PricePerNight}},\n            <i>Settlement :</i>{{apartment.Settlement}}\n\n          </p>           \n        </td>\n        <td align=\"3\">\n            <img src=\"{{apartment.Pictures[0]}}\" alt=\"No pictures available\" height=\"100px\" width=\"150px\"/>\n        </td>\n        <td align=\"1\">\n          <button id=\"{{apartment.ID}}\" (click)=\"moreDetails(apartment.ID)\" >More details</button>\n        </td>\n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-requests/guest-requests.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-requests/guest-requests.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-guest></app-guest>\n<br>\n<h3>Reservation Requests:</h3>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of createdReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td> \n        <td align=\"1\">            \n            <button id=\"{{reservation.ID}}\"  (click)=\"CancelRequest($event)\">Cancel</button>\n          </td>                \n      </tr>\n  </table>\n  \n</div>\n\n<br>\n\n<h3>Accepted Reservations:</h3>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of acceptedReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td>\n        <td>\n          <button id=\"{{reservation.ID}}\" (click)=\"CancelRequest($event)\">Cancel</button>\n        </td>               \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest-reservations/guest-reservations.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest-reservations/guest-reservations.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-guest></app-guest>\n<br>\n<h3>Reservations:</h3>\n<div>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of FiltredReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n             Host : {{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td>               \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guest/guest.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guest/guest.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loged-user></app-loged-user>\n<a href=\"guest/apartments\" >Apartments </a>\n<a href=\"guest/reservations\" >Reservations </a>\n<a href=\"guest/requests\">Requests</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-apartment-details/home-apartment-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-apartment-details/home-apartment-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click) = \"returnBack()\"> < Back</button>\n<div  class=\"normal-form\">\n  <form [formGroup]=\"editForm\" >\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Selected apartment:</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Type:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Type\" readonly>           \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Room Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"RoomNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Guest Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"GuestNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Price Per Night:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"PricePerNight\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Up Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingUpTime\" required readonly>          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Out Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingOutTime\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Status:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Status\" readonly>            \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Latitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Latitude\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Longitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Longitude\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Streat\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat Number:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"StreatNumber\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Settlement:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Settlement\" required readonly>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Zip Code:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"ZipCode\" required readonly>\n        </td>\n      </tr>            \n    </table>\n  </form>\n</div>\n<br>\n<!--Pictures-->\n<div style=\"overflow-x: scroll; height: 600px; width: 90%;\" >\n    <table>\n      <tr align=\"center\">\n        <b>Apartment pictures : </b>\n      </tr>\n      <tr>\n        <td *ngFor=\"let picture of apartment.Pictures; let i = index\">\n          <img id=\"{{picture}}\" src=\"{{picture}}\" width=\"500px\" height=\"500px\"  />\n        </td>\n      </tr>\n    </table>\n  </div>\n\n<!--Amenities-->\n<div>\n  <table >\n    <tr>\n      <td>\n        Apartment Amenities:\n      </td>\n    </tr>\n    <tr *ngFor=\"let amenitie of amNames\">\n      <td >\n        <b>{{amenitie}}</b> ;  \n      </td>\n    </tr>\n  </table>\n</div>\n<br>\n<!--Map with location-->\n\n<h4>Comments:</h4>\n<!--Comments-->\n<div>\n  <table *ngFor=\"let comment of apartmentComments\" class=\"comment-table\">\n    <tr>\n      <td align=\"*\">\n        <p><b>{{comment.UserName}}: </b> <i> {{comment.Rate}}*   </i></p>  \n        <p class=\"p-table-home\">  {{comment.Text}} </p> \n      </td>      \n    </tr>\n    \n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"login-button\" (click)=\"logIn()\">Log in</button>\n</div>\n\n<h1>Airbnb home page</h1>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          WHERE: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"settlement\">\n        </td>\n        <td>\n          CHECK-IN: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkIn\">\n        </td>\n        <td>\n          CHECKOUT: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkOut\">\n        </td>\n        <td>\n          GUEST NUMBER: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"guestNumber\" min=\"1\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n         MINIMUM ROOMS: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"minRooms\" min=\"1\">\n        </td>\n        <td>\n          MAXIMUM ROOMS: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxRooms\" min=\"1\">\n         </td>\n         <td>\n          MAXIMUM PRICE: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxPrice\" min=\"1\">\n         </td>\n         <td>\n          TYPE: \n         </td>\n         <td>\n          <select formControlName=\"apartmentType\">\n            <option *ngFor=\"let type of ApartmentType\" >{{type}}</option> \n          </select>\n        </td>       \n      </tr>\n\n      <tr>\n        <td>\n          Amenities: \n        </td>\n        <td colspan=\"6\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of searchForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}  \n          </label>\n        </td>      \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n<br><br>\n<!--Active-->\n<h3>Active Apartments:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let apartment of FiltredApartments\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Apartment type:</i> {{apartment.Type}} , <i>Number of rooms:</i> {{apartment.RoomNumber}} ,  \n            <i>Guest Number :</i>{{apartment.GuestNumber}}<i>, Price per nigth :</i>{{apartment.PricePerNight}},\n            <i>Settlement :</i>{{apartment.Settlement}}\n\n          </p>           \n        </td>\n        <td align=\"3\">\n            <img src=\"{{apartment.Pictures[0]}}\" alt=\"No pictures available\" height=\"100px\" width=\"150px\"/>\n        </td>\n        <td align=\"1\">\n          <button id=\"{{apartment.ID}}\" (click)=\"moreDetails(apartment.ID)\" >More details</button>\n        </td>\n      </tr>\n  </table>\n  \n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click) = \"returnBack()\"> < Back</button>\n<div  class=\"login-form\">\n  <form [formGroup]=\"editForm\" >\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Edit apartment</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Type:\n        </td>\n        <td>\n          <select formControlName=\"Type\">\n            <option *ngFor=\"let type of apartmentTypes\" [value]=\"type\">{{type}}</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Room Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"RoomNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Guest Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"GuestNumber\" required >\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Price Per Night:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"PricePerNight\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Up Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingUpTime\" required>          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Out Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingOutTime\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Status:\n        </td>\n        <td>\n          <select formControlName=\"Status\">\n            <option *ngFor=\"let status of apartmentStatus\" [value]=\"status\">{{status}}</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Latitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Latitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Longitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Longitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Streat\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat Number:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"StreatNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Settlement:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Settlement\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Zip Code:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"ZipCode\" required>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of editForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}\n            <br>\n          </label>\n        </td>\n      </tr>\n      \n\n      <tr>\n        <td colspan=\"1\" align=\"right\">\n          <button (click)=\"onChange()\" class=\"registerbtn\"  [disabled]=\"editForm.invalid\">Change</button>\n        </td>\n        <td colspan=\"1\" align=\"right\">\n          <button (click)=\"onDelete()\" class=\"deletebtn\"  >Delete</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n\n<div style=\"overflow-x: scroll; height: 600px; width: 90%;\">\n  <table>\n    <tr align=\"center\">\n      <b>Click on the picture to delete it : </b>\n    </tr>\n    <tr>\n      <td *ngFor=\"let picture of apartment.Pictures; let i = index\">\n        <img id=\"{{picture}}\" src=\"{{picture}}\" width=\"500px\" height=\"500px\" (click)=\"deletePicture($event)\" />\n      </td>\n    </tr>\n    <tr colspan=\"*\" align=\"left\">\n      <button (click)=\"addNewPicutres()\">Add new picture</button>\n    </tr>\n  </table>\n</div>\n\n<div>\n  <table *ngFor=\"let comment of apartmentComments\" class=\"comment-table\">\n    <tr>\n      <td align=\"*\">\n        <p><b>{{comment.UserName}}: </b> <i> {{comment.Rate}}*   </i></p>  \n\n        <p class=\"p-table-home\">  {{comment.Text}} </p> \n        <p>Blocked: {{comment.Blocked}} </p>\n        <button id=\"{{comment.Id}}\" (click)=\"chageComment($event)\" >Change status</button>\n      </td>\n      \n    </tr>\n    \n  </table>\n</div>\n\n<!--Rent Dates-->\n<br>\n<h4>Rent Dates: </h4>\n\n<form [formGroup]=\"rentDateForm\" (ngSubmit)=\"addRentDate()\">\n  <table>\n    <tr>\n      <td align=\"2\">\n        <input type=\"date\" formControlName=\"rentDate\">\n      </td>\n      <td >\n        <button type=\"submit\" >Add Date </button>\n      </td>\n    </tr>\n  </table>\n</form>\n\n<div>\n<table>\n  <tr *ngFor=\"let rentDate of apartmentDates\">\n    <td align=\"2\">\n      <p><i> {{rentDate.CheckedDate.split('T')[0]}}; </i></p>\n    </td>\n    <td >\n      <button id=\"{{rentDate.ID}}\" (click)=\"deleteRentDate(rentDate.ID)\">Delete</button>\n    </td>\n  </tr>\n</table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-apartments/host-apartments.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/host-apartments/host-apartments.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-host></app-host>\n<br><br><br>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          WHERE: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"settlement\">\n        </td>\n        <td>\n          CHECK-IN: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkIn\">\n        </td>\n        <td>\n          CHECKOUT: \n        </td>\n        <td>\n          <input type=\"date\" formControlName=\"checkOut\">\n        </td>\n        <td>\n          GUEST NUMBER: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"guestNumber\" min=\"1\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n         MINIMUM ROOMS: \n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"minRooms\" min=\"1\">\n        </td>\n        <td>\n          MAXIMUM ROOMS: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxRooms\" min=\"1\">\n         </td>\n         <td>\n          MAXIMUM PRICE: \n         </td>\n         <td>\n           <input type=\"number\" formControlName=\"maxPrice\" min=\"1\">\n         </td>\n         <td>\n          TYPE: \n         </td>\n         <td>\n          <select formControlName=\"apartmentType\">\n            <option *ngFor=\"let type of ApartmentType\" >{{type}}</option> \n          </select>\n        </td>       \n      </tr>\n\n      <tr>\n        <td>\n          STATUS: \n         </td>\n         <td>\n          <select formControlName=\"apartmentStatus\">\n            <option *ngFor=\"let status of ApartmentStatus\" >{{status}}</option> \n          </select>\n        </td>  \n\n        <td>\n          Amenities: \n        </td>\n        <td colspan=\"6\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of searchForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}  \n          </label>\n        </td>      \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n<br><br>\n\n<h3>Apartments:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let apartment of FiltredApartments\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Apartment type:</i> {{apartment.Type}} , <i>Number of rooms:</i> {{apartment.RoomNumber}} ,  \n            <i>Guest Number :</i>{{apartment.GuestNumber}}<i>, Price per nigth :</i>{{apartment.PricePerNight}},\n            <i>Settlement :</i>{{apartment.Settlement}}\n\n          </p>           \n        </td>\n        <td align=\"3\">\n          <ng-container *ngIf=\"apartment.Pictures \">\n            <img src=\"{{apartment.Pictures[0]}}\" alt=\"No pictures available\" height=\"100px\" width=\"100px\"/>\n          </ng-container>\n            \n        </td>\n        <td align=\"1\">\n          <button id=\"{{apartment.ID}}\" (click)=\"editApartment(apartment.ID)\" >Edit Apartment</button>\n        </td>\n        \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-host></app-host>\n<br>\n\n<div  class=\"login-form\">\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"createApartment()\">\n    <table>\n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <h2>Add apartment</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Type:\n        </td>\n        <td>\n          <select formControlName=\"Type\">\n            <option *ngFor=\"let type of apartmentTypes\" [value]=\"type\">{{type}}</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Room Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"RoomNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Guest Number:\n        </td>\n        <td>\n          <input type=\"number\" min=1 formControlName=\"GuestNumber\" required >\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Price Per Night:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"PricePerNight\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Up Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingUpTime\" required>          \n        </td>\n      </tr>\n      <tr>\n        <td>\n          Sing Out Time:\n        </td>\n        <td>\n          <input type=\"time\" formControlName=\"SingOutTime\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Latitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Latitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Longitude:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"Longitude\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Streat\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Streat Number:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"StreatNumber\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Settlement:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"Settlement\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Zip Code:\n        </td>\n        <td>\n          <input type=\"number\" formControlName=\"ZipCode\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Amenities:\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <label formArrayName=\"amNames\" *ngFor=\"let name of addForm.controls.amNames.controls; let i = index\">\n            <input type=\"checkbox\" [formControlName]=\"i\">\n            {{amNames[i]}}\n            <br>\n          </label>\n        </td>\n      </tr>\n      \n      <tr>\n        <td colspan=\"2\" align=\"center\">\n          <button type=\"submit\" class=\"registerbtn\"  [disabled]=\"addForm.invalid\">Add apartment</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-requests/host-requests.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/host-requests/host-requests.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-host></app-host>\n<br>\n\n<h3>Reservation Requests:</h3>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of createdReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td> \n        <td align=\"1\">\n          <button id=\"{{reservation.ID}}\"  (click)=\"acceptRequest($event)\" >Accept</button>         \n        </td>\n        <td align=\"1\">            \n            <button id=\"{{reservation.ID}}\"  (click)=\"rejectRequest($event)\">Reject</button>\n          </td>                \n      </tr>\n  </table>\n  \n</div>\n\n<br>\n\n<h3>Accepted Reservations:</h3>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of acceptedReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td>\n        <td>\n          <button id=\"{{reservation.ID}}\" (click)=\"rejectRequest($event)\">Reject</button>\n        </td>               \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-reservations/host-reservations.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/host-reservations/host-reservations.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-host></app-host>\n<br><br><br>\n\n<!--Search-->\n<div>\n  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n    <table>\n      <tr>\n        <td>\n          USERNAME: \n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"guestUsername\">\n        </td>\n        <td>\n          STATUS: \n         </td>\n         <td>\n          <select formControlName=\"reservationStatus\">\n            <option *ngFor=\"let status of ReservationStatus\" >{{status}}</option> \n          </select>\n        </td> \n        <td align=\"2\" >\n          <button type=\"submit\" >Search</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n\n<h3>Reservations:</h3>\n<div>\n  <button (click)=\"reset()\">Show all</button>\n  <button (click)=\"sortLow()\">Sort by the lowest price</button>\n  <button (click)=\"sortHigh()\">Sort by the highest price</button>\n</div>\n\n<div >\n  <table >\n      <tr *ngFor=\"let reservation of FiltredReservations\">\n        <td align=\"1\">\n          <p class=\"p-table-home\"> <i>Stauts: </i> {{reservation.Stauts}} , <i>Sing Up Date: </i> {{reservation.SingUpDate}} ,  \n            <i>Number Of Nights :</i>{{reservation.NumberOfNights}}<i>, Total Price :</i>{{reservation.TotalPrice}},\n            <i>Guest : </i>{{reservation.GuestUserName}},<i>Host : </i>{{reservation.HostUserName}}\n            <br>\n            <b>Apartment : </b>\n            <br>\n            {{reservation.ApartmentStreat}} {{reservation.ApartmentStreatNumber}},\n            {{reservation.ApartmentSettlement}} {{reservation.ApartmentZipCode}}\n\n          </p>           \n        </td>               \n      </tr>\n  </table>\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/upload-picture/upload-picture.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/HostStuff/upload-picture/upload-picture.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<table>\n  <tr>\n    <td colspan=\"2\" align=\"center\">\n      <h2>Please select document image</h2>\n    </td>\n  </tr>\n  <tr *ngIf=\"url\">\n    <td colspan=\"2\" align=\"center\">\n      <img [src]=\"url\" height=\"200\">\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <button  (click)=\"onDone()\">Done</button>\n    </td>\n    <td align=\"right\">\n      <input type=\"file\" id=\"selectedFile\"  (change)=\"onSelectFile($event)\" accept=\"image/*\" />\n      &nbsp;\n      <button  (click)=\"onConfirm()\">Confirm</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/host/host.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/host/host.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loged-user></app-loged-user>\n<nav>\n<a href=\"host/createapartment\" >Create Apartment </a>\n  <a href=\"host/apartments\" >Apartments </a>\n  <a href=\"host/reservations\" >Reservations </a>\n  <a href=\"host/requests\" >Requests</a>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/log-in/log-in.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"login-body\" >\n    <div class=\"login-form\">\n     <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\n        <table>\n            <tr>\n                <td colspan=\"2\" align=\"center\">\n                    <h2>Login</h2>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" align=\"center\">\n                    <input type=\"text\" formControlName=\"username\" required placeholder=\"username\">\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" align=\"center\">\n                    <input type=\"password\" formControlName=\"password\" required placeholder=\"password\">\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" align=\"right\">\n                    <button class=\"registerbtn\" type=\"submit\"  [disabled]=\"loginForm.invalid\">Login</button>\n                </td>\n            </tr>\n        </table>\n    </form> \n    <a href=\"register\" class=\"link-login-style\">Create your Account </a>\n</div>\n</body>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loged-user/loged-user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loged-user/loged-user.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n<button class=\"chageProfile-button\" (click)=\"changeProfil()\">Profile</button>\n<button class=\"login-button\" (click)=\"logOut()\">Log out</button>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click) = \"returnBack()\"> < Back</button>\n<div class=\"login-form\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <table>\n        <tr>\n            <td colspan=\"2\" align=\"center\">\n              <h2>Profile</h2>\n            </td>\n          </tr>\n        <tr>\n          <td>\n            Role:\n          </td>\n          <td>\n            <input type=\"text\" formControlName=\"role\" readonly required>\n          </td>\n        </tr>\n      <tr>\n        <td>\n          Name:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"name\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Surname:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"surname\" required>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Gender:\n        </td>\n        <td>\n          <select formControlName=\"gender\">\n              <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option> \n            </select>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Username:\n        </td>\n        <td>\n          <input type=\"text\" formControlName=\"username\" required>\n        </td>\n      </tr>\n      \n        <tr>\n          <td colspan=\"2\" align=\"right\">\n            <button type=\"submit\" class=\"registerbtn\"  [disabled]=\"userForm.invalid\">Change profile</button>\n          </td>\n        </tr>\n    </table>\n  </form>\n</div>\n\n<div class=\"login-form\">\n  <form [formGroup]=\"passForm\" (ngSubmit)=\"onChange()\">\n    <table>\n        <tr>\n            <td colspan=\"2\" align=\"center\">\n              <h2>Change Password</h2>\n            </td>\n          </tr>\n        <tr>\n            <td>\n              New Password:\n            </td>\n            <td>\n              <input type=\"password\" formControlName=\"password\" required>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              Confirm Password:\n            </td>\n            <td>\n              <input type=\"password\" formControlName=\"confirmPassword\" required>\n              <br />\n              <font *ngIf=\"invalidPass\" color=\"red\" size=\"2\">\n              Passwords must be equal\n              </font> \n            </td>\n          </tr>\n          <tr>\n              <td colspan=\"2\" align=\"right\">\n                <button type=\"submit\" class=\"registerbtn\"  [disabled]=\"passForm.invalid\">Change password</button>\n              </td>\n            </tr>\n    </table>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <table>\n    <tr>\n      <td colspan=\"2\" align=\"center\">\n        <h2>Create host</h2>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Name:\n      </td>\n      <td>\n        <input type=\"text\" formControlName=\"name\" required>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Surname:\n      </td>\n      <td>\n        <input type=\"text\" formControlName=\"surname\" required>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Username:\n      </td>\n      <td>\n        <input type=\"text\" formControlName=\"username\" required >\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Password:\n      </td>\n      <td>\n        <input type=\"password\" formControlName=\"password\" required>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Confirm Password:\n      </td>\n      <td>\n        <input type=\"password\" formControlName=\"confirmPassword\" required>\n        <br />\n        <font *ngIf=\"invalidPass\" color=\"red\" size=\"2\">\n        Passwords must be equal\n        </font> \n      </td>\n    </tr>\n    <tr>\n      <td>\n        Gender:\n      </td>\n      <td>\n        <select formControlName=\"gender\">\n          <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{gender}}</option> \n        </select>\n      </td>\n    </tr>\n    <tr>\n      <td colspan=\"2\" align=\"right\">\n        <button type=\"submit\" class=\"registerbtn\"  [disabled]=\"registerForm.invalid\">Create host</button>\n      </td>\n    </tr>\n  </table>\n  <div>\n    <p>Already have an account? <a href=\"login\" class=\"link-login-style\">Sign in</a>.</p>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/Classes/Apartment.ts":
/*!**************************************!*\
  !*** ./src/app/Classes/Apartment.ts ***!
  \**************************************/
/*! exports provided: Apartment, SearchApartment, AddRentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apartment", function() { return Apartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchApartment", function() { return SearchApartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRentDate", function() { return AddRentDate; });
class Apartment {
}
class SearchApartment {
}
class AddRentDate {
}


/***/ }),

/***/ "./src/app/Classes/DateModel.ts":
/*!**************************************!*\
  !*** ./src/app/Classes/DateModel.ts ***!
  \**************************************/
/*! exports provided: DatesModelFirstAdd, DateModelBM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesModelFirstAdd", function() { return DatesModelFirstAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateModelBM", function() { return DateModelBM; });
class DatesModelFirstAdd {
}
class DateModelBM {
}


/***/ }),

/***/ "./src/app/Classes/User.ts":
/*!*********************************!*\
  !*** ./src/app/Classes/User.ts ***!
  \*********************************/
/*! exports provided: User, RegistUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistUser", function() { return RegistUser; });
class User {
}
class RegistUser {
    constructor(name, surname, username, pass, gender) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.pass = pass;
        this.gender = gender;
        this.Name = name;
        this.Surname = surname;
        this.Username = username;
        this.Password = pass;
        this.Gender = gender;
    }
}


/***/ }),

/***/ "./src/app/add-dates/add-dates.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-dates/add-dates.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kYXRlcy9hZGQtZGF0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-dates/add-dates.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-dates/add-dates.component.ts ***!
  \**************************************************/
/*! exports provided: AddDatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDatesComponent", function() { return AddDatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../host.service */ "./src/app/host.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _Classes_DateModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes/DateModel */ "./src/app/Classes/DateModel.ts");







let AddDatesComponent = class AddDatesComponent {
    constructor(hostService, fb, router, storageService) {
        this.hostService = hostService;
        this.fb = fb;
        this.router = router;
        this.storageService = storageService;
    }
    ngOnInit() {
        this.dateModel = new _Classes_DateModel__WEBPACK_IMPORTED_MODULE_6__["DatesModelFirstAdd"]();
        this.dateModel.ApartmanID = this.storageService.getApartmentID();
        this.dateModel.CheckedDates = [];
        this.addForm = this.fb.group({
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onAdd() {
        this.dateModel.CheckedDates.push(this.addForm.value.date);
        alert("Date vas added");
    }
    onDone() {
        this.hostService.addDates(this.dateModel).subscribe(data => {
            this.storageService.setApartmentID(this.dateModel.ApartmanID);
            this.router.navigate(['host/apartments/pictures']);
        });
    }
};
AddDatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-dates',
        template: __webpack_require__(/*! raw-loader!./add-dates.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-dates/add-dates.component.html"),
        styles: [__webpack_require__(/*! ./add-dates.component.css */ "./src/app/add-dates/add-dates.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
], AddDatesComponent);



/***/ }),

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.userUri = "http://localhost:8080/api/Users/";
        this.apartmentUri = "http://localhost:8080/api/Apartment/";
        this.reservationUri = "http://localhost:8080/api/Reservation/";
        this.amenitieUri = "http://localhost:8080/api/Amenitie/";
    }
    SearchUsers(userRole, userGender, username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userRole', userRole).set('userGender', userGender).set('username', username)
        };
        return this.http.get(this.userUri + "SearchUsers", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    getAllUsers() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.get(this.userUri + "GetUsers", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    getAllReservations() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.get(this.reservationUri + "GetAllReservations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    getAllApartments() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.get(this.apartmentUri + "GetAllApartments", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    getCommentsForApartment(apartmentID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmentID', apartmentID)
        };
        return this.http.get(this.apartmentUri + "GetAllCommentsForApartment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    changeApartment(apartment) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.patch(this.apartmentUri + "ChangeApartment", apartment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    changeUserStatus(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.patch(this.userUri + "ChangeUserStatus", id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    deleteApartmentComment(commentId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('commentId', commentId)
        };
        return this.http.delete(this.apartmentUri + "DeleteApartmentComment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
        ;
    }
    deleteApartment(apartmentId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmentId', apartmentId)
        };
        return this.http.delete(this.apartmentUri + "DeleteApartment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
        ;
    }
    CreateHost(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.userUri + "CreateHost", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    GetAllAmenities() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.get(this.amenitieUri + "GetAllAmenities", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in admin service:  " + e.error.Message))));
    }
    DeleteAmenitie(amenitieId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('amenitieId', amenitieId)
        };
        return this.http.delete(this.amenitieUri + "DeleteAmenitie", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in admin service:  " + e.error.Message))));
    }
    AddAmenitie(amenitieName) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('amenitieName', amenitieName)
        };
        return this.http.delete(this.amenitieUri + "AddAmenitie", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in admin service:  " + e.error.Message))));
    }
    GetSearchApartments(apartmentDetails) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.apartmentUri + "GetSearchApartments", apartmentDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in home service:  " + e.error.Message))));
    }
    GetSearchReservations(username, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', username).set('status', status)
        };
        return this.http.get(this.reservationUri + "GetSearchReservations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
};
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AdminService);



/***/ }),

/***/ "./src/app/admin/AdminStuff/amenitie/amenitie.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/AdminStuff/amenitie/amenitie.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvYW1lbml0aWUvYW1lbml0aWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/amenitie/amenitie.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/AdminStuff/amenitie/amenitie.component.ts ***!
  \*****************************************************************/
/*! exports provided: AmenitieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitieComponent", function() { return AmenitieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AmenitieComponent = class AmenitieComponent {
    constructor(adminService, fb, router) {
        this.adminService = adminService;
        this.fb = fb;
        this.router = router;
        this.allAmenities = [];
        this.addForm = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        this.adminService.GetAllAmenities().subscribe(data => {
            data;
            console.log(data);
            this.allAmenities = data;
        });
    }
    deleteAmenitie(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog 
        this.adminService.DeleteAmenitie(id).subscribe(data => {
            //brisi sa view-a:
            var comm = this.allAmenities.find(x => x.Id == id);
            var idx = this.allAmenities.indexOf(comm);
            this.allAmenities.splice(idx, 1);
        });
    }
    onSubmit() {
        this.adminService.AddAmenitie(this.addForm.value.Name).subscribe(data => {
            alert("Succsecfuly added!");
            this.ngOnInit();
        });
    }
};
AmenitieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amenitie',
        template: __webpack_require__(/*! raw-loader!./amenitie.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/amenitie/amenitie.component.html"),
        styles: [__webpack_require__(/*! ./amenitie.component.css */ "./src/app/admin/AdminStuff/amenitie/amenitie.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AmenitieComponent);



/***/ }),

/***/ "./src/app/admin/AdminStuff/apartments/apartments.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/AdminStuff/apartments/apartments.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvYXBhcnRtZW50cy9hcGFydG1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/apartments/apartments.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/AdminStuff/apartments/apartments.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentsComponent", function() { return ApartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var src_app_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home.service */ "./src/app/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");








let ApartmentsComponent = class ApartmentsComponent {
    constructor(adminService, homeService, fb, router, storageService) {
        this.adminService = adminService;
        this.homeService = homeService;
        this.fb = fb;
        this.router = router;
        this.storageService = storageService;
        this.AllApartments = [];
        this.FiltredApartments = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati
        this.idOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ApartmentType = ["", "FullApartman", "Room"];
        this.ApartmentStatus = ["", "Active", "NotActive"];
        this.amNames = new Array();
        this.searchForm = this.fb.group({
            settlement: [],
            checkIn: [],
            checkOut: [],
            guestNumber: [],
            minRooms: [],
            maxRooms: [],
            maxPrice: [],
            apartmentType: [],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            apartmentStatus: [],
        });
    }
    ngOnInit() {
        this.adminService.getAllApartments().subscribe(data => {
            this.AllApartments = data;
            this.FiltredApartments = data; //
            console.log(this.AllApartments);
            //amenities for search:
            this.homeService.GetAmenitieNames().subscribe(names => {
                this.amNames = names;
                this.addCheckboxes();
                this.amNames.forEach(element => {
                    console.warn(element);
                });
            });
        });
    }
    editApartment(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const id = idAttr.nodeValue; //id kliknutog button-a
        console.log(id);
        var apartment = this.AllApartments.find(x => x.ID == id);
        this.storageService.setApartment(apartment);
        this.router.navigate(['/admin/apartments/edit']);
    }
    onSearch() {
        var searchApartment = new src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_2__["SearchApartment"]();
        searchApartment.CheckIn = this.searchForm.value.checkIn;
        searchApartment.CheckOut = this.searchForm.value.checkOut;
        searchApartment.GuestNumber = this.searchForm.value.guestNumber;
        searchApartment.MaxPrice = this.searchForm.value.maxPrice;
        searchApartment.MaxRooms = this.searchForm.value.maxRooms;
        searchApartment.MinRooms = this.searchForm.value.minRooms;
        searchApartment.Settlement = this.searchForm.value.settlement;
        searchApartment.ApartmentType = this.searchForm.value.apartmentType;
        searchApartment.ApartmentStatus = this.searchForm.value.apartmentStatus;
        //amenities
        searchApartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.searchForm.controls.amNames.value[i] == true) {
                searchApartment.Amenities.push(this.amNames[i]);
            }
        }
        this.adminService.GetSearchApartments(searchApartment).subscribe(data => {
            this.FiltredApartments = data;
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.searchForm.controls.amNames.push(control);
        });
    }
    reset() {
        this.FiltredApartments = this.AllApartments;
    }
    sortLow() {
        this.FiltredApartments.sort((a, b) => a.PricePerNight - b.PricePerNight);
    }
    sortHigh() {
        this.FiltredApartments.sort((a, b) => b.PricePerNight - a.PricePerNight);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApartmentsComponent.prototype, "idOutput", void 0);
ApartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apartments',
        template: __webpack_require__(/*! raw-loader!./apartments.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/apartments/apartments.component.html"),
        styles: [__webpack_require__(/*! ./apartments.component.css */ "./src/app/admin/AdminStuff/apartments/apartments.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], src_app_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]])
], ApartmentsComponent);



/***/ }),

/***/ "./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvYXBhcnRtZW50cy9lZGl0LWFwYXJ0bWVudC9lZGl0LWFwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApartmentComponent", function() { return EditApartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");







let EditApartmentComponent = class EditApartmentComponent {
    constructor(hostService, adminService, storageService, fb, router) {
        this.hostService = hostService;
        this.adminService = adminService;
        this.storageService = storageService;
        this.fb = fb;
        this.router = router;
        this.appReady = false;
        this.apartmentStatus = ['Active', 'NotActive'];
        this.apartmentTypes = ['FullApartman', 'Room'];
        this.amNames = new Array();
        this.selectedNames = new Array();
    }
    ngOnInit() {
        this.apartment = this.storageService.getApartment();
        this.GetAllAmenitiNames();
        console.warn(this.apartment);
        this.editForm = this.fb.group({
            Type: [this.apartment.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            RoomNumber: [this.apartment.RoomNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            GuestNumber: [this.apartment.GuestNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PricePerNight: [this.apartment.PricePerNight, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SingUpTime: [this.apartment.SingUpTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SingOutTime: [this.apartment.SingOutTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Status: [this.apartment.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Latitude: [this.apartment.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Longitude: [this.apartment.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Streat: [this.apartment.Streat, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StreatNumber: [this.apartment.StreatNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Settlement: [this.apartment.Settlement, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ZipCode: [this.apartment.ZipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            HostName: [this.apartment.HostName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            HostSurname: [this.apartment.HostSurname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        //this.getAllComments();
    }
    onChange() {
        this.apartment.Type = this.editForm.value.Type;
        this.apartment.RoomNumber = this.editForm.value.RoomNumber;
        this.apartment.GuestNumber = this.editForm.value.GuestNumber;
        this.apartment.PricePerNight = this.editForm.value.PricePerNight;
        this.apartment.SingUpTime = this.editForm.value.SingUpTime;
        this.apartment.SingOutTime = this.editForm.value.SingOutTime;
        this.apartment.Status = this.editForm.value.Status;
        this.apartment.Latitude = this.editForm.value.Latitude;
        this.apartment.Longitude = this.editForm.value.Longitude;
        this.apartment.Streat = this.editForm.value.Streat;
        this.apartment.StreatNumber = this.editForm.value.StreatNumber;
        this.apartment.Settlement = this.editForm.value.Settlement;
        this.apartment.ZipCode = this.editForm.value.ZipCode;
        this.apartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.editForm.controls.amNames.value[i] == true) {
                this.apartment.Amenities.push(this.amNames[i]);
            }
        }
        this.hostService.changeApartment(this.apartment).subscribe(data => {
            this.router.navigate(["/admin/apartments"]);
        });
    }
    onDelete() {
        this.hostService.deleteApartment(this.apartment.ID).subscribe(data => {
            this.router.navigate(["/admin/apartments"]);
        });
    }
    getAllComments() {
        this.hostService.getCommentsForApartment(this.apartment.ID).subscribe(data => {
            this.apartmentComments = data;
            console.warn(this.apartmentComments);
        });
    }
    returnBack() {
        this.router.navigate(["/admin/apartments"]);
    }
    GetAllAmenitiNames() {
        this.hostService.GetAmenitieNames().subscribe(names => //all existing amenities
         {
            this.amNames = names;
            console.log(this.amNames);
            this.addCheckboxes();
            this.amNames.forEach(element => {
                console.warn(element);
            });
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.apartment.Amenities.indexOf(o) != -1)); //
            this.editForm.controls.amNames.push(control);
        });
        this.getAllComments();
    }
    deletePicture(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog button-a 
        var picture = id;
        var idx = this.apartment.Pictures.indexOf(picture);
        var sendPicture = picture.split("localhost:8080/")[1];
        console.log(sendPicture);
        this.hostService.DeltePicture(this.apartment.ID, sendPicture).subscribe(data => {
            this.apartment.Pictures.splice(idx, 1);
        });
    }
    addNewPicutres() {
        this.storageService.setApartmentID(this.apartment.ID);
        this.router.navigate(['host/apartments/pictures']);
    }
    deleteComment(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const id = idAttr.nodeValue; //id kliknutog comment-a
        this.adminService.deleteApartmentComment(id).subscribe(data => {
            //brisi sa view-a:
            var comm = this.apartmentComments.find(x => x.Id == id);
            var idx = this.apartmentComments.indexOf(comm);
            this.apartmentComments.splice(idx, 1);
        });
    }
};
EditApartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-apartment',
        template: __webpack_require__(/*! raw-loader!./edit-apartment.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.html"),
        styles: [__webpack_require__(/*! ./edit-apartment.component.css */ "./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_6__["HostService"], src_app_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], EditApartmentComponent);



/***/ }),

/***/ "./src/app/admin/AdminStuff/create-host/create-host.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/AdminStuff/create-host/create-host.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvY3JlYXRlLWhvc3QvY3JlYXRlLWhvc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/create-host/create-host.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/AdminStuff/create-host/create-host.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHostComponent", function() { return CreateHostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Classes_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Classes/User */ "./src/app/Classes/User.ts");
/* harmony import */ var src_app_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin.service */ "./src/app/admin.service.ts");






let CreateHostComponent = class CreateHostComponent {
    constructor(fb, router, adminService) {
        this.fb = fb;
        this.router = router;
        this.adminService = adminService;
        this.invalidPass = false;
        this.genders = ["Male", "Famale"];
        this.registerForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            confirmPassword: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
            this.invalidPass = false;
            this.registUser = new src_app_Classes_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
            this.registUser.Name = this.registerForm.value.name;
            this.registUser.Surname = this.registerForm.value.surname;
            this.registUser.Username = this.registerForm.value.username;
            this.registUser.Password = this.registerForm.value.password;
            this.registUser.Gender = this.registerForm.value.gender;
            this.adminService.CreateHost(this.registUser).subscribe(data => {
                alert("Host was created");
                console.log(this.registUser);
                this.router.navigate(["admin"]);
            });
        }
        else {
            this.invalidPass = true;
        }
    }
};
CreateHostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-host',
        template: __webpack_require__(/*! raw-loader!./create-host.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/create-host/create-host.component.html"),
        styles: [__webpack_require__(/*! ./create-host.component.css */ "./src/app/admin/AdminStuff/create-host/create-host.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
], CreateHostComponent);



/***/ }),

/***/ "./src/app/admin/AdminStuff/reservations/reservations.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/AdminStuff/reservations/reservations.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/reservations/reservations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/AdminStuff/reservations/reservations.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ReservationsComponent = class ReservationsComponent {
    constructor(adminService, fb) {
        this.adminService = adminService;
        this.fb = fb;
        this.AllReservations = [];
        this.FiltredReservations = [];
        this.ReservationStatus = ["", "Created", "Rejected", "Canceled", "Accepted", "Done"];
        this.searchForm = this.fb.group({
            reservationStatus: [],
            guestUsername: [],
        });
    }
    ngOnInit() {
        this.adminService.getAllReservations().subscribe(data => {
            this.AllReservations = data;
            this.FiltredReservations = data;
            console.log(this.AllReservations);
        });
    }
    onSearch() {
        this.adminService.GetSearchReservations(this.searchForm.value.guestUsername, this.searchForm.value.reservationStatus).subscribe(data => {
            this.FiltredReservations = data;
            console.warn(this.FiltredReservations);
        });
    }
    reset() {
        this.FiltredReservations = this.AllReservations;
    }
    sortLow() {
        this.FiltredReservations.sort((a, b) => a.TotalPrice - b.TotalPrice);
    }
    sortHigh() {
        this.FiltredReservations.sort((a, b) => b.TotalPrice - a.TotalPrice);
    }
};
ReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservations',
        template: __webpack_require__(/*! raw-loader!./reservations.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/reservations/reservations.component.html"),
        styles: [__webpack_require__(/*! ./reservations.component.css */ "./src/app/admin/AdminStuff/reservations/reservations.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ReservationsComponent);



/***/ }),

/***/ "./src/app/admin/AdminStuff/users/users.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/AdminStuff/users/users.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL0FkbWluU3R1ZmYvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/AdminStuff/users/users.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/AdminStuff/users/users.component.ts ***!
  \***********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let UsersComponent = class UsersComponent {
    constructor(fb, adminService) {
        this.fb = fb;
        this.adminService = adminService;
        this.roles = ['Host', 'Guest'];
        this.genders = ['Male', 'Famale'];
    }
    ngOnInit() {
        this.adminService.getAllUsers().subscribe(data => {
            this.AllUsers = data;
            this.SearchedUsers = data;
            console.log(this.AllUsers);
        });
        this.searchForm = this.fb.group({
            Role: ["",],
            Gender: ["",],
            Username: ["",]
        });
    }
    changeStatus(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const id = idAttr.nodeValue; //id kliknutog comment-a
        console.log(id);
        this.adminService.changeUserStatus(id).subscribe(data => {
            this.AllUsers.forEach(user => {
                if (user.ID == id) {
                    if (user.Blocked)
                        user.Blocked = false;
                    else
                        user.Blocked = true;
                }
            });
            if (this.AllUsers !== this.SearchedUsers)
                this.SearchedUsers.forEach(user => {
                    if (user.ID == id) {
                        if (user.Blocked)
                            user.Blocked = false;
                        else
                            user.Blocked = true;
                    }
                });
        });
    }
    onSearch() {
        this.adminService.SearchUsers(this.searchForm.value.Role, this.searchForm.value.Gender, this.searchForm.value.Username).subscribe(data => {
            this.SearchedUsers = data;
            console.log(this.SearchedUsers);
        });
    }
    onReset() {
        this.SearchedUsers = this.AllUsers;
    }
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/AdminStuff/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/AdminStuff/users/users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
], UsersComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_AdminStuff_create_host_create_host_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/AdminStuff/create-host/create-host.component */ "./src/app/admin/AdminStuff/create-host/create-host.component.ts");
/* harmony import */ var _admin_AdminStuff_apartments_apartments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/AdminStuff/apartments/apartments.component */ "./src/app/admin/AdminStuff/apartments/apartments.component.ts");
/* harmony import */ var _admin_AdminStuff_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/AdminStuff/reservations/reservations.component */ "./src/app/admin/AdminStuff/reservations/reservations.component.ts");
/* harmony import */ var _admin_AdminStuff_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/AdminStuff/users/users.component */ "./src/app/admin/AdminStuff/users/users.component.ts");
/* harmony import */ var _admin_AdminStuff_apartments_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/AdminStuff/apartments/edit-apartment/edit-apartment.component */ "./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.ts");
/* harmony import */ var _admin_AdminStuff_amenitie_amenitie_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/AdminStuff/amenitie/amenitie.component */ "./src/app/admin/AdminStuff/amenitie/amenitie.component.ts");
/* harmony import */ var _host_HostStuff_host_apartments_host_apartments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./host/HostStuff/host-apartments/host-apartments.component */ "./src/app/host/HostStuff/host-apartments/host-apartments.component.ts");
/* harmony import */ var _host_HostStuff_host_create_apartment_host_create_apartment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./host/HostStuff/host-create-apartment/host-create-apartment.component */ "./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.ts");
/* harmony import */ var _host_HostStuff_host_reservations_host_reservations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./host/HostStuff/host-reservations/host-reservations.component */ "./src/app/host/HostStuff/host-reservations/host-reservations.component.ts");
/* harmony import */ var _host_HostStuff_host_apartments_edit_host_apartment_edit_host_apartment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component */ "./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.ts");
/* harmony import */ var _host_HostStuff_host_requests_host_requests_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./host/HostStuff/host-requests/host-requests.component */ "./src/app/host/HostStuff/host-requests/host-requests.component.ts");
/* harmony import */ var _guest_guest_apartments_guest_apartments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guest/guest-apartments/guest-apartments.component */ "./src/app/guest/guest-apartments/guest-apartments.component.ts");
/* harmony import */ var _guest_guest_reservations_guest_reservations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guest/guest-reservations/guest-reservations.component */ "./src/app/guest/guest-reservations/guest-reservations.component.ts");
/* harmony import */ var _guest_guest_apartments_apartment_details_apartment_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guest/guest-apartments/apartment-details/apartment-details.component */ "./src/app/guest/guest-apartments/apartment-details/apartment-details.component.ts");
/* harmony import */ var _guest_guest_requests_guest_requests_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guest/guest-requests/guest-requests.component */ "./src/app/guest/guest-requests/guest-requests.component.ts");
/* harmony import */ var _host_HostStuff_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./host/HostStuff/upload-picture/upload-picture.component */ "./src/app/host/HostStuff/upload-picture/upload-picture.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_apartment_details_home_apartment_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home-apartment-details/home-apartment-details.component */ "./src/app/home-apartment-details/home-apartment-details.component.ts");
/* harmony import */ var _add_dates_add_dates_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-dates/add-dates.component */ "./src/app/add-dates/add-dates.component.ts");

























const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _admin_AdminStuff_apartments_apartments_component__WEBPACK_IMPORTED_MODULE_7__["ApartmentsComponent"]
    },
    {
        path: 'admin/createhost',
        component: _admin_AdminStuff_create_host_create_host_component__WEBPACK_IMPORTED_MODULE_6__["CreateHostComponent"]
    },
    {
        path: 'admin/apartments',
        component: _admin_AdminStuff_apartments_apartments_component__WEBPACK_IMPORTED_MODULE_7__["ApartmentsComponent"]
    },
    {
        path: 'admin/apartments/edit',
        component: _admin_AdminStuff_apartments_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_10__["EditApartmentComponent"]
    },
    {
        path: 'admin/reservations',
        component: _admin_AdminStuff_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_8__["ReservationsComponent"]
    },
    {
        path: 'admin/users',
        component: _admin_AdminStuff_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]
    },
    {
        path: 'admin/amenities',
        component: _admin_AdminStuff_amenitie_amenitie_component__WEBPACK_IMPORTED_MODULE_11__["AmenitieComponent"]
    },
    {
        path: 'host',
        component: _host_HostStuff_host_apartments_host_apartments_component__WEBPACK_IMPORTED_MODULE_12__["HostApartmentsComponent"]
    },
    {
        path: 'host/createapartment',
        component: _host_HostStuff_host_create_apartment_host_create_apartment_component__WEBPACK_IMPORTED_MODULE_13__["HostCreateApartmentComponent"]
    },
    {
        path: 'host/apartments',
        component: _host_HostStuff_host_apartments_host_apartments_component__WEBPACK_IMPORTED_MODULE_12__["HostApartmentsComponent"]
    },
    {
        path: 'host/reservations',
        component: _host_HostStuff_host_reservations_host_reservations_component__WEBPACK_IMPORTED_MODULE_14__["HostReservationsComponent"]
    },
    {
        path: 'host/apartments/edit',
        component: _host_HostStuff_host_apartments_edit_host_apartment_edit_host_apartment_component__WEBPACK_IMPORTED_MODULE_15__["EditHostApartmentComponent"]
    },
    {
        path: 'host/requests',
        component: _host_HostStuff_host_requests_host_requests_component__WEBPACK_IMPORTED_MODULE_16__["HostRequestsComponent"]
    },
    {
        path: 'guest',
        component: _guest_guest_apartments_guest_apartments_component__WEBPACK_IMPORTED_MODULE_17__["GuestApartmentsComponent"]
    },
    {
        path: 'guest/apartments',
        component: _guest_guest_apartments_guest_apartments_component__WEBPACK_IMPORTED_MODULE_17__["GuestApartmentsComponent"]
    },
    {
        path: 'guest/apartments/details',
        component: _guest_guest_apartments_apartment_details_apartment_details_component__WEBPACK_IMPORTED_MODULE_19__["ApartmentDetailsComponent"]
    },
    {
        path: 'guest/reservations',
        component: _guest_guest_reservations_guest_reservations_component__WEBPACK_IMPORTED_MODULE_18__["GuestReservationsComponent"]
    },
    {
        path: 'guest/requests',
        component: _guest_guest_requests_guest_requests_component__WEBPACK_IMPORTED_MODULE_20__["GuestRequestsComponent"]
    },
    {
        path: 'host/apartments/pictures',
        component: _host_HostStuff_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_21__["UploadPictureComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"]
    },
    {
        path: 'home/details',
        component: _home_apartment_details_home_apartment_details_component__WEBPACK_IMPORTED_MODULE_23__["HomeApartmentDetailsComponent"]
    },
    {
        path: 'apartment/dates',
        component: _add_dates_add_dates_component__WEBPACK_IMPORTED_MODULE_24__["AddDatesComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AirBnbAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_AdminStuff_create_host_create_host_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/AdminStuff/create-host/create-host.component */ "./src/app/admin/AdminStuff/create-host/create-host.component.ts");
/* harmony import */ var _admin_AdminStuff_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/AdminStuff/users/users.component */ "./src/app/admin/AdminStuff/users/users.component.ts");
/* harmony import */ var _admin_AdminStuff_apartments_apartments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/AdminStuff/apartments/apartments.component */ "./src/app/admin/AdminStuff/apartments/apartments.component.ts");
/* harmony import */ var _admin_AdminStuff_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/AdminStuff/reservations/reservations.component */ "./src/app/admin/AdminStuff/reservations/reservations.component.ts");
/* harmony import */ var _loged_user_loged_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./loged-user/loged-user.component */ "./src/app/loged-user/loged-user.component.ts");
/* harmony import */ var _host_host_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./host/host.component */ "./src/app/host/host.component.ts");
/* harmony import */ var _guest_guest_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guest/guest.component */ "./src/app/guest/guest.component.ts");
/* harmony import */ var _admin_AdminStuff_apartments_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/AdminStuff/apartments/edit-apartment/edit-apartment.component */ "./src/app/admin/AdminStuff/apartments/edit-apartment/edit-apartment.component.ts");
/* harmony import */ var _admin_AdminStuff_amenitie_amenitie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/AdminStuff/amenitie/amenitie.component */ "./src/app/admin/AdminStuff/amenitie/amenitie.component.ts");
/* harmony import */ var _host_HostStuff_host_apartments_host_apartments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./host/HostStuff/host-apartments/host-apartments.component */ "./src/app/host/HostStuff/host-apartments/host-apartments.component.ts");
/* harmony import */ var _host_HostStuff_host_reservations_host_reservations_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./host/HostStuff/host-reservations/host-reservations.component */ "./src/app/host/HostStuff/host-reservations/host-reservations.component.ts");
/* harmony import */ var _host_HostStuff_host_create_apartment_host_create_apartment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./host/HostStuff/host-create-apartment/host-create-apartment.component */ "./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.ts");
/* harmony import */ var _host_HostStuff_host_apartments_edit_host_apartment_edit_host_apartment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component */ "./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.ts");
/* harmony import */ var _host_HostStuff_host_requests_host_requests_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./host/HostStuff/host-requests/host-requests.component */ "./src/app/host/HostStuff/host-requests/host-requests.component.ts");
/* harmony import */ var _guest_guest_reservations_guest_reservations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./guest/guest-reservations/guest-reservations.component */ "./src/app/guest/guest-reservations/guest-reservations.component.ts");
/* harmony import */ var _guest_guest_apartments_guest_apartments_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guest/guest-apartments/guest-apartments.component */ "./src/app/guest/guest-apartments/guest-apartments.component.ts");
/* harmony import */ var _guest_guest_apartments_apartment_details_apartment_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guest/guest-apartments/apartment-details/apartment-details.component */ "./src/app/guest/guest-apartments/apartment-details/apartment-details.component.ts");
/* harmony import */ var _guest_guest_requests_guest_requests_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./guest/guest-requests/guest-requests.component */ "./src/app/guest/guest-requests/guest-requests.component.ts");
/* harmony import */ var _host_HostStuff_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./host/HostStuff/upload-picture/upload-picture.component */ "./src/app/host/HostStuff/upload-picture/upload-picture.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_apartment_details_home_apartment_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home-apartment-details/home-apartment-details.component */ "./src/app/home-apartment-details/home-apartment-details.component.ts");
/* harmony import */ var _add_dates_add_dates_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./add-dates/add-dates.component */ "./src/app/add-dates/add-dates.component.ts");

































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
            _admin_AdminStuff_create_host_create_host_component__WEBPACK_IMPORTED_MODULE_11__["CreateHostComponent"],
            _admin_AdminStuff_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
            _admin_AdminStuff_apartments_apartments_component__WEBPACK_IMPORTED_MODULE_13__["ApartmentsComponent"],
            _admin_AdminStuff_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_14__["ReservationsComponent"],
            _loged_user_loged_user_component__WEBPACK_IMPORTED_MODULE_15__["LogedUserComponent"],
            _host_host_component__WEBPACK_IMPORTED_MODULE_16__["HostComponent"],
            _guest_guest_component__WEBPACK_IMPORTED_MODULE_17__["GuestComponent"],
            _admin_AdminStuff_apartments_edit_apartment_edit_apartment_component__WEBPACK_IMPORTED_MODULE_18__["EditApartmentComponent"],
            _admin_AdminStuff_amenitie_amenitie_component__WEBPACK_IMPORTED_MODULE_19__["AmenitieComponent"],
            _host_HostStuff_host_apartments_host_apartments_component__WEBPACK_IMPORTED_MODULE_20__["HostApartmentsComponent"],
            _host_HostStuff_host_reservations_host_reservations_component__WEBPACK_IMPORTED_MODULE_21__["HostReservationsComponent"],
            _host_HostStuff_host_create_apartment_host_create_apartment_component__WEBPACK_IMPORTED_MODULE_22__["HostCreateApartmentComponent"],
            _host_HostStuff_host_apartments_edit_host_apartment_edit_host_apartment_component__WEBPACK_IMPORTED_MODULE_23__["EditHostApartmentComponent"],
            _host_HostStuff_host_requests_host_requests_component__WEBPACK_IMPORTED_MODULE_24__["HostRequestsComponent"],
            _guest_guest_reservations_guest_reservations_component__WEBPACK_IMPORTED_MODULE_25__["GuestReservationsComponent"],
            _guest_guest_apartments_guest_apartments_component__WEBPACK_IMPORTED_MODULE_26__["GuestApartmentsComponent"],
            _guest_guest_apartments_apartment_details_apartment_details_component__WEBPACK_IMPORTED_MODULE_27__["ApartmentDetailsComponent"],
            _guest_guest_requests_guest_requests_component__WEBPACK_IMPORTED_MODULE_28__["GuestRequestsComponent"],
            _host_HostStuff_upload_picture_upload_picture_component__WEBPACK_IMPORTED_MODULE_29__["UploadPictureComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_30__["ProfileComponent"],
            _home_apartment_details_home_apartment_details_component__WEBPACK_IMPORTED_MODULE_31__["HomeApartmentDetailsComponent"],
            _add_dates_add_dates_component__WEBPACK_IMPORTED_MODULE_32__["AddDatesComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guest.service.ts":
/*!**********************************!*\
  !*** ./src/app/guest.service.ts ***!
  \**********************************/
/*! exports provided: GuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestService", function() { return GuestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GuestService = class GuestService {
    constructor(http) {
        this.http = http;
        this.reservationUri = "http://localhost:8080/api/Reservation/";
    }
    GetGuestReservations(guestId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('guestId', guestId).set('status', status)
        };
        return this.http.get(this.reservationUri + "GetGuestReservations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in guest service:  " + e.error.Message))));
    }
    cancelReservationRequest(reservationId, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('reservationId', reservationId).set('status', status)
        };
        return this.http.delete(this.reservationUri + "ChageReservationRequests", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    GetGuestReservationRequest(guestId, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('guestId', guestId).set('status', status)
        };
        return this.http.get(this.reservationUri + "GetGuestReservationRequest", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
};
GuestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], GuestService);



/***/ }),

/***/ "./src/app/guest/guest-apartments/apartment-details/apartment-details.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/guest/guest-apartments/apartment-details/apartment-details.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LWFwYXJ0bWVudHMvYXBhcnRtZW50LWRldGFpbHMvYXBhcnRtZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/guest/guest-apartments/apartment-details/apartment-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/guest/guest-apartments/apartment-details/apartment-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ApartmentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApartmentDetailsComponent", function() { return ApartmentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home.service */ "./src/app/home.service.ts");






let ApartmentDetailsComponent = class ApartmentDetailsComponent {
    constructor(homeService, storageService, fb, router) {
        this.homeService = homeService;
        this.storageService = storageService;
        this.fb = fb;
        this.router = router;
        this.amNames = [];
    }
    ngOnInit() {
        this.apartment = this.storageService.getGuestApartment();
        console.warn(this.apartment);
        this.editForm = this.fb.group({
            Type: [this.apartment.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            RoomNumber: [this.apartment.RoomNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            GuestNumber: [this.apartment.GuestNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PricePerNight: [this.apartment.PricePerNight, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SingUpTime: [this.apartment.SingUpTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            SingOutTime: [this.apartment.SingOutTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Status: [this.apartment.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Latitude: [this.apartment.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Longitude: [this.apartment.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Streat: [this.apartment.Streat, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StreatNumber: [this.apartment.StreatNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Settlement: [this.apartment.Settlement, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ZipCode: [this.apartment.ZipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            HostName: [this.apartment.HostName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            HostSurname: [this.apartment.HostSurname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.GetApartmentAmenitieNames();
    }
    returnBack() {
        this.router.navigate(["/guest/apartments"]);
    }
    GetApartmentAmenitieNames() {
        this.homeService.GetApartmentAmenitieNames(this.apartment.ID).subscribe(data => {
            this.amNames = data;
            this.getAllComments();
        });
    }
    getAllComments() {
        this.homeService.getCommentsForApartment(this.apartment.ID).subscribe(data => {
            this.apartmentComments = data;
            console.warn(this.apartmentComments);
        });
    }
};
ApartmentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apartment-details',
        template: __webpack_require__(/*! raw-loader!./apartment-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-apartments/apartment-details/apartment-details.component.html"),
        styles: [__webpack_require__(/*! ./apartment-details.component.css */ "./src/app/guest/guest-apartments/apartment-details/apartment-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ApartmentDetailsComponent);



/***/ }),

/***/ "./src/app/guest/guest-apartments/guest-apartments.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/guest/guest-apartments/guest-apartments.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LWFwYXJ0bWVudHMvZ3Vlc3QtYXBhcnRtZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest/guest-apartments/guest-apartments.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/guest/guest-apartments/guest-apartments.component.ts ***!
  \**********************************************************************/
/*! exports provided: GuestApartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestApartmentsComponent", function() { return GuestApartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home.service */ "./src/app/home.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");







let GuestApartmentsComponent = class GuestApartmentsComponent {
    constructor(homeService, router, fb, storageService) {
        this.homeService = homeService;
        this.router = router;
        this.fb = fb;
        this.storageService = storageService;
        this.ActiveApartments = [];
        this.FiltredApartments = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati
        this.ApartmentType = ["", "FullApartman", "Room"];
        this.amNames = new Array();
        this.searchForm = this.fb.group({
            settlement: [],
            checkIn: [],
            checkOut: [],
            guestNumber: [],
            minRooms: [],
            maxRooms: [],
            maxPrice: [],
            apartmentType: [],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        });
    }
    ngOnInit() {
        this.homeService.getActiveApartments().subscribe(data => {
            this.ActiveApartments = data;
            this.FiltredApartments = data;
            //amenities for search:
            this.homeService.GetAmenitieNames().subscribe(names => {
                this.amNames = names;
                this.addCheckboxes();
                this.amNames.forEach(element => {
                    console.warn(element);
                });
            });
        });
    }
    moreDetails(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const id = idAttr.nodeValue; //id kliknutog button-a
        var apartment = this.ActiveApartments.find(x => x.ID == id);
        this.storageService.setGuestApartment(apartment);
        this.router.navigate(['guest/apartments/details']);
    }
    onSearch() {
        var searchApartment = new src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_5__["SearchApartment"]();
        searchApartment.CheckIn = this.searchForm.value.checkIn;
        searchApartment.CheckOut = this.searchForm.value.checkOut;
        searchApartment.GuestNumber = this.searchForm.value.guestNumber;
        searchApartment.MaxPrice = this.searchForm.value.maxPrice;
        searchApartment.MaxRooms = this.searchForm.value.maxRooms;
        searchApartment.MinRooms = this.searchForm.value.minRooms;
        searchApartment.Settlement = this.searchForm.value.settlement;
        searchApartment.ApartmentType = this.searchForm.value.apartmentType;
        //amenities
        searchApartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.searchForm.controls.amNames.value[i] == true) {
                searchApartment.Amenities.push(this.amNames[i]);
            }
        }
        this.homeService.GetSearchApartments(searchApartment).subscribe(data => {
            this.FiltredApartments = data;
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.searchForm.controls.amNames.push(control);
        });
    }
    reset() {
        this.FiltredApartments = this.ActiveApartments;
    }
    sortLow() {
        this.FiltredApartments.sort((a, b) => a.PricePerNight - b.PricePerNight);
    }
    sortHigh() {
        this.FiltredApartments.sort((a, b) => b.PricePerNight - a.PricePerNight);
    }
};
GuestApartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest-apartments',
        template: __webpack_require__(/*! raw-loader!./guest-apartments.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-apartments/guest-apartments.component.html"),
        styles: [__webpack_require__(/*! ./guest-apartments.component.css */ "./src/app/guest/guest-apartments/guest-apartments.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
], GuestApartmentsComponent);



/***/ }),

/***/ "./src/app/guest/guest-requests/guest-requests.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/guest/guest-requests/guest-requests.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LXJlcXVlc3RzL2d1ZXN0LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/guest/guest-requests/guest-requests.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/guest/guest-requests/guest-requests.component.ts ***!
  \******************************************************************/
/*! exports provided: GuestRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestRequestsComponent", function() { return GuestRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guest.service */ "./src/app/guest.service.ts");



let GuestRequestsComponent = class GuestRequestsComponent {
    constructor(guestService) {
        this.guestService = guestService;
        this.createdReservations = [];
        this.acceptedReservations = [];
    }
    ngOnInit() {
        this.guestService.GetGuestReservationRequest(2, 'Created').subscribe(data => {
            this.createdReservations = data;
            console.log(this.createdReservations);
            this.guestService.GetGuestReservationRequest(2, 'Accepted').subscribe(data => {
                this.acceptedReservations = data;
                console.log(this.acceptedReservations);
            });
        });
    }
    CancelRequest(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog button-a
        this.guestService.cancelReservationRequest(id, 'Canceled').subscribe(data => {
            var res = this.acceptedReservations.find(x => x.ID == id);
            if (res != undefined) {
                var idx = this.acceptedReservations.indexOf(res);
                this.acceptedReservations.splice(idx, 1);
            }
            res = this.createdReservations.find(x => x.ID == id);
            if (res != undefined) {
                var idx = this.createdReservations.indexOf(res);
                this.createdReservations.splice(idx, 1);
            }
        });
    }
};
GuestRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest-requests',
        template: __webpack_require__(/*! raw-loader!./guest-requests.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-requests/guest-requests.component.html"),
        styles: [__webpack_require__(/*! ./guest-requests.component.css */ "./src/app/guest/guest-requests/guest-requests.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]])
], GuestRequestsComponent);



/***/ }),

/***/ "./src/app/guest/guest-reservations/guest-reservations.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/guest/guest-reservations/guest-reservations.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LXJlc2VydmF0aW9ucy9ndWVzdC1yZXNlcnZhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/guest/guest-reservations/guest-reservations.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/guest/guest-reservations/guest-reservations.component.ts ***!
  \**************************************************************************/
/*! exports provided: GuestReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestReservationsComponent", function() { return GuestReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guest.service */ "./src/app/guest.service.ts");



let GuestReservationsComponent = class GuestReservationsComponent {
    constructor(guestService) {
        this.guestService = guestService;
        this.guestReservations = [];
        this.FiltredReservations = [];
    }
    ngOnInit() {
        this.guestService.GetGuestReservations(localStorage.ID).subscribe(data => {
            this.guestReservations = data;
            this.FiltredReservations = data;
            console.log(this.FiltredReservations);
        });
    }
    sortLow() {
        this.FiltredReservations.sort((a, b) => a.TotalPrice - b.TotalPrice);
    }
    sortHigh() {
        this.FiltredReservations.sort((a, b) => b.TotalPrice - a.TotalPrice);
    }
};
GuestReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest-reservations',
        template: __webpack_require__(/*! raw-loader!./guest-reservations.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest-reservations/guest-reservations.component.html"),
        styles: [__webpack_require__(/*! ./guest-reservations.component.css */ "./src/app/guest/guest-reservations/guest-reservations.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]])
], GuestReservationsComponent);



/***/ }),

/***/ "./src/app/guest/guest.component.css":
/*!*******************************************!*\
  !*** ./src/app/guest/guest.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0L2d1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/guest/guest.component.ts":
/*!******************************************!*\
  !*** ./src/app/guest/guest.component.ts ***!
  \******************************************/
/*! exports provided: GuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestComponent", function() { return GuestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuestComponent = class GuestComponent {
    constructor() { }
    ngOnInit() {
    }
};
GuestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guest',
        template: __webpack_require__(/*! raw-loader!./guest.component.html */ "./node_modules/raw-loader/index.js!./src/app/guest/guest.component.html"),
        styles: [__webpack_require__(/*! ./guest.component.css */ "./src/app/guest/guest.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GuestComponent);



/***/ }),

/***/ "./src/app/home-apartment-details/home-apartment-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/home-apartment-details/home-apartment-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYXBhcnRtZW50LWRldGFpbHMvaG9tZS1hcGFydG1lbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home-apartment-details/home-apartment-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home-apartment-details/home-apartment-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: HomeApartmentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeApartmentDetailsComponent", function() { return HomeApartmentDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HomeApartmentDetailsComponent = class HomeApartmentDetailsComponent {
    constructor(homeService, storageService, fb, router) {
        this.homeService = homeService;
        this.storageService = storageService;
        this.fb = fb;
        this.router = router;
        this.amNames = [];
    }
    ngOnInit() {
        this.apartment = this.storageService.getGuestApartment();
        console.warn(this.apartment);
        this.editForm = this.fb.group({
            Type: [this.apartment.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            RoomNumber: [this.apartment.RoomNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            GuestNumber: [this.apartment.GuestNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PricePerNight: [this.apartment.PricePerNight, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SingUpTime: [this.apartment.SingUpTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SingOutTime: [this.apartment.SingOutTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Status: [this.apartment.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Latitude: [this.apartment.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Longitude: [this.apartment.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Streat: [this.apartment.Streat, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            StreatNumber: [this.apartment.StreatNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Settlement: [this.apartment.Settlement, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ZipCode: [this.apartment.ZipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            HostName: [this.apartment.HostName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            HostSurname: [this.apartment.HostSurname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.GetApartmentAmenitieNames();
    }
    returnBack() {
        this.router.navigate(["/home"]);
    }
    GetApartmentAmenitieNames() {
        this.homeService.GetApartmentAmenitieNames(this.apartment.ID).subscribe(data => {
            this.amNames = data;
            this.getAllComments();
        });
    }
    getAllComments() {
        this.homeService.getCommentsForApartment(this.apartment.ID).subscribe(data => {
            this.apartmentComments = data;
            console.warn(this.apartmentComments);
        });
    }
};
HomeApartmentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-apartment-details',
        template: __webpack_require__(/*! raw-loader!./home-apartment-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-apartment-details/home-apartment-details.component.html"),
        styles: [__webpack_require__(/*! ./home-apartment-details.component.css */ "./src/app/home-apartment-details/home-apartment-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], HomeApartmentDetailsComponent);



/***/ }),

/***/ "./src/app/home.service.ts":
/*!*********************************!*\
  !*** ./src/app/home.service.ts ***!
  \*********************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.apartmentUri = "http://localhost:8080/api/Apartment/";
        this.amenitieUri = "http://localhost:8080/api/Amenitie/";
    }
    SearchUsers(userRole, userGender, username) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('userRole', userRole).set('userGender', userGender).set('username', username)
        };
        return this.http.get(this.apartmentUri + "GetSearchApartments", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in admin service:  " + e.error.Message))));
    }
    getActiveApartments() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.apartmentUri + "GetActiveApartments", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in home service:  " + e))));
    }
    getCommentsForApartment(apartmentID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('apartmentID', apartmentID)
        };
        return this.http.get(this.apartmentUri + "GetCommentsForApartment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(console.error("Eror in home service:  " + e.error.Message))));
    }
    GetApartmentAmenitieNames(apartmentID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('apartmentID', apartmentID)
        };
        return this.http.get(this.apartmentUri + "GetApartmentAmenitieNames", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(alert("Eror in home service:  " + e.error.Message))));
    }
    GetSearchApartments(apartmentDetails) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', }),
        };
        return this.http.put(this.apartmentUri + "GetSearchApartments", apartmentDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(alert("Eror in home service:  " + e.error.Message))));
    }
    GetAmenitieNames() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.amenitieUri + "GetAmenitieNames", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
};
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], HomeService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home.service */ "./src/app/home.service.ts");
/* harmony import */ var _Classes_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");







let HomeComponent = class HomeComponent {
    constructor(storageService, homeService, router, fb) {
        this.storageService = storageService;
        this.homeService = homeService;
        this.router = router;
        this.fb = fb;
        this.ActiveApartments = [];
        this.FiltredApartments = []; //bice nakon sto odradi filtriranje, pa ce se on bindovati
        this.ApartmentType = ["", "FullApartman", "Room"];
        this.amNames = new Array();
        this.searchForm = this.fb.group({
            settlement: [],
            checkIn: [],
            checkOut: [],
            guestNumber: [],
            minRooms: [],
            maxRooms: [],
            maxPrice: [],
            apartmentType: [],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        });
    }
    ngOnInit() {
        this.homeService.getActiveApartments().subscribe(data => {
            this.ActiveApartments = data;
            this.FiltredApartments = data;
            //amenities for search:
            this.homeService.GetAmenitieNames().subscribe(names => {
                this.amNames = names;
                this.addCheckboxes();
                this.amNames.forEach(element => {
                    console.warn(element);
                });
            });
        });
    }
    moreDetails(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const value = idAttr.nodeValue; //id kliknutog button-a
        console.log(id); // id
        var apartment = this.ActiveApartments.find(x => x.ID == id);
        this.storageService.setGuestApartment(apartment);
        this.router.navigate(['home/details']);
    }
    onSearch() {
        var searchApartment = new _Classes_Apartment__WEBPACK_IMPORTED_MODULE_3__["SearchApartment"]();
        searchApartment.CheckIn = this.searchForm.value.checkIn;
        searchApartment.CheckOut = this.searchForm.value.checkOut;
        searchApartment.GuestNumber = this.searchForm.value.guestNumber;
        searchApartment.MaxPrice = this.searchForm.value.maxPrice;
        searchApartment.MaxRooms = this.searchForm.value.maxRooms;
        searchApartment.MinRooms = this.searchForm.value.minRooms;
        searchApartment.Settlement = this.searchForm.value.settlement;
        searchApartment.ApartmentType = this.searchForm.value.apartmentType;
        //amenities
        searchApartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.searchForm.controls.amNames.value[i] == true) {
                searchApartment.Amenities.push(this.amNames[i]);
            }
        }
        this.homeService.GetSearchApartments(searchApartment).subscribe(data => {
            this.FiltredApartments = data;
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.searchForm.controls.amNames.push(control);
        });
    }
    logIn() {
        this.router.navigate(["login"]);
    }
    reset() {
        this.FiltredApartments = this.ActiveApartments;
    }
    sortLow() {
        this.FiltredApartments.sort((a, b) => a.PricePerNight - b.PricePerNight);
    }
    sortHigh() {
        this.FiltredApartments.sort((a, b) => b.PricePerNight - a.PricePerNight);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/host.service.ts":
/*!*********************************!*\
  !*** ./src/app/host.service.ts ***!
  \*********************************/
/*! exports provided: HostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostService", function() { return HostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HostService = class HostService {
    constructor(http) {
        this.http = http;
        this.apartmentUri = "http://localhost:8080/api/Apartment/";
        this.amenitieUri = "http://localhost:8080/api/Amenitie/";
        this.reservationUri = "http://localhost:8080/api/Reservation/";
        this.userUri = "http://localhost:8080/api/Users/";
    }
    addDates(dateModel) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.apartmentUri + "AddRentDates", dateModel, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
        ;
    }
    getHostReservations(hostId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('hostId', hostId)
        };
        return this.http.get(this.reservationUri + "GetHostReservations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    changeUserStatus(reservationId, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('reservationId', reservationId).set('status', status)
        };
        return this.http.delete(this.reservationUri + "ChageReservationRequests", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    GetReservationRequests(hostId, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('hostId', hostId).set('status', status)
        };
        return this.http.get(this.reservationUri + "GetReservationRequests", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    getHostApartments(hostId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('hostId', hostId)
        };
        return this.http.get(this.apartmentUri + "GetHostApartments", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e))));
    }
    ChangeStatusApartmentComment(commentId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.patch(this.apartmentUri + "ChangeStatusApartmentComment?commentId=" + commentId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
        ;
    }
    changeApartment(apartment) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.patch(this.apartmentUri + "ChangeApartment", apartment, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    getCommentsForApartment(apartmentID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmentID', apartmentID)
        };
        return this.http.get(this.apartmentUri + "GetAllCommentsForApartment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
    }
    deleteApartment(apartmentId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmentId', apartmentId)
        };
        return this.http.delete(this.apartmentUri + "DeleteApartment", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
        ;
    }
    addApartment(apartmentBM) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.apartmentUri + "AddApartment", apartmentBM, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(console.error("Eror in host service:  " + e.error.Message))));
        ;
    }
    GetAmenitieNames() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role })
        };
        return this.http.get(this.amenitieUri + "GetAmenitieNames", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
    DeltePicture(apartmentId, picture) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmentId', apartmentId).set('picture', picture)
        };
        return this.http.delete(this.apartmentUri + "DeletePicture", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
    uploadDocument(document, apartmentID) {
        let httpOptions = {
            // headers: new HttpHeaders({'Content-Type': 'application/json', 'Role' : localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append("apartmentID", apartmentID)
        };
        return this.http.post(this.userUri + "UploadPictures", document, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service, pictures problem :  " + e.error.Message))));
    }
    GetSearchHostApartments(apartmentDetails) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.apartmentUri + "GetSearchHostApartments", apartmentDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
    GetSearchHostReservations(username, status) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('hostId', localStorage.ID).set('username', username).set('status', status)
        };
        return this.http.get(this.reservationUri + "GetSearchHostReservations", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service:  " + e.error.Message))));
    }
    addRentDate(rentDate) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.put(this.apartmentUri + "AddHostRentDate", rentDate, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service, rent date problem :  " + e.error.Message))));
    }
    GetHostApartmentRentDates(apartmanID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('apartmanID', apartmanID)
        };
        return this.http.get(this.apartmentUri + "GetHostApartmentRentDates", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service, rent date problem :   " + e.error.Message))));
    }
    DeleteHostRentDate(dateID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('dateID', dateID)
        };
        return this.http.delete(this.apartmentUri + "DeleteHostRentDate", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(alert("Eror in host service, delete rent date:  " + e.error.Message))));
    }
};
HostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HostService);



/***/ }),

/***/ "./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL2hvc3QtYXBhcnRtZW50cy9lZGl0LWhvc3QtYXBhcnRtZW50L2VkaXQtaG9zdC1hcGFydG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditHostApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHostApartmentComponent", function() { return EditHostApartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var _app_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");







let EditHostApartmentComponent = class EditHostApartmentComponent {
    constructor(hostService, storageService, fb, fb2, router) {
        this.hostService = hostService;
        this.storageService = storageService;
        this.fb = fb;
        this.fb2 = fb2;
        this.router = router;
        this.appReady = false;
        this.apartmentStatus = ['Active', 'NotActive'];
        this.apartmentTypes = ['FullApartman', 'Room'];
        this.rentDateForm = this.fb2.group({
            rentDate: [],
        });
        this.amNames = new Array();
        this.selectedNames = new Array();
        this.apartmentDates = [];
        this.apartmentDatesString = new Array();
    }
    ngOnInit() {
        this.apartment = this.storageService.getHostApartment();
        this.GetAllAmenitiNames();
        console.warn(this.apartment);
        this.editForm = this.fb.group({
            Type: [this.apartment.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            RoomNumber: [this.apartment.RoomNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            GuestNumber: [this.apartment.GuestNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PricePerNight: [this.apartment.PricePerNight, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SingUpTime: [this.apartment.SingUpTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SingOutTime: [this.apartment.SingOutTime.split("T")[1], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Status: [this.apartment.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Latitude: [this.apartment.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Longitude: [this.apartment.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Streat: [this.apartment.Streat, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            StreatNumber: [this.apartment.StreatNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Settlement: [this.apartment.Settlement, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ZipCode: [this.apartment.ZipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            HostName: [this.apartment.HostName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            HostSurname: [this.apartment.HostSurname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
        //this.getAllComments();
    }
    onChange() {
        this.apartment.Type = this.editForm.value.Type;
        this.apartment.RoomNumber = this.editForm.value.RoomNumber;
        this.apartment.GuestNumber = this.editForm.value.GuestNumber;
        this.apartment.PricePerNight = this.editForm.value.PricePerNight;
        this.apartment.SingUpTime = this.editForm.value.SingUpTime;
        this.apartment.SingOutTime = this.editForm.value.SingOutTime;
        this.apartment.Status = this.editForm.value.Status;
        this.apartment.Latitude = this.editForm.value.Latitude;
        this.apartment.Longitude = this.editForm.value.Longitude;
        this.apartment.Streat = this.editForm.value.Streat;
        this.apartment.StreatNumber = this.editForm.value.StreatNumber;
        this.apartment.Settlement = this.editForm.value.Settlement;
        this.apartment.ZipCode = this.editForm.value.ZipCode;
        this.apartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.editForm.controls.amNames.value[i] == true) {
                this.apartment.Amenities.push(this.amNames[i]);
            }
        }
        this.hostService.changeApartment(this.apartment).subscribe(data => {
            this.router.navigate(["/host/apartments"]);
        });
    }
    onDelete() {
        this.hostService.deleteApartment(this.apartment.ID).subscribe(data => {
            this.router.navigate(["/host/apartments"]);
        });
    }
    chageComment(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog comment-a
        this.hostService.ChangeStatusApartmentComment(id).subscribe(data => {
            this.apartmentComments.forEach(comment => {
                if (comment.Id == id) {
                    if (comment.Blocked)
                        comment.Blocked = false;
                    else
                        comment.Blocked = true;
                }
            });
        });
    }
    getAllComments() {
        this.hostService.getCommentsForApartment(this.apartment.ID).subscribe(data => {
            this.apartmentComments = data;
            console.warn(this.apartmentComments);
            this.getDateModels(); //vraca rentDates za apartment
        });
    }
    returnBack() {
        this.router.navigate(["/host/apartments"]);
    }
    GetAllAmenitiNames() {
        this.hostService.GetAmenitieNames().subscribe(names => //all existing amenities
         {
            this.amNames = names;
            this.addCheckboxes();
            this.amNames.forEach(element => {
                console.warn(element);
            });
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((this.apartment.Amenities.indexOf(o) != -1)); //
            this.editForm.controls.amNames.push(control);
        });
        this.getAllComments();
    }
    deletePicture(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog button-a 
        var picture = id;
        var idx = this.apartment.Pictures.indexOf(picture);
        var sendPicture = picture.split("localhost:8080/")[1];
        console.log(sendPicture);
        this.hostService.DeltePicture(this.apartment.ID, sendPicture).subscribe(data => {
            this.apartment.Pictures.splice(idx, 1);
        });
    }
    addNewPicutres() {
        this.storageService.setApartmentID(this.apartment.ID);
        this.router.navigate(['host/apartments/pictures']);
    }
    getDateModels() {
        this.hostService.GetHostApartmentRentDates(this.apartment.ID).subscribe(data => {
            this.apartmentDates = data;
        });
    }
    addRentDate() {
        console.log(this.rentDateForm.value.rentDate);
        var rentDate = new _app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_2__["AddRentDate"]();
        rentDate.ApartmentID = this.apartment.ID;
        rentDate.RentDate = this.rentDateForm.value.rentDate;
        this.hostService.addRentDate(rentDate).subscribe(data => {
            this.getDateModels();
        });
    }
    deleteRentDate(id) {
        console.warn(id);
        this.hostService.DeleteHostRentDate(id).subscribe(data => {
            this.getDateModels();
            // var idx = this.apartmentDates.indexOf(id);
            // this.apartmentDates.splice(idx,1);
        });
    }
};
EditHostApartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-host-apartment',
        template: __webpack_require__(/*! raw-loader!./edit-host-apartment.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.html"),
        styles: [__webpack_require__(/*! ./edit-host-apartment.component.css */ "./src/app/host/HostStuff/host-apartments/edit-host-apartment/edit-host-apartment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_6__["HostService"], _app_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], EditHostApartmentComponent);



/***/ }),

/***/ "./src/app/host/HostStuff/host-apartments/host-apartments.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-apartments/host-apartments.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL2hvc3QtYXBhcnRtZW50cy9ob3N0LWFwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/HostStuff/host-apartments/host-apartments.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-apartments/host-apartments.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HostApartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostApartmentsComponent", function() { return HostApartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");
/* harmony import */ var src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/home.service */ "./src/app/home.service.ts");









let HostApartmentsComponent = class HostApartmentsComponent {
    constructor(_sanitizer, hostService, fb, router, storageService, homeService) {
        this._sanitizer = _sanitizer;
        this.hostService = hostService;
        this.fb = fb;
        this.router = router;
        this.storageService = storageService;
        this.homeService = homeService;
        this.HostApartmants = [];
        this.FiltredApartments = [];
        this.ApartmentType = ["", "FullApartman", "Room"];
        this.ApartmentStatus = ["", "Active", "NotActive"];
        this.amNames = new Array();
        this.searchForm = this.fb.group({
            settlement: [],
            checkIn: [],
            checkOut: [],
            guestNumber: [],
            minRooms: [],
            maxRooms: [],
            maxPrice: [],
            apartmentType: [],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
            apartmentStatus: [],
        });
    }
    ngOnInit() {
        this.hostService.getHostApartments(localStorage.ID).subscribe(data => {
            this.HostApartmants = data;
            this.FiltredApartments = data; //
            console.warn(this.FiltredApartments);
            //amenities for search:
            this.homeService.GetAmenitieNames().subscribe(names => {
                this.amNames = names;
                this.addCheckboxes();
                this.amNames.forEach(element => {
                    console.warn(element);
                });
            });
        });
    }
    editApartment(id) {
        // const target = event.target || event.srcElement || event.currentTarget;
        // const idAttr = target.attributes.id;
        // const id = idAttr.nodeValue; //id kliknutog button-a
        var apartment = this.HostApartmants.find(x => x.ID == id);
        this.storageService.setHostApartment(apartment);
        this.router.navigate(['host/apartments/edit']);
    }
    onSearch() {
        var searchApartment = new src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_3__["SearchApartment"]();
        searchApartment.CheckIn = this.searchForm.value.checkIn;
        searchApartment.CheckOut = this.searchForm.value.checkOut;
        searchApartment.GuestNumber = this.searchForm.value.guestNumber;
        searchApartment.MaxPrice = this.searchForm.value.maxPrice;
        searchApartment.MaxRooms = this.searchForm.value.maxRooms;
        searchApartment.MinRooms = this.searchForm.value.minRooms;
        searchApartment.Settlement = this.searchForm.value.settlement;
        searchApartment.ApartmentType = this.searchForm.value.apartmentType;
        searchApartment.ApartmentStatus = this.searchForm.value.apartmentStatus;
        searchApartment.HostID = localStorage.ID;
        //amenities
        searchApartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.searchForm.controls.amNames.value[i] == true) {
                searchApartment.Amenities.push(this.amNames[i]);
            }
        }
        this.hostService.GetSearchHostApartments(searchApartment).subscribe(data => {
            this.FiltredApartments = data;
        });
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.searchForm.controls.amNames.push(control);
        });
    }
    reset() {
        this.FiltredApartments = this.HostApartmants;
    }
    sortLow() {
        this.FiltredApartments.sort((a, b) => a.PricePerNight - b.PricePerNight);
    }
    sortHigh() {
        this.FiltredApartments.sort((a, b) => b.PricePerNight - a.PricePerNight);
    }
};
HostApartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-apartments',
        template: __webpack_require__(/*! raw-loader!./host-apartments.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-apartments/host-apartments.component.html"),
        styles: [__webpack_require__(/*! ./host-apartments.component.css */ "./src/app/host/HostStuff/host-apartments/host-apartments.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], src_app_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], src_app_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"]])
], HostApartmentsComponent);



/***/ }),

/***/ "./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL2hvc3QtY3JlYXRlLWFwYXJ0bWVudC9ob3N0LWNyZWF0ZS1hcGFydG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: HostCreateApartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostCreateApartmentComponent", function() { return HostCreateApartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Classes/Apartment */ "./src/app/Classes/Apartment.ts");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");







let HostCreateApartmentComponent = class HostCreateApartmentComponent {
    constructor(hostService, fb, router, storageService) {
        this.hostService = hostService;
        this.fb = fb;
        this.router = router;
        this.storageService = storageService;
        this.apartmentTypes = ['FullApartman', 'Room'];
        this.amNames = new Array();
    }
    ngOnInit() {
        this.hostService.GetAmenitieNames().subscribe(names => {
            this.amNames = names;
            this.addCheckboxes();
            this.amNames.forEach(element => {
                console.warn(element);
            });
        });
        this.addForm = this.fb.group({
            Type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            RoomNumber: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            GuestNumber: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PricePerNight: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SingUpTime: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SingOutTime: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Latitude: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Longitude: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Streat: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            StreatNumber: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Settlement: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ZipCode: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    createApartment() {
        this.AddApartmentInfos(this.addForm.value);
        this.apartment.HostID = localStorage.ID;
        this.hostService.addApartment(this.apartment).subscribe(data => {
            var apartmentID = data;
            this.storageService.setApartmentID(apartmentID);
            this.router.navigate(['apartment/dates']);
        });
    }
    AddApartmentInfos(element) {
        this.apartment = new src_app_Classes_Apartment__WEBPACK_IMPORTED_MODULE_5__["Apartment"]();
        this.apartment.ID = element.ID;
        this.apartment.Type = element.Type;
        this.apartment.RoomNumber = element.RoomNumber;
        this.apartment.GuestNumber = element.GuestNumber;
        this.apartment.PricePerNight = element.PricePerNight;
        this.apartment.RentDates = element.RentDates;
        this.apartment.AvailableDates = element.AvailableDates;
        this.apartment.Pictures = element.Pictures;
        this.apartment.SingUpTime = element.SingUpTime;
        this.apartment.SingOutTime = element.SingOutTime;
        this.apartment.Status = element.Status;
        this.apartment.CommentIDs = element.CommentIDs;
        this.apartment.Latitude = element.Latitude;
        this.apartment.Longitude = element.Longitude;
        this.apartment.Streat = element.Streat;
        this.apartment.StreatNumber = element.StreatNumber;
        this.apartment.Settlement = element.Settlement;
        this.apartment.ZipCode = element.ZipCode;
        this.apartment.HostID = element.HostID;
        this.apartment.HostName = element.HostName;
        this.apartment.HostSurname = element.HostSurname;
        this.apartment.Amenities = new Array();
        for (var i = 0; i < this.amNames.length; i++) {
            if (this.addForm.controls.amNames.value[i] == true) {
                this.apartment.Amenities.push(this.amNames[i]);
            }
        }
    }
    addCheckboxes() {
        this.amNames.map((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
            this.addForm.controls.amNames.push(control);
        });
    }
};
HostCreateApartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-create-apartment',
        template: __webpack_require__(/*! raw-loader!./host-create-apartment.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.html"),
        styles: [__webpack_require__(/*! ./host-create-apartment.component.css */ "./src/app/host/HostStuff/host-create-apartment/host-create-apartment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
], HostCreateApartmentComponent);



/***/ }),

/***/ "./src/app/host/HostStuff/host-requests/host-requests.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-requests/host-requests.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL2hvc3QtcmVxdWVzdHMvaG9zdC1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/host/HostStuff/host-requests/host-requests.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-requests/host-requests.component.ts ***!
  \*************************************************************************/
/*! exports provided: HostRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRequestsComponent", function() { return HostRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");



let HostRequestsComponent = class HostRequestsComponent {
    constructor(hostService) {
        this.hostService = hostService;
        this.createdReservations = [];
        this.acceptedReservations = [];
    }
    ngOnInit() {
        this.hostService.GetReservationRequests(3, 'Created').subscribe(data => {
            this.createdReservations = data;
            console.log(this.createdReservations);
            this.hostService.GetReservationRequests(3, 'Accepted').subscribe(data => {
                this.acceptedReservations = data;
                console.log(this.acceptedReservations);
            });
        });
    }
    acceptRequest(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog button-a
        this.hostService.changeUserStatus(id, 'Accepted').subscribe(data => {
            this.createdReservations.forEach(reservation => {
                if (reservation.ID == id) {
                    //prebaci u Accepted listu
                    var res = reservation;
                    res.Stauts = 'Accepted';
                    this.acceptedReservations.push(res);
                    //brisi iz Created liste
                    var idx = this.createdReservations.indexOf(reservation);
                    this.createdReservations.splice(idx, 1);
                }
            });
        });
    }
    rejectRequest(event) {
        const target = event.target || event.srcElement || event.currentTarget;
        const idAttr = target.attributes.id;
        const id = idAttr.nodeValue; //id kliknutog button-a
        this.hostService.changeUserStatus(id, 'Rejected').subscribe(data => {
            var res = this.acceptedReservations.find(x => x.ID == id);
            if (res != undefined) {
                var idx = this.acceptedReservations.indexOf(res);
                this.acceptedReservations.splice(idx, 1);
            }
            res = this.createdReservations.find(x => x.ID == id);
            if (res != undefined) {
                var idx = this.createdReservations.indexOf(res);
                this.createdReservations.splice(idx, 1);
            }
        });
    }
};
HostRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-requests',
        template: __webpack_require__(/*! raw-loader!./host-requests.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-requests/host-requests.component.html"),
        styles: [__webpack_require__(/*! ./host-requests.component.css */ "./src/app/host/HostStuff/host-requests/host-requests.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]])
], HostRequestsComponent);



/***/ }),

/***/ "./src/app/host/HostStuff/host-reservations/host-reservations.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-reservations/host-reservations.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL2hvc3QtcmVzZXJ2YXRpb25zL2hvc3QtcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/host/HostStuff/host-reservations/host-reservations.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/host/HostStuff/host-reservations/host-reservations.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HostReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostReservationsComponent", function() { return HostReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let HostReservationsComponent = class HostReservationsComponent {
    constructor(hostService, fb) {
        this.hostService = hostService;
        this.fb = fb;
        this.hostReservations = [];
        this.FiltredReservations = [];
        this.ReservationStatus = ["", "Created", "Rejected", "Canceled", "Accepted", "Done"];
        this.searchForm = this.fb.group({
            reservationStatus: [],
            guestUsername: [],
        });
    }
    ngOnInit() {
        this.hostService.getHostReservations(3).subscribe(data => {
            this.hostReservations = data;
            this.FiltredReservations = data;
        });
    }
    onSearch() {
        this.hostService.GetSearchHostReservations(this.searchForm.value.guestUsername, this.searchForm.value.reservationStatus).subscribe(data => {
            this.FiltredReservations = data;
            console.warn(this.FiltredReservations);
        });
    }
    reset() {
        this.FiltredReservations = this.hostReservations;
    }
    sortLow() {
        this.FiltredReservations.sort((a, b) => a.TotalPrice - b.TotalPrice);
    }
    sortHigh() {
        this.FiltredReservations.sort((a, b) => b.TotalPrice - a.TotalPrice);
    }
};
HostReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host-reservations',
        template: __webpack_require__(/*! raw-loader!./host-reservations.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/host-reservations/host-reservations.component.html"),
        styles: [__webpack_require__(/*! ./host-reservations.component.css */ "./src/app/host/HostStuff/host-reservations/host-reservations.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], HostReservationsComponent);



/***/ }),

/***/ "./src/app/host/HostStuff/upload-picture/upload-picture.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/host/HostStuff/upload-picture/upload-picture.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvSG9zdFN0dWZmL3VwbG9hZC1waWN0dXJlL3VwbG9hZC1waWN0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/host/HostStuff/upload-picture/upload-picture.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/host/HostStuff/upload-picture/upload-picture.component.ts ***!
  \***************************************************************************/
/*! exports provided: UploadPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPictureComponent", function() { return UploadPictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/host.service */ "./src/app/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");





let UploadPictureComponent = class UploadPictureComponent {
    constructor(hostService, router, storageService) {
        this.hostService = hostService;
        this.router = router;
        this.storageService = storageService;
        this.selectedFile = null;
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            this.selectedFile = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = reader.result;
            };
        }
    }
    ngOnInit() {
        this.apartmantID = this.storageService.getApartmentID();
        console.log(this.apartmantID);
    }
    onDone() {
        alert("Apartment is added");
        if (localStorage.Role == "Host")
            this.router.navigate(['host/apartments']);
        else if (localStorage.Role == "Admin")
            this.router.navigate(['admin/apartments']);
    }
    onConfirm() {
        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.hostService.uploadDocument(fd, this.apartmantID).subscribe(() => {
            alert("Successful Added image.");
        });
    }
};
UploadPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-picture',
        template: __webpack_require__(/*! raw-loader!./upload-picture.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/HostStuff/upload-picture/upload-picture.component.html"),
        styles: [__webpack_require__(/*! ./upload-picture.component.css */ "./src/app/host/HostStuff/upload-picture/upload-picture.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], UploadPictureComponent);



/***/ }),

/***/ "./src/app/host/host.component.css":
/*!*****************************************!*\
  !*** ./src/app/host/host.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvc3QvaG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/host/host.component.ts":
/*!****************************************!*\
  !*** ./src/app/host/host.component.ts ***!
  \****************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../host.service */ "./src/app/host.service.ts");



let HostComponent = class HostComponent {
    constructor(hostService) {
        this.hostService = hostService;
    }
    ngOnInit() {
    }
};
HostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host',
        template: __webpack_require__(/*! raw-loader!./host.component.html */ "./node_modules/raw-loader/index.js!./src/app/host/host.component.html"),
        styles: [__webpack_require__(/*! ./host.component.css */ "./src/app/host/host.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]])
], HostComponent);



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LogInComponent = class LogInComponent {
    constructor(router, fb, logingService) {
        this.router = router;
        this.fb = fb;
        this.logingService = logingService;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.logingService.TryLog(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
            this.userInfo = data;
            console.log(this.userInfo);
            localStorage.setItem('Role', this.userInfo.Role);
            localStorage.setItem('ID', this.userInfo.ID);
            if (this.userInfo.Role == 'Admin') {
                this.router.navigate(['/admin']);
            }
            else if (this.userInfo.Role == 'Host') {
                this.router.navigate(['/host']);
            }
            else if (this.userInfo.Role == 'Guest') {
                this.router.navigate(['/guest']);
            }
            else {
                this.router.navigate(['/home']);
            }
        });
    }
};
LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-in',
        template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/log-in/log-in.component.html"),
        styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
], LogInComponent);



/***/ }),

/***/ "./src/app/loged-user/loged-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/loged-user/loged-user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2VkLXVzZXIvbG9nZWQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/loged-user/loged-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loged-user/loged-user.component.ts ***!
  \****************************************************/
/*! exports provided: LogedUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogedUserComponent", function() { return LogedUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LogedUserComponent = class LogedUserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        localStorage.removeItem('Role');
        localStorage.removeItem('ID');
        this.router.navigate(['/home']);
    }
    changeProfil() {
        this.router.navigate(['profile']);
    }
};
LogedUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loged-user',
        template: __webpack_require__(/*! raw-loader!./loged-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/loged-user/loged-user.component.html"),
        styles: [__webpack_require__(/*! ./loged-user.component.css */ "./src/app/loged-user/loged-user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LogedUserComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.LogInUri = "http://localhost:8080/api/Users/";
    }
    TryLog(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
                "Authorization": "Basic " + btoa(username + ":" + password) })
        };
        return this.http.get(this.LogInUri + "Login", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(alert("Eror in LogIn service:  " + e.error.Message))));
        ;
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProfileComponent = class ProfileComponent {
    constructor(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.genders = ["Male", "Famale"];
        this.invalidPass = false;
    }
    ngOnInit() {
        this.userService.GetUser().subscribe(data => {
            this.logedUser = data;
            console.log(this.logedUser);
            this.userForm = this.fb.group({
                role: [this.logedUser.Role, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                username: [this.logedUser.UserName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                name: [this.logedUser.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                surname: [this.logedUser.Surname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                gender: [this.logedUser.Gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.passForm = this.fb.group({
                password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                confirmPassword: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            });
        });
    }
    onSubmit() {
        this.logedUser.Name = this.userForm.value.name;
        this.logedUser.Surname = this.userForm.value.surname;
        this.logedUser.UserName = this.userForm.value.username;
        this.logedUser.Gender = this.userForm.value.gender;
        this.userService.ProfileChange(this.logedUser).subscribe(data => {
            alert("Succesfuly changed");
            this.returnBack();
        });
    }
    returnBack() {
        if (localStorage.Role == "Admin")
            this.router.navigate(["/admin"]);
        else if (localStorage.Role == "Host")
            this.router.navigate(["/host"]);
        else if (localStorage.Role == "Guest")
            this.router.navigate(["/guest"]);
    }
    onChange() {
        if (this.passForm.value.password === this.passForm.value.confirmPassword) {
            this.invalidPass = false;
            this.logedUser.Password = this.passForm.value.password;
            this.userService.ProfileChange(this.logedUser).subscribe(data => {
                alert("Succesfuly changed");
                this.returnBack();
            });
        }
        else {
            this.invalidPass = true;
        }
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Classes_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Classes/User */ "./src/app/Classes/User.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






let RegisterComponent = class RegisterComponent {
    constructor(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.invalidPass = false;
        this.genders = ["Male", "Famale"];
        this.registerForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
            this.invalidPass = false;
            this.registUser = new _Classes_User__WEBPACK_IMPORTED_MODULE_4__["User"]();
            this.registUser.Name = this.registerForm.value.name;
            this.registUser.Surname = this.registerForm.value.surname;
            this.registUser.Username = this.registerForm.value.username;
            this.registUser.Password = this.registerForm.value.password;
            this.registUser.Gender = this.registerForm.value.gender;
            this.userService.Register(this.registUser).subscribe(data => {
                alert("Host was created");
                console.log(this.registUser);
                this.router.navigate(["login"]);
            });
        }
        else {
            this.invalidPass = true;
        }
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() { }
    getApartment() {
        return this.ApartmentStorage;
    }
    setApartment(app1) {
        this.ApartmentStorage = app1;
    }
    getHostApartment() {
        return this.HostApartmentStorage;
    }
    setHostApartment(app1) {
        this.HostApartmentStorage = app1;
    }
    getGuestApartment() {
        return this.GuestApartmentStorage;
    }
    setGuestApartment(app1) {
        this.GuestApartmentStorage = app1;
    }
    getApartmentID() {
        return this.apartmentID;
    }
    setApartmentID(app1) {
        this.apartmentID = app1;
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StorageService);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.userUri = "http://localhost:8080/api/Users/";
    }
    Register(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http.put(this.userUri + "Register", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(console.error("Eror in User service:  " + e.error.Message))));
    }
    GetUser() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', localStorage.ID)
        };
        return this.http.get(this.userUri + "GetUser", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(console.error("Eror in User service:  " + e.error.Message))));
    }
    ProfileChange(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Role': localStorage.Role }),
        };
        return this.http.patch(this.userUri + "ChangeUser", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(console.error("Eror in User service:  " + e.error.Message))));
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Fax\6.Semestar\Web\Projekat\AirBnb_Web1\AirBnbAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map