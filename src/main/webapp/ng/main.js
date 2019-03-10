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
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/redeem/redeem.component */ "./src/app/components/redeem/redeem.component.ts");
/* harmony import */ var _components_generate_pokemon_generate_pokemon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/generate-pokemon/generate-pokemon.component */ "./src/app/components/generate-pokemon/generate-pokemon.component.ts");










var appRoutes = [
    {
        path: "",
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: "landing",
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: "generate",
        component: _components_generate_pokemon_generate_pokemon_component__WEBPACK_IMPORTED_MODULE_9__["GeneratePokemonComponent"]
    },
    {
        path: "collection",
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_6__["CollectionComponent"]
    },
    {
        path: "shop",
        component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"]
    },
    {
        path: "redeem",
        component: _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_8__["RedeemComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>"

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
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");
/* harmony import */ var _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/redeem/redeem.component */ "./src/app/components/redeem/redeem.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_generate_pokemon_generate_pokemon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/generate-pokemon/generate-pokemon.component */ "./src/app/components/generate-pokemon/generate-pokemon.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/jwt-interceptor.service */ "./src/app/services/jwt-interceptor.service.ts");

















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
                _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["ShopComponent"],
                _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_11__["CollectionComponent"],
                _components_redeem_redeem_component__WEBPACK_IMPORTED_MODULE_12__["RedeemComponent"],
                _components_generate_pokemon_generate_pokemon_component__WEBPACK_IMPORTED_MODULE_14__["GeneratePokemonComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptorService"],
                    multi: true
                }],
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

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\" id=\"collection-section-header\">\n        <img\n          class=\"animated jello\"\n          id=\"pokedex-heading\"\n          src=\"https://fontmeme.com/permalink/190224/f87c04db0b54e3b89caa3d1d3ee405fb.png\"\n          alt=\"pokemon-font\"\n        />\n        <div id=\"card-gallery-grid\">\n          <div\n            class=\"pokemon-card-outer text-center\"\n            *ngFor=\"let pokemon of trainersPokemon\"\n          >\n            <h4 class=\"pokemon-card-name\">{{ pokemon.pokemonName }}</h4>\n            <img [src]=\"pokemon.image\" class=\"pokemon-card-img\" />\n            <div class=\"pokemon-card-info-cont\">\n              <p>Type: {{ pokemon.types }}</p>\n              <p>HP: {{ pokemon.stats[5].base_stat }}</p>\n  \n              <p>Attack: {{ pokemon.stats[3].base_stat }}</p>\n              <p>Defense: {{ pokemon.stats[4].base_stat }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(pokedexService, trainerService, router) {
        this.pokedexService = pokedexService;
        this.trainerService = trainerService;
        this.router = router;
    }
    CollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokedex_service__WEBPACK_IMPORTED_MODULE_2__["PokedexService"], _services_trainer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/components/generate-pokemon/generate-pokemon.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/generate-pokemon/generate-pokemon.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pokemon-card-outer {\n    margin: 15px;\n    height: 320px;\n    width: 50%;\n    text-align: center;\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    border: 5px solid yellow !important;\n    border-radius: 18px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid #ccc;\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\n    max-width: 50% !important;\n    transition: all 0.2s;\n  }\n\n  .pokemon-card-img {\n    border: 2px solid yellow;\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n    display: flex;\n    width: 50%;\n  }\n\n  .pokemon-card-info-cont {\n    margin-top: 10px;\n    font-size: 12px;\n    background-color: rgba(244, 248, 6, 0.952);\n    color: black;\n    width: 70%;\n    height: 40%;\n    display: flex;\n    flex-direction: column; \n    justify-content: center;\n  }\n\n  /* body {\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  } */\n\n  #newPokemonModal {\n    border: none;\n  }\n\n  #newPokemon-Modal-Content {\n    background-color: transparent !important;\n    border: none !important;\n  }\n\n  #newPokemon-Modal-Body {\n    background-color: transparent !important;\n    border: none !important;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .newPokemon-Modal-Buttons {\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    border: 2px solid yellow !important;\n    color: black;\n    width: 100%;\n  }\n\n  .newPokemon-Generate-Button {\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    border: 2px solid yellow !important;\n    color: white;\n    width: 80%;\n    margin-bottom: 30px;\n  }\n\n  #draw-button-container {\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n  }\n\n  #catch-em-all-header {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n\n  .pokemon-card-name {\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmF0ZS1wb2tlbW9uL2dlbmVyYXRlLXBva2Vtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdDQUF3QztJQUN4Qyx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFFQUFxRTtFQUN2RTs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYXRlLXBva2Vtb24vZ2VuZXJhdGUtcG9rZW1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2Vtb24tY2FyZC1vdXRlciB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1heC13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cblxuICAucG9rZW1vbi1jYXJkLWltZyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5wb2tlbW9uLWNhcmQtaW5mby1jb250IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgMjQ4LCA2LCAwLjk1Mik7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xuICB9ICovXG5cbiAgI25ld1Bva2Vtb25Nb2RhbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIFxuICAjbmV3UG9rZW1vbi1Nb2RhbC1Db250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAjbmV3UG9rZW1vbi1Nb2RhbC1Cb2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAubmV3UG9rZW1vbi1Nb2RhbC1CdXR0b25zIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubmV3UG9rZW1vbi1HZW5lcmF0ZS1CdXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAjZHJhdy1idXR0b24tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XG4gIH1cbiAgXG4gICNjYXRjaC1lbS1hbGwtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5wb2tlbW9uLWNhcmQtbmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/generate-pokemon/generate-pokemon.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/generate-pokemon/generate-pokemon.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\">  \n      <!-- <div class=\"container\" id=\"draw-button-container\"> -->\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12\">\n            <div id=\"drawButton\" class=\"draw-pokemon-cont text-center\">\n              \n              <img class=\"animated lightSpeedIn\" id=\"catch-em-all-header\"\n                src=\"https://fontmeme.com/permalink/190223/5cfbd92adaffbae8d5b421856e6543f5.png\"\n              />\n\n              <!--(click)=\"onClickMe()\"-->\n              <button class=\"newPokemon-Generate-Button\" data-toggle=\"modal\" data-target=\"#newpokemonModal\" (click)=\"onClick()\">\n                Get a pokemon\n              </button>\n            </div>\n          </div>\n        </div>\n      <!-- </div> -->\n\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"newpokemonModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newpokemonModel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content justify-content-center\" id=\"newPokemon-Modal-Content\">\n            <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\n\n              <img\n                src=\"http://i66.tinypic.com/2rrwdck.png\"\n                id=\"generate-pokemon-pokeball\"\n                class=\"mb-3 animated shake\"\n                (click)=\"onBallClick()\"\n              />\n\n              <div class=\"pokemon-card-outer text-center d-none\" id=\"generate-pokemon-card\">\n                <h4 class=\"pokemon-card-name\">{{pokemonName}}</h4>\n                <img src=\"{{pokemonSprite}}\" class=\"pokemon-card-img\"/>\n                <div class=\"pokemon-card-info-cont\">\n                  <p><b>Type: {{pokemonType}}</b></p>\n                  <p><b>HP: {{hp}}</b></p>\n                  <p><b>Attack: {{attack}}</b></p>\n                  <p><b>Defense: {{defense}}</b></p>\n                </div>\n              </div>\n\n              <button id=\"generate-pokemon-draw-btn\" type=\"button\" class=\"newPokemon-Modal-Buttons d-none\" (click)=\"onClick()\">\n                Draw Another!\n              </button>\n\n              <button type=\"button\" class=\"newPokemon-Modal-Buttons\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/generate-pokemon/generate-pokemon.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/generate-pokemon/generate-pokemon.component.ts ***!
  \***************************************************************************/
/*! exports provided: GeneratePokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePokemonComponent", function() { return GeneratePokemonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pokedex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pokedex.service */ "./src/app/services/pokedex.service.ts");
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var GeneratePokemonComponent = /** @class */ (function () {
    function GeneratePokemonComponent(pokedexService, trainerService, router) {
        this.pokedexService = pokedexService;
        this.trainerService = trainerService;
        this.router = router;
        this.cardShow = false;
    }
    GeneratePokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
    };
    // generatePokemon() {
    //   this.pokedexService.generatePokemon().subscribe(
    //     data => {
    //       this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
    //       this.pokemonType = data.types[0].type.name;
    //       this.pokemonSprite = data.sprites.front_default;
    //       this.hp = data.stats[5].base_stat;
    //       this.attack = data.stats[4].base_stat;
    //       this.defense = data.stats[3].base_stat;
    //     }
    //   );
    // }
    GeneratePokemonComponent.prototype.onClick = function () {
        var _this = this;
        this.pokedexService.generatePokemon().subscribe(function (data) {
            console.log("Pokemon: " + data);
            _this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
            _this.pokemonType = data.types[0].type.name;
            _this.pokemonSprite = data.sprites.front_default;
            _this.hp = data.stats[5].base_stat;
            _this.attack = data.stats[4].base_stat;
            _this.defense = data.stats[3].base_stat;
        });
        if (this.cardShow) {
            $("#generate-pokemon-pokeball").removeClass("d-none");
            $("#generate-pokemon-card").addClass("d-none");
            $("#generate-pokemon-draw-btn").addClass("d-none");
        }
    };
    GeneratePokemonComponent.prototype.onBallClick = function () {
        $("#generate-pokemon-pokeball").addClass("d-none");
        $("#generate-pokemon-card").removeClass("d-none");
        $("#generate-pokemon-draw-btn").removeClass("d-none");
        this.cardShow = true;
    };
    GeneratePokemonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-pokemon',
            template: __webpack_require__(/*! ./generate-pokemon.component.html */ "./src/app/components/generate-pokemon/generate-pokemon.component.html"),
            styles: [__webpack_require__(/*! ./generate-pokemon.component.css */ "./src/app/components/generate-pokemon/generate-pokemon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pokedex_service__WEBPACK_IMPORTED_MODULE_2__["PokedexService"],
            _services_trainer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GeneratePokemonComponent);
    return GeneratePokemonComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width:95%;\n  height: 100%;\n  border-collapse: collapse;\n  border: 1px solid black;\n}\n\ntable, th, td {\n  border: 1px solid black;\n}\n\n#leaderboardTable {\n  border: 2px solid yellow;\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n}\n\n#button {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 2px solid yellow;\n  color: white;\n}\n\nhtml,\nbody {\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n}\n\n.grid-container {\n  display: grid;\n  grid-gap: 50px 100px;\n}\n\n.tabletext{\n  color: white\n}\n\n.button {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 2px solid yellow;\n  color: white;   \n}\n\n/*html {\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n  }\n  body {\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n  }\n  \n  .main-container {\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n  }\n  \n  #landing-pokeball-cont {\n    text-align: center;\n    margin-top: 100px;\n  }\n  \n  #player-preview-section {\n  }\n  \n  .player-preview-heading {\n    text-align: center;\n    border: 1px solid yellow;\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    color: white;\n  }\n  \n  .user-item {\n  }\n  #tableusername{\n    background: linear-gradient(to top, black,black);\n    border: 2px solid yellow;\n    text-align: center;\n    color: white; \n  }\n  #username-label {\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    margin-left: 10px;\n    width: 50%;\n    padding: 5px;\n    border: 2px solid yellow;\n  }\n  \n  #username-container {\n    overflow-y: scroll;\n    max-height: 300px;\n  }\n\n  #button {\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    border: 2px solid yellow;\n    color: white;   \n  }\n\n  #leaderboardTable{\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n    border: 2px solid yellow;\n    text-align: center;\n    color: white;   \n  }*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxxRUFBcUU7QUFDdkU7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMERJIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6OTUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNsZWFkZXJib2FyZFRhYmxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG59XG5cbiNidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDUwcHggMTAwcHg7XG59XG5cbi50YWJsZXRleHR7XG4gIGNvbG9yOiB3aGl0ZVxufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gIGNvbG9yOiB3aGl0ZTsgICBcbn1cblxuLypodG1sIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XG4gIH1cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xuICB9XG4gIFxuICAubWFpbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcbiAgfVxuICBcbiAgI2xhbmRpbmctcG9rZWJhbGwtY29udCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG4gIFxuICAjcGxheWVyLXByZXZpZXctc2VjdGlvbiB7XG4gIH1cbiAgXG4gIC5wbGF5ZXItcHJldmlldy1oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC51c2VyLWl0ZW0ge1xuICB9XG4gICN0YWJsZXVzZXJuYW1le1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLGJsYWNrKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gIH1cbiAgI3VzZXJuYW1lLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICB9XG4gIFxuICAjdXNlcm5hbWUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICAgIGNvbG9yOiB3aGl0ZTsgICBcbiAgfVxuXG4gICNsZWFkZXJib2FyZFRhYmxle1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTsgICBcbiAgfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container  text-light  main-container\" id=\"mainContainer\">\n  <div class=\"row\">\n    <div class=\"col-md-6 justify-content-center\" id=\"player-preview-section\">\n      <div class=\"player-preview-heading\">\n        <h2>Player Preview</h2>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-6\" id=\"leaderboard-col\">\n      <div class=\"container\" id=\"leaderboard-container\">\n        <div class=\"row\">\n          <div>\n            <div>\n              <table class=\" col-md-6 justify-content-center\" id=\"leaderboardTable\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Username</th>\n                    <th scope=\"col\">Score</th>\n                  </tr>\n                </thead>\n                <tbody id=\"leaderboardBody\"></tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <form #playerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate id=\"username-container\">\n        <button class=\"center\" routerLink=\"/login\" id='button'>Temp to Login</button>\n        <button class=\"center\" routerLink=\"/register\" id='button'>Temp to Register</button>\n      </form>\n    </div>\n  </div>\n</div>\n-->\n<html>\n  <br>\n  <h1 style=\"color:white;\" align=\"center\">Top 10 Scores</h1>\n<div align=\"center\">\n  <div>\n    <table id=\"leaderboardTable\">\n      <thead>\n        </thead>\n        <tr>\n          <th class=\"tabletext\" id=\"tableusername\" scope=\"col\">Username</th>\n          <th class=\"tabletext\" id=\"tablescore\" scope=\"col\">Score</th>\n        </tr>\n      \n      <tbody id=\"leaderboardBody\"></tbody>\n    </table>\n  </div>\n  <br>\n  <div>\n    <button class=\"button\">Stats</button>\n  </div>\n  <br>\n</div>\n\n</html>\n"

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
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(trainerService, router) {
        this.trainerService = trainerService;
        this.router = router;
        this.configUrl = "http://localhost:8080/PokemonCollector/ng/leaderboard";
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch(this.configUrl)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            console.log(res);
            var table = document.getElementById('leaderboardBody');
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var data = res_1[_i];
                table.innerHTML = table.innerHTML + ("\n          <tr>\n      <td style=\"color: white; border: 1px solid black;\" align=\"left\" id =\"tableusername\">" + data.username + "</td> \n      <td style=\"color: white; border: 1px solid black;\" align=\"left\" id =\"tablescore\">" + data.score + "</td>\n      </tr>\n      ");
            }
        });
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer != null) {
            this.trainerService.checkSessionStorage();
            this.router.navigateByUrl("/PokemonCollector/ng/generate");
        }
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div class=\"container\" id=\"login-form-cont\">\n  <div class=\"row justify-content-center\">\n    <img\n      class=\"animated wobble\"\n      src=\"https://fontmeme.com/permalink/190223/df35ea09c6d606c33d4048e3403a3369.png\"\n      alt=\"\"\n      id=\"pokeFONT\"\n    />\n    <div class=\"col-md-6\">\n      <form\n        #loginForm=\"ngForm\"\n        (ngSubmit)=\"loginTrainer()\"\n        novalidate\n        id=\"login-form\"\n      >\n        <div class=\"form-group\">\n          <label for=\"USERNAME\">Username</label>\n          <input\n            type=\"text\"\n            required\n            #name=\"ngModel\"\n            name=\"USERNAME\"\n            class=\"form-control\"\n            id=\"USERNAME\"\n            [class.is-valid]=\"name.valid\"\n            [class.is-invalid]=\"name.invalid && name.touched\"\n            [(ngModel)]=\"trainerInput.username\"\n          />\n          <small\n            class=\"text-danger\"\n            [class.d-none]=\"name.valid || name.untouched\"\n            >Name is required.</small\n          >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"PASSWORD\">Password</label>\n          <input\n            type=\"password\"\n            required\n            #password=\"ngModel\"\n            name=\"PASSWORD\"\n            class=\"form-control\"\n            id=\"PASSWORD\"\n            [class.is-valid]=\"password.valid\"\n            [class.is-invalid]=\"password.invalid && password.touched\"\n            [(ngModel)]=\"trainerInput.password\"\n          />\n          <small\n            class=\"text-danger\"\n            [class.d-none]=\"password.valid || password.untouched\"\n            >Password is required.</small\n          >\n        </div>\n        <div\n          class=\"alert alert-danger alert-dismissible fade show d-none\"\n          id=\"login-alert\"\n          role=\"alert\"\n        >\n          <strong>User used login...</strong> It was not very effective.\n          <button\n            id=\"login-alert\"\n            type=\"button\"\n            class=\"close\"\n            aria-label=\"Close\"\n            (click)=\"onAlertClose()\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <button class=\"btn  btn-block \" id=\"login-form-btn\" type=\"submit\">\n          Login\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenService, trainerService, router) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.trainerService = trainerService;
        this.router = router;
        this.NO_LOGIN_FAILED = "";
        this.LOGIN_FAILED = "<p>Wrong username or password.</p>";
        this.currentLoginMessage = this.NO_LOGIN_FAILED;
        this.trainerInput = {
            userID: 0,
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            credits: 0,
            score: 0
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer != null) {
            this.trainerService.checkSessionStorage();
            this.router.navigateByUrl("/PokemonCollector/ng/generate");
        }
    };
    LoginComponent.prototype.loginTrainer = function () {
        var _this = this;
        this.authService
            .attemptLogin(this.trainerInput.username, this.trainerInput.password)
            .subscribe(function (data) {
            if (data != null) {
                _this.tokenService.setCurrentUserToken(data.headers.get("Authorization"), data);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _services_trainer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default Navbar -->\n<nav class=\"navbar navbar-expand-lg \" id=\"baseNavBar\" *ngIf=\"!login_status\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/login\" routerLink=\"login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/register\" routerLink=\"register\">Sign Up</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/landing\" routerLink=\"landing\">Home</a>\n        </li>\n      </ul>\n    </div>\n</nav>\n\n  <!-- Signed-In Navbar -->\n  <nav class=\"navbar navbar-expand-lg \" id=\"logged-nav-bar\" *ngIf=\"login_status\">\n    <img src=\"http://i65.tinypic.com/25iyve1.png\" alt=\"Image and video hosting by TinyPic\"/>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav2\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/generate\" routerLink=\"generate\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/shop\" routerLink=\"shop\">Shop</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/redeem\" routerLink=\"redeem\">Redeem</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/collection\" routerLink=\"collection\">View Collection</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link customLink\" href=\"#\" (click)=\"onLogout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(trainerService, router) {
        this.trainerService = trainerService;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
    };
    NavComponent.prototype.onLogout = function () {
        sessionStorage.clear();
        this.trainerService.updateLogout();
        this.router.navigateByUrl("/PokemonCollector/ng/landing");
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/redeem/redeem.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redeemClass {\n  height: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRlZW0vcmVkZWVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZGVlbS9yZWRlZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRlZW1DbGFzcyB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/redeem/redeem.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 redeemClass\">\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates velit\n      maxime inventore beatae repellat atque facilis voluptatum! Iure,\n      voluptatibus dolores. Temporibus sunt omnis veniam ea dolorem eius\n      adipisci est ab?\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pokedex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pokedex.service */ "./src/app/services/pokedex.service.ts");





var RedeemComponent = /** @class */ (function () {
    function RedeemComponent(trainerService, router, pokedexService) {
        this.trainerService = trainerService;
        this.router = router;
        this.pokedexService = pokedexService;
        this.pokemon = { id: 0, name: '', image: '', types: null, stats: null, count: 2 };
    }
    RedeemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
        this.getDuplicates();
    };
    //method that gets duplicates returned from service method and assigns it to variable
    RedeemComponent.prototype.getDuplicates = function () {
        this.duplicatePokemon = this.pokedexService.getDuplicates();
    };
    //method that gets redeemed credits returned from service method and assigns it to variable
    RedeemComponent.prototype.redeemAll = function () {
        this.credits = this.pokedexService.redeemAll();
    };
    //method that gets redeemed credits returned from service method based on a specific pokemon ID and assigns to variable
    RedeemComponent.prototype.redeemSpecific = function () {
        this.credits = this.pokedexService.redeemSpecific(this.pokemon.id);
    };
    RedeemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem',
            template: __webpack_require__(/*! ./redeem.component.html */ "./src/app/components/redeem/redeem.component.html"),
            styles: [__webpack_require__(/*! ./redeem.component.css */ "./src/app/components/redeem/redeem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_pokedex_service__WEBPACK_IMPORTED_MODULE_4__["PokedexService"]])
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

module.exports = "<div>\n  <form id=\"registerForm\" class=\"form-group\" #registerForm=\"ngForm\" (ngSubmit)=\"registerTrainer()\" method=\"POST\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username: </label>\n      <input name=\"username\" class=\"form-control\" required\n        placeholder=\"username\" #username>\n\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"username.errors.required\">\n          Username is required.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password: </label>\n      <input name=\"password\" class=\"form-control\" required type=\"password\"\n        placeholder=\"password\" #password>\n\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\">\n            Password is required.\n          </div>\n        </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"fname\">First Name: </label>\n      <input name=\"fname\" class=\"form-control\" required\n        placeholder=\"fname\" #fname>\n\n      <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"fname.errors.required\">\n          First name is required.\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"lname\">Last Name: </label>\n      <input name=\"lname\" class=\"form-control\" required\n        placeholder=\"lname\" #lname>\n\n      <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"lname.errors.required\">\n          Last name is required.\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"email\">Email: </label>\n      <input name=\"email\" class=\"form-control\" required type=\"email\"\n        placeholder=\"email\" #email>\n\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"email.errors.required\">\n          Email is required.\n        </div>\n      </div>\n    </div>\n\n    <input name=\"submit\" type=\"submit\" class=\"btn btn-outline-light\" [disabled]=\"!registerForm.form.valid\">\n  </form>\n</div>\n"

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
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer != null) {
            this.trainerService.checkSessionStorage();
            this.router.navigateByUrl("/PokemonCollector/ng/generate");
        }
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

module.exports = "html,\nbody {\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n}\n.pokemon-card-outer {\n  margin: 15px;\n  height: 320px;\n  width: 125;\n  text-align: center;\n  background-color: grey;\n  border: 5px solid yellow !important;\n  border-radius: 18px;\n}\n.shop-poke-name {\n  color: white;\n}\n.pokemon-card-outer img {\n  border: 1px solid white;\n}\n#card-gallery-grid {\n  padding-top: 100px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  align-items: center;\n}\n#card-gallery-grid .pokemon-card-outer {\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\n  max-width: 100%;\n  transition: all 0.2s;\n}\n#card-gallery-grid .pokemon-card-outer:hover {\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25);\n}\n#generate-pokemon-card {\n  margin: 15px;\n  height: 320px;\n  width: 65%;\n  text-align: center;\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 5px solid yellow !important;\n  border-radius: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.shop-form-scroll {\n}\n#shop-form {\n  height: 60%;\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n}\n.shop-form-item {\n  height: 200px;\n}\n.radio-card-grid {\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n  height: 100vh;\n  border: 2px solid yellow;\n  overflow-y: scroll;\n  padding-top: 100px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  align-items: center;\n}\n#newPokemonModal {\n  border: none;\n}\n#newPokemon-Modal-Header {\n}\n#newPokemon-x-button {\n  color: white;\n}\n#newPokemon-Modal-Content {\n  background-color: transparent !important;\n  border: none !important;\n}\n#newPokemon-Modal-Body {\n  background-color: transparent !important;\n  border: none !important;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n}\n#newPokemon-Modal-Footer {\n  border: none !important;\n  background-color: transparent !important;\n}\n.newPokemon-Modal-Buttons {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 2px solid yellow !important;\n  color: black;\n  width: 100%;\n}\n.newPokemon-Gneerate-Button {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 2px solid yellow !important;\n  color: black;\n  width: 80%;\n}\n#userInfoList {\n  list-style: none;\n}\n.userInfoItem {\n  color: white;\n}\n#logged-nav-bar {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  color: white;\n}\n.customLink {\n  style: none;\n  color: white;\n}\n.shop-buy-btn {\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\n  border: 2px solid yellow !important;\n  color: white;\n  width: 80%;\n  margin-bottom: 30px;\n}\n#shop-form-cont {\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\n}\n#shop-form-cont .row {\n  background: linear-gradient(\n    to bottom left,\n    #000066 0%,\n    #666699 100%\n  ) !important;\n}\n#shop-form-col {\n  background: linear-gradient(\n    to bottom left,\n    #000066 0%,\n    #666699 100%\n  ) !important;\n  text-align: center;\n  padding: 15px;\n}\n#poke-shop-header {\n}\n.customRadioBtn {\n  background-color: red;\n  padding: 10px;\n  border: 1px solid yellow;\n}\n.pokemon-card-name {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDREQUE0RDtFQUM1RCxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQTtBQUVBO0VBQ0UsV0FBVztFQUNYLDREQUE0RDtBQUM5RDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFOzs7O2NBSVk7QUFDZDtBQUNBO0VBQ0U7Ozs7Y0FJWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xufVxuLnBva2Vtb24tY2FyZC1vdXRlciB7XG4gIG1hcmdpbjogMTVweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDEyNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbi5zaG9wLXBva2UtbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wb2tlbW9uLWNhcmQtb3V0ZXIgaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbiNjYXJkLWdhbGxlcnktZ3JpZCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY2FyZC1nYWxsZXJ5LWdyaWQgLnBva2Vtb24tY2FyZC1vdXRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbiNjYXJkLWdhbGxlcnktZ3JpZCAucG9rZW1vbi1jYXJkLW91dGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcbn1cblxuI2dlbmVyYXRlLXBva2Vtb24tY2FyZCB7XG4gIG1hcmdpbjogMTVweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDY1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hvcC1mb3JtLXNjcm9sbCB7XG59XG5cbiNzaG9wLWZvcm0ge1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xufVxuXG4uc2hvcC1mb3JtLWl0ZW0ge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ucmFkaW8tY2FyZC1ncmlkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXdQb2tlbW9uTW9kYWwge1xuICBib3JkZXI6IG5vbmU7XG59XG4jbmV3UG9rZW1vbi1Nb2RhbC1IZWFkZXIge1xufVxuXG4jbmV3UG9rZW1vbi14LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI25ld1Bva2Vtb24tTW9kYWwtQ29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jbmV3UG9rZW1vbi1Nb2RhbC1Cb2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ld1Bva2Vtb24tTW9kYWwtRm9vdGVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdQb2tlbW9uLU1vZGFsLUJ1dHRvbnMge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3UG9rZW1vbi1HbmVlcmF0ZS1CdXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA4MCU7XG59XG5cbiN1c2VySW5mb0xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udXNlckluZm9JdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbG9nZ2VkLW5hdi1iYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jdXN0b21MaW5rIHtcbiAgc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNob3AtYnV5LWJ0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI3Nob3AtZm9ybS1jb250IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xufVxuI3Nob3AtZm9ybS1jb250IC5yb3cge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tIGxlZnQsXG4gICAgIzAwMDA2NiAwJSxcbiAgICAjNjY2Njk5IDEwMCVcbiAgKSAhaW1wb3J0YW50O1xufVxuI3Nob3AtZm9ybS1jb2wge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tIGxlZnQsXG4gICAgIzAwMDA2NiAwJSxcbiAgICAjNjY2Njk5IDEwMCVcbiAgKSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4jcG9rZS1zaG9wLWhlYWRlciB7XG59XG5cbi5jdXN0b21SYWRpb0J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xufVxuXG4ucG9rZW1vbi1jYXJkLW5hbWUge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\"> -->\n  <div class=\"container \" id=\"shop-form-container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col justify-content-center\" id=\"shop-form-col\">\n        <div class=\"shop-form-scroll\">\n          <form name=\"buyForm\" #buyForm=\"ngForm\" (ngSubmit)=\"onBuySubmit()\" novalidate>\n            <div id=\"shop-form-header\">\n              <img\n                class=\"animated shake\"\n                id=\"poke-shop-header\"\n                src=\"https://fontmeme.com/permalink/190223/7f951f27330efe3f5e717c68950edf06.png\"\n                alt=\"\"\n              />\n              <button\n                data-toggle=\"modal\"\n                data-target=\"#newpokemonModal\"\n                class=\"shop-buy-btn\"\n                type=\"submit\"\n              >\n                Buy\n              </button>\n              <div\n                class=\"alert alert-danger alert-dismissible fade show d-none\"\n                id=\"no-credit-alert\"\n                role=\"alert\"\n              >\n                <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\n  \n                <strong>Oops!!</strong> You dont have enough credits.....\n  \n                <img\n                  src=\"http://i65.tinypic.com/27zauqe.png\"\n                  alt=\"Image and video hosting by TinyPic\"\n                />\n                <button\n                  id=\"login-alert\"\n                  type=\"button\"\n                  class=\"close\"\n                  aria-label=\"Close\"\n                  (click)=\"onAlertClose()\"\n                >\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n            </div>\n  \n            <div class=\"radio-card-grid\">\n              <div\n                class=\"form-check radio-form-item\"\n                *ngFor=\"let pokemon of pokemonArr\"\n              >\n                <input\n                  class=\"form-check-input customRadioBtn\"\n                  type=\"radio\"\n                  #pokemonCard=\"ngModel\"\n                  name=\"gridRadios\"\n                  value=\"{{ pokemon.pokemonId }}\"\n                  checked\n                  [(ngModel)]=\"pokemonModel.pokemonId\"\n                />\n                <div class=\"pokemon-card-outer\">\n                  <label\n                    class=\"form-check-label shop-poke-name\"\n                    for=\"gridRadios1\"\n                  >\n                    {{ pokemon.pokemonName }}\n                  </label>\n                  <img class=\"pokemon-card-img\" src=\"{{ pokemon.URL }}\" />\n                  <div class=\"pokemon-card-info-cont\">\n                    <p>Type: {{ pokemon.pokemonType }}</p>\n  \n                    <p>HP: {{ pokemon.hp }}</p>\n                    <p>Attack: {{ pokemon.attack }}</p>\n                    <p>Defense: {{ pokemon.defense }}</p>\n                    <p>Cost: {{ pokemon.pokemonRarity }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n<<<<<<< HEAD\n<div>\n  <form>\n    <!-- <input class=\"form-check-input\" type=\"radio\" value=\"15\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\n    <label>15</label>\n    <input class=\"form-check-input\" type=\"radio\" value=\"30\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\n    <label>30</label>\n    <input class=\"form-check-input\" type=\"radio\" value=\"75\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\n    <label>75</label>\n    <input class=\"form-check-input\" type=\"radio\" value=\"150\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\n    <label>150</label> -->\n    <select name=\"setNumPoke\" class=\"form-control\" [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\n      <option value=0>Number of Pokemon per page</option>\n      <option value=20>20</option>\n      <option value=50>50</option>\n      <option value=100>100</option>\n    </select>\n  </form>\n</div>\n  <!--put number of pages in here-->\n  <div class=\"row justify-content-md-center\">\n    <nav aria-label=\"Page navigation example\">\n      <ul>\n        <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\n        <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\n      </ul>\n    </nav>\n=======\n>>>>>>> d20b5552ce59b465241ec60dab2d07d4bbaeaa13\n  </div>\n  \n  <!-- Modal -->\n  <div\n    class=\"modal fade\"\n    id=\"newpokemonModal\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"newpokemonModel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog\" role=\"document\">\n      <div\n        class=\"modal-content justify-content-center\"\n        id=\"newPokemon-Modal-Content\"\n      >\n        <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\n          <img\n            src=\"http://i66.tinypic.com/2rrwdck.png\"\n            id=\"generate-pokemon-pokeball\"\n            class=\"mb-3 animated shake\"\n            (click)=\"onBallClick()\"\n          />\n          <div\n            class=\"pokemon-card-outer text-center d-none \"\n            id=\"generate-pokemon-card\"\n          >\n            <!-- *ngFor=\"let pokemon of pokemonArr\" -->\n            <h4 class=\"pokemon-card-name\">{{ this.pokemonName }}</h4>\n  \n            <img src=\"{{ this.pokemonURL }}\" class=\"pokemon-card-img\" />\n            <div class=\"pokemon-card-info-cont\">\n              <p>Type: {{ this.pokemonType }}</p>\n              <p>HP: {{ this.hp }}</p>\n              <p>Attack: {{ this.attack }}</p>\n              <p>Defense: {{ this.defense }}</p>\n            </div>\n          </div>\n  \n          <button\n            type=\"button\"\n            class=\"newPokemon-Modal-Buttons \"\n            data-dismiss=\"modal\"\n          >\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- </div>\n    </div>\n  </div> -->\n  <div container>\n      <div row>\n        <div col>\n          navbar placeholder\n        </div>\n      </div>\n    </div>\n    <div container>\n      <div row>\n        <div col>\n         <form>\n            <select name=\"selectNumPoke\" [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\n              <option value=0>Number of Pokemon per page</option>\n              <option value=20>20</option>\n              <option value=50>50</option>\n              <option value=100>100</option>\n            </select>\n          </form>\n        </div>\n      </div>\n    </div>\n    \n      <!--put number of pages in here-->\n      <div class=\"row justify-content-md-center\">\n        <nav aria-label=\"Page navigation example\">\n          <ul>\n            <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\n            <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\n          </ul>\n        </nav>\n      </div>\n    \n    <div class=\"radio-card-grid\" *ngIf=\"pokePages\">\n      <div class=\"form-check radio-form-item\" *ngFor=\"let pokemon of pokePages\">\n        <input class=\"form-check-input customRadioBtn\" type=\"radio\" name=\"gridRadios\"\n          value=\"{{allPoke.pokemon.id}}\" checked/>\n      </div>\n    </div>\n    \n  "

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");





var ShopComponent = /** @class */ (function () {
    function ShopComponent(http, trainerService, router) {
        this.http = http;
        this.trainerService = trainerService;
        this.router = router;
        this.TOTALPOKEMON = 151;
        this.currentPage = 0;
        this.cardShow = false;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.populatePokeArray();
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
    };
    ShopComponent.prototype.onBallClick = function () {
        //Hide pokeball img and show card div
        $("#generate-pokemon-pokeball").addClass("d-none");
        $("#generate-pokemon-card").removeClass("d-none");
        $("#generate-pokemon-draw-btn").removeClass("d-none");
        this.cardShow = true;
    };
    ShopComponent.prototype.getAllPokemon = function () {
        return this.http.get("/PokemonCollector/servlet/allpokemon");
    };
    //method that calls above observable
    ShopComponent.prototype.populatePokeArray = function () {
        var _this = this;
        this.getAllPokemon().subscribe(function (data) {
            //put all pokemon into pokemon array
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.allPoke[i] = data[i];
            }
            console.log(_this.allPoke);
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
    ShopComponent.prototype.buyPokemon = function (pokemonID) {
        // Check if user already owns specified Pokemon:
        var owned = false; // fix this when we actually have access to the cache
        // If the user does not own the Pokemon, add it to their collecion:
        if (!owned) {
            return this.http.post("/PokemonCollector/servlet/purchase", pokemonID);
        }
        else {
            alert("You already own that Pokemon");
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_trainer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    /*
      This function takes in 2 parameters, the username and password and
      returns an observable. It makes a HTTP POST request to the login endpoint
    */
    AuthService.prototype.attemptLogin = function (username, password) {
        var credentials = new FormData();
        credentials.append("USERNAME", username);
        credentials.append("PASSWORD", password);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.login, credentials, {
            headers: this.getHttpHeaders(),
            observe: "response"
        });
    };
    AuthService.prototype.getHttpHeaders = function () {
        //Creates headers for the HTTP post request to get around CORS filters
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
        return headers;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/jwt-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/jwt-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");



var JwtInterceptorService = /** @class */ (function () {
    //Injects tokenSerivce into JwtInterceptorService
    function JwtInterceptorService(tokenService) {
        this.tokenService = tokenService;
    }
    //Before any HTTP request is sent, it intercepts the HTTP request
    JwtInterceptorService.prototype.intercept = function (req, next) {
        //If you are on the login page
        if (req.url.includes("login") || req.url.includes("register")) {
            return next.handle(req);
        }
        req = req.clone({
            headers: this.tokenService.getAuthorizedRequestHeader()
        });
        return next.handle(req);
    };
    JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], JwtInterceptorService);
    return JwtInterceptorService;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _temp_tempPoke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../temp/tempPoke */ "./src/app/temp/tempPoke.ts");




var PokedexService = /** @class */ (function () {
    function PokedexService(_http) {
        this._http = _http;
    }
    PokedexService.prototype.generatePokemon = function () {
        return this._http.get("/PokemonCollector/servlet/generatePokemon");
    };
    PokedexService.prototype.getTrainersPokemon = function (newTrainer) {
        console.log(newTrainer);
        return _temp_tempPoke__WEBPACK_IMPORTED_MODULE_3__["POKEMON"];
    };
    //method that returns an array of Pokemon objects in response
    PokedexService.prototype.getDuplicates = function () {
        //make GET request, get array of Pokemon objects
        this._http
            .get("/PokemonCollector/servlet/duplicate")
            .subscribe(function (Response) {
            //test what we get as response
            console.log(Response);
            //assign data from response to duplicatePokemon variable
            /*WRITE CODE HERE*/
        });
        //return the array of Pokemon
        return this.duplicatePokemon;
    };
    //method that redeems all pokemon and returns credits gained and total credits after redeem
    PokedexService.prototype.redeemAll = function () {
        //make GET request, get array of 'int's which will resemble credits earned and credits after redeem
        this._http
            .get("/PokemonCollector/servlet/redeemAll")
            .subscribe(function (Response) {
            //test what we get as response
            console.log(Response);
            //assign data from response to credits variable
            /*WRITE CODE HERE*/
        });
        //return the credits
        return this.credits;
    };
    //method that redeems specific pokemon and returns credits gained and total credits after redeem
    PokedexService.prototype.redeemSpecific = function (pokemonId) {
        //make POST request, get array of 'int's which will resemble credits earned and credits after redeem
        this._http
            .post("/PokemonCollector/servlet/redeem", pokemonId)
            .subscribe(function (Response) {
            //test what we get as response
            console.log(Response);
            //assign data from response to credits variable
            /*WRITE CODE HERE*/
        });
        //return the credits
        return this.credits;
    };
    PokedexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokedexService);
    return PokedexService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trainer.service */ "./src/app/services/trainer.service.ts");





var TokenService = /** @class */ (function () {
    function TokenService(router, trainerService) {
        this.router = router;
        this.trainerService = trainerService;
    }
    /*
    Sets a user token to session storage when the
    user logs in
    */
    TokenService.prototype.setCurrentUserToken = function (token, resp) {
        if (token) {
            sessionStorage.setItem("CURRENT_USER", token);
            sessionStorage.setItem("TRAINER_DATA", JSON.stringify(resp));
            this.trainerService.updateValidLogin(resp);
            this.router.navigateByUrl("/generate");
        }
        else {
            throw new Error();
        }
    };
    /*
    Gets rids of CORS filter requirements, allows communication between the Angular project and the Tomcat server.
    */
    TokenService.prototype.getAuthorizedRequestHeader = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Authorization": sessionStorage.getItem("CURRENT_USER"),
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        });
        return headers;
    };
    /*
    Gets rid of session storage
    */
    TokenService.prototype.logout = function () {
        sessionStorage.removeItem("CURRENT_USER");
    };
    //Checks to see if user is logged in
    TokenService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem("CURRENT_USER") !== null;
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _trainer_service__WEBPACK_IMPORTED_MODULE_4__["TrainerService"]])
    ], TokenService);
    return TokenService;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TrainerService = /** @class */ (function () {
    function TrainerService(_http) {
        this._http = _http;
        this.current_trainer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.current_trainer_bs = this.current_trainer.asObservable();
        this.login_status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.login_status_bs = this.login_status.asObservable();
    }
    //Method call for POST request for logging in a trainer.
    TrainerService.prototype.loginTrainer = function (credentials) {
        console.log(credentials);
        return this._http.post("/PokemonCollector/servlet/unfiltered/login", credentials, { observe: 'response' });
    };
    //Method call for POST request for registering a new trainer.
    TrainerService.prototype.createTrainer = function (credentials) {
        return this._http.post("/PokemonCollector/servlet/unfiltered/register", credentials, { observe: 'response' });
    };
    TrainerService.prototype.updateValidLogin = function (trainer) {
        this.current_trainer.next(trainer);
        this.login_status.next(true);
    };
    TrainerService.prototype.updateLogout = function () {
        this.current_trainer.next(null);
        this.login_status.next(false);
    };
    TrainerService.prototype.checkSessionStorage = function () {
        var check = sessionStorage.getItem("TRAINER_DATA");
        if (check != null) {
            this.current_trainer.next(JSON.parse(check));
            this.login_status.next(true);
        }
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
    production: false,
    api: {
        login: "/PokemonCollector/servlet/unfiltered/login"
    }
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

module.exports = __webpack_require__(/*! /home/idrios/Documents/workspace-sts-3.9.7.RELEASE/PokemonCollector/src/main/ngapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map