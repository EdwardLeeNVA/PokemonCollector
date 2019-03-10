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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pokémon Collector';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/redeem/redeem.component */ "./src/app/components/redeem/redeem.component.ts");
/* harmony import */ var _util_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util/routes */ "./src/app/util/routes.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_11__["ShopComponent"],
                _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"],
                _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_13__["RedeemComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_util_routes__WEBPACK_IMPORTED_MODULE_14__["AppRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/collection/collection.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/collection/collection.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/collection/collection.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\" id=\"collection-section-header\">\r\n        <img\r\n          class=\"animated jello\"\r\n          id=\"pokedex-heading\"\r\n          src=\"https://fontmeme.com/permalink/190224/f87c04db0b54e3b89caa3d1d3ee405fb.png\"\r\n          alt=\"pokemon-font\"\r\n        />\r\n        <div id=\"card-gallery-grid\">\r\n          <div\r\n            class=\"pokemon-card-outer text-center\"\r\n            *ngFor=\"let pokemon of trainersPokemon\"\r\n          >\r\n            <h4 class=\"pokemon-card-name\">{{ pokemon.pokemonName }}</h4>\r\n            <img [src]=\"pokemon.image\" class=\"pokemon-card-img\" />\r\n            <div class=\"pokemon-card-info-cont\">\r\n              <p>Type: {{ pokemon.types }}</p>\r\n              <p>HP: {{ pokemon.stats[5].base_stat }}</p>\r\n  \r\n              <p>Attack: {{ pokemon.stats[3].base_stat }}</p>\r\n              <p>Defense: {{ pokemon.stats[4].base_stat }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/collection/collection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/collection/collection.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pokedex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pokedex.service */ "./src/app/services/pokedex.service.ts");



var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(pokedexService) {
        this.pokedexService = pokedexService;
        this.trainer = {
            id: 0,
            username: '',
            password: '',
            f_name: '',
            l_name: '',
            email: ''
        };
    }
    CollectionComponent.prototype.ngOnInit = function () {
        this.getTrainersPokemon();
    };
    CollectionComponent.prototype.getTrainersPokemon = function () {
        this.trainersPokemon = this.pokedexService.getTrainersPokemon(this.trainer);
        console.log(this.trainersPokemon);
    };
    CollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collection',
            template: __webpack_require__(/*! ./collection.component.html */ "./src/app/components/collection/collection.component.html"),
            styles: [__webpack_require__(/*! ./collection.component.css */ "./src/app/components/collection/collection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokedex_service__WEBPACK_IMPORTED_MODULE_2__["PokedexService"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leaderboardTable{\r\n  border: 2px solid yellow;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n\r\n.item1 {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 3;\r\n}\r\n\r\n.item2 {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 3;\r\n}\r\n\r\n#button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow;\r\n  color: white;   \r\n}\r\n\r\nhtml, body {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-gap: 50px 100px;\r\n}\r\n\r\n#tableusername{\r\n  border: 1px solid black;\r\n}\r\n\r\n#tablescore{\r\n  border: 1px solid black;\r\n}\r\n\r\n/*html {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  body {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  \r\n  .main-container {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  \r\n  #landing-pokeball-cont {\r\n    text-align: center;\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  #player-preview-section {\r\n  }\r\n  \r\n  .player-preview-heading {\r\n    text-align: center;\r\n    border: 1px solid yellow;\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    color: white;\r\n  }\r\n  \r\n  .user-item {\r\n  }\r\n  #tableusername{\r\n    background: linear-gradient(to top, black,black);\r\n    border: 2px solid yellow;\r\n    text-align: center;\r\n    color: white; \r\n  }\r\n  #username-label {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    margin-left: 10px;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border: 2px solid yellow;\r\n  }\r\n  \r\n  #username-container {\r\n    overflow-y: scroll;\r\n    max-height: 300px;\r\n  }\r\n\r\n  #button {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow;\r\n    color: white;   \r\n  }\r\n\r\n  #leaderboardTable{\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow;\r\n    text-align: center;\r\n    color: white;   \r\n  }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUVBQXFFO0VBQ3JFLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMERJIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsZWFkZXJib2FyZFRhYmxle1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMztcclxufVxyXG5cclxuLml0ZW0yIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAzO1xyXG59XHJcblxyXG4jYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gIGNvbG9yOiB3aGl0ZTsgICBcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogNTBweCAxMDBweDtcclxufVxyXG5cclxuI3RhYmxldXNlcm5hbWV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiN0YWJsZXNjb3Jle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4vKmh0bWwge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2xhbmRpbmctcG9rZWJhbGwtY29udCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiAgXHJcbiAgI3BsYXllci1wcmV2aWV3LXNlY3Rpb24ge1xyXG4gIH1cclxuICBcclxuICAucGxheWVyLXByZXZpZXctaGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLWl0ZW0ge1xyXG4gIH1cclxuICAjdGFibGV1c2VybmFtZXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLGJsYWNrKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgfVxyXG4gICN1c2VybmFtZS1sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgfVxyXG4gIFxyXG4gICN1c2VybmFtZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAjYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICB9XHJcblxyXG4gICNsZWFkZXJib2FyZFRhYmxle1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gIH0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container  text-light  main-container\" id=\"mainContainer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 justify-content-center\" id=\"player-preview-section\">\r\n      <div class=\"player-preview-heading\">\r\n        <h2>Player Preview</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\" id=\"leaderboard-col\">\r\n      <div class=\"container\" id=\"leaderboard-container\">\r\n        <div class=\"row\">\r\n          <div>\r\n            <div>\r\n              <table class=\" col-md-6 justify-content-center\" id=\"leaderboardTable\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Username</th>\r\n                    <th scope=\"col\">Score</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"leaderboardBody\"></tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <form #playerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate id=\"username-container\">\r\n        <button class=\"center\" routerLink=\"/login\" id='button'>Temp to Login</button>\r\n        <button class=\"center\" routerLink=\"/register\" id='button'>Temp to Register</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n<html>\r\n<div class=\"grid-container\">\r\n  <div class=\"grid-item\">\r\n    <table class=\"grid-item\" id=\"leaderboardTable\">\r\n      <thead>\r\n        <tr>\r\n          <th id=\"tableusername\" scope=\"col\">Username</th>\r\n          <th id=\"tablescore\" scope=\"col\">Score</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody id=\"leaderboardBody\"></tbody>\r\n    </table>\r\n  </div>\r\n  <form #playerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate id=\"username-container\">\r\n    <div class=\"grid-item\">\r\n      <button class=\"center\" routerLink=\"/login\" id='button'>Temp to Login</button>\r\n    </div>\r\n    <div class=\"grid-item\">\r\n      <button class=\"center\" routerLink=\"/register\" id='button'>Temp to Register</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LandingComponent = /** @class */ (function () {
    function LandingComponent(http) {
        this.http = http;
        this.configUrl = "http://localhost:8080/PokemonCollector/ng/leaderboard";
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.http.get(this.configUrl)
            .subscribe(function (Response) {
            //console.log(Response);
            console.log("Updateing rows");
            var table = document.getElementById('leaderboardBody');
            for (var _i = 0, Response_1 = Response; _i < Response_1.length; _i++) {
                var data = Response_1[_i];
                table.innerHTML = table.innerHTML + ("\n      <td align=\"left\" id =\"tableusername\">" + data.username + "<td> \n      <td align=\"left\" id =\"tablescore\">" + data.score + "<td>\n      ");
            }
        });
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form id=\"loginForm\" class=\"form-group\" #loginForm=\"ngForm\" (ngSubmit)=\"loginTrainer()\" method=\"POST\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username: </label>\r\n      <input id=\"username\" name=\"username\" class=\"form-control\" required\r\n        placeholder=\"username\" #username>\r\n\r\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"username.errors.required\">\r\n          Username is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password: </label>\r\n      <input id=\"password\" name=\"password\" class=\"form-control\" required type=\"password\"\r\n        placeholder=\"password\" #password>\r\n\r\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"password.errors.required\">\r\n            Password is required.\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <input name=\"submit\" type=\"submit\" class=\"btn btn-outline-light\" [disabled]=\"!loginForm.form.valid\">\r\n  </form>\r\n</div>\r\n<form>\r\n  <div>Username: <input type = \"text\" name = \"username\" /></div>\r\n  <div>Last name: <input type = \"text\" name = \"password\" /></div>\r\n  <div><input type = \"submit\" name = \"log-in\" value = \"Log In\" /></div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(trainerService, router) {
        this.trainerService = trainerService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginTrainer = function () {
        var _this = this;
        var credentials = new FormData(document.querySelector("form"));
        this.trainerService.readTrainer(credentials).subscribe(function (data) { return _this.router.navigateByUrl("/home"); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/redeem/redeem.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkZWVtL3JlZGVlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/redeem/redeem.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  redeem works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/redeem/redeem.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.ts ***!
  \*******************************************************/
/*! exports provided: RedeemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemComponent", function() { return RedeemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RedeemComponent = /** @class */ (function () {
    function RedeemComponent() {
    }
    RedeemComponent.prototype.ngOnInit = function () {
    };
    RedeemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem',
            template: __webpack_require__(/*! ./redeem.component.html */ "./src/app/components/redeem/redeem.component.html"),
            styles: [__webpack_require__(/*! ./redeem.component.css */ "./src/app/components/redeem/redeem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RedeemComponent);
    return RedeemComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form id=\"registerForm\" class=\"form-group\" #registerForm=\"ngForm\" (ngSubmit)=\"registerTrainer()\" method=\"POST\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username: </label>\r\n      <input name=\"username\" class=\"form-control\" required\r\n        placeholder=\"username\" #username>\r\n\r\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"username.errors.required\">\r\n          Username is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password: </label>\r\n      <input name=\"password\" class=\"form-control\" required type=\"password\"\r\n        placeholder=\"password\" #password>\r\n\r\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"password.errors.required\">\r\n            Password is required.\r\n          </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"fname\">First Name: </label>\r\n      <input name=\"fname\" class=\"form-control\" required\r\n        placeholder=\"fname\" #fname>\r\n\r\n      <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"fname.errors.required\">\r\n          First name is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"lname\">Last Name: </label>\r\n      <input name=\"lname\" class=\"form-control\" required\r\n        placeholder=\"lname\" #lname>\r\n\r\n      <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"lname.errors.required\">\r\n          Last name is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email: </label>\r\n      <input name=\"email\" class=\"form-control\" required type=\"email\"\r\n        placeholder=\"email\" #email>\r\n\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          Email is required.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <input name=\"submit\" type=\"submit\" class=\"btn btn-outline-light\" [disabled]=\"!registerForm.form.valid\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(trainerService, router) {
        this.trainerService = trainerService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerTrainer = function () {
        var _this = this;
        var credentials = new FormData(document.querySelector("form"));
        this.trainerService.createTrainer(credentials).subscribe(function (data) { return _this.router.navigateByUrl("/landing"); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form>\r\n    <!-- <input class=\"form-check-input\" type=\"radio\" value=\"15\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>15</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"30\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>30</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"75\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>75</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"150\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>150</label> -->\r\n    <select [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\r\n      <option value=0>Number of Pokemon per page</option>\r\n      <option value=20>20</option>\r\n      <option value=50>50</option>\r\n      <option value=100>100</option>\r\n    </select>\r\n  </form>\r\n</div>\r\n  <!--put number of pages in here-->\r\n  <div class=\"row justify-content-md-center\">\r\n    <nav aria-label=\"Page navigation example\">\r\n      <ul>\r\n        <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\r\n        <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n<div class=\"radio-card-grid\" *ngIf=\"pokePages\">\r\n  <div class=\"form-check radio-form-item\" *ngFor=\"let pokemon of pokePages\">\r\n    <input class=\"form-check-input customRadioBtn\" type=\"radio\" name=\"gridRadios\"\r\n      value=\"{{allPoke.pokemon.id}}\" checked/>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ShopComponent = /** @class */ (function () {
    function ShopComponent(http) {
        this.http = http;
        this.TOTALPOKEMON = 150;
        this.currentPage = 0;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.populatePokeArray();
    };
    ShopComponent.prototype.getAllPokemon = function () {
        return this.http.get("localhost:8080/PokemonCollector/servlet/allPokemon");
    };
    ShopComponent.prototype.populatePokeArray = function () {
        var _this = this;
        this.getAllPokemon().subscribe(function (data) {
            //put all pokemon into pokemon array
            for (var i = 0; i < data.length; i++) {
                _this.allPoke[i] = data[i];
            }
        });
    };
    ShopComponent.prototype.populatePokePages = function () {
        var count = 0;
        this.currentPage = 0;
        //display number of pokemon on page from radio button
        for (var i = (this.currentPage * this.numPoke + 1); i < (this.currentPage * this.numPoke + this.numPoke); i++) {
            this.pokePages[count] = this.allPoke[i];
            count++;
        }
        this.numPages = Math.ceil(this.TOTALPOKEMON / this.numPoke);
    };
    //wrap around to first page if on last page
    ShopComponent.prototype.nextPage = function () {
        if (this.currentPage == this.numPages) {
            this.currentPage = 0;
        }
        else {
            this.currentPage++;
        }
    };
    //wrap around to last page if on first page
    ShopComponent.prototype.prevPage = function () {
        if (this.currentPage == 0) {
            this.currentPage = this.numPages;
        }
        else {
            this.currentPage--;
        }
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/services/pokedex.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokedex.service.ts ***!
  \*********************************************/
/*! exports provided: PokedexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokedexService", function() { return PokedexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _temp_tempPoke__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp/tempPoke */ "./src/app/temp/tempPoke.ts");



var PokedexService = /** @class */ (function () {
    function PokedexService() {
    }
    PokedexService.prototype.getTrainersPokemon = function (newTrainer) {
        console.log(newTrainer);
        return _temp_tempPoke__WEBPACK_IMPORTED_MODULE_2__["POKEMON"];
    };
    ;
    PokedexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PokedexService);
    return PokedexService;
}());



/***/ }),

/***/ "./src/app/services/trainer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/trainer.service.ts ***!
  \*********************************************/
/*! exports provided: TrainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerService", function() { return TrainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TrainerService = /** @class */ (function () {
    function TrainerService(_http) {
        this._http = _http;
    }
    //Method call fo POST request for registering a new trainer.
    TrainerService.prototype.readTrainer = function (credentials) {
        console.log(credentials);
        return this._http.post("/PokemonCollector/servlet/unfiltered/login", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    };
    //Method call fo POST request for registering a new trainer.
    TrainerService.prototype.createTrainer = function (credentials) {
        console.log(credentials);
        return this._http.post("/PokemonCollector/servlet/unfiltered/register", credentials, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
    };
    TrainerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainerService);
    return TrainerService;
}());



/***/ }),

/***/ "./src/app/temp/tempPoke.ts":
/*!**********************************!*\
  !*** ./src/app/temp/tempPoke.ts ***!
  \**********************************/
/*! exports provided: POKEMON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POKEMON", function() { return POKEMON; });
var POKEMON = [
    { id: 1,
        name: 'bulbasaur',
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        types: ["poison", "grass"],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 49,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],
        count: 2
    },
    { id: 2,
        name: 'ivysaur',
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        types: ["poison", "grass"],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 63,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 62,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 60,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],
        count: 3
    },
    { id: 3,
        name: 'venusaur',
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
        types: ["poison", "grass"],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 83,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 82,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 80,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],
        count: 5
    },
    { id: 4,
        name: 'charmander',
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        types: ["fire"],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 43,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 52,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 39,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],
        count: 5
    },
    { id: 5,
        name: 'charmeleon',
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        types: ["fire"],
        stats: [
            {
                "base_stat": 45,
                "effort": 0,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 65,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 58,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 64,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 58,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            }
        ],
        count: 1
    }
];


/***/ }),

/***/ "./src/app/util/routes.ts":
/*!********************************!*\
  !*** ./src/app/util/routes.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/redeem/redeem.component */ "./src/app/components/redeem/redeem.component.ts");







var AppRoutes = [
    {
        path: '',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"]
    },
    {
        path: 'landing',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'collection',
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_4__["CollectionComponent"]
    },
    {
        path: 'shop',
        component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"]
    },
    {
        path: 'redeem',
        component: _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_6__["RedeemComponent"]
    }
];


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\omarg\Documents\Workspace\PokemonCollector\src\main\ngapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map