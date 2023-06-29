(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _pages_menupage_menupage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/menupage/menupage.component */ "./src/app/pages/menupage/menupage.component.ts");
/* harmony import */ var _pages_location_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/location/location.component */ "./src/app/pages/location/location.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'menu', component: _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"] },
    { path: 'menu/:id', component: _pages_menupage_menupage_component__WEBPACK_IMPORTED_MODULE_6__["MenupageComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'location', component: _pages_location_location_component__WEBPACK_IMPORTED_MODULE_7__["LocationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n    position: fixed;\r\n    top: 30%;\r\n    right: 0%;\r\n    width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 2px;\r\n}\r\n\r\n.icons a{\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    padding: 0px;\r\n    font-size: 12px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    margin: 2px;\r\n    text-align: left;\r\n    border-radius: 70px 0px 0px 70px;\r\n    -webkit-transform: translate(155px, 0px);\r\n            transform: translate(155px, 0px);\r\n    transition: all 1s;\r\n}\r\n\r\n.icons a:hover{\r\n    -webkit-transform: translate(0px, 0px);\r\n            transform: translate(0px, 0px);\r\n}\r\n\r\n.icons a:hover i{\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n\r\n.icons a i{\r\nmargin-right: 25px;\r\nbackground-color: white;\r\nheight: 40px;\r\nwidth: 40px;\r\ncolor: black;\r\ntext-align: center;\r\nline-height: 40px;\r\nborder-radius: 50%;\r\ntransition: all 1s;\r\n}\r\n\r\n.icons a i.fa-phone{\r\n   color: #2C80D3;\r\n   font-size: 22px;\r\n}\r\n\r\n.icons a i.fa-envelope{\r\n   color: #fa0910;\r\n   font-size: 22px;\r\n}\r\n\r\n.icons a i.fa-download{\r\n    color: #53c5ff;\r\n    font-size: 22px;\r\n}\r\n\r\n.facebook{\r\n    background-color: #2C80D3;\r\n    color: white;\r\n}\r\n\r\n.envelope{\r\n    background-color: #fa0910;\r\n    color: white;\r\n}\r\n\r\n.download{\r\n    background-color: #53c5ff;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- navbar  -->\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<!--Start Sticky Icon--> \n<div class=\"icons\">\n    <a href=\"\" class=\"facebook\"><i class=\"fa-solid fa-phone\"></i>+ 91 9087654321</a>\n    <a href=\"\" class=\"envelope\"><i class=\"fa-solid fa-envelope\"></i>Enquire now</a>\n    <a href=\"\" class=\"download\" (click)=\"openModal()\"><i class=\"fa-solid fa-download\"></i>Download Brochure</a>\n</div>\n <!--End Sticky Icon-->\n\n<!-- footer  -->\n<app-footer></app-footer>\n\n\n\n<!-- display brochure modal -->\n<div class=\"backdrop\" [ngStyle]=\"{'display':displayBrochureModal}\"></div>\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display':displayBrochureModal}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div *ngIf=\"displayBrochureModal=='block'\" class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"recipient-name\" class=\"col-form-label\">Recipient:</label>\n              <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"message-text\" class=\"col-form-label\">Message:</label>\n              <textarea class=\"form-control\" id=\"message-text\"></textarea>\n            </div>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RealEstate';
        this.isModalOpen = false;
        this.displayBrochureModal = 'none';
    }
    AppComponent.prototype.openModal = function () {
        this.displayBrochureModal = 'block';
    };
    AppComponent.prototype.closeModal = function () {
        this.displayBrochureModal = 'none';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/menu/menu.component */ "./src/app/pages/menu/menu.component.ts");
/* harmony import */ var _pages_menupage_menupage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/menupage/menupage.component */ "./src/app/pages/menupage/menupage.component.ts");
/* harmony import */ var _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sharepage/footer/footer.component */ "./src/app/sharepage/footer/footer.component.ts");
/* harmony import */ var _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sharepage/navbar/navbar.component */ "./src/app/sharepage/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_location_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/location/location.component */ "./src/app/pages/location/location.component.ts");
/* harmony import */ var _pages_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/brochure/brochure.component */ "./src/app/pages/brochure/brochure.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _pages_menupage_menupage_component__WEBPACK_IMPORTED_MODULE_7__["MenupageComponent"],
                _sharepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _sharepage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _pages_location_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"],
                _pages_brochure_brochure_component__WEBPACK_IMPORTED_MODULE_12__["BrochureComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\n\n  <h1 class=\"text-center\">About</h1>\n\n  <p>\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at assumenda tenetur facere quidem dicta recusandae autem nobis, obcaecati consequatur ipsa cum voluptas nam dolorem quibusdam tempore ea aut eos.\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut veniam sapiente optio fugit veritatis totam praesentium incidunt impedit quod aperiam, temporibus repellendus corporis ducimus laboriosam mollitia, similique enim alias.\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, nostrum? Maxime quis ut deleniti ducimus error ipsam suscipit accusamus. Ad, voluptatum! Saepe quis totam minus? Officia quia commodi debitis provident.\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio iste quibusdam enim veniam sint. Praesentium consequatur minus rerum? Tempora sunt fuga voluptas porro? Vitae numquam beatae aut omnis, ab rem.\n      <br/>\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At itaque, voluptates placeat ratione saepe autem eos expedita quasi velit dolore libero debitis ipsa nisi quaerat, labore ex obcaecati. Iusto, repellendus.\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quod et nam expedita labore enim numquam qui suscipit assumenda voluptas ducimus, perferendis quae aliquid illum debitis provident ad illo id!\n      <br/>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea mollitia tempora quos ipsam ratione, error ut veritatis temporibus sunt eum inventore magni cum qui laudantium beatae suscipit quo nihil?\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deserunt minima, alias assumenda reprehenderit voluptate at architecto dolorum atque dolorem consequuntur, ipsum obcaecati aperiam tempora mollitia nostrum corrupti consequatur quia.\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quis autem accusamus, ea, ratione beatae ut, perspiciatis dolor optio pariatur praesentium atque aliquam qui nesciunt quae. Porro quas vitae ex.\n      <br/>\n  </p>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/brochure/brochure.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/brochure/brochure.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/brochure/brochure.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/brochure/brochure.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"modalOpen\" class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">New message</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"recipient-name\" class=\"col-form-label\">Recipient:</label>\n            <input type=\"text\" class=\"form-control\" id=\"recipient-name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"message-text\" class=\"col-form-label\">Message:</label>\n            <textarea class=\"form-control\" id=\"message-text\"></textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Send message</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/brochure/brochure.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/brochure/brochure.component.ts ***!
  \******************************************************/
/*! exports provided: BrochureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrochureComponent", function() { return BrochureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrochureComponent = /** @class */ (function () {
    function BrochureComponent() {
        this.modalClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BrochureComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BrochureComponent.prototype, "modalOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BrochureComponent.prototype, "modalClosed", void 0);
    BrochureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brochure',
            template: __webpack_require__(/*! ./brochure.component.html */ "./src/app/pages/brochure/brochure.component.html"),
            styles: [__webpack_require__(/*! ./brochure.component.css */ "./src/app/pages/brochure/brochure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\n  <h1>Contact</h1>\n  <form class=\"col-lg-8\">\n      <div class=\"row\">\n          <div class=\"col-lg-6 mt-2 mb-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\" >\n          </div>\n          <div class=\"col-lg-6 mt-2 mb-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\" >\n          </div>\n          <div class=\"col-lg-12 mt-2 mb-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email ID\" >\n          </div>\n          <div class=\"col-lg-12 mt-2 mb-2\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile\" >\n          </div>\n          <div class=\"col-lg-12\">\n              <button class=\"btn btn-md btn-dark\">Submit</button>\n          </div>\n          \n\n\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner\r\n{\r\n    background-image: url('bannerimg.jpg');\r\n    height: 600px;\r\n    background-position: center top;\r\n    background-size: cover;\r\n}\r\n.content\r\n{\r\n    top: 30%;\r\n    left: 20%;\r\n    position: absolute;\r\n}\r\n.content h1 \r\n{\r\n    color: #fff;\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n  \r\n}\r\n.content a \r\n{\r\n    text-decoration: none;\r\n    background-color: #fff;\r\n    color: var(--primary-color);\r\n    padding: 15px 20px;\r\n    border-radius: 5px;\r\n}\r\n.content a:hover \r\n{\r\n    background-color: var(--primary-color);\r\n    color: #fff;\r\n}\r\n.stepBox \r\n{\r\n    background-color: #000;\r\n    padding: 20px 20px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n}\r\n.stepBox h1 \r\n{\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    color:var(--primary-color);\r\n}\r\n.stepBox p \r\n{\r\n    font-size: 20px;\r\n    font-style: italic;\r\n    color: #fff;\r\n}\r\n.highlight\r\n{\r\n    color: var(--primary-color);\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n.foodbox \r\n{\r\n    padding: 10px 5px;\r\n}\r\n.foodbox img\r\n{\r\n    width: 100%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 5px;\r\n}\r\n.foodbox h1 \r\n{\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n}\r\n.viewmorebtn\r\n{\r\n    text-decoration: none;\r\n    background-color:var(--primary-color);\r\n    color: #000;\r\n    padding: 10px 10px;\r\n    border-radius: 5px;\r\n    font-size: 18px;\r\n    \r\n}\r\n@media screen and (max-width:600px)\r\n{\r\n    .banner\r\n{\r\n    height: 700px;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"content\">\n      <h1 class=\"mb-5\">Fresh Cooked Food <br/> At Your Door.</h1>\n      <a routerLink=\"menu\">ORDER NOW <i class=\"bi bi-arrow-right\"></i></a>\n  </div>\n</div>\n<!-- step  -->\n<div class=\"container mt-5 mb-5\">\n  <h1 class=\"text-center\">How to get <span class=\"highlight\">fresh food</span></h1>\n  <div class=\"row mt-5\">\n      <!-- one  -->\n      <div class=\"col-lg-4 mt-2\">\n          <div class=\"stepBox\">\n              <h1>1</h1>\n              <p>select food</p>\n          </div>\n      </div>\n<!-- two -->\n      <div class=\"col-lg-4 mt-2\">\n          <div class=\"stepBox\">\n              <h1>2</h1>\n              <p>fill the details</p>\n          </div>\n      </div>\n      <!-- three  -->\n      <div class=\"col-lg-4 mt-2\">\n          <div class=\"stepBox\">\n              <h1>3</h1>\n              <p>your order delivered in minute</p>\n          </div>\n      </div>\n  </div>\n</div>\n\n<!-- foodbox  -->\n<div class=\"container mt-4 mb-4\">\n  <h1 class=\"text-center\">Customers <span class=\"highlight\">Favourites Food</span></h1>\n  <div class=\"row\">\n      <div class=\"col-lg-3 mt-3\" *ngFor=\"let fd of foodData;index as i\">\n          <div class=\"foodbox\" *ngIf=\"i<=3\">\n              <img src=\"{{fd.foodImg}}\" />\n              <h1>{{fd.foodName}}</h1>\n              <p>{{fd.foodPrice | currency:'INR'}}</p>\n          </div>\n      </div>\n  </div>\n  <a routerLink=\"menu\" class=\"viewmorebtn\">view more <i class=\"bi bi-arrow-right\"></i></a>\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/location/location.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/location/location.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google-map {\r\n    padding-bottom: 50%;\r\n    position: relative;\r\n}\r\n\r\n.google-map iframe {\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    position: absolute;\r\n}\r\n\r\n.location{\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: black;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%; \r\n  }\r\n\r\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\r\n\r\n@media screen and (max-width: 600px) {\r\n    .column {\r\n      width: 100%;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/pages/location/location.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/location/location.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"location\">\n  <h1 style=\"text-align: center; color: #fff; font-size: 50px;\">LOCATION</h1>\n</div>\n\n\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"google-map\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7195462549976!2d73.97175047385689!3d19.11995555059379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16eaf2eca79%3A0x6a985c25fb8a1b26!2sMonginis%20Cake%20Shop!5e0!3m2!1sen!2sin!4v1687345676114!5m2!1sen!2sin\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n      </div>\n    </div>\n    <div class=\"column\" style=\"background-color:#b2bc62!important;\">\n      <div style=\"color: white; font-family: 'Zapf Humanist 601BT - Demi' !important;\">\n        <h2 style=\"text-align: left;\">The New Hotspot Between Pune & Mumbai</h2>\n        <p>Winds Of Calm is a leisurely drive from the Eastern edge of Mumbai that has a great accessibility from the Mumbai-Pune expressway. Scenic highway views and magnificent weather are but a few of the charming delights that will make your commute a delight to behold.</p>\n        <p>\n          <b>Key Distances</b>\n        </p>\n\n        <ul>\n          <li>Bhimashankar Hills Trek – 18 mins</li>\n          <li>Neral Station – 35 mins</li>\n          <li>Karjat Station – 35 mins</li>\n          <li>Saltt Restaurant and Bar – 40 mins</li>\n          <li>Matheran – 45 mins</li>\n        </ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/location/location.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/location/location.component.ts ***!
  \******************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/pages/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/pages/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.foodbox \r\n{\r\n    padding: 10px 10px;\r\n} \r\n.foodbox img\r\n{\r\n    width: 100%;\r\n    height: 250px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 5px;\r\n} \r\n.foodbox h1 \r\n{\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    font-weight: bold;\r\n} \r\n.buybtn\r\n{\r\n\r\n    color: #000;\r\n    background-color: var(--primary-color);\r\n    padding: 10px 10px;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\n\n  <div class=\"row\">\n\n      <div class=\"col-lg-4\" *ngFor=\"let fd of foodData\">\n\n          <div class=\"foodbox mt-3 mb-3\">\n              <img src=\"{{fd.foodImg}}\">\n              <h1>{{fd.foodName}}</h1>\n              <p>{{fd.foodDetails}}</p>\n              <p>{{fd.foodPrice | currency:'INR'}}</p>\n              <br/>\n              <a class=\"buybtn\" [routerLink]=\"['/menu',fd.id]\">Buy Now &nbsp;<i class=\"bi bi-bag\"></i></a>\n          </div>\n\n      </div>\n\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/pages/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/menupage/menupage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/menupage/menupage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form\r\n{\r\n    margin-top: 10%;\r\n    width: 50%;\r\n}\r\nimg \r\n{\r\n    border-radius: 6px;\r\n    padding: 10px 20px;\r\n    width: 100%;\r\n    height: 500px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n@media screen and (max-width:600px) {\r\n    form \r\n    {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/pages/menupage/menupage.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/menupage/menupage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\n\n  <div class=\"row\">\n\n      <div class=\"col-lg-6\" *ngIf=\"menuData\">\n          <a routerLink=\"../../menu\" class=\"btn btn-sm btn-dark mb-3 \">Back</a>\n          <img src=\"{{menuData[0].foodImg}}\" width=\"100%\"/>\n          <h1 class=\"mt-3\">{{menuData[0].foodName}}</h1>\n          <p>{{menuData[0].foodDetails}}</p>\n          <p>{{menuData[0].foodPrice | currency :'INR'}}</p>\n      </div>\n\n      <div class=\"col-lg-6 col-12\">\n          <h1>Enter Your Details</h1>\n          <form>\n\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Full Name\" />\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Mobile\" />\n              <textarea class=\"form-control\" placeholder=\"Enter Your Address\"></textarea>\n              <button class=\"btn btn-md btn-dark mt-3\">Place Order</button>\n\n          </form>\n\n\n      </div> \n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/menupage/menupage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/menupage/menupage.component.ts ***!
  \******************************************************/
/*! exports provided: MenupageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenupageComponent", function() { return MenupageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenupageComponent = /** @class */ (function () {
    function MenupageComponent() {
    }
    MenupageComponent.prototype.ngOnInit = function () {
    };
    MenupageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menupage',
            template: __webpack_require__(/*! ./menupage.component.html */ "./src/app/pages/menupage/menupage.component.html"),
            styles: [__webpack_require__(/*! ./menupage.component.css */ "./src/app/pages/menupage/menupage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenupageComponent);
    return MenupageComponent;
}());



/***/ }),

/***/ "./src/app/sharepage/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\r\n{\r\n    overflow: hidden;\r\n    position: sticky;\r\n    top: 100%;\r\n    background-color:#000;\r\n    padding: 20px 10px;\r\n}\r\n\r\nh1 \r\n{\r\n    font-weight: bold;\r\n    color: #fff;\r\n    font-size: 20px;\r\n}\r\n\r\np \r\n{\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\na \r\n{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    padding: 0px 10px;\r\n    font-size: 17px;\r\n}\r\n\r\na:hover \r\n{\r\n    color: var(--primary-color);\r\n}\r\n\r\ni \r\n{\r\n    padding: 0px 10px;\r\n}\r\n\r\n.icons{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.social{\r\n  margin: 10px;\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 40px;\r\n  box-shadow: -5px 5px 15px #333;\r\n  text-align: center;\r\n  transition: all 0.3s;\r\n  overflow: hidden;\r\n}\r\n\r\n.social:hover{\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.social-icon{\r\n  text-decoration: none;\r\n  color: #e7e7e7;\r\n  padding: 12px;\r\n  margin-left: -10px; \r\n  font-size: 35px;\r\n}\r\n\r\n.social-icon:hover{\r\n  -webkit-animation: slide 1s ease;\r\n          animation: slide 1s ease;\r\n}\r\n\r\n.social>a{\r\n  padding: 0px;\r\n}\r\n\r\n.social:nth-child(1){\r\n  background: #3b5999;\r\n}\r\n\r\n.social:nth-child(2){\r\n  background: #38A1F3;\r\n}\r\n\r\n.social:nth-child(3){\r\n  background: #db4a39;\r\n}\r\n\r\n.social:nth-child(4){\r\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);\r\n}\r\n\r\n.social:nth-child(5){\r\n  background: #0077B5;\r\n}\r\n\r\n@-webkit-keyframes slide{\r\n  0%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n  50%{\r\n    -webkit-transform: translateX(20px);\r\n            transform: translateX(20px);\r\n    opacity: 0;\r\n  }\r\n  51%{\r\n    -webkit-transform: translateX(-20px);\r\n            transform: translateX(-20px);\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes slide{\r\n  0%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n  50%{\r\n    -webkit-transform: translateX(20px);\r\n            transform: translateX(20px);\r\n    opacity: 0;\r\n  }\r\n  51%{\r\n    -webkit-transform: translateX(-20px);\r\n            transform: translateX(-20px);\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/sharepage/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid footer mt-5\">\n  <div class=\"row\">\n      <!-- name  -->\n      <div class=\"col-lg-6 mt-3 mb-3\">\n          <h1>Cloudkitchenweb</h1>\n          <p>GOOD FOOD, GOOD EAT</p>\n\n           <!-- socialmedia -->\n     <div class=\"icons\">\n      <div class=\"social\">\n        <a href=\"#\">\n          <i class=\"social-icon fab fa-facebook-f\"></i>\n        </a>\n      </div>\n      <div class=\"social\">\n        <a href=\"#\">\n          <i class=\"social-icon fab fa-twitter\"></i>  \n        </a>\n      </div>\n      <div class=\"social\">\n        <a href=\"#\">\n          <i class=\"social-icon fab fa-google-plus-g\"></i>   \n        </a>\n      </div>\n      <div class=\"social\">\n        <a href=\"#\">\n          <i class=\"social-icon fab fa-instagram\"></i> \n        </a>\n      </div>\n      <div class=\"social\">\n        <a href=\"#\">\n          <i class=\"social-icon fab fa-linkedin-in\"></i>   \n        </a>\n      </div>\n    </div>\n      </div>\n      <!-- nav  -->\n      <div class=\"col-lg-4 mt-3 mb-3\">\n          <a routerLink=\"\">Home</a>\n          <a routerLink=\"menu\">Menu</a>\n          <a routerLink=\"about\">About</a>\n          <a routerLink=\"contact\">Contact</a>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sharepage/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sharepage/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/sharepage/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/sharepage/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/sharepage/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-light .navbar-nav .nav-link\r\n{\r\n    color: var(--secondary-color);\r\n}\r\n.navbar-light .navbar-nav .nav-link.active-link\r\n{\r\n    color: var(--primary-color);\r\n    text-decoration: underline;\r\n}\r\n.navbar{\r\n    font-family: 'Zapf Humanist 601BT - Demi';\r\n    font-size: 20px;\r\n    letter-spacing: 0em;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/sharepage/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" routerLink=\"\">\n      <img width=\"100\" height=\"100\" src=\"https://windsofcalm.com/wp-content/uploads/2021/08/WOCLogo_PNG.png\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ms-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\"  routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\" >Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"menu\" routerLinkActive=\"active-link\">Menu</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active-link\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"location\" routerLinkActive=\"active-link\">Location</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active-link\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n<!-- <nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n      <a href=\"#\" class=\"navbar-brand\">Brand</a>\n      <button type=\"button\" class=\"navbar-toggler\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <div class=\"navbar-nav\">\n              <a href=\"#\" class=\"nav-item nav-link active\">Home</a>\n              <a href=\"#\" class=\"nav-item nav-link\">Profile</a>\n              <a href=\"#\" class=\"nav-item nav-link\">Messages</a>\n              <a href=\"#\" class=\"nav-item nav-link disabled\" tabindex=\"-1\">Reports</a>\n          </div>\n          <div class=\"navbar-nav ms-auto\">\n              <a href=\"#\" class=\"nav-item nav-link\">Login</a>\n          </div>\n      </div>\n  </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/sharepage/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sharepage/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/sharepage/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/sharepage/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! H:\Angular\New folder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map