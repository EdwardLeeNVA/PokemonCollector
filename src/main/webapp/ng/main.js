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
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/components/stats/stats.component.ts");











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
    }, {
        path: 'stats',
        component: _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__["StatsComponent"]
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
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/components/stats/stats.component.ts");



















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
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_18__["StatsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_17__["HighchartsChartModule"]
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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\" id=\"collection-section-header\">\r\n        <img\r\n          class=\"animated jello\"\r\n          id=\"pokedex-heading\"\r\n          src=\"https://fontmeme.com/permalink/190224/f87c04db0b54e3b89caa3d1d3ee405fb.png\"\r\n          alt=\"pokemon-font\"\r\n        />\r\n        <div id=\"card-gallery-grid\">\r\n          <div\r\n            class=\"pokemon-card-outer text-center\"\r\n            *ngFor=\"let pokemon of trainersPokemon\"\r\n          >\r\n            <h4 class=\"pokemon-card-name\">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1) }}</h4>\r\n            <img [src]=\"pokemon.imageUrl\" class=\"pokemon-card-img\" />\r\n            <div class=\"pokemon-card-info-cont\">\r\n              <p *ngIf= \"pokemon.type[1] == null\">Type: {{ pokemon.type[0] }}</p>\r\n              <p *ngIf= \"pokemon.type[1] != null\"> Type: {{pokemon.type[1] + \" / \" + pokemon.type[0]}}</p>\r\n              <p>HP: {{ pokemon.stats.hp }}</p>\r\n  \r\n              <p>Attack: {{ pokemon.stats.attack }}</p>\r\n              <p>Defense: {{ pokemon.stats.defense }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

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
        var _this = this;
        this.pokedexService.getTrainersPokemon(this.trainer.username).subscribe(function (response) { _this.trainersPokemon = response; }), function (err) { return console.log("Error: $(err)"); };
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

module.exports = ".pokemon-card-outer {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 50%;\r\n  text-align: center;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  max-width: 50% !important;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.pokemon-card-img {\r\n  border: 2px solid yellow;\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  display: flex;\r\n  width: 50%;\r\n}\r\n\r\n.pokemon-card-info-cont {\r\n  margin-top: 10px;\r\n  font-size: 12px;\r\n  background-color: rgba(244, 248, 6, 0.952);\r\n  color: black;\r\n  width: 70%;\r\n  height: 40%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n/* body {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  } */\r\n\r\n#newPokemonModal {\r\n  border: none;\r\n}\r\n\r\n#newPokemon-Modal-Content {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n}\r\n\r\n#newPokemon-Modal-Body {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.newPokemon-Modal-Buttons {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 100%;\r\n}\r\n\r\n.newPokemon-Generate-Button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: white;\r\n  width: 80%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#catch-em-all-header {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.pokemon-card-name {\r\n  color: white;\r\n}\r\n\r\n/*******************************Rules Container********************************/\r\n\r\n#rulesContainerRow {\r\n  border: 5px solid yellow;\r\n  padding: 20px;\r\n  color: white;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n\r\n#rules_container_header {\r\n  display: flex !important;\r\n  flex-direction: row !important;\r\n}\r\n\r\n#rules_container_bottom {\r\n  display: flex !important;\r\n  flex-direction: row !important;\r\n}\r\n\r\n.rules_container_img_box {\r\n  display: flex !important;\r\n}\r\n\r\n.rules_container_text_box {\r\n  display: flex !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmF0ZS1wb2tlbW9uL2dlbmVyYXRlLXBva2Vtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsOENBQThDO0VBQzlDLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUVBQXFFO0VBQ3JFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7S0FFSzs7QUFFTDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsK0VBQStFOztBQUUvRTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsWUFBWTtFQUNaLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmF0ZS1wb2tlbW9uL2dlbmVyYXRlLXBva2Vtb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2tlbW9uLWNhcmQtb3V0ZXIge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBtYXgtd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4ucG9rZW1vbi1jYXJkLWltZyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wb2tlbW9uLWNhcmQtaW5mby1jb250IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgMjQ4LCA2LCAwLjk1Mik7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICB9ICovXHJcblxyXG4jbmV3UG9rZW1vbk1vZGFsIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uLU1vZGFsLUNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uLU1vZGFsLUJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdQb2tlbW9uLU1vZGFsLUJ1dHRvbnMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdQb2tlbW9uLUdlbmVyYXRlLUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNjYXRjaC1lbS1hbGwtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wb2tlbW9uLWNhcmQtbmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlJ1bGVzIENvbnRhaW5lcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuI3J1bGVzQ29udGFpbmVyUm93IHtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG59XHJcblxyXG4jcnVsZXNfY29udGFpbmVyX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3J1bGVzX2NvbnRhaW5lcl9ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJ1bGVzX2NvbnRhaW5lcl9pbWdfYm94IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ydWxlc19jb250YWluZXJfdGV4dF9ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/generate-pokemon/generate-pokemon.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/generate-pokemon/generate-pokemon.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-12\">\r\n          <div id=\"drawButton\" class=\"draw-pokemon-cont text-center\">\r\n            <img\r\n              class=\"animated lightSpeedIn img-responsive\"\r\n              id=\"catch-em-all-header\"\r\n              src=\"https://fontmeme.com/permalink/190223/5cfbd92adaffbae8d5b421856e6543f5.png\"\r\n            />\r\n\r\n            <!--(click)=\"onClickMe()\"-->\r\n            <button\r\n              class=\"newPokemon-Generate-Button\"\r\n              data-toggle=\"modal\"\r\n              data-target=\"#newpokemonModal\"\r\n              (click)=\"onClick()\"\r\n            >\r\n              Get a pokemon\r\n            </button>\r\n            <div class=\"row\" id=\"rulesContainerRow mt-5\">\r\n              <div class=\"col-md-2\">\r\n                <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                Hello there! Welcome to the world of pokémon!<br />\r\n                My name is Oak! People call me the pokémon Prof!<br />\r\n                This application is inhabited by creatures called pokémon! For\r\n                some people, pokémon are pets. Others use them to build a\r\n                collection and become a pokémon master.<br />\r\n                Click this button to generate a random pokémon to add to your\r\n                collection and increase your score.<br />\r\n                In the shop you can buy pokémon with credits and build your\r\n                collection. <br />When you have duplicate pokémon in your\r\n                collection you can redeem them for more credits to use in the\r\n                shop.<br />\r\n                Your goal is to collect them all.<br />\r\n                Good luck!\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"container mb-3 mt-3\">\r\n        <div class=\"row\" id=\"rulesContainerRow\">\r\n          <div class=\"col-md-2\">\r\n            <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            Hello there! Welcome to the world of pokémon!<br> My name is Oak! People\r\n            call me the pokémon Prof!<br> This application is inhabited by creatures\r\n            called pokémon! For some people, pokémon are pets. Others use them\r\n            to build a collection and become a pokémon master.<br> Click this button\r\n            to generate a random pokémon to add to your collection and increase\r\n            your score.<br> In the shop you can buy pokémon with credits and build\r\n            your collection. <br>When you have duplicate pokémon in your collection\r\n            you can redeem them for more credits to use in the shop.<br> Your goal\r\n            is to collect them all.<br> Good luck!\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <!-- Modal -->\r\n      <div\r\n        class=\"modal fade\"\r\n        id=\"newpokemonModal\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"newpokemonModel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div\r\n            class=\"modal-content justify-content-center\"\r\n            id=\"newPokemon-Modal-Content\"\r\n          >\r\n            <div\r\n              class=\"modal-body justify-content-center\"\r\n              id=\"newPokemon-Modal-Body\"\r\n            >\r\n              <img\r\n                src=\"http://i66.tinypic.com/2rrwdck.png\"\r\n                id=\"generate-pokemon-pokeball\"\r\n                class=\"mb-3 animated shake\"\r\n                (click)=\"onBallClick()\"\r\n              />\r\n\r\n              <div\r\n                class=\"pokemon-card-outer text-center d-none\"\r\n                id=\"generate-pokemon-card\"\r\n              >\r\n                <h4 class=\"pokemon-card-name\">{{ pokemonName }}</h4>\r\n                <img src=\"{{ pokemonSprite }}\" class=\"pokemon-card-img\" />\r\n                <div class=\"pokemon-card-info-cont\">\r\n                  <p>\r\n                    <b>Type: {{ pokemonType }}</b>\r\n                  </p>\r\n                  <p>\r\n                    <b>HP: {{ hp }}</b>\r\n                  </p>\r\n                  <p>\r\n                    <b>Attack: {{ attack }}</b>\r\n                  </p>\r\n                  <p>\r\n                    <b>Defense: {{ defense }}</b>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n              <button\r\n                id=\"generate-pokemon-draw-btn\"\r\n                type=\"button\"\r\n                class=\"newPokemon-Modal-Buttons d-none\"\r\n                (click)=\"onClick()\"\r\n              >\r\n                Draw Another!\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"newPokemon-Modal-Buttons\"\r\n                data-dismiss=\"modal\"\r\n              >\r\n                Close\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            _this.pokemonName = data.name.charAt(0).toUpperCase() + data.name.substring(1);
            _this.pokemonType = data.type[0];
            _this.pokemonSprite = data.imageUrl;
            _this.hp = data.stats.hp;
            _this.attack = data.stats.attack;
            _this.defense = data.stats.defense;
            _this.trainer.score = data.count;
            _this.trainerService.updateValidLogin(_this.trainer);
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

module.exports = "table {\r\n  border-collapse: collapse;\r\n  width : 95%;\r\n}\r\n\r\ntable, th, td {\r\n  border: 1px solid yellow;\r\n}\r\n\r\n#leaderboardTable {\r\n  border: 3px solid yellow;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n\r\n#button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow;\r\n  color: white;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-gap: 50px 100px;\r\n}\r\n\r\n#tableusername {\r\n  border: 3px solid yellow;\r\n}\r\n\r\n#tablescore {\r\n  border: 3px solid yellow;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUVBQXFFO0FBQ3ZFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aCA6IDk1JTtcclxufVxyXG5cclxudGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xyXG59XHJcblxyXG4jbGVhZGVyYm9hcmRUYWJsZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxufVxyXG5cclxuI2J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiA1MHB4IDEwMHB4O1xyXG59XHJcblxyXG4jdGFibGV1c2VybmFtZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xyXG59XHJcblxyXG4jdGFibGVzY29yZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color:white;\" align=\"center\">Top 10 Scores</h1>\r\n<div align=\"center\">\r\n  <div>\r\n    <table id=\"leaderboardTable\">\r\n      <thead></thead>\r\n      <tr>\r\n        <th class=\"tabletext\" id=\"tableusername\" scope=\"col\">Username</th>\r\n        <th class=\"tabletext\" id=\"tablescore\" scope=\"col\">Score</th>\r\n      </tr>\r\n\r\n      <tbody id=\"leaderboardBody\"></tbody>\r\n    </table>\r\n  </div>\r\n  <br />\r\n  <div>\r\n    <button class=\"Button\" routerLink=\"/stats\">Stats</button>\r\n  </div>\r\n  <br />\r\n</div>\r\n"

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
        this.configUrl = "/PokemonCollector/ng/leaderboard";
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch(this.configUrl)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            //console.log(res);
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

module.exports = "#pokeFONT {\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bva2VGT05UIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form-cont\">\r\n  <div class=\"row justify-content-center\">\r\n    <img\r\n      class=\"animated wobble\"\r\n      src=\"https://fontmeme.com/permalink/190223/df35ea09c6d606c33d4048e3403a3369.png\"\r\n      alt=\"\"\r\n      id=\"pokeFONT\"\r\n    />\r\n    <div class=\"col-md-6\">\r\n      <form\r\n        #loginForm=\"ngForm\"\r\n        (ngSubmit)=\"loginTrainer()\"\r\n        novalidate\r\n        class=\"login-form\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <label for=\"USERNAME\">Username</label>\r\n          <input\r\n            type=\"text\"\r\n            required\r\n            #name=\"ngModel\"\r\n            name=\"USERNAME\"\r\n            class=\"form-control\"\r\n            id=\"USERNAME\"\r\n            [class.is-valid]=\"name.valid\"\r\n            [class.is-invalid]=\"name.invalid && name.touched\"\r\n            [(ngModel)]=\"trainerInput.username\"\r\n          />\r\n          <small\r\n            class=\"text-danger\"\r\n            [class.d-none]=\"name.valid || name.untouched\"\r\n            >Name is required.</small\r\n          >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"PASSWORD\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            required\r\n            #password=\"ngModel\"\r\n            name=\"PASSWORD\"\r\n            class=\"form-control\"\r\n            id=\"PASSWORD\"\r\n            [class.is-valid]=\"password.valid\"\r\n            [class.is-invalid]=\"password.invalid && password.touched\"\r\n            [(ngModel)]=\"trainerInput.password\"\r\n          />\r\n          <small\r\n            class=\"text-danger\"\r\n            [class.d-none]=\"password.valid || password.untouched\"\r\n            >Password is required.</small\r\n          >\r\n        </div>\r\n        <div\r\n          class=\"alert alert-danger alert-dismissible fade show d-none\"\r\n          id=\"login-alert\"\r\n          role=\"alert\"\r\n        >\r\n          <strong>User used login...</strong> It was not very effective.\r\n          <button\r\n            id=\"login-alert-close-btn\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"onAlertClose()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <button class=\"btn  btn-block login-form-btn\" type=\"submit\">\r\n          Login\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        //boolean for login alert
        this.alertShowing = false;
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
        this.trainerService.login_status_bs.subscribe(function (status) { return (_this.login_status = status); });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return (_this.trainer = trainer); });
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
            if (data.body == null) {
                console.log("in body null if");
                if (_this.alertShowing == false) {
                    $("#login-alert").removeClass("d-none");
                    _this.alertShowing = true;
                }
            }
            else if (data != null) {
                _this.tokenService.setCurrentUserToken(data.headers.get("Authorization"), data);
                //this.trainerService.updateValidLogin(data);
            }
        });
    };
    LoginComponent.prototype.onAlertClose = function () {
        if (this.alertShowing) {
            $("#login-alert").addClass("d-none");
            this.alertShowing = false;
        }
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

module.exports = "<!-- Default Navbar -->\r\n<nav class=\"navbar navbar-expand-lg \" id=\"baseNavBar\" *ngIf=\"!login_status\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/login\" routerLink=\"login\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/register\" routerLink=\"register\">Sign Up</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/landing\" routerLink=\"landing\">Home</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>\r\n\r\n  <!-- Signed-In Navbar -->\r\n  <nav class=\"navbar navbar-expand-lg \" id=\"logged-nav-bar\" *ngIf=\"login_status\">\r\n    <img src=\"http://i65.tinypic.com/25iyve1.png\" alt=\"Image and video hosting by TinyPic\"/>\r\n    <p class=\"player-info\">Welcome, {{this.trainer.username}}!</p>\r\n    <p class=\"player-info\">Credits: {{this.trainer.credits}}</p>\r\n    <p class=\"player-info\">Score: {{this.trainer.score}}</p>\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav2\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/generate\" routerLink=\"generate\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/shop\" routerLink=\"shop\">Shop</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/redeem\" routerLink=\"redeem\">Redeem</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/collection\" routerLink=\"collection\">View Collection</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link customLink\" href=\"/PokemonCollector/ng/landing\" (click)=\"onLogout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n"

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
        this.trainerService.current_trainer_bs.subscribe(function (trainer) {
            _this.trainer = trainer;
        });
    };
    NavComponent.prototype.onLogout = function () {
        sessionStorage.clear();
        this.trainerService.updateLogout();
        this.router.navigateByUrl("/landing");
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

module.exports = ".shop-form-scroll {\r\n}\r\n\r\n#shop-form {\r\n  height: 60%;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n\r\n.shop-form-item {\r\n  height: 200px;\r\n}\r\n\r\n.radio-card-grid {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  height: 100vh;\r\n  border: 2px solid yellow;\r\n  overflow-y: scroll;\r\n\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.radio-form-item {\r\n}\r\n\r\n#newPokemonModal {\r\n  border: none;\r\n}\r\n\r\n#newPokemon-Modal-Header {\r\n}\r\n\r\n#newPokemon-x-button {\r\n  color: white;\r\n}\r\n\r\n#newPokemon-Modal-Content {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n}\r\n\r\n#generate-pokemon-card {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 65%;\r\n  text-align: center;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#newPokemon-Modal-Body {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  align-items: center;\r\n}\r\n\r\n#newPokemon-Modal-Footer {\r\n  border: none !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.newPokemon-Modal-Buttons {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 100%;\r\n}\r\n\r\n#userInfoList {\r\n  list-style: none;\r\n}\r\n\r\n.userInfoItem {\r\n  color: white;\r\n}\r\n\r\n#logged-nav-bar {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  color: white;\r\n}\r\n\r\n.customLink {\r\n  style: none;\r\n  color: white;\r\n}\r\n\r\n#redeem-form-col {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  text-align: center;\r\n}\r\n\r\n#redeem-header-image {\r\n  padding: 10px;\r\n}\r\n\r\n.shop-buy-btn {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: white;\r\n  width: 80%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pokemon-card-name {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWRlZW0vcmVkZWVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0FBQ0E7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDREQUE0RDtFQUM1RCxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVkZWVtL3JlZGVlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3AtZm9ybS1zY3JvbGwge1xyXG59XHJcblxyXG4jc2hvcC1mb3JtIHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbn1cclxuXHJcbi5zaG9wLWZvcm0taXRlbSB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnJhZGlvLWNhcmQtZ3JpZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmFkaW8tZm9ybS1pdGVtIHtcclxufVxyXG5cclxuI25ld1Bva2Vtb25Nb2RhbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiNuZXdQb2tlbW9uLU1vZGFsLUhlYWRlciB7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uLXgtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uLU1vZGFsLUNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuI2dlbmVyYXRlLXBva2Vtb24tY2FyZCB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgd2lkdGg6IDY1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uLU1vZGFsLUJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1Gb290ZXIge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdQb2tlbW9uLU1vZGFsLUJ1dHRvbnMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiN1c2VySW5mb0xpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VySW5mb0l0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xvZ2dlZC1uYXYtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jdXN0b21MaW5rIHtcclxuICBzdHlsZTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNyZWRlZW0tZm9ybS1jb2wge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwMDA2NiAwJSwgIzY2NjY5OSAxMDAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNyZWRlZW0taGVhZGVyLWltYWdlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2hvcC1idXktYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnBva2Vtb24tY2FyZC1uYW1lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/redeem/redeem.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/redeem/redeem.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col justify-content-center\" id=\"redeem-form-col\">\r\n      <div class=\"shop-form-scroll\">\r\n        <img\r\n          class=\"animated bounce\"\r\n          id=\"redeem-header-image\"\r\n          src=\"https://fontmeme.com/permalink/190224/e057290604f69fe455bee18756e64510.png\"\r\n          alt=\"pokemon-font\"\r\n        /><br />\r\n        <button class=\"shop-buy-btn\" (click)=\"redeemAll()\">Redeem All</button>\r\n        <form #redeemForm=\"ngForm\" (ngSubmit)=\"redeemSpecific()\" novalidate>\r\n          <!-- data-toggle=\"modal\"\r\n            data-target=\"#newpokemonModal\" -->\r\n          <button class=\"shop-buy-btn\" type=\"submit\">\r\n            Sell\r\n          </button>\r\n\r\n          <div class=\"radio-card-grid\">\r\n            <div\r\n              class=\"form-check radio-form-item\"\r\n              *ngFor=\"let pokemonX of duplicatePokemon\"\r\n            >\r\n              <input\r\n                class=\"form-check-input\"\r\n                type=\"radio\"\r\n                #pokemonCard=\"ngModel\"\r\n                name=\"gridRadios\"\r\n                value=\"{{ pokemonX.id }}\"\r\n                checked\r\n                [(ngModel)]=\"pokemon.id\"\r\n              />\r\n              <div class=\"pokemon-card-outer\">\r\n                <label class=\"form-check-label text-light\" for=\"gridRadios1\">\r\n                  {{ pokemonX.name }}\r\n                </label>\r\n                <img class=\"pokemon-card-img\" src=\"{{ pokemonX.imageUrl }}\" />\r\n                <div class=\"pokemon-card-info-cont\">\r\n                  <p>Cost: {{ pokemonX.cost }}</p>\r\n                  <br />\r\n                  <p>Type: {{ pokemonX.type[0] }}</p>\r\n\r\n                  <p>Count: {{ pokemonX.count }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"newpokemonModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"newpokemonModel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div\r\n      class=\"modal-content justify-content-center\"\r\n      id=\"newPokemon-Modal-Content\"\r\n    >\r\n      <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\r\n        <div class=\"pokemon-card-outer text-center \" id=\"generate-pokemon-card\">\r\n          <h4 class=\"pokemon-card-name\">{{ this.pokemonName }}</h4>\r\n\r\n          <img src=\"{{ this.pokemonURL }}\" class=\"pokemon-card-img\" />\r\n          <div class=\"pokemon-card-info-cont\">\r\n            <p>Type: {{ this.pokemonType }}</p>\r\n            <p>HP: {{ this.hp }}</p>\r\n            <p>Attack: {{ this.attack }}</p>\r\n            <p>Defense: {{ this.defense }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <button\r\n          type=\"button\"\r\n          class=\"newPokemon-Modal-Buttons \"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var src_app_models_redeem_ticket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/redeem-ticket */ "./src/app/models/redeem-ticket.ts");






var RedeemComponent = /** @class */ (function () {
    function RedeemComponent(trainerService, router, pokedexService) {
        this.trainerService = trainerService;
        this.router = router;
        this.pokedexService = pokedexService;
        this.pokemon = {
            id: 0,
            name: "",
            imageUrl: "",
            type: null,
            stats: null,
            count: 0,
            cost: 0
        };
        //stores an array of Pokemon objects to display to DOM
        this.duplicatePokemon = new Array();
        this.redeemTicketModel = new src_app_models_redeem_ticket__WEBPACK_IMPORTED_MODULE_5__["RedeemTicket"](0);
    }
    RedeemComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return (_this.login_status = status); });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return (_this.trainer = trainer); });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
        this.getDuplicates();
    };
    //method that gets duplicates returned from service method and assigns it to variable
    RedeemComponent.prototype.getDuplicates = function () {
        var _this = this;
        // this.duplicatePokemon = this.pokedexService.getDuplicates();
        this.pokedexService.getDuplicates().subscribe(function (Response) {
            _this.duplicatePokemon = Response;
        });
    };
    //method that gets redeemed credits returned from service method and assigns it to variable
    RedeemComponent.prototype.redeemAll = function () {
        var _this = this;
        this.pokedexService.redeemAll().subscribe(function (Response) {
            _this.credits = Response;
            //Update Behavior Subject
            _this.trainer.credits = Response[1];
            _this.trainerService.updateValidLogin(_this.trainer);
        });
        this.duplicatePokemon = [];
    };
    //method that gets redeemed credits returned from service method based on a specific pokemon ID and assigns to variable
    RedeemComponent.prototype.redeemSpecific = function () {
        var _this = this;
        //Set the redeemticketModel POKEID property to the data binded value.
        this.redeemTicketModel.POKEID = this.pokemon.id;
        //create a temp for the id value
        var tempID = this.pokemon.id;
        //call to the pokedexService to redeemSpecific request
        this.pokedexService
            .redeemSpecific(this.redeemTicketModel)
            .subscribe(function (Response) {
            //Sets the this.credits to response.
            _this.credits = Response;
            _this.trainer.credits = Response[1];
            _this.trainerService.updateValidLogin(_this.trainer);
        });
        var tempArr = new Array();
        //Step through the existing duplicatePokemon array and push all values without redeemed array to temp Array
        for (var i = 0; i < this.duplicatePokemon.length; i++) {
            if (this.duplicatePokemon[i].id != tempID) {
                tempArr.push(this.duplicatePokemon[i]);
            }
        }
        //Reassign this.duplicatePokemon to the new tempArr
        this.duplicatePokemon = tempArr;
    };
    RedeemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-redeem",
            template: __webpack_require__(/*! ./redeem.component.html */ "./src/app/components/redeem/redeem.component.html"),
            styles: [__webpack_require__(/*! ./redeem.component.css */ "./src/app/components/redeem/redeem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__["TrainerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_pokedex_service__WEBPACK_IMPORTED_MODULE_4__["PokedexService"]])
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

