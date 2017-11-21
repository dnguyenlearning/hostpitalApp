webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar [closed]=\"sideNavClosed\" (openSideNav)=\"openSideNav($event, sideLeft)\" ></navbar>\r\n<mat-sidenav-container  (backdropClick)=\"closedSideNav()\" >\r\n    <mat-sidenav mode='push' position='start' #sideLeft class=\"example-sidenav\">\r\n        <div fxLayout=\"column\" class=\"container\" fxLayoutAlign=\"space-between center\">\r\n            <div *ngIf=\"userService.isLoggedIn()\">\r\n                <h1> <a (click)=\"navigate('/',sideLeft)\" class=\"link\"  >HostpitalApp</a></h1>\r\n                <p><a (click)=\"navigate('/dashboard',sideLeft)\"  class=\"link\">Dashboard</a></p>\r\n                <p><a  (click)=\"navigate('/profile',sideLeft)\" class=\"link\">Profile</a></p>\r\n                <p style=\"cursor:pointer\"><a (click)=\"logout(sideLeft)\" class=\"link\">Logout</a></p>\r\n            </div>\r\n            <div *ngIf=\"!userService.isLoggedIn()\">\r\n                <h1>HosipitalApp</h1>\r\n            </div>\r\n            <div class=\"social\">\r\n                <a href=\"https://www.facebook.com/profile.php?id=100011132926565\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"https://github.com/dnguyenlearning\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\r\n                <a href=\"https://dnportfolio.herokuapp.com/\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\r\n            </div>\r\n        </div >\r\n    </mat-sidenav>\r\n    <!-- <mat-sidenav  mode='push' position='end' #sideRight class=\"example-sidenav\">\r\n        Jolly good!\r\n    </mat-sidenav> -->\r\n    <div class=\"example-sidenav-content\">\r\n        <flash-messages></flash-messages>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, mat-sidenav, mat-sidenav-container {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\nmat-sidenav {\n  width: 300px;\n  padding: 20px;\n  overflow: hidden;\n  top: 64px;\n  position: fixed;\n  background-color: #1C3750 !important; }\n  mat-sidenav h1 {\n    color: #8AC3E9; }\n  mat-sidenav a {\n    cursor: pointer; }\n\n.container {\n  height: 100%; }\n\n.link {\n  text-decoration: none;\n  color: #C9C9C9;\n  font-weight: bold; }\n\n.social i {\n  color: white;\n  margin-left: 10px;\n  font-size: 25px;\n  transition: 0.4s color; }\n  .social i:hover {\n    color: #888; }\n\n.active a {\n  color: #8AC3E9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    // @ViewChild('sideleft') ; 
    function AppComponent(userService, router, flashMessage) {
        this.userService = userService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'app';
        this.sideNavClosed = false;
    }
    AppComponent.prototype.openSideNav = function (e, sidebar) {
        (e.open) ? sidebar.open() : sidebar.close();
        this.sideNavClosed = false;
    };
    AppComponent.prototype.closedSideNav = function () {
        this.sideNavClosed = true;
    };
    AppComponent.prototype.navigate = function (returnUrl, sidenav) {
        this.router.navigate([returnUrl]);
        this.sideNavClosed = true;
        sidenav.close();
    };
    AppComponent.prototype.logout = function (sidebar) {
        this.userService.logout();
        sidebar.close();
        this.sideNavClosed = true;
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_user_guard__ = __webpack_require__("../../../../../src/app/guards/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_layouts_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/layouts/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_dialog_user_dialog_user_component__ = __webpack_require__("../../../../../src/app/components/home/dialog-user/dialog-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_medicine_service__ = __webpack_require__("../../../../../src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_image_url_directive__ = __webpack_require__("../../../../../src/app/directives/image-url.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/dashboard/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_user_guard__["a" /* UserGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_user_guard__["a" /* UserGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_user_guard__["a" /* UserGuard */]] },
    { path: 'edit/:medicineId', component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_user_guard__["a" /* UserGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_layouts_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_home_dialog_user_dialog_user_component__["a" /* DialogUserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__directives_image_url_directive__["a" /* ImageUrlDirective */],
                __WEBPACK_IMPORTED_MODULE_21__components_dashboard_edit_edit_component__["a" /* EditComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_medicine_service__["a" /* MedicineService */], __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__guards_user_guard__["a" /* UserGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__components_home_dialog_user_dialog_user_component__["a" /* DialogUserComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/emailRegister.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailTaken;
function emailTaken(userService) {
    return function (control) { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (!control.value)
                return null;
            userService.checkExistUser((control.value).trim()).subscribe(function (data) {
                if (data.success) {
                    resolve(null);
                }
                else {
                    resolve({ emailTaken: true });
                }
            });
        }, 2000);
    }); };
}


/***/ }),

/***/ "../../../../../src/app/common/formatemail.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = incorrectMailFormat;
function incorrectMailFormat(control) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
        return { "incorrectMailFormat": true };
    }
    return null;
}


/***/ }),

/***/ "../../../../../src/app/common/nospace.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CannotContainSpace;
function CannotContainSpace(control) {
    if (control.value.indexOf(' ') >= 0) {
        return { CannotContainSpace: true };
    }
    return null;
}


/***/ }),

/***/ "../../../../../src/app/common/usernameRegister.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usernameTaken;
function usernameTaken(userService) {
    return function (control) { return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (!control.value)
                return null;
            userService.checkExistUser((control.value).trim()).subscribe(function (data) {
                if (data.success) {
                    resolve(null);
                }
                else {
                    resolve({ usernameTaken: true });
                }
            });
        }, 2000);
    }); };
}


