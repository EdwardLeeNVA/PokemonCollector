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
        path: 'landing',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'generate',
        component: _components_generate_pokemon_generate_pokemon_component__WEBPACK_IMPORTED_MODULE_9__["GeneratePokemonComponent"]
    },
    {
        path: 'collection',
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_6__["CollectionComponent"]
    },
    {
        path: 'shop',
        component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"]
    },
    {
        path: 'redeem',
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

module.exports = ".pokemon-card-outer {\r\n    margin: 15px;\r\n    height: 320px;\r\n    width: 50%;\r\n    text-align: center;\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 5px solid yellow !important;\r\n    border-radius: 18px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n    max-width: 50% !important;\r\n    transition: all 0.2s;\r\n  }\r\n\r\n  .pokemon-card-img {\r\n    border: 2px solid yellow;\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n    display: flex;\r\n    width: 50%;\r\n  }\r\n\r\n  .pokemon-card-info-cont {\r\n    margin-top: 10px;\r\n    font-size: 12px;\r\n    background-color: rgba(244, 248, 6, 0.952);\r\n    color: black;\r\n    width: 70%;\r\n    height: 40%;\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n  }\r\n\r\n  /* body {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  } */\r\n\r\n  #newPokemonModal {\r\n    border: none;\r\n  }\r\n\r\n  #newPokemon-Modal-Content {\r\n    background-color: transparent !important;\r\n    border: none !important;\r\n  }\r\n\r\n  #newPokemon-Modal-Body {\r\n    background-color: transparent !important;\r\n    border: none !important;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .newPokemon-Modal-Buttons {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow !important;\r\n    color: black;\r\n    width: 100%;\r\n  }\r\n\r\n  .newPokemon-Generate-Button {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow !important;\r\n    color: white;\r\n    width: 80%;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  #draw-button-container {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n\r\n  #catch-em-all-header {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .pokemon-card-name {\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmF0ZS1wb2tlbW9uL2dlbmVyYXRlLXBva2Vtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdDQUF3QztJQUN4Qyx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFFQUFxRTtFQUN2RTs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYXRlLXBva2Vtb24vZ2VuZXJhdGUtcG9rZW1vbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2Vtb24tY2FyZC1vdXRlciB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgbWF4LXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuXHJcbiAgLnBva2Vtb24tY2FyZC1pbWcge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb2tlbW9uLWNhcmQtaW5mby1jb250IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgMjQ4LCA2LCAwLjk1Mik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgfSAqL1xyXG5cclxuICAjbmV3UG9rZW1vbk1vZGFsIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI25ld1Bva2Vtb24tTW9kYWwtQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNuZXdQb2tlbW9uLU1vZGFsLUJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubmV3UG9rZW1vbi1Nb2RhbC1CdXR0b25zIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXdQb2tlbW9uLUdlbmVyYXRlLUJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAjZHJhdy1idXR0b24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NhdGNoLWVtLWFsbC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb2tlbW9uLWNhcmQtbmFtZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/generate-pokemon/generate-pokemon.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/generate-pokemon/generate-pokemon.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-8\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12\">  \r\n      <!-- <div class=\"container\" id=\"draw-button-container\"> -->\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-12\">\r\n            <div id=\"drawButton\" class=\"draw-pokemon-cont text-center\">\r\n              \r\n              <img class=\"animated lightSpeedIn\" id=\"catch-em-all-header\"\r\n                src=\"https://fontmeme.com/permalink/190223/5cfbd92adaffbae8d5b421856e6543f5.png\"\r\n              />\r\n\r\n              <!--(click)=\"onClickMe()\"-->\r\n              <button class=\"newPokemon-Generate-Button\" data-toggle=\"modal\" data-target=\"#newpokemonModal\" (click)=\"onClick()\">\r\n                Get a pokemon\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <!-- </div> -->\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"newpokemonModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newpokemonModel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content justify-content-center\" id=\"newPokemon-Modal-Content\">\r\n            <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\r\n\r\n              <img\r\n                src=\"http://i66.tinypic.com/2rrwdck.png\"\r\n                id=\"generate-pokemon-pokeball\"\r\n                class=\"mb-3 animated shake\"\r\n                (click)=\"onBallClick()\"\r\n              />\r\n\r\n              <div class=\"pokemon-card-outer text-center d-none\" id=\"generate-pokemon-card\">\r\n                <h4 class=\"pokemon-card-name\">{{pokemonName}}</h4>\r\n                <img src=\"{{pokemonSprite}}\" class=\"pokemon-card-img\"/>\r\n                <div class=\"pokemon-card-info-cont\">\r\n                  <p><b>Type: {{pokemonType}}</b></p>\r\n                  <p><b>HP: {{hp}}</b></p>\r\n                  <p><b>Attack: {{attack}}</b></p>\r\n                  <p><b>Defense: {{defense}}</b></p>\r\n                </div>\r\n              </div>\r\n\r\n              <button id=\"generate-pokemon-draw-btn\" type=\"button\" class=\"newPokemon-Modal-Buttons d-none\" (click)=\"onClick()\">\r\n                Draw Another!\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"newPokemon-Modal-Buttons\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "#leaderboardTable {\r\n  border: 2px solid yellow;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow;\r\n  color: white;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-gap: 50px 100px;\r\n}\r\n\r\n#tableusername {\r\n  border: 1px solid black;\r\n}\r\n\r\n#tablescore {\r\n  border: 1px solid black;\r\n}\r\n\r\n/*html {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  body {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  \r\n  .main-container {\r\n    background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  }\r\n  \r\n  #landing-pokeball-cont {\r\n    text-align: center;\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  #player-preview-section {\r\n  }\r\n  \r\n  .player-preview-heading {\r\n    text-align: center;\r\n    border: 1px solid yellow;\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    color: white;\r\n  }\r\n  \r\n  .user-item {\r\n  }\r\n  #tableusername{\r\n    background: linear-gradient(to top, black,black);\r\n    border: 2px solid yellow;\r\n    text-align: center;\r\n    color: white; \r\n  }\r\n  #username-label {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    margin-left: 10px;\r\n    width: 50%;\r\n    padding: 5px;\r\n    border: 2px solid yellow;\r\n  }\r\n  \r\n  #username-container {\r\n    overflow-y: scroll;\r\n    max-height: 300px;\r\n  }\r\n\r\n  #button {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow;\r\n    color: white;   \r\n  }\r\n\r\n  #leaderboardTable{\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow;\r\n    text-align: center;\r\n    color: white;   \r\n  }*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUVBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBESSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVhZGVyYm9hcmRUYWJsZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogNTBweCAxMDBweDtcclxufVxyXG5cclxuI3RhYmxldXNlcm5hbWUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jdGFibGVzY29yZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi8qaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gIH1cclxuICBcclxuICAjbGFuZGluZy1wb2tlYmFsbC1jb250IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAjcGxheWVyLXByZXZpZXctc2VjdGlvbiB7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGF5ZXItcHJldmlldy1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaXRlbSB7XHJcbiAgfVxyXG4gICN0YWJsZXVzZXJuYW1le1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssYmxhY2spO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICB9XHJcbiAgI3VzZXJuYW1lLWxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICB9XHJcbiAgXHJcbiAgI3VzZXJuYW1lLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gICNidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gIH1cclxuXHJcbiAgI2xlYWRlcmJvYXJkVGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7ICAgXHJcbiAgfSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container  text-light  main-container\" id=\"mainContainer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 justify-content-center\" id=\"player-preview-section\">\r\n      <div class=\"player-preview-heading\">\r\n        <h2>Player Preview</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\" id=\"leaderboard-col\">\r\n      <div class=\"container\" id=\"leaderboard-container\">\r\n        <div class=\"row\">\r\n          <div>\r\n            <div>\r\n              <table class=\" col-md-6 justify-content-center\" id=\"leaderboardTable\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Username</th>\r\n                    <th scope=\"col\">Score</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody id=\"leaderboardBody\"></tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <form #playerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate id=\"username-container\">\r\n        <button class=\"center\" routerLink=\"/login\" id='button'>Temp to Login</button>\r\n        <button class=\"center\" routerLink=\"/register\" id='button'>Temp to Register</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n-->\r\n<html>\r\n<div class=\"flex-container\">\r\n  <div>\r\n    <table  id=\"leaderboardTable\">\r\n      <thead>\r\n        <tr>\r\n          <th id=\"tableusername\" scope=\"col\">Username</th>\r\n          <th id=\"tablescore\" scope=\"col\">Score</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody id=\"leaderboardBody\"></tbody>\r\n    </table>\r\n  </div>\r\n  <div>\r\n    <form #playerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate id=\"username-container\">\r\n      <div>\r\n        <button routerLink=\"/login\" id='button'>Temp to Login</button>\r\n      </div>\r\n      <div>\r\n        <button routerLink=\"/register\" id='button'>Temp to Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n</html>\r\n"

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
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LandingComponent = /** @class */ (function () {
    function LandingComponent(trainerService, router, http) {
        this.trainerService = trainerService;
        this.router = router;
        this.http = http;
        this.configUrl = "http://localhost:8080/PokemonCollector/ng/leaderboard";
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_3__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<div class=\"container\" id=\"login-form-cont\">\r\n  <div class=\"row justify-content-center\">\r\n    <img\r\n      class=\"animated wobble\"\r\n      src=\"https://fontmeme.com/permalink/190223/df35ea09c6d606c33d4048e3403a3369.png\"\r\n      alt=\"\"\r\n      id=\"pokeFONT\"\r\n    />\r\n    <div class=\"col-md-6\">\r\n      <form\r\n        #loginForm=\"ngForm\"\r\n        (ngSubmit)=\"loginTrainer()\"\r\n        novalidate\r\n        id=\"login-form\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <label for=\"USERNAME\">Username</label>\r\n          <input\r\n            type=\"text\"\r\n            required\r\n            #name=\"ngModel\"\r\n            name=\"USERNAME\"\r\n            class=\"form-control\"\r\n            id=\"USERNAME\"\r\n            [class.is-valid]=\"name.valid\"\r\n            [class.is-invalid]=\"name.invalid && name.touched\"\r\n            [(ngModel)]=\"trainerInput.username\"\r\n          />\r\n          <small\r\n            class=\"text-danger\"\r\n            [class.d-none]=\"name.valid || name.untouched\"\r\n            >Name is required.</small\r\n          >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"PASSWORD\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            required\r\n            #password=\"ngModel\"\r\n            name=\"PASSWORD\"\r\n            class=\"form-control\"\r\n            id=\"PASSWORD\"\r\n            [class.is-valid]=\"password.valid\"\r\n            [class.is-invalid]=\"password.invalid && password.touched\"\r\n            [(ngModel)]=\"trainerInput.password\"\r\n          />\r\n          <small\r\n            class=\"text-danger\"\r\n            [class.d-none]=\"password.valid || password.untouched\"\r\n            >Password is required.</small\r\n          >\r\n        </div>\r\n        <div\r\n          class=\"alert alert-danger alert-dismissible fade show d-none\"\r\n          id=\"login-alert\"\r\n          role=\"alert\"\r\n        >\r\n          <strong>User used login...</strong> It was not very effective.\r\n          <button\r\n            id=\"login-alert\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"onAlertClose()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <button class=\"btn  btn-block \" id=\"login-form-btn\" type=\"submit\">\r\n          Login\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<!-- Default Navbar -->\r\n<nav class=\"navbar navbar-expand-lg \" id=\"baseNavBar\" *ngIf=\"!login_status\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/login\" routerLink=\"login\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/register\" routerLink=\"register\">Sign Up</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/landing\" routerLink=\"landing\">Home</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>\r\n\r\n  <!-- Signed-In Navbar -->\r\n  <nav class=\"navbar navbar-expand-lg \" id=\"logged-nav-bar\" *ngIf=\"login_status\">\r\n    <img src=\"http://i65.tinypic.com/25iyve1.png\" alt=\"Image and video hosting by TinyPic\"/>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav2\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/generate\" routerLink=\"generate\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/shop\" routerLink=\"shop\">Shop</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/redeem\" routerLink=\"redeem\">Redeem</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/collection\" routerLink=\"collection\">View Collection</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"#\" (click)=\"onLogout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RedeemComponent = /** @class */ (function () {
    function RedeemComponent(trainerService, router) {
        this.trainerService = trainerService;
        this.router = router;
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
    };
    RedeemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem',
            template: __webpack_require__(/*! ./redeem.component.html */ "./src/app/components/redeem/redeem.component.html"),
            styles: [__webpack_require__(/*! ./redeem.component.css */ "./src/app/components/redeem/redeem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "html,\r\nbody {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n.pokemon-card-outer {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 125;\r\n  text-align: center;\r\n  background-color: grey;\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n}\r\n.shop-poke-name {\r\n  color: white;\r\n}\r\n.pokemon-card-outer img {\r\n  border: 1px solid white;\r\n}\r\n#card-gallery-grid {\r\n  padding-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n#card-gallery-grid .pokemon-card-outer {\r\n  border: 1px solid #ccc;\r\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  max-width: 100%;\r\n  transition: all 0.2s;\r\n}\r\n#card-gallery-grid .pokemon-card-outer:hover {\r\n  -webkit-transform: scale(1.25);\r\n          transform: scale(1.25);\r\n}\r\n#generate-pokemon-card {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 65%;\r\n  text-align: center;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.shop-form-scroll {\r\n}\r\n#shop-form {\r\n  height: 60%;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n.shop-form-item {\r\n  height: 200px;\r\n}\r\n.radio-card-grid {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  height: 100vh;\r\n  border: 2px solid yellow;\r\n  overflow-y: scroll;\r\n  padding-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n#newPokemonModal {\r\n  border: none;\r\n}\r\n#newPokemon-Modal-Header {\r\n}\r\n#newPokemon-x-button {\r\n  color: white;\r\n}\r\n#newPokemon-Modal-Content {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n}\r\n#newPokemon-Modal-Body {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  align-items: center;\r\n}\r\n#newPokemon-Modal-Footer {\r\n  border: none !important;\r\n  background-color: transparent !important;\r\n}\r\n.newPokemon-Modal-Buttons {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 100%;\r\n}\r\n.newPokemon-Gneerate-Button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 80%;\r\n}\r\n#userInfoList {\r\n  list-style: none;\r\n}\r\n.userInfoItem {\r\n  color: white;\r\n}\r\n#logged-nav-bar {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  color: white;\r\n}\r\n.customLink {\r\n  style: none;\r\n  color: white;\r\n}\r\n.shop-buy-btn {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: white;\r\n  width: 80%;\r\n  margin-bottom: 30px;\r\n}\r\n#shop-form-cont {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n#shop-form-cont .row {\r\n  background: linear-gradient(\r\n    to bottom left,\r\n    #000066 0%,\r\n    #666699 100%\r\n  ) !important;\r\n}\r\n#shop-form-col {\r\n  background: linear-gradient(\r\n    to bottom left,\r\n    #000066 0%,\r\n    #666699 100%\r\n  ) !important;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n#poke-shop-header {\r\n}\r\n.customRadioBtn {\r\n  background-color: red;\r\n  padding: 10px;\r\n  border: 1px solid yellow;\r\n}\r\n.pokemon-card-name {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDREQUE0RDtFQUM1RCxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQTtBQUVBO0VBQ0UsV0FBVztFQUNYLDREQUE0RDtBQUM5RDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFOzs7O2NBQW9HO0FBQ3RHO0FBQ0E7RUFDRTs7OztjQUFvRztFQUNwRyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7QUFDQTtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbn1cclxuLnBva2Vtb24tY2FyZC1vdXRlciB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgd2lkdGg6IDEyNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5zaG9wLXBva2UtbmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wb2tlbW9uLWNhcmQtb3V0ZXIgaW1nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuI2NhcmQtZ2FsbGVyeS1ncmlkIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FyZC1nYWxsZXJ5LWdyaWQgLnBva2Vtb24tY2FyZC1vdXRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuI2NhcmQtZ2FsbGVyeS1ncmlkIC5wb2tlbW9uLWNhcmQtb3V0ZXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuXHJcbiNnZW5lcmF0ZS1wb2tlbW9uLWNhcmQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2hvcC1mb3JtLXNjcm9sbCB7XHJcbn1cclxuXHJcbiNzaG9wLWZvcm0ge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxufVxyXG5cclxuLnNob3AtZm9ybS1pdGVtIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tY2FyZC1ncmlkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uTW9kYWwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1IZWFkZXIge1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi14LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1Db250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1Cb2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25ld1Bva2Vtb24tTW9kYWwtRm9vdGVyIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3UG9rZW1vbi1Nb2RhbC1CdXR0b25zIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3UG9rZW1vbi1HbmVlcmF0ZS1CdXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI3VzZXJJbmZvTGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXJJbmZvSXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9nZ2VkLW5hdi1iYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmN1c3RvbUxpbmsge1xyXG4gIHN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNob3AtYnV5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzaG9wLWZvcm0tY29udCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG59XHJcbiNzaG9wLWZvcm0tY29udCAucm93IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20gbGVmdCxcclxuICAgICMwMDAwNjYgMCUsXHJcbiAgICAjNjY2Njk5IDEwMCVcclxuICApICFpbXBvcnRhbnQ7XHJcbn1cclxuI3Nob3AtZm9ybS1jb2wge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSBsZWZ0LFxyXG4gICAgIzAwMDA2NiAwJSxcclxuICAgICM2NjY2OTkgMTAwJVxyXG4gICkgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4jcG9rZS1zaG9wLWhlYWRlciB7XHJcbn1cclxuXHJcbi5jdXN0b21SYWRpb0J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xyXG59XHJcblxyXG4ucG9rZW1vbi1jYXJkLW5hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\"> -->\r\n  <div class=\"container \" id=\"shop-form-container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col justify-content-center\" id=\"shop-form-col\">\r\n        <div class=\"shop-form-scroll\">\r\n          <form name=\"buyForm\" #buyForm=\"ngForm\" (ngSubmit)=\"onBuySubmit()\" novalidate>\r\n            <div id=\"shop-form-header\">\r\n              <img\r\n                class=\"animated shake\"\r\n                id=\"poke-shop-header\"\r\n                src=\"https://fontmeme.com/permalink/190223/7f951f27330efe3f5e717c68950edf06.png\"\r\n                alt=\"\"\r\n              />\r\n              <button\r\n                data-toggle=\"modal\"\r\n                data-target=\"#newpokemonModal\"\r\n                class=\"shop-buy-btn\"\r\n                type=\"submit\"\r\n              >\r\n                Buy\r\n              </button>\r\n              <div\r\n                class=\"alert alert-danger alert-dismissible fade show d-none\"\r\n                id=\"no-credit-alert\"\r\n                role=\"alert\"\r\n              >\r\n                <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\r\n  \r\n                <strong>Oops!!</strong> You dont have enough credits.....\r\n  \r\n                <img\r\n                  src=\"http://i65.tinypic.com/27zauqe.png\"\r\n                  alt=\"Image and video hosting by TinyPic\"\r\n                />\r\n                <button\r\n                  id=\"login-alert\"\r\n                  type=\"button\"\r\n                  class=\"close\"\r\n                  aria-label=\"Close\"\r\n                  (click)=\"onAlertClose()\"\r\n                >\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"radio-card-grid\">\r\n              <div\r\n                class=\"form-check radio-form-item\"\r\n                *ngFor=\"let pokemon of pokemonArr\"\r\n              >\r\n                <input\r\n                  class=\"form-check-input customRadioBtn\"\r\n                  type=\"radio\"\r\n                  #pokemonCard=\"ngModel\"\r\n                  name=\"gridRadios\"\r\n                  value=\"{{ pokemon.pokemonId }}\"\r\n                  checked\r\n                  [(ngModel)]=\"pokemonModel.pokemonId\"\r\n                />\r\n                <div class=\"pokemon-card-outer\">\r\n                  <label\r\n                    class=\"form-check-label shop-poke-name\"\r\n                    for=\"gridRadios1\"\r\n                  >\r\n                    {{ pokemon.pokemonName }}\r\n                  </label>\r\n                  <img class=\"pokemon-card-img\" src=\"{{ pokemon.URL }}\" />\r\n                  <div class=\"pokemon-card-info-cont\">\r\n                    <p>Type: {{ pokemon.pokemonType }}</p>\r\n  \r\n                    <p>HP: {{ pokemon.hp }}</p>\r\n                    <p>Attack: {{ pokemon.attack }}</p>\r\n                    <p>Defense: {{ pokemon.defense }}</p>\r\n                    <p>Cost: {{ pokemon.pokemonRarity }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n<<<<<<< HEAD\r\n<div>\r\n  <form>\r\n    <!-- <input class=\"form-check-input\" type=\"radio\" value=\"15\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>15</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"30\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>30</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"75\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>75</label>\r\n    <input class=\"form-check-input\" type=\"radio\" value=\"150\" [(ngModel)]=\"numPoke\" (radioStateChange)=\"populatePages()\"/>\r\n    <label>150</label> -->\r\n    <select name=\"setNumPoke\" class=\"form-control\" [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\r\n      <option value=0>Number of Pokemon per page</option>\r\n      <option value=20>20</option>\r\n      <option value=50>50</option>\r\n      <option value=100>100</option>\r\n    </select>\r\n  </form>\r\n</div>\r\n  <!--put number of pages in here-->\r\n  <div class=\"row justify-content-md-center\">\r\n    <nav aria-label=\"Page navigation example\">\r\n      <ul>\r\n        <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\r\n        <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\r\n      </ul>\r\n    </nav>\r\n=======\r\n>>>>>>> d20b5552ce59b465241ec60dab2d07d4bbaeaa13\r\n  </div>\r\n  \r\n  <!-- Modal -->\r\n  <div\r\n    class=\"modal fade\"\r\n    id=\"newpokemonModal\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"newpokemonModel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div\r\n        class=\"modal-content justify-content-center\"\r\n        id=\"newPokemon-Modal-Content\"\r\n      >\r\n        <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\r\n          <img\r\n            src=\"http://i66.tinypic.com/2rrwdck.png\"\r\n            id=\"generate-pokemon-pokeball\"\r\n            class=\"mb-3 animated shake\"\r\n            (click)=\"onBallClick()\"\r\n          />\r\n          <div\r\n            class=\"pokemon-card-outer text-center d-none \"\r\n            id=\"generate-pokemon-card\"\r\n          >\r\n            <!-- *ngFor=\"let pokemon of pokemonArr\" -->\r\n            <h4 class=\"pokemon-card-name\">{{ this.pokemonName }}</h4>\r\n  \r\n            <img src=\"{{ this.pokemonURL }}\" class=\"pokemon-card-img\" />\r\n            <div class=\"pokemon-card-info-cont\">\r\n              <p>Type: {{ this.pokemonType }}</p>\r\n              <p>HP: {{ this.hp }}</p>\r\n              <p>Attack: {{ this.attack }}</p>\r\n              <p>Defense: {{ this.defense }}</p>\r\n            </div>\r\n          </div>\r\n  \r\n          <button\r\n            type=\"button\"\r\n            class=\"newPokemon-Modal-Buttons \"\r\n            data-dismiss=\"modal\"\r\n          >\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- </div>\r\n    </div>\r\n  </div> -->\r\n  <div container>\r\n      <div row>\r\n        <div col>\r\n          navbar placeholder\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div container>\r\n      <div row>\r\n        <div col>\r\n         <form>\r\n            <select name=\"selectNumPoke\" [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\r\n              <option value=0>Number of Pokemon per page</option>\r\n              <option value=20>20</option>\r\n              <option value=50>50</option>\r\n              <option value=100>100</option>\r\n            </select>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n      <!--put number of pages in here-->\r\n      <div class=\"row justify-content-md-center\">\r\n        <nav aria-label=\"Page navigation example\">\r\n          <ul>\r\n            <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\r\n            <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    \r\n    <div class=\"radio-card-grid\" *ngIf=\"pokePages\">\r\n      <div class=\"form-check radio-form-item\" *ngFor=\"let pokemon of pokePages\">\r\n        <input class=\"form-check-input customRadioBtn\" type=\"radio\" name=\"gridRadios\"\r\n          value=\"{{allPoke.pokemon.id}}\" checked/>\r\n      </div>\r\n    </div>\r\n    \r\n  "

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
        if (req.url.includes("login")) {
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
    function PokedexService(http) {
        this.http = http;
    }
    PokedexService.prototype.generatePokemon = function () {
        return this.http.get("/PokemonCollector/servlet/generatePokemon");
    };
    PokedexService.prototype.getTrainersPokemon = function (newTrainer) {
        console.log(newTrainer);
        return _temp_tempPoke__WEBPACK_IMPORTED_MODULE_3__["POKEMON"];
    };
    ;
    PokedexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
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

module.exports = __webpack_require__(/*! C:\Users\omarg\Documents\Workspace\PokemonCollector\src\main\ngapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map