module.exports = "#pokeFONT {\r\n}\r\n\r\n#register_outer_cont {\r\n  text-align: center;\r\n}\r\n\r\n#registerForm {\r\n  margin-top: 50px;\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bva2VGT05UIHtcclxufVxyXG5cclxuI3JlZ2lzdGVyX291dGVyX2NvbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3JlZ2lzdGVyRm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form-cont\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6 justify-content-center\" id=\"register_outer_cont\">\r\n      <img\r\n        class=\"animated wobble mt-3\"\r\n        src=\"https://fontmeme.com/permalink/190312/16a6fa3029a30455d5905b3f520897c9.png\"\r\n        id=\"pokeFONT\"\r\n      />\r\n\r\n      <form\r\n        id=\"registerForm\"\r\n        class=\" login-form\"\r\n        #registerForm=\"ngForm\"\r\n        (ngSubmit)=\"registerTrainer()\"\r\n        method=\"POST\"\r\n      >\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username </label>\r\n          <input\r\n            name=\"username\"\r\n            class=\"form-control\"\r\n            required\r\n            placeholder=\"Username\"\r\n            #username\r\n          />\r\n\r\n          <div\r\n            *ngIf=\"username.invalid && (username.dirty || username.touched)\"\r\n            class=\"alert alert-danger\"\r\n          >\r\n            <div *ngIf=\"username.errors.required\">\r\n              Username is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password </label>\r\n          <input\r\n            name=\"password\"\r\n            class=\"form-control\"\r\n            required\r\n            type=\"password\"\r\n            placeholder=\"Password\"\r\n            #password\r\n          />\r\n\r\n          <div\r\n            *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n            class=\"alert alert-danger\"\r\n          >\r\n            <div *ngIf=\"password.errors.required\">\r\n              Password is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"fname\">First Name </label>\r\n          <input\r\n            name=\"fname\"\r\n            class=\"form-control\"\r\n            required\r\n            placeholder=\"First Name\"\r\n            #fname\r\n          />\r\n\r\n          <div\r\n            *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\"\r\n            class=\"alert alert-danger\"\r\n          >\r\n            <div *ngIf=\"fname.errors.required\">\r\n              First name is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"lname\">Last Name </label>\r\n          <input\r\n            name=\"lname\"\r\n            class=\"form-control\"\r\n            required\r\n            placeholder=\"Last Name\"\r\n            #lname\r\n          />\r\n\r\n          <div\r\n            *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\"\r\n            class=\"alert alert-danger\"\r\n          >\r\n            <div *ngIf=\"lname.errors.required\">\r\n              Last name is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email </label>\r\n          <input\r\n            name=\"email\"\r\n            class=\"form-control\"\r\n            required\r\n            type=\"email\"\r\n            placeholder=\"Email\"\r\n            #email\r\n          />\r\n\r\n          <div\r\n            *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n            class=\"alert alert-danger\"\r\n          >\r\n            <div *ngIf=\"email.errors.required\">\r\n              Email is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <input\r\n          name=\"submit\"\r\n          type=\"submit\"\r\n          class=\"btn btn-block login-form-btn\"\r\n          [disabled]=\"!registerForm.form.valid\"\r\n        />\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.trainerService.createTrainer(credentials).subscribe(function (data) {
            if (data.status === 200) {
                _this.router.navigateByUrl("/landing");
            }
            else {
                console.log("Bad Request");
            }
        });
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

