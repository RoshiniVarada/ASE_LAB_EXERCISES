webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_contact__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navControl, alertControl) {
        this.navControl = navControl;
        this.alertControl = alertControl;
    }
    HomePage.prototype.LoginIn = function () {
        var _this = this;
        var user = localStorage.getItem('name');
        var pwd = localStorage.getItem('password');
        if (this.username == user && this.pwd == pwd) {
            var alert = this.alertControl.create({
                title: "Successful",
                subTitle: "Login Successful",
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navControl.push(__WEBPACK_IMPORTED_MODULE_3__dash_contact__["a" /* ContactPage */]);
                        }
                    }]
            });
            alert.present();
        }
        else {
            var alert_1 = this.alertControl.create({
                title: "Cannot Login",
                subTitle: "Enter valid Username or Password",
                buttons: ['Close']
            });
            alert_1.present();
        }
    };
    HomePage.prototype.signup = function () {
        this.navControl.push(__WEBPACK_IMPORTED_MODULE_2__register_about__["a" /* AboutPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\login\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding="40%" class="bg">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating class ="login">Username</ion-label>\n\n      <ion-input type ="text"[(ngModel)]="username" id = input></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type = "password"[(ngModel)]="pwd" id = password></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div align="center">\n\n    <button ion-button (click)="LoginIn()">Log-In</button>\n\n    <button ion-button (click)="signup()">Sign-Up</button>\n\n  </div>\n\n<!--  <div>-->\n\n<!--    <ion-list>-->\n\n<!--      <ion-item>-->\n\n<!--        <ion-label floating>SearchContent</ion-label>-->\n\n<!--        <ion-input type = "text"[(ngModel)]="searchWord" id = searchWord></ion-input>-->\n\n<!--      </ion-item>-->\n\n<!--    </ion-list>-->\n\n<!--    <button ion-button (click)="getKnowledgeGraph()">Search</button>-->\n\n<!--  </div>-->\n\n<!--  <div>-->\n\n<!--    <ion-list>-->\n\n<!--      <ion-item>-->\n\n<!--        <ion-label floating>Images</ion-label>-->\n\n<!--        <ion-input type = "text"[(ngModel)]="searchImg" id = searchImg></ion-input>-->\n\n<!--      </ion-item>-->\n\n<!--    </ion-list>-->\n\n<!--    <button ion-button (click)="getSearchedImages()">SearchImage</button>-->\n\n<!--  </div>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\login\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.searchData = [];
    }
    ContactPage.prototype.getKnowledgeGraph = function () {
        var _this = this;
        console.log(this.searchWord);
        this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchWord +
            '&key=AIzaSyBVDjswXIJzRT-hUMRB56IqPCmBXVmwuZw&limit=1&indent=True').subscribe(function (data) {
            console.log(data);
            _this.searchName = data.itemListElement[0].result.name;
            _this.searchdesc = data.itemListElement[0].result.description;
            _this.searchUrl = data.itemListElement[0].result.detailedDescription.url;
        });
    };
    ContactPage.prototype.getSearchedImages = function () {
        var _this = this;
        console.log(this.searchImg);
        this.http.get('https://www.googleapis.com/customsearch/v1?q=' + this.searchImg +
            '&key=AIzaSyBVDjswXIJzRT-hUMRB56IqPCmBXVmwuZw&imgSize=medium&searchType=image&fileType=jpg&cx=005069354886028579975:vpkirx0dbmp').subscribe(function (data) {
            for (var i = 0; i < data.items.length; i++) {
                _this.searchData[i] = {
                    name: data.items[i].title,
                    link: data.items[i].link
                };
                _this.ImageBoo = data.items.length;
            }
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\dash\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Search Application\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="bg">\n\n  <div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Knowledge Search</ion-label>\n\n        <ion-input type = "text"[(ngModel)]="searchWord" id = searchWord></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button (click)="getKnowledgeGraph()">Search</button>\n\n  </div>\n\n\n\n  <div class="panel panel-default" *ngIf="searchName != null" >\n\n    <div class="panel-heading" style="color:white;"><b>Knowledge Results:</b></div>\n\n    <div class="panel-body">\n\n      <div class="list-group-item clearfix">\n\n        <div class="pull-left">\n\n          <h4 class="list-group-item-heading">Name: {{ searchName }}</h4>\n\n          <h4 class="list-group-item-heading">Description: {{ searchdesc }}g</h4>\n\n          <h4 class="list-group-item-heading">URL: {{ searchUrl }}g</h4>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n  <div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Images</ion-label>\n\n        <ion-input type = "text"[(ngModel)]="searchImg" id = searchImg></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button (click)="getSearchedImages()">SearchImage</button>\n\n  </div>\n\n\n\n  <div class="panel panel-default" *ngIf="ImageBoo!=null">\n\n    <div class="panel-heading" style="color:white"><b>Search Results for {{searchImg}}:</b></div>\n\n    <div class="panel-body">\n\n\n\n      <div *ngFor="let search of searchData" class="list-group-item clearfix">\n\n        <div class="pull-left">\n\n          <h5 class="list-group-item-heading">{{ search.name }}</h5>\n\n        </div>\n\n\n\n        <span class="pull-right">\n\n               <img src="{{ search.link }}" width="50" height="50">\n\n      </span>\n\n\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\dash\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__login_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__register_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__dash_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="LogIn" tabIcon="star"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="SignUp" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Home" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dash_contact__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_register_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dash_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_register_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_dash_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\app\app.html"*/'<div class="image"><ion-nav [root]="rootPage"></ion-nav></div>\n\n'/*ion-inline-end:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.Signup = function () {
        var _this = this;
        if (this.firstName == undefined || this.lastName == undefined || this.password == undefined || this.email == undefined) {
            this.alertCtrl.create({
                title: "InValid SignUp",
                message: "Enter valid data in fields",
                buttons: ['ok']
            });
        }
        else {
            localStorage.setItem("name", this.email);
            localStorage.setItem("password", this.password);
            var alert_ctrl = this.alertCtrl.create({
                title: "Successful",
                subTitle: "Registration Successful",
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_home__["a" /* HomePage */]);
                        }
                    }]
            });
            alert_ctrl.present();
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\register\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Sign-Up\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bg">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>FirstName</ion-label>\n\n      <ion-input type ="text"[(ngModel)]="firstName" id = firstName></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>LastName</ion-label>\n\n      <ion-input type ="text"[(ngModel)]="lastName" id = lastName></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type ="Email" [(ngModel)]="email" id = email></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type = "password"[(ngModel)]="password" id = password></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div padding align="center">\n\n    <button ion-button (click)="Signup()">Sign-Up</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sai Pavan\Documents\LAB4-Assignment\src\pages\register\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map