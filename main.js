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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog-detail/blog-detail.component */ "./src/app/components/blog-detail/blog-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components








var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'portfolio/:name', component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
    { path: 'blog/:name', component: _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_9__["BlogDetailComponent"] },
    { path: 'contact-us', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"] },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n<!-- Menu -->\n<app-menu></app-menu>\n<!-- End Menu -->\n\n<router-outlet ></router-outlet>\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'ctolek-landing-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-typing-animation */ "./node_modules/angular-typing-animation/index.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/carousel/carousel.component */ "./src/app/components/shared/carousel/carousel.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/blog-detail/blog-detail.component */ "./src/app/components/blog-detail/blog-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import ng-circle-progress

// Import your library










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                angular_typing_animation__WEBPACK_IMPORTED_MODULE_7__["TypingAnimationDirective"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _components_shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_17__["ProjectComponent"],
                _components_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_18__["BlogDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                // Specify ng-circle-progress as an import
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__["NgCircleProgressModule"].forRoot({
                    // set defaults here
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 600,
                }),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/banner/banner.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"typing-container\">\n        <img class=\"img-banner\" src=\"../../../assets/images/ctolenk-gray.png\" alt=\"ctolen-banner\">\n        <h1 class=\"text-align\">I am Carlos Tolentino</h1>\t\t\n        <span class=\"typing-span\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"cursor\" [condition]=\"start\" [startDelay]=\"0\"   (complete)=\"onTypingAnimationComplete()\">\n            And I am\n        </span>\t\n        <span class=\"typing-span\" *ngIf=\"stateTyping == 1\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"cursor\" [condition]=\"start\" [startDelay]=\"1000\"   (complete)=\"onTypingAnimationComplete()\">\n            {{ stringInterpolation }}\n        </span>\n        <span class=\"typing-span\" *ngIf=\"stateTyping == 2\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"cursor\" [condition]=\"start\" [startDelay]=\"1000\" (complete)=\"onTypingAnimationComplete()\">\n            {{ stringInterpolation }}\n        </span>\n        <span class=\"typing-span\" *ngIf=\"stateTyping == 3\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"cursor\" [condition]=\"start\" [startDelay]=\"1000\" (complete)=\"onTypingAnimationComplete()\">\n            {{ stringInterpolation }}\n        </span>  \n        <span class=\"typing-span\" *ngIf=\"stateTyping == 4\" typingAnimation [typeSpeed]=\"100\" [hideCursorOnComplete]=\"cursor\" [condition]=\"start\" [startDelay]=\"1000\" (complete)=\"onTypingAnimationComplete()\">\n            {{ stringInterpolation }}\n        </span>  \n      \n      </div>       \n    </div>\n\n\n      \n    <div class=\"goto-container\">\n        <a (click)=\"navigationBeggin(750)\"><i class=\"fa fa-arrow-down\"></i></a>       \n    </div> \n\n\n  \n </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/banner/banner.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/banner/banner.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--secondary-color);\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('bg-ctolenk-cos.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 90vh !important; }\n\n.typing-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.img-banner {\n  width: 90%;\n  margin-top: -6em;\n  margin-bottom: 2em; }\n\n.iso-logo {\n  position: absolute;\n  top: 7em;\n  width: 42px;\n  height: 42px; }\n\n.typing-container h1, h2 {\n  text-align: center;\n  font-size: 3rem;\n  color: white; }\n\n.typing-span {\n  color: var(--secondary-color);\n  font-size: 2.4rem; }\n\n.goto-container {\n  position: absolute;\n  bottom: 11em;\n  background-color: var(--secondary-color-dark);\n  width: 2.3em;\n  height: 2.1em;\n  border-radius: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.goto-container a {\n    color: white;\n    font-size: 1em;\n    opacity: 0.5; }\n\n.goto-container a:hover {\n    color: var(--primary-color) !important; }\n\n/* \n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n@media (min-width: 1281px) {\n  .jumbotron {\n    height: 100vh !important; }\n  .img-banner {\n    width: 60%;\n    margin-top: -6em;\n    margin-bottom: 2em; }\n  .typing-container h1, h2 {\n    font-size: 5rem; }\n  .typing-span {\n    font-size: 3.4rem; }\n  .goto-container {\n    bottom: 5em; } }\n\n/* \n    ##Device = Laptops, Desktops\n    ##Screen = B/w 1025px to 1280px\n  */\n\n@media (min-width: 1024px) and (max-width: 1280px) {\n  .jumbotron {\n    height: 100vh !important; }\n  .img-banner {\n    width: 50%;\n    margin-top: -6em;\n    margin-bottom: 2em; }\n  .typing-container h1, h2 {\n    font-size: 4.5rem; }\n  .typing-span {\n    font-size: 3rem; }\n  .goto-container {\n    bottom: 6em; } }\n\n/* \n    ##Device = Tablets, Ipads (portrait)\n    ##Screen = B/w 768px to 1024px\n  */\n\n@media (min-width: 768px) and (max-width: 1023px) {\n  .jumbotron {\n    height: 100vh !important; }\n  .img-banner {\n    width: 60%;\n    margin-top: -6em;\n    margin-bottom: 2em; }\n  .typing-container h1, h2 {\n    font-size: 4.5rem; }\n  .typing-span {\n    font-size: 3rem; }\n  .goto-container {\n    bottom: 6em; } }\n\n/* \n    ##Device = Tablets, Ipads (landscape)\n    ##Screen = B/w 768px to 1024px\n  */\n\n/* \n    ##Device = Low Resolution Tablets, Mobiles (Landscape)\n    ##Screen = B/w 481px to 767px\n  */\n\n/* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLDhCQUE2QjtFQUM3QixxR0FDcUU7RUFDckUsNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsd0JBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFFQztFQUNJLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFNBQVE7RUFFUixZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUVIO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUVEO0VBQ0ksOEJBQTZCO0VBQzdCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osOENBQTZDO0VBQzdDLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQVlwQjs7QUF0QkQ7SUFhSSxhQUFZO0lBQ1osZUFBYztJQUNkLGFBQVksRUFDYjs7QUFoQkg7SUFtQkksdUNBQXFDLEVBQ3RDOztBQUtIOzs7RUFHRTs7QUFFRjtFQUVJO0lBQ0kseUJBQXVCLEVBQ3hCO0VBRUg7SUFDSSxXQUFVO0lBQ1YsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNyQjtFQUVEO0lBQ0ksZ0JBQWUsRUFDbEI7RUFFRDtJQUNJLGtCQUFpQixFQUNwQjtFQUVEO0lBQ0ksWUFBVyxFQUNaLEVBQUE7O0FBSUw7OztJQUdFOztBQUVGO0VBR0U7SUFDSSx5QkFBdUIsRUFDeEI7RUFFSDtJQUNJLFdBQVU7SUFDVixpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBQ3JCO0VBRUQ7SUFDSSxrQkFBaUIsRUFDcEI7RUFFRDtJQUNJLGdCQUFlLEVBQ2xCO0VBRUQ7SUFDSSxZQUFXLEVBQ2QsRUFBQTs7QUFJSDs7O0lBR0U7O0FBRUY7RUFHRTtJQUNJLHlCQUF1QixFQUN4QjtFQUVIO0lBQ0ksV0FBVTtJQUNWLGlCQUFnQjtJQUNoQixtQkFBa0IsRUFDckI7RUFFRDtJQUNJLGtCQUFpQixFQUNwQjtFQUVEO0lBQ0ksZ0JBQWUsRUFDbEI7RUFFRDtJQUNJLFlBQVcsRUFDZCxFQUFBOztBQUlIOzs7SUFHRTs7QUFRRjs7O0lBR0U7O0FBUUY7OztJQUdFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctY3RvbGVuay1jb3MuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA5MHZoIWltcG9ydGFudDtcbiAgfVxuXG4gIC50eXBpbmctY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgICAgIFxufVxuXG4gIC5pbWctYmFubmVye1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1hcmdpbi10b3A6IC02ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIH1cblxuICAuaXNvLWxvZ297XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogN2VtO1xuICBcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7O1xuICB9XG5cbi50eXBpbmctY29udGFpbmVyIGgxLCBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnR5cGluZy1zcGFue1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uZ290by1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItZGFyayk7XG4gIHdpZHRoOiAyLjNlbTtcbiAgaGVpZ2h0OiAyLjFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICBcblxuICBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICBhOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSFpbXBvcnRhbnQ7XG4gIH0gIFxuXG59XG5cblxuLyogXG4gICMjRGV2aWNlID0gRGVza3RvcHNcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcblxuICAgIC5qdW1ib3Ryb24geyAgXG4gICAgICAgIGhlaWdodDogMTAwdmghaW1wb3J0YW50O1xuICAgICAgfVxuICBcbiAgICAuaW1nLWJhbm5lcntcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTZlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIH1cblxuICAgIC50eXBpbmctY29udGFpbmVyIGgxLCBoMnsgICAgICBcbiAgICAgICAgZm9udC1zaXplOiA1cmVtOyAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLnR5cGluZy1zcGFueyAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMy40cmVtO1xuICAgIH1cblxuICAgIC5nb3RvLWNvbnRhaW5lcnsgICAgICAgXG4gICAgICAgIGJvdHRvbTogNWVtOyAgICAgICAgIFxuICAgICAgfVxuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuICAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIFxuICAgIC8vQ1NTXG4gICAgLmp1bWJvdHJvbiB7ICBcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgIC5pbWctYmFubmVye1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgfVxuXG4gICAgLnR5cGluZy1jb250YWluZXIgaDEsIGgyeyAgICAgIFxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTsgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC50eXBpbmctc3BhbnsgICAgIFxuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuXG4gICAgLmdvdG8tY29udGFpbmVyeyAgICAgICBcbiAgICAgICAgYm90dG9tOiA2ZW07ICAgICAgICAgXG4gICAgfVxuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcbiAgICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIFxuICAgIC8vQ1NTXG4gICAgLmp1bWJvdHJvbiB7ICBcbiAgICAgICAgaGVpZ2h0OiAxMDB2aCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgIC5pbWctYmFubmVye1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgfVxuXG4gICAgLnR5cGluZy1jb250YWluZXIgaDEsIGgyeyAgICAgIFxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTsgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC50eXBpbmctc3BhbnsgICAgIFxuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuXG4gICAgLmdvdG8tY29udGFpbmVyeyAgICAgICBcbiAgICAgICAgYm90dG9tOiA2ZW07ICAgICAgICAgXG4gICAgfVxuICAgIFxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XG4gICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIFxuICAgIC8vQ1NTXG4gICAgXG4gIH1cbiAgXG4gIC8qIFxuICAgICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAgICMjU2NyZWVuID0gQi93IDQ4MXB4IHRvIDc2N3B4XG4gICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIFxuICAgIC8vQ1NTXG4gICAgXG4gIH1cbiAgXG4gIC8qIFxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiAgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgXG4gICAgLy9DU1NcbiAgICBcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_animate_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-animate-scroll */ "./node_modules/ng-animate-scroll/fesm5/ng-animate-scroll.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent(animateScrollService) {
        this.animateScrollService = animateScrollService;
        this.start = false;
        this.cursor = true;
        this.stringInterpolation = "Frontend Developer";
        this.stateTyping = 0;
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start after 1 second + 1 second of startDelay
        setTimeout(function () { return _this.start = true; }, 1000);
    };
    BannerComponent.prototype.navigationBeggin = function (duration) {
        this.animateScrollService.scrollToElement('begin-home', duration);
    };
    BannerComponent.prototype.onTypingAnimationComplete = function () {
        // console.log('#TYPING ANIMATION COMPLETE');  
        var _this = this;
        if (this.stateTyping < 1) {
            this.stateTyping++;
        }
        switch (this.stateTyping) {
            case 1: {
                this.stringInterpolation = 'Frontend Developer';
                setTimeout(function () {
                    _this.stateTyping++;
                    console.log("Fin del timmer");
                    console.log(_this.stateTyping);
                }, 500);
                break;
            }
            case 2: {
                this.stringInterpolation = 'Backend Developer';
                setTimeout(function () {
                    _this.stateTyping++;
                    console.log("Fin del timmer");
                    console.log(_this.stateTyping);
                }, 500);
                break;
            }
            case 3: {
                this.stringInterpolation = 'FullStack Developer';
                setTimeout(function () {
                    _this.stateTyping++;
                    console.log("Fin del timmer");
                    console.log(_this.stateTyping);
                }, 500);
                break;
            }
            case 4: {
                this.stringInterpolation = 'Mobile Developer';
                setTimeout(function () {
                    _this.stateTyping = 1;
                    console.log("Fin del timmer");
                    console.log(_this.stateTyping);
                }, 500);
                break;
            }
            default: this.stateTyping = 1;
        }
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/components/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_animate_scroll__WEBPACK_IMPORTED_MODULE_1__["NgAnimateScrollService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-detail/blog-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-detail/blog-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated  fadeInUp \">\n<!--Main-->\n<main class=\"cd-main\">\n\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section blog_details visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\n\t\t\t\t<!--Title -->\n\t\t\t\t<h1>Inventory <span class=\"bolder\">System</span></h1>\n\t\t\t\t<h3>Web Based Fully Cloud System</h3>\n\t\t\t\t<!--End Title -->\n\n\t\t\t\t<!--Main Content-->\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<!-- Right content -->\n\t\t\t\t\t<div class=\"col-sm-3 col-sm-push-9\">\n\t\t\t\t\t\t<!-- <div class=\"input-group search_btn\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"port_detail_next_search\">\n\t\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Categories</h4>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tWeb Design\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tTechnology\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tFrontend \n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>Backend\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"blog_detail_social_icon\">\n\t\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Social Media</h4>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<span class=\"g-plus\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<span class=\"fb\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<span class=\"twt\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<span class=\"pinit\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<span class=\"lin\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Latest Post</h4>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-12 mb40 blog_post_img latest_blog\">\n\t\t\t\t\t\t\t\t<h5><a href=\"blog_details.html#\" target=\"_blank\">Standard Gallery Post</a></h5>\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive mob_img mtb20\" src=\"assets/images/st_gallery1.jpg\" alt=\"Standard Gallery\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic work  client-based eliverables.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">\n\t\t\t\t\t\t\t\t\t<span class=\"cmt\"></span>\n\t\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\">14 Comments</a></h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-12 mb40 blog_post_img latest_blog\">\n\t\t\t\t\t\t\t\t<h5><a href=\"blog_details.html#\" target=\"_blank\">Classic Gallery Post</a></h5>\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive mob_img mtb20\" src=\"assets/images/st_gallery2.jpg\" alt=\"Standard Gallery\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic work  client-based eliverables.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\"><span class=\"cmt\"></span><a href=\"blog_details.html#\">30 Comments</a></h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-12 blog_post_img latest_blog\">\n\t\t\t\t\t\t\t\t<h5><a href=\"blog_details.html#\" target=\"_blank\">Creative Gallery Post</a></h5>\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive mob_img mtb20\" src=\"assets/images/st_gallery3.jpg\" alt=\"Standard Gallery\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic work  client-based eliverables.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\"><span class=\"cmt\"></span><a href=\"blog_details.html#\">34 Comments</a></h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--End Right content-->\n\n\t\t\t\t\t<!--Left content-->\n\t\t\t\t\t<div class=\"col-sm-9 col-sm-pull-3\">\n\t\t\t\t\t\t<span class=\"portfolio_date mb20\">FEBRUARY,2016</span>\n\n\t\t\t\t\t\t<div class=\"mb30\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive img_fix_width mt20\" src=\"assets/images/blog_detail1.jpg\" alt=\"Big_ Details\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb30\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage exist customiz  ideas through client-based eliverables. Compellingly unleashd .\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t<p>\" Sit ametctetur adipising elit, sed do eiusmod tempor incididint ut labore magna aliuua. Ut enim ad minim veniam, quis nosturd exercitation u, lamco laboris nisi ut aliquip \"</p>\n\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mb20\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage exist customiz  ideas through client-based eliverables. Compellingly unleashd .\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestiae adipisci fugit quo quidem quasi numquam consequuntur, ullam expedita quam repellat ducimus deleniti, soluta exercitationem. Doloremque perspiciatis id ea.\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestiae adipisci fugit quo quidem quasi numquam consequuntur, ullam expedita quam repellat ducimus deleniti, soluta exercitationem. Doloremque perspiciatis id ea.\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestiae adipisci fugit quo quidem quasi numquam consequuntur, ullam expedita quam repellat ducimus deleniti, soluta exercitationem. Doloremque perspiciatis id ea.\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem molestiae adipisci fugit quo quidem quasi numquam consequuntur, ullam expedita quam repellat ducimus deleniti, soluta exercitationem. Doloremque perspiciatis id ea.\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"blog_person pull-right blog_details_person\">\n\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\" id=\"comment\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>Comments\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t\t<a href=\"blog_details.html#\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row mb40\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<h3>Feature Post</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 blog_post_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive img_fix_width mb20\" src=\"assets/images/blog_detail_post1.jpg\" alt=\"Blog-Detail\">\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, that it consectetuer adipiscing elit.Aenean commodo.</p>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 blog_post_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive img_fix_width mb20\" src=\"assets/images/blog_detail_post2.jpg\" alt=\"Blog-Detail\">\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, that it consectetuer adipiscing elit.Aenean commodo.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 blog_post_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive img_fix_width mb20\" src=\"assets/images/blog_detail_post3.jpg\" alt=\"Blog-Detail\">\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, that it consectetuer adipiscing elit.Aenean commodo.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 mb40\"><h3>Comment on This Post</h3>\n\n\t\t\t\t\t\t\t\t<ul class=\"blog_comment\">\n\t\t\t\t\t\t\t\t\t<li class=\"mb40\">\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog_cmt1.jpg\" alt=\"blog-comment\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog_comment_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Jeason</h5>\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"pull-right\">Mar 10, 2015</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt20\">\n\t\t\t\t\t\t\t\t\t\t\t\tThis is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"blog_comment_icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"reply_icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"heart_icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>80</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment_detail\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_share_detail\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"blog_reply mt40\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog_reply2.jpg\" alt=\"blog-comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"blog_comment_cont\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>Jeason</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"pull-right\">Mar 10, 2015</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt10\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis is Photoshop's version  of Lorem\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog_cmt2.jpg\" alt=\"blog-comment\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"blog_comment_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h5>Jeason</h5>\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"pull-right\">Mar 10, 2015</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"mt20\">\n\t\t\t\t\t\t\t\t\t\t\t\tThis is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"blog_comment_icons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"reply_icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"heart_icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>80</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment_detail\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"blog_share_detail\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"reply\" class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"system_font_color blog_detail_reply_form\">\n\t\t\t\t\t\t\t\t\t<h4>Leave A Reply</h4>\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mob_control\" id=\"email\" placeholder=\"Your Name\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"e_mail\" placeholder=\"Email Id\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"pwd\" placeholder=\"Website\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\" cols=\"50\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right mob_center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn system_btn\">Send Message</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--End Left content-->\n\t\t\t\t</div>\n\t\t\t\t<!--End Main Content-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\n\t</section>\n\t<!--End Inner Main Section-->\n\n</main>\n<!--End Main-->\n</div>"

/***/ }),

/***/ "./src/app/components/blog-detail/blog-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-detail/blog-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1kZXRhaWwvYmxvZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog-detail/blog-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/blog-detail/blog-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailComponent", function() { return BlogDetailComponent; });
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

var BlogDetailComponent = /** @class */ (function () {
    function BlogDetailComponent() {
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
    };
    BlogDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-detail',
            template: __webpack_require__(/*! ./blog-detail.component.html */ "./src/app/components/blog-detail/blog-detail.component.html"),
            styles: [__webpack_require__(/*! ./blog-detail.component.scss */ "./src/app/components/blog-detail/blog-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogDetailComponent);
    return BlogDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated  fadeInDown \">\n\n<!--Main-->\n<main class=\"cd-main\">\n\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section blog visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\n\t\t\t\t<!--Intro -->\n\t\t\t\t<h1 class=\"title\">My <span class=\"bolder\">Blog</span></h1>\n\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks. Quickly rather than multimedia based Collaboratively synergize economically sound process improvements with functionalized e-commerce.\n\t\t\t\t</p>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Blog 1-->\n\t\t\t\t<div class=\"valign-wrapper blog_block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"blog_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog1.jpg\" alt=\"Blogs\">\n\t\t\t\t\t\t\t\t<div class=\"blog_date\">\n\t\t\t\t\t\t\t\t\t<h5>30 April, 2018</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<a href=\"blog_details.html\">\n\t\t\t\t\t\t\t\t<h4 class=\"system_font_color text-uppercase\">No one should ever have left the oceans</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"blog_person\">\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"blog.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"user_icon\"></span>Carlos Tolentino\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"http://localhost/resume/resume/blog_details.html#reply\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>65 comments\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etwor s.Quickly erage existing customized ideas through client- based eliver ables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness..\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/blog/name-blog-detail\"class=\"btn system_btn text-uppercase\" data-menu=\"blog_details\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--Blog 2-->\n\t\t\t\t<div class=\"valign-wrapper blog_block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-push-6\">\n\t\t\t\t\t\t\t<div class=\"blog_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog2.jpg\"  alt=\"Blogs\">\n\t\t\t\t\t\t\t\t<div class=\"blog_date\">\n\t\t\t\t\t\t\t\t\t<h5>3 June, 2016</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-pull-6\">\n\t\t\t\t\t\t\t<a href=\"blog_details.html\">\n\t\t\t\t\t\t\t\t<h4 class=\"system_font_color text-uppercase\">No one should ever have left the oceans</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"blog_person\">\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"blog.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"user_icon\"></span>Carlos Tolentino\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"http://localhost/resume/resume/blog_details.html#reply\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>85 comments\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etwor s.Quickly erage existing customized ideas through client- based eliver ables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness..\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html\" class=\"btn system_btn text-uppercase\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--Blog 3-->\n\t\t\t\t<div class=\"valign-wrapper blog_block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"blog_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog3.jpg\" alt=\"Blogs\">\n\t\t\t\t\t\t\t\t<div class=\"blog_date\">\n\t\t\t\t\t\t\t\t\t<h5>4 July, 2016</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<a href=\"blog_details.html\">\n\t\t\t\t\t\t\t\t<h4 class=\"system_font_color text-uppercase\">No one should ever have left the oceans</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"blog_person\">\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"blog.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"user_icon\"></span>Carlos Tolentino\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"http://localhost/resume/resume/blog_details.html#reply\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>62 comments\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etwor s.Quickly erage existing customized ideas through client- based eliver ables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness..\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html\" class=\"btn system_btn text-uppercase\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--Blog 4 - Appear after Show more button click-->\n\t\t\t\t<div id=\"mob_hide_block\" class=\"let_show valign-wrapper blog_block\" style=\"display:none;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-push-6\">\n\t\t\t\t\t\t\t<div class=\"blog_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog4.jpg\" alt=\"Blogs\">\n\t\t\t\t\t\t\t\t<div class=\"blog_date\">\n\t\t\t\t\t\t\t\t\t<h5>30 August, 2016</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6 col-md-pull-6\">\n\t\t\t\t\t\t\t<a href=\"blog_details.html\">\n\t\t\t\t\t\t\t\t<h4 class=\"system_font_color text-uppercase\">No one should ever have left the oceans</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"blog_person\">\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"blog.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"user_icon\"></span>Carlos Tolentino\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"http://localhost/resume/resume/blog_details.html#reply\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>62 comments\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etwor s.Quickly erage existing customized ideas through client- based eliver ables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness..\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html\" class=\"btn system_btn text-uppercase\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<!--Blog 5 - Appear after Show more button click-->\n\t\t\t\t<div class=\"let_show valign-wrapper blog_block\" style=\"display:none;\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<div class=\"blog_img\">\n\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/blog5.jpg\" alt=\"Blogs\">\n\t\t\t\t\t\t\t\t<div class=\"blog_date\">\n\t\t\t\t\t\t\t\t\t<h5>15 August, 2016</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<a href=\"blog_details.html\">\n\t\t\t\t\t\t\t\t<h4 class=\"system_font_color text-uppercase\">No one should ever have left the oceans</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"blog_person\">\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"blog.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"user_icon\"></span>Carlos Tolentino\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<a href=\"http://localhost/resume/resume/blog_details.html#reply\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"blog_coment\"></span>62 comments\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t\t<span class=\"blog_share\"></span>Share\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etwor s.Quickly erage existing customized ideas through client- based eliver ables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness..\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<a href=\"blog_details.html\" class=\"btn system_btn text-uppercase\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!--Show more blog-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t<a id=\"loadMore\" class=\"btn system_btn\">Show More Blog</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Show more blog-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\t\n\n\t</section>\n\t<!--End Inner Main Section-->\n\n</main>\n<!--End Main-->\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/components/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated  fadeInUp \">\n\n\n<!--Main-->\n<main class=\"cd-main\">\n\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section contact visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\t\t\t\t<!--Intro-->\n\t\t\t\t<h1 class=\"title\">Contact <span class=\"bolder\">Me</span></h1>\n\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks. Quickly rather than multimedia based Collaboratively synergize economically sound process improvements with functionalized e-commerce.\n\t\t\t\t</p>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Main Content-->\n\t\t\t\t<div class=\"row\">\t\t\t\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<h3>Keep in Touch</h3>\n\t\t\t\t\t\t<div class=\"cont_info\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<strong>Email </strong>\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>carlos.tolentinoe@ctolenk.xyz</span>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 class=\"mb30\">\n\t\t\t\t\t\t\t\t<strong>Phone :</strong>\n\t\t\t\t\t\t\t\t<span>+1 (829) 264-0093</span>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h3>Social Networks</h3>\n\t\t\t\t\t\t<div class=\"social-network\">\n\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>  \n\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>  \n\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-instagram\"></i></a>  \n\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>  \n\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-github\"></i></a>  \n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<h3>We are waiting to Assist you</h3>\n\t\t\t\t\t\t<p class=\"mb30\">\n\t\t\t\t\t\t\tThis is Photoshop's version  of Lorem Ipsum. Proin gravid  nibh vel velit auctor aliquet.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h6 class=\"system_font_color mb30\">Simply use the form below to get in touch</h6>\n\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"first_name\" placeholder=\"Your Name\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"contact_email\" placeholder=\"Email Address\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Subject\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"4\" cols=\"50\" id=\"contact_message\" placeholder=\"Message\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mob_center\">\n\t\t\t\t\t\t\t\t<button id=\"submit-form\" class=\"btn system_btn submit-form\">Send Message</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Main Content-->\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\n\t</section>\n\t<!--End Inner Main Section-->\n\n</main>\n<!--End Main-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-network {\n  padding-bottom: 2em;\n  display: flex;\n  align-content: center;\n  align-items: center; }\n  .social-network a {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    margin: 0.7em;\n    padding: 1em;\n    background-color: var(--secondary-color);\n    border-radius: 100%; }\n  .social-network i {\n    font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLHNCQUFxQjtFQUNyQixvQkFBbUIsRUFzQnRCO0VBMUJEO0lBUVEsY0FBYTtJQUNiLHNCQUFxQjtJQUNyQixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLGFBQVk7SUFDWix5Q0FBd0M7SUFDeEMsb0JBQW1CLEVBR3RCO0VBakJMO0lBb0JRLGlCQUFnQixFQUluQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC1uZXR3b3JreyAgIFxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gXG5cbiAgICBhe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMC43ZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbTsgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICBcbiBcbiAgICB9XG5cbiAgICBpe1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuXG5cbiAgICAgICAgXG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contact-us/contact-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/components/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"footer\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 text-left\">\n\t\t\t\t<h6> CTolenk - Carlos Tolentino</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6 text-right\">\n\t\t\t\t<h6> Copyright &copy; <span id=\"copyright-year\">{{ year }}</span>. All rights reserved </h6>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!--End footer-->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  flex-shrink: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"animated  fadeIn \">\n<!-- Banner -->\n<app-banner></app-banner>\n<!-- End Banner -->\n\n<!--Main-->\n<main class=\"cd-main\" id=\"begin-home\">\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section index visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container home_container\">\n\t\t\t<div class=\"ptb-60\">\n\n\t\t\t\t<!--Intro -->\n\t\t\t\t<div class=\"row valign-wrapper\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"home_icon_block\">\n\t\t\t\t\t\t\t<!--Main Image-->\n\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/home_author.jpeg\" alt=\"Web Developer\">\n\t\t\t\t\t\t\t<!--Social icons-->\n\t\t\t\t\t\t\t<div class=\"home_social_icon\">\n\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/CTolenk-Carlos-Tolentino-319545492220924/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"facebook_icon\"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/CarlosTolenk\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"twitter_icon\"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/ctolenk/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"pin_icon\"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/ctolenk/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"linkedin_icon\"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"https://github.com/CarlosTolenk\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<span class=\"github_icon\"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--End Social icons-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6 home_author_name\">\n\t\t\t\t\t\t<div class=\"home_author_details\">\n\t\t\t\t\t\t\t<!--Main Name-->\n\t\t\t\t\t\t\t<h1>Carlos<span class=\"bolder\"> Tolentino</span></h1>\n\t\t\t\t\t\t\t<h3>Web Developer / Mobile Developer</h3>\t\t\t\t\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<span class=\"available_icon\"></span>Available On Freelancer\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"home_para_hide\">\n              I am Carlos Tolentino and I am a developer with enough experience in web and mobile technologies. Since my youth I have been passionate about technology and electronics and I will provide only the most efficient job for my clients and their users.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tEnthusiastically monetize magnetic resources via low-risk high-yield outsourcing. Enthusiastically implement backward-compatible supply chains through interactive users. Quickly develop magnetic e-services and functional e-commerce...\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"row valign-wrapper mb40\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 mob_center\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-primary system_btn quick_btn\" data-toggle=\"modal\" data-target=\"#more_details\">Quick Profile View</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"pull-right sign_img\">\n\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/ctolenk-full-color.png\" alt=\"Signature\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<br><br>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Some Facts-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 mb40\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h2>Some <span class=\"bolder\">facts</span></h2>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"coffee_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Cup of coffee</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">920</span>\n\t\t\t\t\t\t\t\t<i class=\"fas fa-mug-hot\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"clock_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Hours of coding</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">3,560</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"beg_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Work shops</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">25</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"smile_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Satisfied customer</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">96</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"code_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Line of code per minute</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">22</span><span>m</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-center home_facts\">\n\t\t\t\t\t\t\t\t<span class=\"file_icon\"></span>\n\t\t\t\t\t\t\t\t<h5>Project complited</h5>\n\t\t\t\t\t\t\t\t<span class=\"counter\">65</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Some Facts-->\n\n\t\t\t\t<br><br>\n\t\t\t\t<!--Bio-->\n\t\t\t\t<h2>Bio</h2>\n\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks. Quickly rather than multimedia based Collaboratively synergize economically sound process improvements with functionalized e-commerce.\n\t\t\t\t</p>\n\t\t\t\t<!--End Bio-->\n\n\t\t\t\t<!--Personal info-->\n\t\t\t\t<div class=\"row valign-wrapper mb40\">\n\t\t\t\t\t<div class=\"col-sm-5 author_bio_img\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"https://scontent.fsti1-1.fna.fbcdn.net/v/t1.0-1/p200x200/47438212_320822028759937_429699318912385024_n.jpg?_nc_cat=110&_nc_ht=scontent.fsti1-1.fna&oh=ce98b228b90cf40a758c48296b75bfee&oe=5C8EE742\" alt=\"Web Developer\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\t<div class=\"scroll_page_table\">\n\t\t\t\t\t\t\t<table class=\"table table-responsive\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">Name</th>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">:</th>\n\t\t\t\t\t\t\t\t\t<td class=\"pb40\">Carlos Tolentino</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">Date Of Birth</th>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">:</th>\n\t\t\t\t\t\t\t\t\t<td class=\"pb40\">23/11/1991</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">Email</th>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">:</th>\n\t\t\t\t\t\t\t\t\t<td class=\"pb40\"><a href=\"mailto:carlos.tolentinoe@ctolenk.xyz\" target=\"_top\">carlos.tolentinoe@ctolenk.xyz</a></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">Country</th>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">:</th>\n\t\t\t\t\t\t\t\t\t<td class=\"pb40\">Dominican Republic</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">Phone</th>\n\t\t\t\t\t\t\t\t\t<th class=\"pb40\">:</th>\n\t\t\t\t\t\t\t\t\t<td class=\"pb40\">+1 (829) 264-0093</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Website</th>\n\t\t\t\t\t\t\t\t\t<th>:</th>\n\t\t\t\t\t\t\t\t\t<td><a href=\"https://ctolenk.xyz/\" target=\"_blank\">https://ctolenk.xyz</a></td>\n\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Twitter</th>\n\t\t\t\t\t\t\t\t\t<th>:</th>\n\t\t\t\t\t\t\t\t\t<td><a href=\"https://twitter.com/CarlosTolenk\" target=\"_blank\">@CarlosTolenk</a></td>\n                </tr>\n                <tr>\n\t\t\t\t\t\t\t\t\t<th>Github</th>\n\t\t\t\t\t\t\t\t\t<th>:</th>\n\t\t\t\t\t\t\t\t\t<td><a href=\"https://github.com/CarlosTolenk\" target=\"_blank\">CarlosTolenk</a></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Personal info-->\n\n\t\t\t\t<br><br>\n\n\t\t\t\t<!--Services-->\n\t\t\t\t<h2>Services i offered</h2>\n\t\t\t\t<br>\n\t\t\t\t<div class=\"row mb40\">\n\t\t\t\t\t<div class=\"offered_services\">\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">\n\t\t\t\t\t\t\t<div class=\"offered_services_icon\">\n\t\t\t\t\t\t\t\t<span class=\"gamepad_icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4 class=\"mtb20 system_font_color\">Mobile Developer</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tA few months ago, we found ridiculously cheap pl ane tickets  was our first visit to the city and, believe it or not, Stockholm in February was more pleasant than Boston in March.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">\n\t\t\t\t\t\t\t<div class=\"offered_services_icon\">\n\t\t\t\t\t\t\t\t<span class=\"webdev_icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4 class=\"mtb20 system_font_color\">Web Developer</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tA few months ago, we found ridiculously cheap pl ane tickets  was our first visit to the city and, believe it or not, Stockholm in February was more pleasant than Boston in March.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 text-center\">\n\t\t\t\t\t\t\t<div class=\"offered_services_icon\">\n\t\t\t\t\t\t\t\t<span class=\"designing_icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h4 class=\"mtb20 system_font_color\">UI/UX Desing</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tA few months ago, we found ridiculously cheap pl ane tickets  was our first visit to the city and, believe it or not, Stockholm in February was more pleasant than Boston in March.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Services offered-->\n\n\t\t\t\t<!--Who am i-->\n\t\t\t\t<!-- <h2>Who am i</h2>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<p class=\"mb40 col-md-10 col-md-offset-1 text-center\">Assertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables</p>\n\t\t\t\t\t<div class=\"col-sm-12 video-img-block mb20\">\n\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/video-bg1.jpg\" alt=\"Video Background\" />\n\t\t\t\t\t\t<div class=\"video-play-icon\">\n\t\t\t\t\t\t\t<a id=\"video_modal\" class=\"video video_modal\" title=\"Video Presentation\" href=\"https://player.vimeo.com/video/61373732?color=ff0179&amp;title=0&amp;byline=0&amp;portrait=0\">\n\t\t\t\t\t\t\t\t<span class=\"play_icon\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!--End Who am i-->\n\t\t\t\t<br>\n\t\t\t\t<!-- Btn-->\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<button type=\"button\" class=\"btn system_btn mr25\">Hire Me Now</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn system_btn\">Download CV</button>\n\t\t\t\t</div>\n\t\t\t\t<!--End Btn-->\n\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\n\n\n\t</section>\n\t<!--End Inner Main Section-->\n</main>\n<!--End Main-->\n</div>\n\n\n<!-- Quick Profile showcase Modal starts -->\n<div class=\"modal fade\" id=\"more_details\">\n\t<div class=\"modal-dialog modal-lg\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\">Profile View</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body profile_modal_body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"modal_details\">\n\t\t\t\t\t\t<ul class=\"modal_profile mb40\">\n\t\t\t\t\t\t\t<li>\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<img class=\"profile_pic img img-responsive\" src=\"https://scontent.fsti1-1.fna.fbcdn.net/v/t1.0-1/p200x200/47438212_320822028759937_429699318912385024_n.jpg?_nc_cat=110&amp;_nc_ht=scontent.fsti1-1.fna&amp;oh=ce98b228b90cf40a758c48296b75bfee&amp;oe=5C8EE742\" alt=\"home_avatar_thumb\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h3>Carlos Tolentino</h3>\n\t\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t\t<span class=\"available_icon\"></span>\n\t\t\t\t\t\t\t\t\t\tFullStack Developer JavaScript\n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t<h4 class=\"working_hour\"><span class=\"bolder\">$8.00</span> /hr</h4>\n\t\t\t\t\t\t\t\t\t<p>Expert in the development of software applied to web and mobile</p>\n\t\t\t\t\t\t\t\t\t<p class=\"modal_location mb20\"><img class=\"img img-responsive\" src=\"assets/images/location.png\" alt=\"location\">Santo Domingo, RD</p>\n\t\t\t\t\t\t\t\t\t<div class=\"modal_profile_tag\">\n\t\t\t\t\t\t\t\t\t\t<span>JavaScript</span>\n\t\t\t\t\t\t\t\t\t\t<span>Nodejs</span>\n\t\t\t\t\t\t\t\t\t\t<span>Angular</span>\n\t\t\t\t\t\t\t\t\t\t<span>React</span>\n\t\t\t\t\t\t\t\t\t\t<span>React Native</span>\n\t\t\t\t\t\t\t\t\t\t<span>Php</span>\n\t\t\t\t\t\t\t\t\t\t<span>WordPress</span>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<hr />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"modal_profile_bottom\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Work History</h6>\n\t\t\t\t\t\t\t\t<h5>14 Jobs, 3,560 Hours of Coding </h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Availability</h6>\n\t\t\t\t\t\t\t\t<h5>45 hours/week full time</h5>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Week Availability</h6>\n\t\t\t\t\t\t\t\t<div class=\"availability_tags\">\n\t\t\t\t\t\t\t\t\t<span>S</span>\n\t\t\t\t\t\t\t\t\t<span>M</span>\n\t\t\t\t\t\t\t\t\t<span>T</span>\n\t\t\t\t\t\t\t\t\t<span>W</span>\n\t\t\t\t\t\t\t\t\t<span>T</span>\n\t\t\t\t\t\t\t\t\t<span>F</span>\n\t\t\t\t\t\t\t\t\t<span>S</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Language</h6>\n\t\t\t\t\t\t\t\t<h5>English, Spanish</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb30\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Check out my freelancing profiles</h6>\n\t\t\t\t\t\t\t\t<div class=\"freelance_acc_img\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<img style=\"width:98px; height:74px\" class=\"img img-responsive\" src=\"assets/images/workana.jpg\" alt=\"workana\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/freelance.png\" alt=\"freelance\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t\t<h6 class=\"system_font_color\">Join us on</h6>\n\t\t\t\t\t\t\t\t<div class=\"home_social_icons\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"index.html#\" class=\"mr5\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"fb\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"index.html#\" class=\"mr5\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"twt\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"index.html#\" class=\"mr5\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"pinit\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"index.html#\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"lin\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Quick Profile showcase Modal ends -->\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

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
        this.year = new Date().getFullYear();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Side Navigation -->\n<nav class=\"cd-side-navigation sidebar left animated\">\n\t<ul>\n\t\t<li>\n\t\t\t<a routerLink=\"/home\" routerLinkActive=\"selected\">\n\t\t\t\t<span class=\"home_icon\"></span>\n\t\t\t\t<span>Home</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"/resume\" routerLinkActive=\"selected\">\n\t\t\t\t<span class=\"resume_icon\"></span>\n\t\t\t\t<span>Resume</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"/portfolio\" routerLinkActive=\"selected\">\n\t\t\t\t<span class=\"portfolio_icon\"></span>\n\t\t\t\t<span>Portfolio</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"/blog\" routerLinkActive=\"selected\">\n\t\t\t\t<span class=\"blog_icon\"></span>\n\t\t\t\t<span>Blog</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"/contact-us\" routerLinkActive=\"selected\">\n\t\t\t\t<span class=\"cont_icon\"></span>\n\t\t\t\t<span>Contact us</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</nav>\n<!-- End Navigation -->\n\n<!--Mobile Menu icon-->\n<div id=\"sidebar-btn\" class=\"sidebar-btn toggle_icon_block\" data-action=\"toggle\" data-side=\"left\">\n\t<div id=\"toggle_icon\" class=\"toggle_icon\">\n\t\t<span></span>\n\t\t<span></span>\n\t\t<span></span>\n\t</div>\n</div>\n<!--End Mobile Menu icon-->\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Work Not Found</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"animated  fadeIn \">\n<!--Main-->\n<main class=\"cd-main\">\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section portfolio visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\t\t\t\t<!--Intro-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"portfolio_title\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<h1 class=\"title\">My <span class=\"bolder\">Portfolio</span> </h1>\n\t\t\t\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. <br/><br/><strong>Hover on any portfolio/project to check out <a href=\"portfolio2.html\" style=\"color:#0487cc; font-weight: 700\">Quick view</a> action</strong>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Portfolio/Project Main Categories-->\n\t\t\t\t<div class=\"port-tab\">\n\t\t\t\t\t<div class=\"portfolio_filters_group\">\n\t\t\t\t\t\t<ul id=\"portfolioFilter\" class=\"portfolioFilter text-center\">\n\t\t\t\t\t\t\t<li><button data-filter=\"*\" class=\"btn portfolio_btn system_btn mobile_tabs current\">All</button></li>\n\t\t\t\t\t\t\t<li><button data-filter=\".web\" class=\"btn portfolio_btn system_btn mobile_tabs\">Web Design</button></li>\n\t\t\t\t\t\t\t<li><button data-filter=\".app\" class=\"btn portfolio_btn system_btn mobile_tabs\">Web Application</button></li>\n\t\t\t\t\t\t\t<li><button data-filter=\".photo\" class=\"btn portfolio_btn system_btn mobile_tabs\">Mobile Application</button></li>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Portfolio/Project Main Categories-->\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"grid\">\n\n\t\t\t\t\t\t<!--Portfolio/Project Main Content-->\n\t\t\t\t\t\t<div id=\"portfolioContainer\" class=\"portfolioContainer\">\n\t\t\t\t\t\t\t<!--Portfolio 1-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 photo grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio1.jpg\" alt=\"Portfolio-1\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/portfolio/name-project\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 2-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 app grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio2.jpg\" alt=\"Portfolio-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 3-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 ill grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio3.jpg\" alt=\"Portfolio-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 4-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 web grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio4.jpg\" alt=\"Portfolio-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 5-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 web grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio5.jpg\" alt=\"Portfolio-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 6-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 web grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio6.jpg\" alt=\"Portfolio-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 7-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 app grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio7.jpg\" alt=\"Portfolio-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 8-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 ill grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio8.jpg\" alt=\"Portfolio-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Portfolio 9-->\n\t\t\t\t\t\t\t<div class=\"col-sm-4 ill grid-item\">\n\t\t\t\t\t\t\t\t<div class=\"port_img mb25\">\n\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/portfolio/portfolio9.jpg\" alt=\"Portfolio-9\">\n\t\t\t\t\t\t\t\t\t<div class=\"port_hover_div\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_hover_cont\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Graphics Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p>This is Photoshop's version</p>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#quick_view\" class=\"btn system_btn\">Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html\" class=\"btn system_btn\">Detail View</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End Portfolio/Project Main Content-->\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\t</section>\n\t<!--End Inner Main Section-->\n\n</main>\n<!--End Main-->\n\n</div>\n\n\n<!-- Quick Showcase of Portfolio/Project -->\n<div class=\"modal fade\" id=\"quick_view\">\n\t<div class=\"modal-dialog modal-lg\">\n\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title\">Appestia - SPA landing page</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"portfolio_modal_body\">\n\t\t\t\t\t<h5 class=\"mb20\">FEBRUARY,2018</h5>\n\n\t\t\t\t\t<h5 class=\"mb20\">\n\t\t\t\t\t\t<span>Web Devlopment</span> in\n\t\t\t\t\t\t<span>Bootstrap, HTML, CSS, Angular, Nodejs</span>\n\t\t\t\t\t</h5>\n\n\t\t\t\t\t<p class=\"mb20\">Assertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks\n\t\t\t\t\t\t<a routerLink=\"/portfolio/name-project\" target=\"_blank\">   more ...</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<!-- <div class=\"mb20\">\n\t\t\t\t\t\t<a href=\"https://themeforest.net/user/phoenixcoded\" target=\"_blank\">https://themeforest.net/user/phoenixcoded/</a>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<!-- <div class=\"mb20\">\n\t\t\t\t\t\t<a href=\"portfolio2.html#\">\n\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/tweet.png\" alt=\"Tweet\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\">\n\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/fb_like.png\" alt=\"FB\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\">\n\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/pinit.png\" alt=\"Pinit\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"port_tags\">\n\t\t\t\t\t\t<a href=\"portfolio2.html#\" class=\"btn system_btn\">Coading</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\" class=\"btn system_btn\">Inventory System</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\" class=\"btn system_btn\">Nodejs</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\" class=\"btn system_btn\">Angular</a>\n\t\t\t\t\t\t<a href=\"portfolio2.html#\" class=\"btn system_btn\">Bootstrap</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- End Quick Showcase of Portfolio/Project -->\n\n<script type=\"text/javascript\">\n\n\t/*======= Portfolio js starts ======= */\n\t$(window).load(function(){\n    console.log(\"Desde Portfolio\");\n\t\tvar $container = $('#portfolioContainer');\n\t\t$container.isotope({\n\t\t\tfilter: '*',\n\t\t\tanimationOptions: {\n\t\t\t\tduration: 750,\n\t\t\t\teasing: 'linear',\n\t\t\t\tqueue: false\n\t\t\t}\n\t\t});\n\n\t\t$('.portfolio_btn').on('click',function(){\n\t\t\t$('.current').removeClass('current');\n\t\t\t$(this).addClass('current');\n\n\t\t\tvar selector = $(this).attr('data-filter');\n\t\t\t$container.isotope({\n\t\t\t\tfilter: selector,\n\t\t\t\tanimationOptions: {\n\t\t\t\t\tduration: 750,\n\t\t\t\t\teasing: 'linear',\n\t\t\t\t\tqueue: false\n\t\t\t\t}\n\t\t\t});\n\t\t\treturn false;\n\t\t});\n\t});\n\t/*======= Portfolio js ends ======= */\n\n</script>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current {\n  background: #fff;\n  border: 1px solid var(--secondary-color);\n  color: var(--primary-color); }\n\n.port_hover_div {\n  background-color: #e21e35c6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLHlDQUF3QztFQUN4Qyw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSw0QkFBMkIsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnBvcnRfaG92ZXJfZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjFlMzVjNjsgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/components/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated  fadeInDown \">\n\n<!--Main-->\n<main class=\"cd-main\">\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section port_details visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\n\t\t\t\t<!--Intro -->\n\t\t\t\t<h1>Inventory <span class=\"bolder\">System</span></h1>\n\t\t\t\t<h3>Web Based Fully Cloud System</h3>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Main Content-->\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<!--Portfolio Right side bar-->\n\t\t\t\t\t<div class=\"col-sm-4 col-sm-push-8\">\n\t\t\t\t\t\t<!--Search-->\n\t\t\t\t\t\t<!-- <div class=\"input-group search_btn\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<!--Categories-->\n\t\t\t\t\t\t<div class=\"port_detail_next_search\">\n\t\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Categories</h4>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tWeb Design\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tWeb App\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tWordPress\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\tMobile App\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right pull-right\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--Recent posts-->\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Recent Projects</h4>\n\t\t\t\t\t\t\t<div class=\"row recent_post\">\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post1.jpg\" alt=\"Post\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<h5>Mobile Application Control Diamante</h5>\n\t\t\t\t\t\t\t\t\t\t<h5>15 aug, 2018</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row recent_post\">\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 \">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post2.jpg\" alt=\"Post\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<h5>ERP Control Diamante</h5>\n\t\t\t\t\t\t\t\t\t\t<h5>24 sept, 2018</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row recent_post\">\n\t\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"assets/images/post3.jpg\" alt=\"Post\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<h5>CRM Nico Design</h5>\n\t\t\t\t\t\t\t\t\t\t<h5>27 sept, 2018</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--Tags-->\n\t\t\t\t\t\t<div class=\"port_tags\">\n\t\t\t\t\t\t\t<h4 class=\"system_font_color mtb-40\">Tags</h4>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">Coading</a>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">Inventory System</a>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">Single Page Application</a>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">CRM</a>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">CMS</a>\n\t\t\t\t\t\t\t<a href=\"portfolio_details.html#\" class=\"btn system_btn\">ERP</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--End Portfolio Right side bar-->\n\n\t\t\t\t\t<!--Project details-->\n\t\t\t\t\t<div class=\"col-sm-8 col-sm-pull-4\">\n\t\t\t\t\t\t<span class=\"portfolio_date mb20\">FEBRUARY, 2017</span>\n\t\t\t\t\t\t<!--Images-->\n\t\t\t\t\t\t<div class=\"port_details_all_img\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<div id=\"big_banner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"port_big_img\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel slider-for\" \n\t\t\t\t\t\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t\t\t\t\t\t[config]=\"slideConfigProject\" \t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let project of projectBig\" class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive mt20\" src=\"{{project.img}}\" alt=\"Big_ Details\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"port_detail_title\">{{project.title}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row mt20\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\t\t\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel  slider-nav \" \n\t\t\t\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t\t\t\t[config]=\"slideConfigProjectAvatar \" \t\t\t\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let project of projectSmall\" class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img img-responsive\" src=\"{{project.img}}\" alt=\"small-details\" >\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\t\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\t\t\t\t\tA few months ago, we found ridiculously cheap plane tickets for Boston and off we went. It was our first visit to the city and, believe it or not, Stockholm in February was more pleasant than Boston in March. It probably has a lot to do with the fact that we arrived completely unprepard. That It was so cold that I wouldn't even reach for my camera. I snapped more pictures.\n\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident dolore inventore ab earum facilis a adipisci, laborum magnam dignissimos maxime possimus officiis porro vero labore est debitis totam culpa?\n\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore et earum iste incidunt? Et error, ipsum a recusandae sunt saepe iure debitis excepturi. Non perferendis perspiciatis recusandae rerum inventore.\n\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt ipsa aut inventore eum. Provident cumque accusamus, natus nostrum, corrupti eum inventore ut, doloremque possimus ipsum modi ducimus consectetur quod?\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mb40 col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"port_detail_url\">\n                        URL :\n                        <a href=\"#\" target=\"_blak\">https://projectclient.domain/</a>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!--Source-->\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<h3>Technology Used</h3>\n\t\t\t\t\t\t\t\t<ul class=\"port_source pl20\">\n\t\t\t\t\t\t\t\t\t<li><h4>Angular 7</h4></li>\n\t\t\t\t\t\t\t\t\t<li><h4>Bootstrap 4</h4></li>\n\t\t\t\t\t\t\t\t\t<li><h4>Socket IO</h4></li>\n\t\t\t\t\t\t\t\t\t<li><h4>Nodejs</h4></li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li><h4>Twilio</h4></li>             \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Technology used-->\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-xs-12\">\n\t\t\t\t\t\t\t\t<h3>Setting Used</h3>\n\t\t\t\t\t\t\t\t<ul class=\"pl0\">\n\t\t\t\t\t\t\t\t\t<li class=\"port_tech_item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"divider\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"port_icon1\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Real Time</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>Give extra smooth effect to your web page</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"port_tech_item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"divider\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"port_icon2\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Single Page Application</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>Give extra smooth effect to your web page</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"port_tech_item\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"divider\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"port_icon3\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Responsive  Design</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>Give extra smooth effect to your web page</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--Duration-->\n\t\t\t\t\t\t<div id=\"port_chart\" class=\"text-center mb40\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"text-left\">Time Duration</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\n\t\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t\t[percent]=\"80\"\n\t\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[animationDuration]=\"3500\"\n\t\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tsubtitle=\"Days\"\n\t\t\t\t\t\t\t\t\t\t[titleFontSize]=\"6\"\n\t\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"3.5\"\n\t\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"0.1\"\t\n\t\t\t\t\t\t\t\t\t\tclass=\"circle-progress-ng\"\n\t\t\t\t\t\t\t\t\t\t></circle-progress>\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb20\">Time of development</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>A few months ago, we found ridiculously cheap plane </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\n\t\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t\t[percent]=\"92\"\n\t\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[animationDuration]=\"3500\"\n\t\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tsubtitle=\"UI/UX\"\n\t\t\t\t\t\t\t\t\t\t[titleFontSize]=\"6\"\n\t\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"3.5\"\n\t\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"3.1\"\t\n\t\t\t\t\t\t\t\t\t\tclass=\"circle-progres\"></circle-progress>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb20\">Easy to use</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>A few months ago, we found ridiculously cheap plane </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\n\t\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t\t[percent]=\"100\"\n\t\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[animationDuration]=\"3500\"\n\t\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tsubtitle=\"Operations\"\n\t\t\t\t\t\t\t\t\t\t[titleFontSize]=\"6\"\n\t\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"3.5\"\n\t\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"3.1\"\t\n\t\t\t\t\t\t\t\t\t\tclass=\"circle-progres\"></circle-progress>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"mb20\">Customer Satisfaction</h5>\n\t\t\t\t\t\t\t\t\t\t\t<p>A few months ago, we found ridiculously cheap plane </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--Review-->\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<h3>Client Review</h3>\n\t\t\t\t\t\t\t\t<div id=\"review\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel\" \n\t\t\t\t\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t\t\t\t\t[config]=\"slideConfig\" \t\t\t\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let quote of blockquotes\" class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{quote.text}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center mt20 mb20\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"text-uppercase system_font_color\">{{quote.name}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6>{{quote.company}}.</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"system_span\">{{quote.date}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--End Project details-->\n\n\t\t\t\t</div>\n\t\t\t\t<!--Main Content-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\n\n\n\t</section>\n\t<!--End Inner Main Section-->\n</main>\n<!--End Main-->\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".port_detail_url a {\n  font-size: 1em;\n  color: var(--primary-color); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydF9kZXRhaWxfdXJse1xuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
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

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.blockquotes = [
            {
                text: "1.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                company: 'Google Inc',
                name: 'Carlos Tolentino',
                date: '4th July 2017'
            },
            {
                text: "2.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                company: 'Facebook Inc',
                name: 'Raul Castro',
                date: '5th July 2017'
            },
            {
                text: "3.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                name: 'Steph Fadul',
                company: 'Google Inc',
                date: '6th July 2017'
            },
            {
                text: "4.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                company: 'Google Inc',
                name: 'Nethan Jone',
                date: '7th July 2017'
            },
        ];
        this.projectBig = [
            {
                img: "assets/images/portfolio/portfolio_big1.jpg",
                title: 'Contact-us',
            },
            {
                img: "assets/images/portfolio/portfolio_big2.jpg",
                title: 'Home',
            },
            {
                img: "assets/images/portfolio/portfolio_big3.jpg",
                title: 'Porftolio',
            },
            {
                img: "assets/images/portfolio/portfolio_big4.jpg",
                title: 'Contact-us',
            },
            {
                img: "assets/images/portfolio/portfolio_big5.jpg",
                title: 'About-us',
            },
            {
                img: "assets/images/portfolio/portfolio_big6.jpg",
                title: 'Section',
            }
        ];
        this.projectSmall = [
            {
                img: "assets/images/portfolio/portfolio_small1.jpg",
            },
            {
                img: "assets/images/portfolio/portfolio_small2.jpg",
            },
            {
                img: "assets/images/portfolio/portfolio_small3.jpg",
            },
            {
                img: "assets/images/portfolio/portfolio_small4.jpg",
            },
            {
                img: "assets/images/portfolio/portfolio_small5.jpg",
            },
            {
                img: "assets/images/portfolio/portfolio_small6.jpg",
            }
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": false,
            'autoplay': true,
            'autoplaySpeed': 3500,
            'dots': true
        };
        this.slideConfigProject = {
            'dots': false,
            'slidesToShow': 1,
            'slidesToScroll': 1,
            'arrows': true,
            'fade': true,
            'asNavFor': '.slider-nav',
        };
        this.slideConfigProjectAvatar = {
            'slidesToShow': 4,
            'slidesToScroll': 1,
            'asNavFor': '.slider-for',
            'dots': false,
            'centerMode': true,
            'focusOnSelect': true,
            'arrows': true,
            'responsive': [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        arrows: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated  fadeInLeft \">\n\n<!--Main-->\n<main class=\"cd-main\">\n\t<!--Inner Main Section-->\n\t<section class=\"cd-section resume visible\">\n\n\t\t<!--Main Container-->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"ptb-60\">\n\n\t\t\t\t<!--Intro -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<h1 class=\"title\">My <span class=\"bolder\">Resume</span></h1>\n\t\t\t\t\t\t\t<p class=\"mb40\">\n\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks. Quickly rather than multimedia based Collaboratively synergize economically sound process improvements with functionalized e-commerce.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--End Intro-->\n\n\t\t\t\t<!--Main Content-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-offset-1 col-xs-12 col-sm-11\">\n\n\t\t\t\t\t\t<!--Professional skill-->\n\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t<h3>Professional Skill</h3>\n\t\t\t\t\t\t\t<!--1-->\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">JavaScript</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--2-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">Nodejs</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- 3-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">Angular</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"88\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 88%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--4-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">Reactjs</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 82%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--5-->s\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">React Native/ Ionic</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--6-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">PHP</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"84\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 84%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--7-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">WordPress</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"81\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 81%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--8-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">UI/UX</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"88\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 88%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t<!--9-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"mb50\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mt0\">Creative</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar animated slideInLeft\" role=\"progressbar\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 91%;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End of Professional Skill-->\n\n\t\t\t\t\t\t<!--Additional skill-->\n\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t<h3>Additional Skill</h3>\n\t\t\t\t\t\t\t<div class=\"row text-center mb60\">\n\t\t\t\t\t\t\t\t<!--1-->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t[percent]=\"80\"\n\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t[animationDuration]=\"1300\"\n\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tsubtitle=\"Project Manager\"\n\t\t\t\t\t\t\t\t\t[titleFontSize]=\"5\"\n\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"2.5\"\n\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"5\"\t\n\t\t\t\t\t\t\t\t\tclass=\"circle-progress-ng\"\n\t\t\t\t\t\t\t\t\t></circle-progress>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--2-->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t[percent]=\"87\"\n\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t[animationDuration]=\"1300\"\n\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tsubtitle=\"Communication Skill\"\n\t\t\t\t\t\t\t\t\t[titleFontSize]=\"5\"\n\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"2.5\"\n\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"5\"\t\n\t\t\t\t\t\t\t\t\tclass=\"circle-progress-ng\"\n\t\t\t\t\t\t\t\t\t></circle-progress>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--3-->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-12 mob_chart\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<circle-progress\n\t\t\t\t\t\t\t\t\t[percent]=\"82\"\n\t\t\t\t\t\t\t\t\t[radius]=\"15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeWidth]=\"1\"\n\t\t\t\t\t\t\t\t\t[innerStrokeWidth]=\"0.15\"\n\t\t\t\t\t\t\t\t\t[outerStrokeColor]=\"'#e21e34'\"\n\t\t\t\t\t\t\t\t\t[innerStrokeColor]=\"'#0487cc'\"\n\t\t\t\t\t\t\t\t\t[animation]=\"true\"\n\t\t\t\t\t\t\t\t\t[animationDuration]=\"1300\"\n\t\t\t\t\t\t\t\t\t[space]=\"0.6\"\n\t\t\t\t\t\t\t\t\tresponsive=\"true\"\n\t\t\t\t\t\t\t\t\tshowTitle=\"true\"\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tsubtitle=\"Creative\"\n\t\t\t\t\t\t\t\t\t[titleFontSize]=\"5\"\n\t\t\t\t\t\t\t\t\t[subtitleFontSize]=\"2.5\"\n\t\t\t\t\t\t\t\t\t[unitsFontSize]=\"5\"\t\n\t\t\t\t\t\t\t\t\tclass=\"circle-progress-ng\"\n\t\t\t\t\t\t\t\t\t></circle-progress>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End of Additional Skill-->\n\t\t\t\t\t\t<br>\n\n\t\t\t\t\t\t<!--Experience-->\n\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t<h3>Experience</h3>\n\t\t\t\t\t\t\t<div class=\"timeline timeline-left gray-blue\">\n\t\t\t\t\t\t\t\t<!--1-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-suitcase\"></i>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>WEB AGENCY</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2011-2012\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\" title=\"Hello Developer\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--2-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>GOOGLE INC</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2013-2014\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\" title=\"Hello Developer\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--3-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>WEB AGENCY</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2015-2016\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\" title=\"Hello Developer\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End of Experience-->\n\n\t\t\t\t\t\t<!--Education-->\n\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t<h3>Education</h3>\n\t\t\t\t\t\t\t<div class=\"timeline timeline-left gray-blue\">\n\t\t\t\t\t\t\t\t<!--1-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-graduation-cap\"></i>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>WEB AGENCY</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2011-2012\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--2-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>GOOGLE INC</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2013-2014\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--3-->\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"timeline-content\">\n\t\t\t\t\t\t\t\t\t\t<h4>WEB AGENCY</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\tAssertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"timeline-date\">2015-2016\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"system_font_color\">Web Developer</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End of Education-->\n\n\t\t\t\t\t\t<!--Best Quotes Slider-->\n\t\t\t\t\t\t<div class=\"mb40\">\n\t\t\t\t\t\t\t<h3>My Best Quotes</h3>\n\t\t\t\t\t\t\t<div id=\"quotes\">\n\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel\" \n\t\t\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t\t\t[config]=\"slideConfig\" \t\t\t\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let quote of blockquotes\" class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>{{quote.text}}</p>\n\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</ngx-slick-carousel>\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--End of Best Quotes Slider-->\n         \t\t\t </div>\n\t\t\t\t</div>\n\t\t\t\t<!--End of Main Content-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!--End Main Container-->\n\n\t\t<!--Testimonial Slider-->\n\t\t<section class=\"testimonial_section mb40\">\t\t\t\n\t\t\t<div class=\"container text-center\">\n\t\t\t\t<img class=\"thumbs-ctolenk\" src=\"assets/images/ctolenk-gray.png\" alt=\"CTolenk Gray\">\n\t\t\t\t<!-- TESTIMONIAL CONTAINER  -->\n\t\t\t\t<div class=\"testimonial-slider\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel slider-for \" \n\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t[config]=\"slideConfigTestimonio\" \t\t\t\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let quote of testimonio\" class=\"slide\">\n\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t<p class=\"col-sm-10 col-sm-offset-1\">{{quote.text}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ngx-slick-carousel>\t\t\t\t\t\t\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t\t<span class=\"testimonial-divider testimonial-divider-color\"></span>\n\n\t\t\t\t<!-- TESTIMONIALS THUMB CONTAINER  -->\n\t\t\t\t<div class=\"testimonial-thumbs\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel  slider-nav \" \n\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t[config]=\"slideConfigAvatar \" \t\t\t\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let client of avatars\" class=\"slide\">\n\t\t\t\t\t\t\t\t<div ngxSlickItem >\n\t\t\t\t\t\t\t\t\t<img src=\"{{client.img}}\" alt=\"{{client.name}}\" />\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial-user\">\n\t\t\t\t\t\t\t\t\t\t<h4>{{client.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t<h5>{{client.role}}, {{client.company}}</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ngx-slick-carousel>\t\t\t\t\t\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<!--End of Testimonial Slider-->\n\n\n\n\t\t<!--Resume Download Btn-->\n\t\t<div class=\"text-center mb40\">\n\t\t\t<button class=\"btn system_btn download_icon\">\n\t\t\t\t<span></span>Download CV\n\t\t\t</button>\t\t\n\t\t</div>\n\t\t<!--End of Resume Download Btn-->\n\n\t</section>\n\t<!--End Inner Main Section-->\n\n</main>\n<!--End Main-->\n</div>\n\n\n\n\n<div class=\"container\">\n\t<app-carousel></app-carousel>\n</div>\n\n\n\n\n\n\n\t\t\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-progress-ng {\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n\n.testimonial-slider {\n  position: relative; }\n\n.testimonial-slider p {\n    color: white; }\n\n.thumbs-ctolenk {\n  width: 55%;\n  margin-bottom: 1rem; }\n\n@media screen and (min-width: 767px) {\n    .thumbs-ctolenk {\n      width: 30%; } }\n\n@media screen and (min-width: 1024px) {\n    .thumbs-ctolenk {\n      width: 20%; } }\n\n.testimonial_section {\n  background-image: linear-gradient(to bottom right, var(--primary-color-light), #4b1106);\n  min-height: 550px; }\n\n.testimonial_section .testimonial-divider {\n    background-color: black;\n    left: 0;\n    top: 1em; }\n\n.testimonial_section .testimonial-divider:after {\n      border-top-color: var(--secondary-color);\n      border-width: 20px;\n      margin-left: -20px; }\n\n.testimonial_section .testimonial-divider-color {\n    background-color: black;\n    border-bottom: 2px solid var(--secondary-color); }\n\n.testimonial_section .testimonial-thumbs {\n    top: 3em; }\n\n.testimonial_section .testimonial-user h4 {\n    color: white;\n    padding-top: 0.5em; }\n\n.testimonial_section .testimonial-user h5 {\n    color: var(--secondary-color);\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixzQkFBcUIsRUFDdkI7O0FBRUQ7RUFDRyxtQkFBa0IsRUFLcEI7O0FBTkQ7SUFJTSxhQUFZLEVBQ2Q7O0FBR0o7RUFDRyxXQUFVO0VBQ1Ysb0JBQW1CLEVBU3JCOztBQVBFO0lBSkg7TUFLTSxXQUFVLEVBTWYsRUFBQTs7QUFIRztJQVJKO01BU00sV0FBVSxFQUVmLEVBQUE7O0FBRUQ7RUFFRyx3RkFBOEY7RUFDOUYsa0JBQWlCLEVBbUNuQjs7QUF0Q0Q7SUFNTSx3QkFBdUI7SUFDdkIsUUFBTztJQUNQLFNBQVEsRUFPVjs7QUFmSjtNQVdTLHlDQUF3QztNQUN4QyxtQkFBa0I7TUFDbEIsbUJBQWtCLEVBQ3BCOztBQWRQO0lBa0JNLHdCQUF1QjtJQUN2QixnREFBK0MsRUFDakQ7O0FBcEJKO0lBdUJNLFNBQVEsRUFDVjs7QUF4Qko7SUE0QlMsYUFBWTtJQUNaLG1CQUFrQixFQUVwQjs7QUEvQlA7SUFrQ1MsOEJBQTZCO0lBQzdCLGlCQUFnQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUtcHJvZ3Jlc3Mtbmd7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXN0aW1vbmlhbC1zbGlkZXJ7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgIHB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICB9XG59XG5cbi50aHVtYnMtY3RvbGVua3tcbiAgIHdpZHRoOiA1NSU7XG4gICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgXG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9ICAgIFxufVxuXG4udGVzdGltb25pYWxfc2VjdGlvbntcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyAgIFxuICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCksIHJnYig3NSwgMTcsIDYpKTtcbiAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuXG4gICAudGVzdGltb25pYWwtZGl2aWRlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgICAgXG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAxZW07XG5cbiAgICAgICY6YWZ0ZXIgeyAgICAgICAgXG4gICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICAgYm9yZGVyLXdpZHRoOiAyMHB4O1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgICAgfVxuICAgfSAgXG5cbiAgIC50ZXN0aW1vbmlhbC1kaXZpZGVyLWNvbG9ye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgIH1cblxuICAgLnRlc3RpbW9uaWFsLXRodW1ic3tcbiAgICAgIHRvcDogM2VtO1xuICAgfVxuXG4gICAudGVzdGltb25pYWwtdXNlcntcbiAgICAgIGg0e1xuICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xuXG4gICAgICB9XG5cbiAgICAgIGg1e1xuICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.blockquotes = [
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            { text: "Esta aplicación es lo más duro que ha pasado por aqui" }
        ];
        this.testimonio = [
            { text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { text: "2. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            { text: "3. Esta aplicación es lo más duro que ha pasado por aqui" },
            { text: "4. Esta aplicación es lo más duro que ha pasado por aqui" },
        ];
        this.avatars = [
            {
                img: "assets/images/resume_slider1.png",
                name: 'Carlos Tolentino',
                company: 'CTolenk',
                role: 'CEO'
            },
            {
                img: "assets/images/resume_slider2.png",
                name: 'Nicolas Pineda',
                company: 'Nico Multimedia',
                role: 'CEO'
            },
            {
                img: "assets/images/resume_slider3.png",
                name: 'Paola Lazala',
                company: 'Lazala Studio',
                role: 'CEO'
            },
            {
                img: "assets/images/resume_slider4.png",
                name: 'Eliezer Tavárez',
                company: 'Control Diamante',
                role: 'COO'
            },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "arrows": false,
            'autoplay': true,
            'autoplaySpeed': 3500,
            'dots': true
        };
        this.slideConfigTestimonio = {
            'dots': false,
            'slidesToShow': 1,
            'slidesToScroll': 1,
            'arrows': false,
            'fade': true,
            'asNavFor': '.slider-nav'
        };
        this.slideConfigAvatar = {
            'slidesToShow': 3,
            'slidesToScroll': 1,
            'asNavFor': '.slider-for',
            'dots': false,
            'centerMode': true,
            'focusOnSelect': true,
            'arrows': false,
            'responsive': [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
    }
    ResumeComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    ResumeComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    ResumeComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    ResumeComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    ResumeComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    ResumeComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/components/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/carousel/carousel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/carousel/carousel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"carousel-wrapper\">\n    <ul class=\"carousel\" #carousel>\n       <!--  We need to loop over the items -->\n       <li></li>\n    </ul>\n</section>"

/***/ }),

/***/ "./src/app/components/shared/carousel/carousel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/carousel/carousel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-wrapper {\n  overflow: hidden; }\n\n.carousel {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 6000px; }\n\n.carousel-inner {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJsb3N0b2xlbnRpbm8vRGVza3RvcC9jdG9sZWstbGFuZGluZy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULFdBQVU7RUFDVixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jYXJvdXNlbCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogNjAwMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/carousel/carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
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

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/shared/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/components/shared/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
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

module.exports = __webpack_require__(/*! /Users/carlostolentino/Desktop/ctolek-landing-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map