module.exports = "html,\r\nbody {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n.pokemon-card-outer {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 125;\r\n  text-align: center;\r\n  background-color: grey;\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n}\r\n.shop-poke-name {\r\n  color: white;\r\n}\r\n.pokemon-card-outer img {\r\n  border: 1px solid white;\r\n}\r\n#card-gallery-grid {\r\n  padding-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n#card-gallery-grid .pokemon-card-outer {\r\n  border: 1px solid #ccc;\r\n  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);\r\n  max-width: 100%;\r\n  transition: all 0.2s;\r\n}\r\n#card-gallery-grid .pokemon-card-outer:hover {\r\n  -webkit-transform: scale(1.25);\r\n          transform: scale(1.25);\r\n}\r\n#generate-pokemon-card {\r\n  margin: 15px;\r\n  height: 320px;\r\n  width: 65%;\r\n  text-align: center;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 5px solid yellow !important;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.shop-form-scroll {\r\n}\r\n#shop-form {\r\n  height: 60%;\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n}\r\n.shop-form-item {\r\n  height: 200px;\r\n}\r\n.radio-card-grid {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n  height: 100vh;\r\n  border: 2px solid yellow;\r\n  overflow-y: scroll;\r\n  padding-top: 100px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  align-items: center;\r\n}\r\n#newPokemonModal {\r\n  border: none;\r\n}\r\n#newPokemon-Modal-Header {\r\n}\r\n#newPokemon-x-button {\r\n  color: white;\r\n}\r\n#newPokemon-Modal-Content {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n}\r\n#newPokemon-Modal-Body {\r\n  background-color: transparent !important;\r\n  border: none !important;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  align-items: center;\r\n}\r\n#newPokemon-Modal-Footer {\r\n  border: none !important;\r\n  background-color: transparent !important;\r\n}\r\n.newPokemon-Modal-Buttons {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 100%;\r\n}\r\n.newPokemon-Gneerate-Button {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: black;\r\n  width: 80%;\r\n}\r\n#userInfoList {\r\n  list-style: none;\r\n}\r\n.userInfoItem {\r\n  color: white;\r\n}\r\n#logged-nav-bar {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  color: white;\r\n}\r\n.customLink {\r\n  style: none;\r\n  color: white;\r\n}\r\n.shop-buy-btn {\r\n  background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n  border: 2px solid yellow !important;\r\n  color: white;\r\n  width: 80%;\r\n  margin-bottom: 30px;\r\n}\r\n#shop-form-cont {\r\n  background: linear-gradient(to bottom left, #000066 0%, #666699 100%);\r\n}\r\n#shop-form-cont .row {\r\n  background: linear-gradient(\r\n    to bottom left,\r\n    #000066 0%,\r\n    #666699 100%\r\n  ) !important;\r\n}\r\n#shop-form-col {\r\n  background: linear-gradient(\r\n    to bottom left,\r\n    #000066 0%,\r\n    #666699 100%\r\n  ) !important;\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n#poke-shop-header {\r\n}\r\n.customRadioBtn {\r\n  background-color: red;\r\n  padding: 10px;\r\n  border: 1px solid yellow;\r\n}\r\n.pokemon-card-name {\r\n  color: white;\r\n}\r\n#shop-buy-btn .shop-buy-btn  {\r\n    background: linear-gradient(to top, #990033 0%, #cc0000 65%);\r\n    border: 2px solid yellow !important;\r\n    color: white;\r\n    width: 30%;\r\n    margin-bottom: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDREQUE0RDtFQUM1RCxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQTtBQUVBO0VBQ0UsV0FBVztFQUNYLDREQUE0RDtBQUM5RDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxxRUFBcUU7RUFDckUsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsNERBQTREO0VBQzVELG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFOzs7O2NBQW9HO0FBQ3RHO0FBQ0E7RUFDRTs7OztjQUFvRztFQUNwRyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7QUFDQTtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUdBO0lBQ0ksNERBQTREO0lBQzVELG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbn1cclxuLnBva2Vtb24tY2FyZC1vdXRlciB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgd2lkdGg6IDEyNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG59XHJcbi5zaG9wLXBva2UtbmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wb2tlbW9uLWNhcmQtb3V0ZXIgaW1nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuI2NhcmQtZ2FsbGVyeS1ncmlkIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FyZC1nYWxsZXJ5LWdyaWQgLnBva2Vtb24tY2FyZC1vdXRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2hhZG93OiAycHggMnB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuI2NhcmQtZ2FsbGVyeS1ncmlkIC5wb2tlbW9uLWNhcmQtb3V0ZXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuXHJcbiNnZW5lcmF0ZS1wb2tlbW9uLWNhcmQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2hvcC1mb3JtLXNjcm9sbCB7XHJcbn1cclxuXHJcbiNzaG9wLWZvcm0ge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxufVxyXG5cclxuLnNob3AtZm9ybS1pdGVtIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tY2FyZC1ncmlkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICMwMDAwNjYgMCUsICM2NjY2OTkgMTAwJSk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNuZXdQb2tlbW9uTW9kYWwge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1IZWFkZXIge1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi14LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1Db250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmV3UG9rZW1vbi1Nb2RhbC1Cb2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI25ld1Bva2Vtb24tTW9kYWwtRm9vdGVyIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV3UG9rZW1vbi1Nb2RhbC1CdXR0b25zIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTkwMDMzIDAlLCAjY2MwMDAwIDY1JSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3UG9rZW1vbi1HbmVlcmF0ZS1CdXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3cgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI3VzZXJJbmZvTGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVzZXJJbmZvSXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbG9nZ2VkLW5hdi1iYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM5OTAwMzMgMCUsICNjYzAwMDAgNjUlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmN1c3RvbUxpbmsge1xyXG4gIHN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNob3AtYnV5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzaG9wLWZvcm0tY29udCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjMDAwMDY2IDAlLCAjNjY2Njk5IDEwMCUpO1xyXG59XHJcbiNzaG9wLWZvcm0tY29udCAucm93IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20gbGVmdCxcclxuICAgICMwMDAwNjYgMCUsXHJcbiAgICAjNjY2Njk5IDEwMCVcclxuICApICFpbXBvcnRhbnQ7XHJcbn1cclxuI3Nob3AtZm9ybS1jb2wge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSBsZWZ0LFxyXG4gICAgIzAwMDA2NiAwJSxcclxuICAgICM2NjY2OTkgMTAwJVxyXG4gICkgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4jcG9rZS1zaG9wLWhlYWRlciB7XHJcbn1cclxuXHJcbi5jdXN0b21SYWRpb0J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xyXG59XHJcblxyXG4ucG9rZW1vbi1jYXJkLW5hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiNzaG9wLWJ1eS1idG4gLnNob3AtYnV5LWJ0biAge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk5MDAzMyAwJSwgI2NjMDAwMCA2NSUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  <!-- <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\"> -->\r\n  <div class=\"container \" id=\"shop-form-container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col justify-content-center\" id=\"shop-form-col\">\r\n        <div class=\"shop-form-scroll\">\r\n          <form name=\"buyForm\" #buyForm=\"ngForm\" (ngSubmit)=\"onBuySubmit()\" novalidate>\r\n            <div id=\"shop-form-header\">\r\n              <img\r\n                class=\"animated shake\"\r\n                id=\"poke-shop-header\"\r\n                src=\"https://fontmeme.com/permalink/190223/7f951f27330efe3f5e717c68950edf06.png\"\r\n                alt=\"\"\r\n              />\r\n              <button\r\n                data-toggle=\"modal\"\r\n                data-target=\"#newpokemonModal\"\r\n                class=\"shop-buy-btn\"\r\n                id=\"shop-buy-btn\"\r\n                type=\"submit\"\r\n              >\r\n                Buy\r\n              </button>\r\n           \r\n            </div>\r\n  \r\n            <div class=\"radio-card-grid\">\r\n              <div\r\n                class=\"form-check radio-form-item\"\r\n                *ngFor=\"let pokemon of allPoke\"\r\n              >\r\n                <input\r\n                  class=\"form-check-input customRadioBtn\"\r\n                  type=\"radio\"\r\n                  #pokemonCard=\"ngModel\"\r\n                  name=\"gridRadios\"\r\n                  value=\"{{ pokemon.id }}\"\r\n                  checked\r\n                  [(ngModel)]=\"selectedPoke\"\r\n                />\r\n                <div class=\"pokemon-card-outer\">\r\n                  <label\r\n                    class=\"form-check-label shop-poke-name\"\r\n                    for=\"gridRadios1\"\r\n                  >\r\n                    {{ pokemon.name }}\r\n                  </label>\r\n                  <img class=\"pokemon-card-img\" src=\"{{ pokemon.imageUrl }}\" />\r\n                  <div class=\"pokemon-card-info-cont\">\r\n                    <p>Type: {{ pokemon.type }}</p>\r\n  \r\n                    <!-- <p>HP: {{ pokemon.hp }}</p>\r\n                    <p>Attack: {{ pokemon.attack }}</p>\r\n                    <p>Defense: {{ pokemon.defense }}</p> -->\r\n                    <p>Stats:</p>\r\n                      <p>Attack: {{ pokemon.stats.attack }}</p>\r\n                      <p>Defense: {{ pokemon.stats.defense }} </p>\r\n                      <p>HP: {{ pokemon.stats.hp }}</p>\r\n                      <p>Special attack: {{ pokemon.stats.special-attack }}</p>\r\n                      <p>Special defense: {{ pokemon.stats.special-defense }}</p>\r\n                      <p>Speed: {{ pokemon.stats.speed }}</p>\r\n                    <p>Cost: {{ pokemon.cost }}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"radio-card-grid\" *ngIf=\"pokePages\">\r\n    <div class=\"form-check radio-form-item\" *ngFor=\"let pokemon of pokePages\">\r\n      <input class=\"form-check-input customRadioBtn\" type=\"radio\" name=\"gridRadios\"\r\n        value=\"{{allPoke.pokemon.id}}\" checked/>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Modal for chosen pokemon-->\r\n  <div\r\n    class=\"modal fade\"\r\n    id=\"newpokemonModal\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"newpokemonModel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div\r\n        class=\"modal-content justify-content-center\"\r\n        id=\"newPokemon-Modal-Content\"\r\n      >\r\n        <div class=\"modal-body justify-content-center\" id=\"newPokemon-Modal-Body\">\r\n          <img\r\n            src=\"http://i66.tinypic.com/2rrwdck.png\"\r\n            id=\"generate-pokemon-pokeball\"\r\n            class=\"mb-3 animated shake\"\r\n            (click)=\"onBallClick()\"\r\n          />\r\n          <div\r\n            class=\"pokemon-card-outer text-center d-none \"\r\n            id=\"generate-pokemon-card\"\r\n          >\r\n            <!-- *ngFor=\"let pokemon of pokemonArr\" -->\r\n            <h4 class=\"pokemon-card-name\">{{ this.name }}</h4>\r\n  \r\n            <img src=\"{{ this.imageUrl }}\" class=\"pokemon-card-img\" />\r\n            <div class=\"pokemon-card-info-cont\">\r\n                <!-- <p>Stats:</p>\r\n                <p>Attack: {{ pokemon.stats.attack }}</p>\r\n                <p>Defense: {{ pokemon.stats.defense }} </p>\r\n                <p>HP: {{ pokemon.stats.hp }}</p>\r\n                <p>Special-attack: {{ pokemon.stats.special-attack }}</p>\r\n                <p>Special-defense: {{ pokemon.stats.special-defense }}</p>\r\n                <p>Speed: {{ pokemon.stats.speed }}</p> -->\r\n                <p>Type: {{this.type}}</p>\r\n            </div>\r\n          </div>\r\n          <!-- start no credits alert -->\r\n          <div\r\n          class=\"alert alert-danger alert-dismissible fade show d-none\"\r\n          id=\"no-credit-alert\"\r\n          role=\"alert\"\r\n        >\r\n          <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\r\n\r\n          <strong>Oops!!</strong> You dont have enough credits.....\r\n\r\n          <img\r\n            src=\"http://i65.tinypic.com/27zauqe.png\"\r\n            alt=\"Image and video hosting by TinyPic\"\r\n          />\r\n          <button\r\n            id=\"login-alert\"\r\n            type=\"button\"\r\n            class=\"close\"\r\n            aria-label=\"Close\"\r\n            (click)=\"onAlertClose()\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <!-- end no credit alert -->\r\n        <!-- start I choose you alert -->\r\n        <div\r\n        class=\"alert alert-danger alert-dismissible fade show d-none\"\r\n        id=\"add-pokemon-alert\"\r\n        role=\"alert\"\r\n      >\r\n        <img src=\"http://i64.tinypic.com/2nhqjbp.png\" alt=\"\" />\r\n\r\n        <strong>I Choose You!!</strong> This Pokemon has been added to your collection.\r\n\r\n        <img\r\n          src=\"http://i65.tinypic.com/27zauqe.png\"\r\n          alt=\"Image and video hosting by TinyPic\"\r\n        />\r\n        <button\r\n          id=\"login-alert\"\r\n          type=\"button\"\r\n          class=\"close\"\r\n          aria-label=\"Close\"\r\n          (click)=\"onAlertClose()\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n        <!-- end I choose you alert -->\r\n        <!-- start confirmation button -->\r\n          <button\r\n                data-toggle=\"modal\"\r\n                data-target=\"#newpokemonConfirm\"\r\n                class=\"shop-buy-btn\"\r\n                type=\"submit\"\r\n              >\r\n                I Choose You!\r\n              </button>\r\n        <!--end confirmation button  -->\r\n        <!-- start close button -->\r\n          <button\r\n            type=\"button\"\r\n            class=\"shop-buy-btn\"\r\n            data-dismiss=\"modal\"\r\n          >\r\n            Close\r\n          </button>\r\n        <!-- end close button  -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- end modal -->\r\n<!-- stuff thats on standby\r\n     pagination form on standby \r\n    <form>\r\n        <select name=\"setNumPoke\" class=\"form-control\" [(ngModel)]=\"numPoke\" (change)=\"populatePokePages()\">\r\n          <option value=0>Number of Pokemon per page</option>\r\n          <option value=20>20</option>\r\n          <option value=50>50</option>\r\n          <option value=100>100</option>\r\n        </select>\r\n      </form>\r\n    </div>\r\n      put number of pages in here\r\n      <div class=\"row justify-content-md-center\">\r\n        <nav aria-label=\"Page navigation example\">\r\n          <ul>\r\n            <li><a class=\"page-link\" (click)=\"prevPage()\" aria-label=\"Previous\"></a></li>\r\n            <li><a class=\"page-link\" (click)=\"nextPage()\" aria-label=\"Next\"></a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    --> \r\n   \r\n  "

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
/* harmony import */ var src_app_models_Pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Pokemon */ "./src/app/models/Pokemon.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_trainer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/trainer.service */ "./src/app/services/trainer.service.ts");