/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n  <div fxFlex=\"400px\" class=\"upload\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div *ngIf=\"!imageLink\">\n        <h1>Put Image Link</h1>\n    </div>\n    <div *ngIf=\"imageLink\" class=\"imageUpload\">\n        <img [src]=\"imageLink\" appImageUrl (error)=\"errorHandler($event)\" default=\"assets/images/not-valid.png\">\n    </div>\n\n    \n\n    <div class=\"buttons\" fxLayout=\"column\">\n        <!-- <mat-slide-toggle #slideToggle=\"matSlideToggle\"\n            class=\"example-margin\"\n            color=\"accent\">\n            Using Link/ local Image\n        </mat-slide-toggle> -->\n        <mat-form-field color=\"accent\">\n            <input matInput #link  placeholder=\"Medicine Link\" (keyup)=\"linkChange(link)\"> \n        </mat-form-field>\n        <!-- <input type=\"file\" placeholder=\"File\" *ngIf=\"!slideToggle.checked\"> -->\n    </div>\n  </div>\n  <div fxFlex=\"400px\" fxLayoutAlign=\"center center\" class=\"dashboard\" fxLayout=\"column\">\n      <h1>HostpitalApp Add Products</h1>\n      <form fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\"  [formGroup]=\"addMedicineForm\" (ngSubmit)=\"onAddMedicine(addMedicineForm)\">\n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n            <mat-error *ngIf=\"name.errors && name.touched\">\n                <mat-error *ngIf=\"name.errors.required\">Medicine Name is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Country\" formControlName=\"country\">\n            <mat-error *ngIf=\"country.errors && country.touched\">\n                <mat-error *ngIf=\"country.errors.required\">Country is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n            <input matInput [matDatepicker]=\"ExportedDatePicker\" placeholder=\"Exported Date\" formControlName=\"exportedDate\">\n           \n            <mat-datepicker-toggle matSuffix [for]=\"ExportedDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker (selectedChanged)=\"DatePickerChange(ExportedDatePicker)\" #ExportedDatePicker=\"matDatepicker\"></mat-datepicker>\n            <mat-error *ngIf=\"exportedDate.errors && exportedDate.touched\">\n                <mat-error *ngIf=\"exportedDate.errors.required\">ExportedDate is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n            <input matInput [matDatepicker]=\"ImportedDatePicker\" placeholder=\"Imported Date\" formControlName=\"importedDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"ImportedDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker (selectedChanged)=\"DatePickerChange(ImportedDatePicker)\" #ImportedDatePicker=\"matDatepicker\"></mat-datepicker>\n            <mat-error *ngIf=\"importedDate.errors && importedDate.touched\">\n                <mat-error *ngIf=\"importedDate.errors.required\">ImportedDate is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n            <input matInput [matDatepicker]=\"ExpiredDatePicker\" placeholder=\"Expired Date\" formControlName=\"expiredDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"ExpiredDatePicker\"></mat-datepicker-toggle>\n            <mat-datepicker (selectedChanged)=\"DatePickerChange(ExpiredDatePicker)\" #ExpiredDatePicker=\"matDatepicker\"></mat-datepicker>\n            <mat-error *ngIf=\"expiredDate.errors && expiredDate.touched\">\n                <mat-error *ngIf=\"expiredDate.errors.required\">ExpiredDate is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Quantity\" formControlName=\"quantity\">\n            <mat-error *ngIf=\"quantity.errors && quantity.touched\">\n                <mat-error *ngIf=\"quantity.errors.required\">Quantity is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Stored Place\" formControlName=\"storedPlace\">\n            <mat-error *ngIf=\"storedPlace.errors && storedPlace.touched\">\n                <mat-error *ngIf=\"storedPlace.errors.required\">StoredPlace is Required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <p><button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"addMedicineForm.invalid || !imageLink || imageLink=='invalid'\">Add</button></p>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, #dashboard {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n#dashboard {\n  padding: 30px 0;\n  margin: 30px 0;\n  background: #2A729B no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-attachment: fixed;\n  -moz-background-attachment: fixed;\n  -o-background-attachment: fixed;\n  -webkit-background-repeat: no-repeat;\n  -moz-background-repeat: no-repeat;\n  -o-background-repeat: no-repeat; }\n\n.dashboard {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white;\n  border: 1px solid white;\n  padding-left: 10px; }\n  .dashboard h1 {\n    color: white; }\n\n.link {\n  margin-top: 10px; }\n  .link a {\n    color: #333;\n    font-weight: bolder; }\n\n.upload {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n  .upload h1 {\n    color: white; }\n  .upload .imageUpload {\n    width: 250px;\n    height: auto;\n    margin-bottom: 30px; }\n    .upload .imageUpload img {\n      max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_medicine_service__ = __webpack_require__("../../../../../src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(fb, userService, route, flashMsg, medicineService) {
        this.userService = userService;
        this.route = route;
        this.flashMsg = flashMsg;
        this.medicineService = medicineService;
        this.enableR = false;
        this.inValid = false;
        this.addMedicineForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            exportedDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            importedDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            expiredDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            storedPlace: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
        });
    }
    DashboardComponent.prototype.errorHandler = function (event) {
        console.debug(event);
        this.imageLink = 'invalid';
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.medicineSubscription) {
            this.medicineSubscription.unsubscribe();
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.linkChange = function (link) {
        this.imageLink = link.value;
    };
    DashboardComponent.prototype.onAddMedicine = function (amf) {
        var _this = this;
        var newMedicine = amf.value;
        newMedicine.imageUrl = this.imageLink;
        this.medicineSubscription = this.medicineService.addNewMedicine(newMedicine)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('added New Medicine', { cssClass: 'alert-success', timeout: 3000 });
                _this.route.navigate(['/']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.DatePickerChange = function (picker) {
        console.log(picker);
    };
    Object.defineProperty(DashboardComponent.prototype, "name", {
        // name:['', Validators.required],
        // country:['',Validators.required],
        // exportedDate:['',Validators.required],
        // importedDate:['',Validators.required],
        // expiredDate:['',Validators.required],
        // quantity:['',Validators.required],
        // storedPlace:['',Validators.required],
        get: function () {
            return this.addMedicineForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "country", {
        get: function () {
            return this.addMedicineForm.get('country');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "exportedDate", {
        get: function () {
            return this.addMedicineForm.get('exportedDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "importedDate", {
        get: function () {
            return this.addMedicineForm.get('importedDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "expiredDate", {
        get: function () {
            return this.addMedicineForm.get('expiredDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "quantity", {
        get: function () {
            return this.addMedicineForm.get('quantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "storedPlace", {
        get: function () {
            return this.addMedicineForm.get('storedPlace');
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_0__services_medicine_service__["a" /* MedicineService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n    <div fxFlex=\"400px\" class=\"upload\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div *ngIf=\"!imageLink\">\n          <h1>Put Image Link</h1>\n      </div>\n      <div *ngIf=\"imageLink\" class=\"imageUpload\">\n          <img [src]=\"imageLink\" appImageUrl (error)=\"errorHandler($event)\" default=\"assets/images/not-valid.png\">\n      </div>\n      <div class=\"buttons\" fxLayout=\"column\">\n          <mat-form-field color=\"accent\">\n              <input matInput #link [value]=\"medicine.imageUrl\" placeholder=\"Medicine Link\" (keyup)=\"linkChange(link)\"> \n          </mat-form-field>\n      </div>\n    </div>\n    <div fxFlex=\"400px\" fxLayoutAlign=\"center center\" class=\"dashboard\" fxLayout=\"column\">\n        <h1>HostpitalApp Add Products</h1>\n        <form fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\"  [formGroup]=\"EditMedicineForm\" (ngSubmit)=\"onEditMedicine(EditMedicineForm)\">\n          <mat-form-field color=\"accent\">\n              <input matInput placeholder=\"Name\"  formControlName=\"name\">\n              <mat-error *ngIf=\"name.errors && name.touched\">\n                  <mat-error *ngIf=\"name.errors.required\">Medicine Name is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n              <input matInput placeholder=\"Country\"  formControlName=\"country\">\n              <mat-error *ngIf=\"country.errors && country.touched\">\n                  <mat-error *ngIf=\"country.errors.required\">Country is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n              <input matInput [matDatepicker]=\"ExportedDatePicker\"  placeholder=\"Exported Date\" formControlName=\"exportedDate\">\n             \n              <mat-datepicker-toggle matSuffix [for]=\"ExportedDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker (selectedChanged)=\"DatePickerChange(ExportedDatePicker)\" #ExportedDatePicker=\"matDatepicker\"></mat-datepicker>\n              <mat-error *ngIf=\"exportedDate.errors && exportedDate.touched\">\n                  <mat-error *ngIf=\"exportedDate.errors.required\">ExportedDate is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n              <input matInput [matDatepicker]=\"ImportedDatePicker\"  placeholder=\"Imported Date\" formControlName=\"importedDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"ImportedDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker (selectedChanged)=\"DatePickerChange(ImportedDatePicker)\" #ImportedDatePicker=\"matDatepicker\"></mat-datepicker>\n              <mat-error *ngIf=\"importedDate.errors && importedDate.touched\">\n                  <mat-error *ngIf=\"importedDate.errors.required\">ImportedDate is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n              <input matInput [matDatepicker]=\"ExpiredDatePicker\" placeholder=\"Expired Date\" formControlName=\"expiredDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"ExpiredDatePicker\"></mat-datepicker-toggle>\n              <mat-datepicker (selectedChanged)=\"DatePickerChange(ExpiredDatePicker)\" #ExpiredDatePicker=\"matDatepicker\"></mat-datepicker>\n              <mat-error *ngIf=\"expiredDate.errors && expiredDate.touched\">\n                  <mat-error *ngIf=\"expiredDate.errors.required\">ExpiredDate is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          \n          <mat-form-field color=\"accent\">\n              <input matInput placeholder=\"Quantity\"  formControlName=\"quantity\">\n              <mat-error *ngIf=\"quantity.errors && quantity.touched\">\n                  <mat-error *ngIf=\"quantity.errors.required\">Quantity is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n              <input matInput placeholder=\"Stored Place\"  formControlName=\"storedPlace\">\n              <mat-error *ngIf=\"storedPlace.errors && storedPlace.touched\">\n                  <mat-error *ngIf=\"storedPlace.errors.required\">StoredPlace is Required.</mat-error>\n              </mat-error>\n          </mat-form-field>\n          <p>\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"EditMedicineForm.invalid || !imageLink || imageLink=='invalid'\">Save</button>\n            <button mat-raised-button routerLink='/'>Cancel</button>\n          </p>\n        </form>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, #dashboard {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n#dashboard {\n  padding: 30px 0;\n  margin: 30px 0;\n  background: #2A729B no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-attachment: fixed;\n  -moz-background-attachment: fixed;\n  -o-background-attachment: fixed;\n  -webkit-background-repeat: no-repeat;\n  -moz-background-repeat: no-repeat;\n  -o-background-repeat: no-repeat; }\n\n.dashboard {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white;\n  border: 1px solid white;\n  padding-left: 10px; }\n  .dashboard h1 {\n    color: white; }\n\n.link {\n  margin-top: 10px; }\n  .link a {\n    color: #333;\n    font-weight: bolder; }\n\n.upload {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n  .upload h1 {\n    color: white; }\n  .upload .imageUpload {\n    width: 250px;\n    height: auto;\n    margin-bottom: 30px; }\n    .upload .imageUpload img {\n      max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__ = __webpack_require__("../../../../angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medicine_service__ = __webpack_require__("../../../../../src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = (function () {
    function EditComponent(fb, userService, route, router, flashMsg, medicineService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.flashMsg = flashMsg;
        this.medicineService = medicineService;
        this.enableR = false;
        this.inValid = false;
        this.medicine = {};
        this.EditMedicineForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            exportedDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            importedDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            expiredDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            storedPlace: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
        });
    }
    EditComponent.prototype.errorHandler = function (event) {
        console.debug(event);
        this.imageLink = 'invalid';
    };
    EditComponent.prototype.ngOnDestroy = function () {
        if (this.editMedicineSubscription) {
            this.editMedicineSubscription.unsubscribe();
        }
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap
            .switchMap(function (params) {
            _this.medicineId = params.get('medicineId');
            return _this.medicineService.getContentMedicine(_this.medicineId);
        })
            .subscribe(function (data) {
            if (data.success) {
                _this.medicine = data.medicine;
                _this.imageLink = _this.medicine['imageUrl'];
                _this.EditMedicineForm.controls['name'].setValue(_this.medicine['name']);
                _this.EditMedicineForm.controls['country'].setValue(_this.medicine['country']);
                _this.EditMedicineForm.controls['exportedDate'].setValue(_this.medicine['exportedDate']);
                _this.EditMedicineForm.controls['importedDate'].setValue(_this.medicine['importedDate']);
                _this.EditMedicineForm.controls['expiredDate'].setValue(_this.medicine['expiredDate']);
                _this.EditMedicineForm.controls['quantity'].setValue(_this.medicine['quantity']);
                _this.EditMedicineForm.controls['storedPlace'].setValue(_this.medicine['storedPlace']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { return console.log(err); });
    };
    EditComponent.prototype.onEditMedicine = function (edf) {
        var _this = this;
        this.editMedicineSubscription = this.medicineService.updateMedicine(this.medicineId, edf.value).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('updated New Value', { cssClass: 'alert-success', timeout: 3000 });
                _this.route.navigate(['/']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditComponent.prototype.DatePickerChange = function (picker) {
        console.log(picker);
    };
    EditComponent.prototype.linkChange = function (link) {
        this.imageLink = link.value;
    };
    Object.defineProperty(EditComponent.prototype, "name", {
        get: function () {
            return this.EditMedicineForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "country", {
        get: function () {
            return this.EditMedicineForm.get('country');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "exportedDate", {
        get: function () {
            return this.EditMedicineForm.get('exportedDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "importedDate", {
        get: function () {
            return this.EditMedicineForm.get('importedDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "expiredDate", {
        get: function () {
            return this.EditMedicineForm.get('expiredDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "quantity", {
        get: function () {
            return this.EditMedicineForm.get('quantity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "storedPlace", {
        get: function () {
            return this.EditMedicineForm.get('storedPlace');
        },
        enumerable: true,
        configurable: true
    });
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/components/dashboard/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages_module_flash_messages_service__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_5__services_medicine_service__["a" /* MedicineService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/dialog-user/dialog-user.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{medicine.name}}</mat-card-title>\n      <mat-card-subtitle>{{medicine._id}}</mat-card-subtitle>\n      <mat-card-subtitle>ExpiredDate: {{medicine.expiredDate}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{medicine.imageUrl}}\" alt=\"avatar\">\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"editMedicine()\" [routerLink]=\"['/edit', medicine._id]\">Edit</button>\n      <button mat-raised-button color=\"accent\" (click)=\"removeMedicine(medicine._id)\">Remove</button>\n      <button mat-icon-button >\n        <mat-icon color=\"accent\" (click)=\"closeDialog()\">close</mat-icon>\n      </button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/home/dialog-user/dialog-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-header-image {\n  background-image: url(\"/assets/images/background.png\");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/dialog-user/dialog-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_medicine_service__ = __webpack_require__("../../../../../src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DialogUserComponent = (function () {
    function DialogUserComponent(route, medicineService, flashMsg, dialogRef, data) {
        this.route = route;
        this.medicineService = medicineService;
        this.flashMsg = flashMsg;
        this.dialogRef = dialogRef;
        this.data = data;
        this.removeSuccess = false;
    }
    DialogUserComponent.prototype.ngOnInit = function () {
        this.medicine = this.data.row;
        this.removeSuccess = false;
    };
    DialogUserComponent.prototype.ngOnDestroy = function () {
        if (this.medicineSubscription) {
            this.medicineSubscription.unsubscribe();
        }
    };
    DialogUserComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogUserComponent.prototype.editMedicine = function () {
        this.closeDialog();
    };
    DialogUserComponent.prototype.removeMedicine = function (medicineId) {
        var _this = this;
        var agree = confirm('Do you want to delete?');
        if (!agree) {
            this.closeDialog();
            return false;
        }
        this.medicineSubscription = this.medicineService.deleteMedicine(medicineId).subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('Deleted Successfully!', { cssClass: 'alert-success', timeout: 3000 });
                _this.removeSuccess = true;
                _this.closeDialog();
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
        }, function (err) { console.log(err); });
    };
    DialogUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-dialog-user',
            template: __webpack_require__("../../../../../src/app/components/home/dialog-user/dialog-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/dialog-user/dialog-user.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatDialogRef */], Object])
    ], DialogUserComponent);
    return DialogUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div class=\"controls\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <mat-form-field color=\"accent\" floatPlaceholder=\"always\">\n      <input matInput #filter placeholder=\"Filter Medicines\">\n    </mat-form-field>\n    <div>\n      <button mat-raised-button color=\"primary\" routerLink=\"/dashboard\">Add Products</button>\n      <button mat-raised-button (click)=\"filterExpiredProduct('warning')\" >\n        <mat-chip-list>\n            Warning Date Products &nbsp; <mat-chip color=\"accent\" selected=\"true\"> {{warningDateProducts}} </mat-chip>\n        </mat-chip-list>\n      </button>\n      <button mat-raised-button (click)=\"filterExpiredProduct('expired')\" >\n        <mat-chip-list>\n            Expired Date Products &nbsp; <mat-chip color=\"warn\" selected=\"true\"> {{expiredDateProducts}} </mat-chip>\n        </mat-chip-list>\n      </button>\n      <button mat-raised-button color=\"accent\" (click)=\"filterExpiredProduct('all')\"> ALL</button>\n    </div>\n  </div>\n  <div class=\"data\">\n      <mat-paginator #paginator\n      [length]=\"exampleDatabase.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"10\"\n      [pageSizeOptions]=\"[10, 25, 100]\">\n      </mat-paginator>\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"_id\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row._id}} </mat-cell>\n        </ng-container>\n        \n        <ng-container matColumnDef=\"imageUrl\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header> ImageUrl </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> \n            <img [src]=\"row.imageUrl\" alt=\"image\">\n          </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n        </ng-container>\n      \n      \n        <!-- exportedDate Column -->\n        <ng-container matColumnDef=\"exportedDate\" >\n          <mat-header-cell *matHeaderCellDef mat-sort-header > ExportedDate </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{formatDate(row.exportedDate)}} </mat-cell>\n        </ng-container>\n      \n        <!-- importedDate Column -->\n        <ng-container matColumnDef=\"importedDate\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> ImportedDate </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" > {{formatDate(row.importedDate)}}  </mat-cell>\n        </ng-container>\n        <!-- expiredDate Column -->\n        <ng-container matColumnDef=\"expiredDate\" >\n          <mat-header-cell  *matHeaderCellDef mat-sort-header> ExpiredDate </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" > {{formatDate(row.expiredDate)}} </mat-cell>\n        </ng-container>\n        <!-- Country Column -->\n        <ng-container matColumnDef=\"country\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Country </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" > {{row.country}} </mat-cell>\n        </ng-container>\n\n        <!-- Quantity Column -->\n        <ng-container matColumnDef=\"quantity\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Quantity </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" > {{row.quantity}} </mat-cell>\n        </ng-container>\n\n        <!-- storedPlace Column -->\n        <ng-container matColumnDef=\"storedPlace\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> storedPlace </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" > {{row.storedPlace}} </mat-cell>\n        </ng-container>\n\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row [class.warningDate]=\"warningDate(row)\" [class.expiredDate]=\"expiredDate(row)\"  *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getDataEachRow(row)\" ></mat-row>\n      </mat-table>\n      \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n#home {\n  height: auto;\n  padding: 50px;\n  background: #2A729B; }\n  #home .controls, #home .data, #home .paginate {\n    width: 100%; }\n  #home input {\n    color: black !important; }\n  #home mat-row {\n    cursor: pointer; }\n  #home mat-cell {\n    padding: 15px; }\n    #home mat-cell img {\n      max-width: 100%;\n      margin: 10px; }\n  #home mat-paginator {\n    color: white !important; }\n  #home .mat-select-value {\n    color: white; }\n  #home .mat-select-arrow {\n    color: white; }\n  #home .expiredDate {\n    background-color: red; }\n  #home .warningDate {\n    background-color: orange; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_medicine_service__ = __webpack_require__("../../../../../src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_user_dialog_user_component__ = __webpack_require__("../../../../../src/app/components/home/dialog-user/dialog-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomeComponent = (function () {
    function HomeComponent(fb, medicineService, dialog) {
        this.fb = fb;
        this.medicineService = medicineService;
        this.dialog = dialog;
        this.displayedColumns = ['_id', 'imageUrl', 'name', 'exportedDate', 'importedDate', 'expiredDate', 'country', 'quantity', 'storedPlace'];
        this.exampleDatabase = new ExampleDatabase();
        this.expiredDateProducts = 0;
        this.warningDateProducts = 0;
    }
    HomeComponent.prototype.ngOnDestroy = function () {
        this.medicineSubscription.unsubscribe();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineSubscription = this.medicineService.getMedicines().subscribe(function (data) {
            if (data.success) {
                _this.exampleDatabase.dataChange.next(data.medicines);
                // console.log(data.medicines);
                _this.dataCopied = data.medicines;
                _this.updateWarningProduct(_this.dataCopied);
            }
        });
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
        this.form = this.fb.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required]
        });
    };
    HomeComponent.prototype.filterExpiredProduct = function (value) {
        switch (value) {
            case 'expired':
                var expiredDates = this.dataCopied.filter(function (medicine) {
                    var date1 = new Date(medicine.expiredDate);
                    var date2 = new Date();
                    var threeDays = 3 * 1000 * 60 * 60 * 24;
                    var betweenTime = date1.getTime() - date2.getTime();
                    return betweenTime < threeDays;
                });
                this.exampleDatabase.dataChange.next(expiredDates);
                break;
            case 'all':
                this.exampleDatabase.dataChange.next(this.dataCopied);
                break;
            case 'warning':
                var warningDates = this.dataCopied.filter(function (medicine) {
                    var date1 = new Date(medicine.expiredDate);
                    var date2 = new Date();
                    var threeDays = 3 * 1000 * 60 * 60 * 24;
                    var fiveDays = 5 * 1000 * 60 * 60 * 24;
                    var betweenTime = date1.getTime() - date2.getTime();
                    return (betweenTime > threeDays && betweenTime < fiveDays);
                });
                this.exampleDatabase.dataChange.next(warningDates);
        }
    };
    HomeComponent.prototype.expiredDate = function (row) {
        var date1 = new Date(row.expiredDate);
        var date2 = new Date();
        var threeDays = 3 * 1000 * 60 * 60 * 24;
        var betweenTime = date1.getTime() - date2.getTime();
        if (betweenTime < threeDays) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.warningDate = function (row) {
        var date1 = new Date(row.expiredDate);
        var date2 = new Date();
        var threeDays = 3 * 1000 * 60 * 60 * 24;
        var fiveDays = 5 * 1000 * 60 * 60 * 24;
        var betweenTime = date1.getTime() - date2.getTime();
        if (betweenTime > threeDays && betweenTime < fiveDays) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.formatDate = function (dateInput) {
        var date = new Date(dateInput);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    };
    HomeComponent.prototype.createUser = function (form) {
        // this.exampleDatabase.addUser(form.value);
        this.form.reset();
    };
    HomeComponent.prototype.updateWarningProduct = function (dataCopied) {
        var _this = this;
        this.expiredDateProducts = 0;
        this.warningDateProducts = 0;
        dataCopied.map(function (each) {
            var date1 = new Date(each.expiredDate);
            var date2 = new Date();
            var threeDays = 3 * 1000 * 60 * 60 * 24;
            var fiveDays = 5 * 1000 * 60 * 60 * 24;
            var betweenTime = date1.getTime() - date2.getTime();
            if (betweenTime < threeDays) {
                _this.expiredDateProducts++;
            }
            else if (betweenTime < fiveDays) {
                _this.warningDateProducts++;
            }
        });
    };
    HomeComponent.prototype.getDataEachRow = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__dialog_user_dialog_user_component__["a" /* DialogUserComponent */], {
            width: '300px',
            // position:{top:'25px',left:'25px'},
            data: { row: row }
        });
        dialogRef.backdropClick().subscribe(function (result) {
            // console.log('backdrop Click');
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (dialogRef.componentInstance.removeSuccess) {
                // console.log(dialogRef.componentInstance.medicine._id);
                _this.dataCopied = _this.dataCopied.filter(function (each) {
                    return each._id != dialogRef.componentInstance.medicine._id;
                });
                _this.exampleDatabase.dataChange.next(_this.dataCopied);
                _this.updateWarningProduct(_this.dataCopied);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatPaginator */])
    ], HomeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */])
    ], HomeComponent.prototype, "sort", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());

var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        // Fill up the database with 100 users.
        // for(let i=0;i<15;i++){ this.addDataTestUser()} 
        // console.log(this.data);
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    ExampleDatabase.prototype.addDataTestUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        return {
            _id: '12421552',
            imageUrl: 'assets/images/ok.jpg',
            name: 'duong nguyen',
            exportedDate: new Date(),
            importedDate: new Date(),
            expiredDate: new Date(),
            country: 'USA',
            quantity: 10,
            storedPlace: 'B place'
        };
    };
    return ExampleDatabase;
}());

var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._paginator.page,
            this._filterChange,
            this._sort.sortChange
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            // console.log(this._exampleDatabase.data.slice());
            var datafilter = _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.country).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // const data = this._exampleDatabase.data.slice();
            // Grab the page's slice of data.
            var datapaginate = datafilter.splice(startIndex, _this._paginator.pageSize);
            // console.log(datapaginate);
            return _this.getSortedData(datapaginate);
        });
    };
    ExampleDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'id':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'name':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'exportedDate':
                    _c = [a.exportedDate, b.exportedDate], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'importedDate':
                    _d = [a.importedDate, b.importedDate], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'expiredDate':
                    _e = [a.expiredDate, b.expiredDate], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'country':
                    _f = [a.country, b.country], propertyA = _f[0], propertyB = _f[1];
                    break;
                case 'quantity':
                    _g = [a.quantity, b.quantity], propertyA = _g[0], propertyB = _g[1];
                    break;
                case 'storedPlace':
                    _h = [a.storedPlace, b.storedPlace], propertyA = _h[0], propertyB = _h[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f, _g, _h;
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/components/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n  <mat-toolbar-row>\n    <span class=\"menu\"><img src=\"assets/images/menu.png\" alt=\"menu\" (click)=\"openLeftNavbar()\"></span>\n    <span class=\"example-spacer\"></span>\n    <span class=\"title\">HostpitalApp</span>\n    <span class=\"example-spacer\"></span>\n    <span><img src=\"assets/images/logo.png\" alt=\"logo\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/layouts/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.title {\n  color: #8AC3E9;\n  font-size: 40px; }\n\n.menu {\n  cursor: pointer; }\n\n.navbar {\n  background-color: #1C3750; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layouts/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.openSideNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openLeftSideNav = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openLeftNavbar = function () {
        this.openLeftSideNav = (this.sideNavClosed) ? true : (this.openLeftSideNav) ? false : true;
        this.openSideNav.emit({ open: this.openLeftSideNav });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('openSideNav'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "openSideNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('closed'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "sideNavClosed", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/components/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layouts/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n  <div fxFlex=\"400px\" class=\"imageLogin\"></div>\n  <div fxFlex=\"400px\" fxLayoutAlign=\"center center\" class=\"login\" fxLayout=\"column\">\n      <h1>HostpitalApp Login</h1>\n      <form fxLayout=\"column\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\">\n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error *ngIf=\"username.errors && username.touched\">\n                <mat-error *ngIf=\"username.errors.required\">Username is Required.</mat-error>\n                <mat-error *ngIf=\"username.errors.CannotContainSpace\">Username Cannot Contain Space.</mat-error>       \n            </mat-error>  \n        </mat-form-field >\n        <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\n            <mat-error *ngIf=\"password.errors && password.touched\">\n                <mat-error *ngIf=\"password.errors.required\">Password is required.</mat-error>\n            </mat-error>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" [disabled]=\"form.invalid\" type=\"submit\">Login</button>\n        <span class=\"link\">have an account yet? <a routerLink=\"/register\">Register</a></span>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, #login {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n#login {\n  padding: 30px 0;\n  background: #2A729B no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-attachment: fixed;\n  -moz-background-attachment: fixed;\n  -o-background-attachment: fixed;\n  -webkit-background-repeat: no-repeat;\n  -moz-background-repeat: no-repeat;\n  -o-background-repeat: no-repeat; }\n\n.login {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n  .login h1 {\n    color: white; }\n\n.imageLogin {\n  background: url(\"/assets/images/login.png\") center center;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n\n.link {\n  margin-top: 10px; }\n  .link a {\n    color: #333;\n    font-weight: bolder; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_nospace_validators__ = __webpack_require__("../../../../../src/app/common/nospace.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, flashMsg, router, route) {
        this.userService = userService;
        this.flashMsg = flashMsg;
        this.router = router;
        this.route = route;
        this.enableR = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__common_nospace_validators__["a" /* CannotContainSpace */]]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    LoginComponent.prototype.onSubmit = function (rf) {
        var _this = this;
        this.enableR = true;
        this.userSubscription = this.userService.authenticateUser(rf.value)
            .subscribe(function (data) {
            if (data.success) {
                _this.userService.storeUserDate(data.token, data.user);
                _this.flashMsg.show('You are Logged In', { cssClass: 'alert-success', timeout: 2000 });
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
            else {
                _this.flashMsg.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"content\" fxLayout=\"row\" fxLayoutGap=\"20px\">\n    <div class=\"header\">\n      <p>Username:</p>\n      <p>Full Name:</p>\n      <p>Position:</p>\n      <p>Email:</p>\n      <p>Address:</p>\n      <p>Products Added:</p>\n      <p>Working Dates:</p>\n    </div>\n    <div class=\"infors\">\n      <p>{{user.username}}</p>\n      <p>{{user.name}}</p>\n      <p>Doctor</p>\n      <p>{{user.email}}</p>\n      <p>292/18 XVNT, P.25</p>\n      <p>105 Products</p>\n      <p>405 Dates</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, .profile {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n.profile {\n  padding: 30px 0;\n  background: #2A729B no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-attachment: fixed;\n  -moz-background-attachment: fixed;\n  -o-background-attachment: fixed;\n  -webkit-background-repeat: no-repeat;\n  -moz-background-repeat: no-repeat;\n  -o-background-repeat: no-repeat; }\n\n.content {\n  background: #2A729B;\n  padding: 50px 20px 70px;\n  color: white;\n  border-radius: 20px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('hosipital_user'))) {
            this.user = JSON.parse(localStorage.getItem('hosipital_user'));
            console.log(this.user);
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n    <div fxFlex=\"400px\" class=\"imageLogin\"></div>\n    <div fxFlex=\"400px\" fxLayoutAlign=\"center center\" class=\"register\" fxLayout=\"column\">\n        <h1>HostpitalApp Register</h1>\n        <form fxLayout=\"column\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm)\">\n          <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\" >\n            <mat-error *ngIf=\"name.errors && name.touched\">\n                <mat-error *ngIf=\"name.errors.required\">Name is Required.</mat-error>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\n            <mat-error *ngIf=\"email.errors && email.touched\">\n                <mat-error *ngIf=\"email.errors.required\">Email is Required.</mat-error>\n                <mat-error *ngIf=\"email.errors.CannotContainSpace\">Email cannot contain space.</mat-error>\n                <mat-error *ngIf=\"email.errors.emailTaken\">Email existed.</mat-error>\n                <mat-error *ngIf=\"email.errors.incorrectMailFormat\">Incorrect Email Format.</mat-error>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\n            <mat-error *ngIf=\"username.errors && username.touched\">\n                <mat-error *ngIf=\"username.errors.required\">Username is Required.</mat-error>\n                <mat-error *ngIf=\"username.errors.CannotContainSpace\">Username cannot contain space.</mat-error>\n                <mat-error *ngIf=\"username.errors.usernameTaken\">Username existed.</mat-error>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field color=\"accent\">\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngIf=\"password.errors && password.touched\">\n                <mat-error *ngIf=\"password.errors.required\">Password is Required.</mat-error>\n            </mat-error>\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\" [disabled]=\"registerForm.invalid || enableR\" type=\"submit\">Register</button>\n        </form>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  background-color: #2A729B; }\n\n.menu img {\n  max-width: 70%; }\n\n.mat-drawer-content {\n  background-color: #2A729B !important; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(255, 255, 255, 0) !important; }\n\ninput {\n  color: white; }\n\n.mat-form-field-placeholder {\n  color: white; }\n\n.mat-form-field-underline {\n  background-color: white; }\n\n.fullHeightWidthNav, #register {\n  height: calc(100vh - 64px);\n  box-sizing: border-box; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n.alert-success {\n  text-align: center;\n  color: yellowgreen;\n  font-size: 30px; }\n\n.alert-danger {\n  text-align: center;\n  color: red;\n  font-size: 30px; }\n\n#register {\n  padding: 30px 0;\n  background: #2A729B no-repeat center center fixed;\n  background-size: cover;\n  -webkit-background-attachment: fixed;\n  -moz-background-attachment: fixed;\n  -o-background-attachment: fixed;\n  -webkit-background-repeat: no-repeat;\n  -moz-background-repeat: no-repeat;\n  -o-background-repeat: no-repeat; }\n\n.register {\n  background-color: #2A729B;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n  .register h1 {\n    color: white; }\n\n.imageLogin {\n  background: url(\"/assets/images/login.png\") center center;\n  height: 500px;\n  border: 1px solid white;\n  box-shadow: 0 0 5px white; }\n\n.link {\n  margin-top: 10px; }\n  .link a {\n    color: #333;\n    font-weight: bolder; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_nospace_validators__ = __webpack_require__("../../../../../src/app/common/nospace.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_usernameRegister_validators__ = __webpack_require__("../../../../../src/app/common/usernameRegister.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_formatemail_validators__ = __webpack_require__("../../../../../src/app/common/formatemail.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_emailRegister_validators__ = __webpack_require__("../../../../../src/app/common/emailRegister.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, route, flashMsg) {
        this.userService = userService;
        this.route = route;
        this.flashMsg = flashMsg;
        this.enableR = false;
        this.registerForm = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__common_nospace_validators__["a" /* CannotContainSpace */]], Object(__WEBPACK_IMPORTED_MODULE_5__common_usernameRegister_validators__["a" /* usernameTaken */])(userService)],
            email: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__common_nospace_validators__["a" /* CannotContainSpace */], __WEBPACK_IMPORTED_MODULE_6__common_formatemail_validators__["a" /* incorrectMailFormat */]], Object(__WEBPACK_IMPORTED_MODULE_7__common_emailRegister_validators__["a" /* emailTaken */])(userService)],
            password: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required],
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (rf) {
        var _this = this;
        if (!rf.valid) {
            return false;
        }
        ;
        this.enableR = true;
        this.registerSubscription = this.userService.registerUser(rf.value)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMsg.show('Register successfully! You are now can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.route.navigate(['/login']);
            }
            else {
                _this.flashMsg.show('Something went Wrong!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.route.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.registerSubscription) {
            this.registerSubscription.unsubscribe();
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.registerForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () {
            return this.registerForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/image-url.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUrlDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageUrlDirective = (function () {
    function ImageUrlDirective() {
    }
    ImageUrlDirective.prototype.updateUrl = function () {
        this.src = this.default;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageUrlDirective.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageUrlDirective.prototype, "default", void 0);
    ImageUrlDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appImageUrl]',
            host: {
                '(error)': 'updateUrl()',
                '[src]': 'src'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ImageUrlDirective);
    return ImageUrlDirective;
}());



/***/ }),

/***/ "../../../../../src/app/guards/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = (function () {
    function UserGuard(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserGuard.prototype.canActivate = function (next, state) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    UserGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/medicine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicineService = (function () {
    function MedicineService(http) {
        this.http = http;
        // private backendUrl="http://localhost:3000/";
        this.backendUrl = "";
    }
    MedicineService.prototype.getMedicines = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.backendUrl + 'api/medicines/all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.addNewMedicine = function (newMedicine) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.post(this.backendUrl + 'api/create/medicine', newMedicine, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.getContentMedicine = function (medicineId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.backendUrl + 'api/medicines/all/' + medicineId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.updateMedicine = function (Id, newMedicine) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.put(this.backendUrl + 'api/medicines/update/' + Id, newMedicine, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.deleteMedicine = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.userToken);
        headers.append('Content-type', 'application/json');
        return this.http.delete(this.backendUrl + 'api/medicines/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.loadToken = function () {
        var token = localStorage.getItem('hosipital_token');
        this.userToken = token;
    };
    MedicineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MedicineService);
    return MedicineService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        // private backendUrl="http://localhost:3000/";
        this.backendUrl = "";
    }
    UserService.prototype.registerUser = function (newUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.backendUrl + 'api/users/register', newUser, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.checkExistUser = function (value) {
        return this.http.get(this.backendUrl + 'api/users/' + value)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.backendUrl + 'api/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.storeUserDate = function (token, user) {
        localStorage.setItem('hosipital_token', token);
        localStorage.setItem('hosipital_user', JSON.stringify(user));
        this.userToken = token;
        this.user = user;
    };
    UserService.prototype.isLoggedIn = function () {
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('hosipital_token');
        if (!token) {
            return false;
        }
        ;
        var expirationDate = jwtHelper.getTokenExpirationDate(token);
        var isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
    };
    UserService.prototype.loadToken = function () {
        var token = localStorage.getItem('hosipital_token');
        this.userToken = token;
    };
    UserService.prototype.logout = function () {
        this.userToken = null;
        this.user = null;
        localStorage.removeItem('hosipital_token');
        localStorage.removeItem('hosipital_user');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map