var ShopComponent = /** @class */ (function () {
    function ShopComponent(http, trainerService, router) {
        this.http = http;
        this.trainerService = trainerService;
        this.router = router;
        this.TOTALPOKEMON = 151;
        this.currentPage = 0;
        this.cardShow = false;
        this.httpJSON = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.trainerService.checkSessionStorage();
        this.trainerService.login_status_bs.subscribe(function (status) { return _this.login_status = status; });
        this.trainerService.current_trainer_bs.subscribe(function (trainer) { return _this.trainer = trainer; });
        if (this.trainer == null) {
            this.trainerService.updateLogout();
            this.router.navigateByUrl("/PokemonCollector/ng/landing");
        }
        this.populatePokeArray();
        this.populatePokePages();
    };
    ShopComponent.prototype.onBuySubmit = function () {
        // Check if the trainer has enough credits:
        var trainer = JSON.parse(sessionStorage.getItem("TRAINER_DATA"));
        var cost = this.allPoke[this.selectedPoke].cost;
        var hasCredits = trainer.credits >= cost;
        // If the trainer has enough credits, add the Pokemon to their collecion:
        if (hasCredits) {
            trainer.credits = trainer.credits - cost;
            return this.http.post("/PokemonCollector/servlet/purchase", this.allPoke[this.selectedPoke - 1], this.httpJSON);
        }
        else {
            alert("You can't afford this Pokemon");
        }
    };
    ShopComponent.prototype.onBallClick = function () {
        //Hide pokeball img and show card div
        $("#generate-pokemon-pokeball").addClass("d-none");
        $("#generate-pokemon-card").removeClass("d-none");
        $("#generate-pokemon-draw-btn").removeClass("d-none");
        this.cardShow = true;
    };
    //gets all pokeinfo from the cache
    ShopComponent.prototype.getAllPokemon = function () {
        return this.http.get("/PokemonCollector/servlet/allpokemon");
    };
    //method that calls above observable
    //iscalled onInit
    ShopComponent.prototype.populatePokeArray = function () {
        var _this = this;
        this.getAllPokemon().subscribe(function (data) {
            //put all pokemon into pokemon array
            console.log(data);
            _this.allPoke = [];
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                var newPoke = new src_app_models_Pokemon__WEBPACK_IMPORTED_MODULE_2__["Pokemon"]();
                newPoke.name = data[i].name.toUpperCase() + data[i].name.slice(1);
                newPoke.imageUrl = data[i].imageUrl;
                newPoke.id = data[i].id;
                newPoke.count = data[i].count;
                newPoke.stats = data[i].stats;
                newPoke.type = data[i].type;
                newPoke.cost = data[i].cost;
                _this.allPoke[i] = newPoke;
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
    //pagination methods on standby
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_trainer_service__WEBPACK_IMPORTED_MODULE_5__["TrainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/stats/stats.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/stats/stats.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/stats/stats.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stats/stats.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"PokemonOption\" style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>\r\n</div>\r\n<div>\r\n  <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"pokeCount\" style=\"width: 100%; height: 400px; display: block;\"></highcharts-chart>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/stats/stats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.data1 = [
            {
                name: 'Normal',
                y: 65,
            }, {
                name: 'Water',
                y: 62,
            }, {
                name: 'Grass',
                y: 38,
            }, {
                name: 'Psychic',
                y: 35,
            }, {
                name: 'Fire',
                y: 31,
            }, {
                name: 'Electric',
                y: 28,
            }, {
                name: 'Fighting',
                y: 22,
            }, {
                name: 'Bug',
                y: 18,
            }, {
                name: 'Poison',
                y: 16,
            }, {
                name: 'Ground',
                y: 15,
            }, {
                name: 'Ice',
                y: 14,
            }, {
                name: 'Dragon',
                y: 12,
            }, {
                name: 'Rock',
                y: 11,
            }, {
                name: 'Ghost',
                y: 9,
            }, {
                name: 'Flying',
                y: 7,
            }
        ];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.configUrl = "/PokemonCollector/ng/stats";
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch(this.configUrl)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            console.log(res);
            _this.data1 = res;
            _this.load();
        });
    };
    StatsComponent.prototype.load = function () {
        this.pokeCount = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Pokemons per trainer'
            },
            subtitle: {
                text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: this.data1,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.0f}',
                        y: -50,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
        this.PokemonOption = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Pokemon Types'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                        // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                    name: 'Pokemon Type',
                    colorByPoint: true,
                    data: this.data1
                }]
        };
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/components/stats/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/models/Pokemon.ts":
/*!***********************************!*\
  !*** ./src/app/models/Pokemon.ts ***!
  \***********************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokemon", function() { return Pokemon; });
var Pokemon = /** @class */ (function () {
    function Pokemon() {
    }
    return Pokemon;
}());



/***/ }),

/***/ "./src/app/models/redeem-ticket.ts":
/*!*****************************************!*\
  !*** ./src/app/models/redeem-ticket.ts ***!
  \*****************************************/
/*! exports provided: RedeemTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemTicket", function() { return RedeemTicket; });
var RedeemTicket = /** @class */ (function () {
    function RedeemTicket(POKEID) {
        this.POKEID = POKEID;
    }
    return RedeemTicket;
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
        if (req.url.includes("login") || req.url.includes("register") || req.url === "/") {
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
/* harmony import */ var _models_redeem_ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/redeem-ticket */ "./src/app/models/redeem-ticket.ts");




var PokedexService = /** @class */ (function () {
    function PokedexService(_http) {
        this._http = _http;
        this.redeemTicketModel = new _models_redeem_ticket__WEBPACK_IMPORTED_MODULE_3__["RedeemTicket"](0);
    }
    PokedexService.prototype.generatePokemon = function () {
        return this._http.get("/PokemonCollector/servlet/generatePokemon");
    };
    PokedexService.prototype.getTrainersPokemon = function (username) {
        return this._http.get("/PokemonCollector/servlet/collection");
    };
    //returns all duplicate pokemon of logged in user
    PokedexService.prototype.getDuplicates = function () {
        return this._http.get("/PokemonCollector/servlet/duplicate");
    };
    //returns updated credits and increased credit amount when redeeming all pokemon
    PokedexService.prototype.redeemAll = function () {
        return this._http.get("/PokemonCollector/servlet/redeemAll");
    };
    //returns updated credits and increased credit amount when redeeming a specific pokemon
    PokedexService.prototype.redeemSpecific = function (redeemTicket) {
        //make POST request to get array of 'int's which will resemble credits earned and credits after redeem
        return this._http.post("/PokemonCollector/servlet/redeem", redeemTicket);
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
            console.log(resp);
            var t = {
                userID: resp.body.userID,
                username: resp.body.username,
                password: '',
                firstName: resp.body.firstName,
                lastName: resp.body.lastName,
                email: resp.body.email,
                credits: resp.body.credits,
                score: resp.body.score
            };
            console.log(t);
            sessionStorage.setItem("TRAINER_DATA", JSON.stringify(t));
            this.trainerService.updateValidLogin(t);
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
            Authorization: sessionStorage.getItem("CURRENT_USER"),
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
    //Method call for POST request for registering a new trainer.
    TrainerService.prototype.createTrainer = function (credentials) {
        return this._http.post("/PokemonCollector/servlet/unfiltered/register", credentials, { observe: "response" });
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
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainerService);
    return TrainerService;
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

module.exports = __webpack_require__(/*! C:\my_git_repos\PokemonCollectorGroup\PokemonCollector\src\main\ngapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map