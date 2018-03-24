webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/iot-platform/iot-platform.module": [
		"../../../../../src/app/iot-platform/iot-platform.module.ts",
		"iot-platform.module"
	],
	"app/members/current/profiles/profiles.module": [
		"../../../../../src/app/members/current/profiles/profiles.module.ts",
		"profiles.module"
	],
	"app/members/members.module": [
		"../../../../../src/app/members/members.module.ts"
	],
	"app/news/news.module": [
		"../../../../../src/app/news/news.module.ts",
		"news.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-index-atkinson.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        ABOUT\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>WOODENSTICK AT QUALCOMM INSTITUTE<hr/></h2>\n          <h6 class=\"description\">We are who we are</h6>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\n          <p>The Woodenstick Research Group is the Qualcomm Institute division of the UC San Diego. Woodenstick Research Group brings together technical and professional staff on the Qualcomm Institute, as well as student workers, undergraduate scholars to date.</p>\n          <br />\n          <!--<button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>-->\n        </div>\n      </div>\n      <br/>\n      <!--<div class=\"nav-tabs-navigation\">-->\n        <!--<div class=\"nav-tabs-wrapper\">-->\n          <!--<ngb-tabset [justify]=\"'center'\">-->\n            <!--<ngb-tab title=\"Follows\">-->\n              <!--<ng-template ngbTabContent >-->\n                <!--<div class=\"row following\" id=\"follows\">-->\n                  <!--<div class=\"col-md-6 ml-auto mr-auto\">-->\n                    <!--<ul class=\"list-unstyled follows\">-->\n                      <!--<li>-->\n                        <!--<div class=\"row\">-->\n                          <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                            <!--<img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                          <!--</div>-->\n                          <!--<div class=\"col-md-7 col-sm-4 ml-auto\">-->\n                            <!--<h6>Flume<br/><small>Musical Producer</small></h6>-->\n                          <!--</div>-->\n                          <!--<div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">-->\n                            <!--<div class=\"form-check\">-->\n                              <!--<label class=\"form-check-label\">-->\n                                <!--<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">-->\n                                <!--<span class=\"form-check-sign\"></span>-->\n                              <!--</label>-->\n                            <!--</div>-->\n                          <!--</div>-->\n                        <!--</div>-->\n                      <!--</li>-->\n                      <!--<hr />-->\n                      <!--<li>-->\n                        <!--<div class=\"row\">-->\n                          <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                            <!--<img src=\"../assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                          <!--</div>-->\n                          <!--<div class=\"col-md-7 col-sm-4 ml-auto\">-->\n                            <!--<h6>Banks<br /><small>Singer</small></h6>-->\n                          <!--</div>-->\n                          <!--<div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">-->\n                            <!--<div class=\"form-check\">-->\n                              <!--<label class=\"form-check-label\">-->\n                                <!--<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">-->\n                                <!--<span class=\"form-check-sign\"></span>-->\n                              <!--</label>-->\n                            <!--</div>-->\n                          <!--</div>-->\n                        <!--</div>-->\n                      <!--</li>-->\n                    <!--</ul>-->\n                  <!--</div>-->\n                <!--</div>-->\n              <!--</ng-template>-->\n            <!--</ngb-tab>-->\n            <!--<ngb-tab title=\"Following\">-->\n              <!--<ng-template ngbTabContent>-->\n                <!--<h3 class=\"text-muted\">Not following anyone yet :(</h3>-->\n                <!--<br>-->\n                <!--<button class=\"btn btn-warning btn-round\">Find artists</button>-->\n              <!--</ng-template>-->\n            <!--</ngb-tab>-->\n          <!--</ngb-tabset>-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
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






var AppComponent = (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__prototype_prototype_component__ = __webpack_require__("../../../../../src/app/prototype/prototype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__members_members_module__ = __webpack_require__("../../../../../src/app/members/members.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { NewsComponent } from './news/news.component';







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            // NewsComponent,
            __WEBPACK_IMPORTED_MODULE_14__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__publications_publications_component__["a" /* PublicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__prototype_prototype_component__["a" /* PrototypeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_18__members_members_module__["MembersModule"],
            __WEBPACK_IMPORTED_MODULE_19__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC8yg_gowVFOd_aIfPt4lYkGurpwbEoRbA'
            }),
            __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__prototype_prototype_component__ = __webpack_require__("../../../../../src/app/prototype/prototype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    // { path: 'news',             component: NewsComponent },
    { path: 'news', loadChildren: 'app/news/news.module#NewsModule' },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_10__project_project_component__["a" /* ProjectComponent */] },
    { path: 'publications', component: __WEBPACK_IMPORTED_MODULE_11__publications_publications_component__["a" /* PublicationsComponent */] },
    { path: 'members', loadChildren: 'app/members/members.module#MembersModule' },
    { path: 'prototype', component: __WEBPACK_IMPORTED_MODULE_12__prototype_prototype_component__["a" /* PrototypeComponent */] },
    { path: 'iot-platform', loadChildren: 'app/iot-platform/iot-platform.module#IotPlatformModule' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'user-profiles', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'nucleoicons', component: __WEBPACK_IMPORTED_MODULE_8__components_nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n                    <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicelementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicelementsComponent = (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    return BasicelementsComponent;
}());
BasicelementsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basicelements',
        template: __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BasicelementsComponent);

//# sourceMappingURL=basicelements.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<app-typography></app-typography>\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n                \n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-components',
        template: __webpack_require__("../../../../../src/app/components/components.component.html"),
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], ComponentsComponent);

var _a;
//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__ = __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__["a" /* BasicelementsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["a" /* NgbdModalComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["b" /* NgbdModalContent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["b" /* NgbdModalContent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return NgbdModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "name", void 0);
NgbdModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-content',
        template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], NgbdModalContent);

var NgbdModalComponent = (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    return NgbdModalComponent;
}());
NgbdModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-component',
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], NgbdModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "alerts", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleoiconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoiconsComponent = (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    return NucleoiconsComponent;
}());
NucleoiconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nucleoicons',
        template: __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NucleoiconsComponent);

var _a;
//# sourceMappingURL=nucleoicons.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/typography/typography.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n    padding: 50px;\n    /*margin: 10px;*/\n\n}\n\n.page-header {\n    min-height: 50vh;\n}\n\n.info {\n    padding-bottom: 5em;\n}\n\nh4 {\n    margin: 0.2em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\n  <div class=\"filter\"></div>\n  <div class=\"container\">\n    <div class=\"motto text-center\">\n      <h1>CONTACT</h1>\n      <!--<h3>Start designing your landing page here.</h3>-->\n      <!--<br />-->\n      <!--<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>-->\n      <!--<button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>-->\n    </div>\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"col-lg-8  ml-auto mr-auto \">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"14\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [draggable]=\"false\"></agm-marker>\n    </agm-map>\n  </div>\n\n  <div class=\"section text-center\">\n    <div class=\"container\">\n      <!--<div class=\"row\">-->\n        <!--&lt;!&ndash;<div class=\"col-md-8 mr-auto ml-auto\">&ndash;&gt;-->\n          <!--&lt;!&ndash;&lt;!&ndash;<h2 class=\"title\">Let's talk product</h2>&ndash;&gt;&ndash;&gt;-->\n          <!--&lt;!&ndash;<h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>&ndash;&gt;-->\n          <!--&lt;!&ndash;<br>&ndash;&gt;-->\n          <!--&lt;!&ndash;<a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>&ndash;&gt;-->\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n      <!--</div>-->\n      <br/><br/>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-album-2\"></i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Address</h4><br/>\n              <h6>WOODENSTICK RESEARCH GROUP</h6>\n              <p class=\"description\">\n                Atkinson Hall - Fourth Floor, Suite 4318<br/>\n                9500 Gilman Drive #0436<br/>\n                La Jolla, CA 92093-0436<br/>\n              </p>\n              <a href=\"https://www.google.com/maps/place/Atkinson+Hall/@32.8829209,-117.2372411,17z/data=!3m1!4b1!4m5!3m4!1s0x80dc06c30481a675:0x827a968f200cd882!8m2!3d32.8829164!4d-117.2350471\" class=\"btn btn-link btn-danger\">View map</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-bulb-63\"></i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Phone</h4><br/>\n              <h6>Mobile</h6>\n              <p>123-456-789</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-chart-bar-32\"></i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Contact List</h4><br/>\n              <h6>Technical support</h6>\n              <p><strong>Junhee Park</strong>, Server and DB Manager | <a href=\"mailto:j.jobs1028@gmail.com\">Email</a></p>\n              <p><strong>Changeun Park</strong>, Mobile App Manager | <a href=\"mailto:changeunpark@gmail.com\">Email</a></p>\n              <br/>\n              <h6>Apply, Educational Support</h6>\n              <p><strong>Seokheon Cho</strong>, Principle Investigator | <a href=\"mailto:s5cho@eng.ucsd.edu\">Email</a></p>\n            </div>\n          </div>\n        </div>\n        <!--<div class=\"col-md-3\">-->\n          <!--<div class=\"info\">-->\n            <!--<div class=\"icon icon-danger\">-->\n              <!--<i class=\"nc-icon nc-sun-fog-29\"></i>-->\n            <!--</div>-->\n            <!--<div class=\"description\">-->\n              <!--<h4 class=\"info-title\">Delightful design</h4>-->\n              <!--<p>Find unique and handmade delightful designs related items directly from our sellers.</p>-->\n              <!--<a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 32.882413;
        this.lng = -117.234813;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url(https://source.unsplash.com/collection/1186428/1024x768)\">\n        <div class=\"filter\"></div>\n        <div class=\"popover-content\">\n            <div class=\"container\">\n                <div class=\"home-msg\">\n                    <h6>WOODENSTICK RESEARCH GROUP</h6>\n                    INNOVATION SPACE<br/>\n                    <small>Proximate opportunities to enable joint research projects between the private and public sector and the campus research community. </small>\n                </div>\n            </div>\n        </div>\n        <!--\n                <ngx-siema [options]=\"options\"  *ngFor=\"let item of imgags\">\n                    <ngx-siema-slide class=\"bannerStyle\">\n                        <img src={{item}} class=\"item\">\n                    </ngx-siema-slide>\n                </ngx-siema>-->\n        <!--<div class=\"bannerStyle\" id=\"frame\">-->\n            <!--<img [src]='url' class=\"item\">-->\n            <!--<div class=\"filter\">-->\n            <!--</div>-->\n        <!--</div>-->\n    </div>\n    <div class=\"main\">\n        <app-landing></app-landing>\n        <!--<app-components></app-components>-->\n        <!--<div class=\"section section-dark section-nucleo-icons\">-->\n        <!--<div class=\"container\">-->\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-lg-6 col-md-12\">-->\n        <!--<h2 class=\"title\">Nucleo Icons</h2><br/>-->\n        <!--<p class=\"description\">-->\n        <!--Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.-->\n        <!--</p><br/>-->\n        <!--<a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>-->\n        <!--<a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>-->\n        <!--</div>-->\n\n        <!--<div class=\"col-lg-6 col-md-12\">-->\n        <!--<div class=\"icons-container\">-->\n        <!--<i class=\"nc-icon nc-time-alarm\"></i>-->\n        <!--<i class=\"nc-icon nc-atom\"></i>-->\n        <!--<i class=\"nc-icon nc-camera-compact\"></i>-->\n        <!--<i class=\"nc-icon nc-watch-time\"></i>-->\n        <!--<i class=\"nc-icon nc-key-25\"></i>-->\n        <!--<i class=\"nc-icon nc-diamond\"></i>-->\n        <!--<i class=\"nc-icon nc-user-run\"></i>-->\n        <!--<i class=\"nc-icon nc-layout-11\"></i>-->\n        <!--<i class=\"nc-icon nc-badge\"></i>-->\n        <!--<i class=\"nc-icon nc-bulb-63\"></i>-->\n        <!--<i class=\"nc-icon nc-favourite-28\"></i>-->\n        <!--<i class=\"nc-icon nc-planet\"></i>-->\n        <!--<i class=\"nc-icon nc-tie-bow\"></i>-->\n        <!--<i class=\"nc-icon nc-zoom-split\"></i>-->\n        <!--<i class=\"nc-icon nc-cloud-download-93\"></i>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"section section-dark\">-->\n        <!--<div class=\"container\">-->\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-8 ml-auto mr-auto text-center\">-->\n        <!--<h2 class=\"title\">Completed with examples</h2>-->\n        <!--<p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">-->\n        <!--<div class=\"container\">-->\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">-->\n        <!--<div class=\"card card-register\">-->\n        <!--<h3 class=\"title\">Welcome</h3>-->\n        <!--<div class=\"social-line text-center\">-->\n        <!--<a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">-->\n        <!--<i class=\"fa fa-facebook-square\"></i>-->\n        <!--</a>-->\n        <!--<a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">-->\n        <!--<i class=\"fa fa-google-plus\"></i>-->\n        <!--</a>-->\n        <!--<a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">-->\n        <!--<i class=\"fa fa-twitter\"></i>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--<form class=\"register-form\">-->\n        <!--<label>Email</label>-->\n        <!--<div class=\"input-group form-group-no-border\">-->\n        <!--<span class=\"input-group-addon\">-->\n        <!--<i class=\"nc-icon nc-email-85\"></i>-->\n        <!--</span>-->\n        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Email\">-->\n        <!--</div>-->\n\n        <!--<label>Password</label>-->\n        <!--<div class=\"input-group form-group-no-border\">-->\n        <!--<span class=\"input-group-addon\">-->\n        <!--<i class=\"nc-icon nc-key-25\"></i>-->\n        <!--</span>-->\n        <!--<input type=\"text\" class=\"form-control\" placeholder=\"Password\">-->\n        <!--</div>-->\n        <!--<button class=\"btn btn-danger btn-block btn-round\">Register</button>-->\n        <!--</form>-->\n        <!--<div class=\"forgot\">-->\n        <!--<a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"col text-center\" routerLinkActive=\"active\">-->\n        <!--<a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"section section-dark\">-->\n        <!--<div class=\"container\">-->\n        <!--<div class=\"row example-page\">-->\n        <!--<div class=\"col-md-6 text-center\" routerLinkActive=\"active\">-->\n        <!--<a [routerLink]=\"['/landing']\">-->\n        <!--<img src=\"../../assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">-->\n        <!--<a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>-->\n        <!--</a>-->\n        <!--</div>-->\n\n        <!--<div class=\"col-md-6 text-center\" routerLinkActive=\"active\">-->\n        <!--<a [routerLink]=\"['/user-profile']\">-->\n        <!--<img src=\"../../assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">-->\n        <!--<a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"section\">-->\n        <!--<div class=\"container text-center\">-->\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-8 ml-auto mr-auto text-center\">-->\n        <!--<h2 class=\"title\">Do you like what you see?</h2>-->\n        <!--<p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row\">-->\n        <!--<div class=\"col-md-6 download-area ml-auto mr-auto\">-->\n        <!--<a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>-->\n        <!--<a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"row justify-content-md-center sharing-area text-center\">-->\n        <!--<div class=\"text-center col-md-12 col-lg-8\">-->\n        <!--<h3>Thank you for supporting us!</h3>-->\n        <!--</div>-->\n        <!--<div class=\"text-center col-md-12 col-lg-8\">-->\n        <!--<a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">-->\n        <!--<i class=\"fa fa-twitter\"></i> Twitter-->\n        <!--</a>-->\n        <!--<a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">-->\n        <!--<i class=\"fa fa-google-plus\"></i> Google-->\n        <!--</a>-->\n        <!--<a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">-->\n        <!--<i class=\"fa fa-facebook-square\"></i> Facebook-->\n        <!--</a>-->\n        <!--<a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">-->\n        <!--<i class=\"fa fa-github\"></i> Star-->\n        <!--</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  overflow: hidden; }\n\n.bannerStyle {\n  background-color: #ccc;\n  background-size: cover !important;\n  height: 100%;\n  width: 100%; }\n\n.bannerStyle .item {\n  position: fixed;\n  top: 0;\n  left: 0;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%; }\n\n.home-msg {\n  font-size: 300%;\n  font-weight: 700;\n  margin: 0;\n  color: #ffffffcc;\n  -webkit-background-clip: text;\n  position: absolute;\n  left: 10%;\n  bottom: 10%;\n  width: 50%;\n  line-height: 0.8;\n  z-index: 1;\n  -webkit-animation: fadein 2s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 2s; }\n\n.home-msg h6 {\n  font-size: 40%; }\n\n.home-msg small {\n  font-size: 50%;\n  font-weight: 200;\n  background-color: #2ba9cd; }\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(200px);\n            transform: translateY(200px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(200px);\n            transform: translateY(200px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function HomeComponent() {
        this.imgIndex = 0;
        this.options = {
            selector: '.siema',
            duration: 2000,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            threshold: 20,
            loop: true,
            onInit: function () {
                // runs immediately after first initialization
            },
            onChange: function () {
                // runs after slide change
            },
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.imgags = [
        // 	"../../assets/img/daniel-olahh.jpg",
        // 	"../../assets/img/bruno-abatti.jpg",
        // 	"../../assets/img/antoine-barres.jpg",
        // ];
        // this.url = this.imgags[this.imgIndex];
        //
        // setInterval(() => {
        // 	// if(this.imgIndex >= this.imgags.length) this.imgIndex = 0;
        // 	// this.url = this.imgags[this.imgIndex++];
        // }, 5000);
        this.url = 'https://source.unsplash.com/collection/1186428/1024x768';
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HomeComponent.prototype, "url", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_siema__ = __webpack_require__("../../../../ngx-siema/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_landing_component__ = __webpack_require__("../../../../../src/app/home/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_siema__["a" /* NgxSiemaModule */].forRoot(),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_8__landing_landing_component__["a" /* LandingComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    overflow: hidden;\n}\n\n.animated-img {\n    position: absolute; z-index: -1; width: 40%; right: 0; top: 0;\n    /*background-image: url(http://qi.ucsd.edu/images/header-index-education.jpg);*/\n}\n\n.animated-img img {\n    width: 100%;\n}\n\n@keyframes easein-left {\n    from { opacity: 0;  -webkit-transform: translateX(-100%);  transform: translateX(-100%); }\n    to   { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes easein-left {\n    from { opacity: 0;  -webkit-transform: translateX(-100%);  transform: translateX(-100%); }\n    to   { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n@keyframes easein-right {\n    from { opacity: 0;  -webkit-transform: translateX(100%);  transform: translateX(100%); }\n    to   { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes easein-right {\n    from { opacity: 0;  -webkit-transform: translateX(100%);  transform: translateX(100%); }\n    to   { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n\n\n@keyframes easein-right-angle {\n    from { opacity: 0;  -webkit-transform: translateX(100%);  transform: translateX(100%); }\n    to   { opacity: 1; -webkit-transform: rotate(-5deg) translateX(0); transform: rotate(-5deg) translateX(0); }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes easein-right-angle {\n    from { opacity: 0;  -webkit-transform: translateX(100%);  transform: translateX(100%); }\n    to   { opacity: 1; -webkit-transform: rotate(-5deg) translateX(0); transform: rotate(-5deg) translateX(0); }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n\n\n.cloud {\n    color: #2ca8ff;\n    -webkit-animation: flowing 1s ease infinite;\n            animation: flowing 1s ease infinite;\n}\n\n@-webkit-keyframes flowing {\n    0% {\n        -webkit-transform: translateX(50%);\n                transform: translateX(50%);\n    }\n    10% {\n        -webkit-transform: translateX(62%);\n                transform: translateX(62%);\n    }\n    20%{\n        -webkit-transform: translateX(74%);\n                transform: translateX(74%);\n    }\n    30%{\n        -webkit-transform: translateX(86%);\n                transform: translateX(86%);\n    }\n    40%{\n        -webkit-transform: translateX(98%);\n                transform: translateX(98%);\n    }\n    50%{\n        -webkit-transform: translateX(100%) scale(1.05);\n                transform: translateX(100%) scale(1.05);\n    }\n    100% {\n        -webkit-transform: translateX(50%);\n                transform: translateX(50%);\n    }\n}\n\n@keyframes flowing {\n    0% {\n        -webkit-transform: translateX(50%);\n                transform: translateX(50%);\n    }\n    10% {\n        -webkit-transform: translateX(62%);\n                transform: translateX(62%);\n    }\n    20%{\n        -webkit-transform: translateX(74%);\n                transform: translateX(74%);\n    }\n    30%{\n        -webkit-transform: translateX(86%);\n                transform: translateX(86%);\n    }\n    40%{\n        -webkit-transform: translateX(98%);\n                transform: translateX(98%);\n    }\n    50%{\n        -webkit-transform: translateX(100%) scale(1.05);\n                transform: translateX(100%) scale(1.05);\n    }\n    100% {\n        -webkit-transform: translateX(50%);\n                transform: translateX(50%);\n    }\n}\n\n.back-container {\n    position: absolute;\n    width: 100%;\n    height: 100px;\n    background-color: #2aabd2;\n}\n\n#anim--back-from-right {\n    top: -5px;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n}\n\n#anim--back-from-left {\nmargin-top: -10px;\n    /*height: 1000px;*/\n    margin-left: -40%;\n    background-color: #6dd3d6;\n}\n\n.row {\n    margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"back-container\" id=\"anim--back-from-right\"></div>\n        <div id=\"anim--from-left\" class=\"col-md-7 ml-auto mr-auto mr-auto\" [@scrollAnimationFromLeft]=\"stateFromLeft\">\n          <h2 class=\"title\">CURIOSITY DRIVEN RESEARCH</h2>\n          <h5 class=\"description\">To drive innovation, you must be innovative. The Qualcomm Institute at Uc San Diego represents an experiment in inventing the university research environment of the future, where ideas are born from curiosity and go beyond theory and into practice</h5>\n          <br>\n        </div>\n        <div class=\"col-md-3 ml-auto mr-auto info-img\">\n          <!--<div class=\"animated-img\" [@scrollAnimation]=\"state\">-->\n            <!--<img src=\"http://qi.ucsd.edu/images/header-index-education.jpg\" >-->\n          <!--</div>-->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"back-container\" id=\"anim--back-from-left\"></div>\n        <div class=\"col-md-3 ml-auto mr-auto info-img\">\n\n        </div>\n        <div id=\"anim--from-right\" class=\"col-md-7 ml-auto mr-auto text-right\" [@scrollAnimationFromRight]=\"stateFromRight\">\n          <h2 class=\"title\">CURIOSITY DRIVEN RESEARCH<i class=\"fa fa-cloud cloud\"></i></h2>\n          <h5 class=\"description\">To drive innovation, you must be innovative. The Qualcomm Institute at Uc San Diego represents an experiment in inventing the university research environment of the future, where ideas are born from curiosity and go beyond theory and into practice</h5>\n          <br>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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



var LandingComponent = (function () {
    function LandingComponent(document) {
        this.document = document;
        this.stateFromLeft = 'hide';
        this.stateFromRight = 'hide';
    }
    LandingComponent.prototype.checkScroll = function () {
        var scrollPosition = window.pageYOffset;
        var firstComponentPosition = this.document.getElementById('anim--from-left').offsetTop;
        // + this.document.getElementById('anim--from-left').offsetHeight/3;
        var secondComponentPosition = this.document.getElementById('anim--from-right').offsetTop;
        // + this.document.getElementById('anim--from-right').offsetHeight;
        // const thirdComponent = this.document.getElementById('anim--center');
        console.dir(this.document.getElementById('anim--from-right'));
        console.dir(window);
        console.log('compo : ' + firstComponentPosition + ', ' + secondComponentPosition + ' // scroll : ' + scrollPosition);
        if (scrollPosition >= firstComponentPosition) {
            // this.stateFromLeft = 'show';
            this.document.getElementById('anim--from-left').style.setProperty('animation', 'easein-left 1s');
            this.document.getElementById('anim--back-from-right').style.setProperty('animation', 'easein-right-angle 1s');
        }
        else {
            // this.stateFromLeft = 'hide';
            this.document.getElementById('anim--from-left').style.setProperty('animation', '');
            this.document.getElementById('anim--back-from-right').style.setProperty('animation', '');
        }
        if (scrollPosition >= secondComponentPosition) {
            // this.stateFromRight = 'show';
            this.document.getElementById('anim--from-right').style.setProperty('animation', 'easein-right 1s');
            this.document.getElementById('anim--back-from-left').style.setProperty('animation', 'easein-left 1s');
        }
        else {
            // this.stateFromRight = 'hide';
            this.document.getElementById('anim--from-right').style.setProperty('animation', '');
            this.document.getElementById('anim--back-from-left').style.setProperty('animation', '');
        }
        // let offset =thirdComponent.offsetTop + thirdComponent.offsetHeight;
        // console.dir(thirdComponent.offsetTop + thirdComponent.offsetHeight);
        //
        // let newScroll = scrollPosition - 600;
        // let newOffset = offset - 600;
        //
        // if(newScroll <= newOffset+30 ){
        // 	thirdComponent.style.setProperty('right', ''+(newScroll*200/newOffset)+'px');
        // 	thirdComponent.style.setProperty('opacity', ''+(newScroll)/newOffset);
        // } else {
        // }
    };
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LandingComponent.prototype, "checkScroll", null);
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/home/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/landing/landing.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* trigger */])('scrollAnimationFromLeft', []),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* trigger */])('scrollAnimationFromRight', [])
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/current/current.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-circle {\n    max-width: 170px;\n    /*overflow: hidden;*/\n\n    /*background-position: center center;*/\n    /*background-size: cover;*/\n    /*min-height: 20vh;*/\n    /*max-height: 999px;*/\n    /*overflow: hidden;*/\n    /*position: relative;*/\n    /*width: 100%;*/\n}\n\n/*.wrapper {*/\n    /*height:200px;*/\n    /*width:200px;*/\n    /*overflow:hidden;*/\n    /*border-radius:50%;*/\n\n/*}*/\n\n/*.wrapper img {*/\n    /*-webkit-transform:translate(-50%);*/\n    /*margin-left:100px;*/\n/*}*/\n\n\nli {\n    margin: 3em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/current/current.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ng-template ngbTabContent >-->\n  <div class=\"row current\" id=\"current\">\n    <div class=\"col-md-9 ml-auto mr-auto\">\n      <ul class=\"list-unstyled current\">\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <a routerLink=\"profiles/seokheokcho\"><img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\"></a>\n            </div>\n            <div class=\"col-md-7 col-sm-4 ml-auto\">\n              <h3>Seokheon Cho<br/><small>Principle Investigator</small></h3>\n            </div>\n            <!--<div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">-->\n            <!--<div class=\"form-check\">-->\n            <!--<label class=\"form-check-label\">-->\n            <!--<input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">-->\n            <!--<span class=\"form-check-sign\"></span>-->\n            <!--</label>-->\n            <!--</div>-->\n            <!--</div>-->\n          </div>\n        </li>\n        <hr />\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <a routerLink=\"profiles/junheepark\">\n              <img src=\"../assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-md-7 col-sm-4 ml-auto\">\n              <h3>Junhee Park<br /><small>staff researcher</small></h3>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <a routerLink=\"profiles/changeunpark\">\n\n              <img src=\"../assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-md-7 col-sm-4 ml-auto\">\n              <h3>Changeun Park<br /><small>staff researcher</small></h3>\n            </div>\n          </div>\n        </li>\n        <hr/>\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <!--<div class=\"wrapper\">-->\n\n              <a routerLink=\"profiles/sangwonkim\">\n\n              <img src=\"http://www.odonnellphotograf.com/wp-content/uploads/2017/07/Lawson_Portrait-1000x1000.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                <div class=\"circle\"></div>\n              </a>\n              <!--</div>-->\n            </div>\n            <div class=\"col-md-7 ml-auto\">\n              <h3>Sangwon Kim<br /><small>intern researcher</small></h3>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <!--<div class=\"wrapper\">-->\n\n              <a routerLink=\"profiles/sangwonkim\">\n\n                <img src=\"http://www.odonnellphotograf.com/wp-content/uploads/2017/07/Lawson_Portrait-1000x1000.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                <div class=\"circle\"></div>\n              </a>\n              <!--</div>-->\n            </div>\n            <div class=\"col-md-7 ml-auto\">\n              <h3>Donghee Lee<br /><small>intern researcher</small></h3>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <a routerLink=\"profiles/hyunjishin\">\n\n              <img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-md-7 col-sm-4 ml-auto\">\n              <h3>Hyunji Shin<br /><small>intern researcher</small></h3>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"row\">\n            <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n              <a routerLink=\"profiles/heerochung\">\n\n                <img src=\"../assets/img/faces/kaci-baum-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n              </a>\n            </div>\n            <div class=\"col-md-7 col-sm-4 ml-auto\">\n              <h3>Heero Chung<br /><small>intern researcher</small></h3>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n<!--</ng-template>-->"

/***/ }),

/***/ "../../../../../src/app/members/current/current.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentComponent = (function () {
    function CurrentComponent() {
    }
    CurrentComponent.prototype.ngOnInit = function () {
    };
    return CurrentComponent;
}());
CurrentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-current',
        template: __webpack_require__("../../../../../src/app/members/current/current.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/current/current.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CurrentComponent);

//# sourceMappingURL=current.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}\n\na {\n    color: #66615b;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-index-education.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        MEMBERS\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <br>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>FIND OUT MORE ABOUT US<hr/></h2>\n          <!--<h6 class=\"description\">We are who we are</h6>-->\n        </div>\n      </div>\n      <div class=\"nav-tabs-navigation\">\n        <div class=\"nav-tabs-wrapper\">\n          <ngb-tabset [justify]=\"'left'\" (tabChange)=\"onTabChanged($event)\">\n            <ngb-tab [id]=\"'current'\">\n              <ng-template ngbTabTitle>\n                <a routerLink=\"./\">\n                  Current members\n                </a>\n              </ng-template>\n              <ng-template ngbTabContent >\n                <router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab [id]=\"'past'\">\n              <ng-template ngbTabTitle>\n                <!--<a routerLink=\"past\">-->\n                  Past members\n                <!--</a>-->\n              </ng-template>\n              <ng-template ngbTabContent>\n                <app-past></app-past>\n                <!--<h3 class=\"text-muted\">Not following anyone yet :(</h3>-->\n                <!--<br>-->\n                <!--<button class=\"btn btn-warning btn-round\">Find artists</button>-->\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MembersComponent = (function () {
    function MembersComponent(router) {
        this.router = router;
    }
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent.prototype.onTabChanged = function (event) {
        if (event.nextId === 'current') {
            this.router.navigateByUrl('members');
        }
    };
    MembersComponent.prototype.onSelected = function (event) {
        alert('hhh');
    };
    MembersComponent.prototype.onDeactivate = function () {
        window.scrollTo(0, 0);
    };
    return MembersComponent;
}());
MembersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-members',
        template: __webpack_require__("../../../../../src/app/members/members.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/members.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], MembersComponent);

var _a;
//# sourceMappingURL=members.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members_routing__ = __webpack_require__("../../../../../src/app/members/members.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__current_current_component__ = __webpack_require__("../../../../../src/app/members/current/current.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__past_past_component__ = __webpack_require__("../../../../../src/app/members/past/past.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MembersModule = (function () {
    function MembersModule() {
    }
    return MembersModule;
}());
MembersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4__members_routing__["a" /* MembersRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__members_component__["a" /* MembersComponent */], __WEBPACK_IMPORTED_MODULE_5__current_current_component__["a" /* CurrentComponent */], __WEBPACK_IMPORTED_MODULE_6__past_past_component__["a" /* PastComponent */]]
    })
], MembersModule);

//# sourceMappingURL=members.module.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_current_component__ = __webpack_require__("../../../../../src/app/members/current/current.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__members_component__["a" /* MembersComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__current_current_component__["a" /* CurrentComponent */] },
            { path: 'profiles', loadChildren: 'app/members/current/profiles/profiles.module#ProfilesModule' },
        ] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var MembersRoutingModule = (function () {
    function MembersRoutingModule() {
    }
    return MembersRoutingModule;
}());
MembersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ],
    })
], MembersRoutingModule);

//# sourceMappingURL=members.routing.js.map

/***/ }),

/***/ "../../../../../src/app/members/past/past.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.img-circle {\n    max-width: 300%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/past/past.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ng-template ngbTabContent >-->\n<div class=\"row current\" id=\"current\">\n  <div class=\"col-md-6 ml-auto mr-auto\">\n    <ul class=\"list-unstyled current\">\n      <h2>Staff</h2>\n      <li>\n        <div class=\"row\">\n          <div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">\n            <h4>Seokheon Cho<br/><small>Qualcomm Institute, United States</small></h4>\n          </div>\n        </div>\n      </li>\n      <hr />\n      <h2>Intern</h2>\n      <li>\n        <div class=\"row\">\n          <div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">\n            <h4>Junhee Park<br/><small>Qualcomm Institute, US</small></h4>\n          </div>\n        </div>\n      </li>\n      <li>\n        <div class=\"row\">\n          <div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">\n            <h4>JYJ<br/><small>Korean Telecom, Korea</small></h4>\n          </div>\n        </div>\n      </li>\n      <hr />\n      <!--<h2>3rd short-term internship</h2>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>Qualcomm Institute, United States</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<hr />-->\n      <!--<h2>2nd short-term internship</h2>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>adf, Korea</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<hr />-->\n      <!--<h2>1st short-term internship</h2>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>SK Telecom, Korea</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>Korean Telecom, Korea</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>LG, Korea</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<li>-->\n        <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">-->\n            <!--<h4>Seokheon Cho<br/><small>Samsung, Korea</small></h4>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</li>-->\n      <!--<hr />-->\n    </ul>\n  </div>\n</div>\n<!--</ng-template>-->"

/***/ }),

/***/ "../../../../../src/app/members/past/past.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastComponent = (function () {
    function PastComponent() {
    }
    PastComponent.prototype.ngOnInit = function () {
    };
    return PastComponent;
}());
PastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-past',
        template: __webpack_require__("../../../../../src/app/members/past/past.component.html"),
        styles: [__webpack_require__("../../../../../src/app/members/past/past.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PastComponent);

//# sourceMappingURL=past.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('../assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"../assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    ProfileComponent.prototype.ngOnInit = function () { };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}\n\n.btn-sm {\n    height: 20px;\n    width: 20px;\n    min-width: 20px;\n    padding: 0px !important;\n    font-size: 0pt;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-index-services.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        PROJECT\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>PROGRESS FOR TOMORROW's INNOVATION<hr/></h2>\n          <!--<h6 class=\"description\">We are who we are</h6>-->\n        </div>\n      </div>\n      <!--<div class=\"owner\">-->\n      <!--<div class=\"avatar\">-->\n      <!--<img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n      <!--</div>-->\n      <!--<div class=\"name\">-->\n      <!--<h4 class=\"title\">About<br /></h4>-->\n      <!--<h6 class=\"description\">We are who we are</h6>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-6 ml-auto mr-auto text-center\">-->\n      <!--<p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>-->\n      <!--<br />-->\n      <!--<button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>-->\n      <!--</div>-->\n      <!--</div>-->\n      <br/>\n      <div class=\"nav-tabs-navigation\">\n        <div class=\"nav-tabs-wrapper\">\n          <ngb-tabset [justify]=\"'center'\">\n            <ngb-tab title=\"Current projects\">\n              <ng-template ngbTabContent >\n                <div class=\"row following\" id=\"follows\">\n                  <div class=\"col-md-12 ml-auto mr-auto\">\n                    <ul class=\"list-unstyled follows\">\n                      <li>\n                        <div class=\"row\">\n                          <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                          <!--<img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                          <!--</div>-->\n                          <div class=\"col-md-4 col-sm-2 mr-auto ml-auto\">\n                            <h6>Airound<br/><small>Funded from who somebody</small></h6>\n                          </div>\n                          <div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">\n                            <div>\n                              <p>\n                                aldjflkajsdlfjalsjfl;ajsdflkajsldfj\n                                asdf;alsjdfajlf\n                                asdf;laksjdlfa\n                                sdflja;l\n                              </p>\n                              <hr/>\n                              <p class=\"collapsed-content\" id=\"collapseExample2\" [ngbCollapse]=\"isCollapsed2\">\n                              aldjflkajsdlfjalsjfl;ajsdflkajsldfj\n                              asdf;alsjdfajlf\n                              asdf;laksjdlfa\n                              sdflja;l\n                              </p>\n                            </div>\n                            <div class=\"row pull-right\">\n                              <button class=\"btn btn-sm btn-just-icon\"\n                                      (click)=\"isCollapsed2 = !isCollapsed2\" [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseExample2\">\n                                <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n                      <hr />\n                      <li>\n                        <div class=\"row\">\n                          <!--<div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">-->\n                          <!--<img src=\"../assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">-->\n                          <!--</div>-->\n                          <div class=\"col-md-4 col-sm-2 mr-auto ml-auto\">\n                            <h6>ADAS<br/><small>Funded from who somebody</small></h6>\n                          </div>\n                          <div class=\"col-md-7 col-sm-4 ml-auto mr-auto\">\n                            <div>\n                              <p>\n                                aldjflkajsdlfjalsjfl;ajsdflkajsldfj\n                                asdf;alsjdfajlf\n                                asdf;laksjdlfa\n                                sdflja;l\n                              </p>\n                              <hr/>\n                              <p class=\"collapsed-content\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n                                aldjflkajsdlfjalsjfl;ajsdflkajsldfj\n                                asdf;alsjdfajlf\n                                asdf;laksjdlfa\n                                sdflja;l\n                              </p>\n                            </div>\n                            <div class=\"row pull-right\">\n                              <button class=\"btn btn-sm btn-just-icon\"\n                                      (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n                                <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n                      <hr />\n                    </ul>\n                  </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Past projects\">\n              <ng-template ngbTabContent>\n                <h3 class=\"text-muted\">Nothing yet :(</h3>\n                <br>\n                <!--<button class=\"btn btn-warning btn-round\">Find artists</button>-->\n              </ng-template>\n            </ngb-tab>\n          </ngb-tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
        this.isCollapsed = true;
        this.isCollapsed2 = true;
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectComponent);

//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/prototype/prototype.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}\n\n.thumnail-container {\n    width: 128px;\n    height: 128px;\n\noverflow: hidden;\n\n    margin-right: 10px;\n}\n\n .media-photo {\n    max-height: 128px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n     position: absolute;\n     clip: rect(0px,128px,128px,0px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prototype/prototype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-industry.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        PROTOTYPE\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>THE ANNOUNCEMENT FROM WOODENSTICK<hr/></h2>\n          <!--<h6 class=\"description\"E>We are who we are</h6>-->\n        </div>\n      </div>\n      <div class=\"main\">\n        <div class=\"row\">\n          <div class=\"table-container  col-md-10 mr-auto ml-auto\">\n            <table class=\"table table-filter\">\n              <tfoot>\n              <td colspan=\"2\">\n                <div class=\"row\">\n                  <div class=\"col-md-8 ml-auto mr-auto text-center\">\n\n                    <ngb-pagination  [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                  </div>\n                </div>\n              </td>\n              </tfoot>\n              <tbody>\n              <tr>\n                <td>\n                  <div class=\"media\">\n                    <div class=\"thumnail-container\">\n                    <a href=\"#\" class=\"pull-left\">\n                      <img src=\"http://calit2.net/images/articles/2016/yonder-dynamics-2%20-%20Copy%201.jpg\" class=\"media-photo\">\n                    </a>\n\n                    </div>\n                    <div class=\"media-body\">\n                      <span class=\"media-meta pull-right\">December 17, 2017</span>\n                      <h4 class=\"title\">\n                        <a href=\"#\">\n                          Lorem Impsum\n                        </a>\n                      </h4>\n                      <p class=\"summary\">Ut enim ad minim veniam, quis nostrud exercitation...</p>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"media\">\n                    <div class=\"thumnail-container\">\n                      <a href=\"#\" class=\"pull-left\">\n                        <img src=\"http://calit2.net/images/articles/2016/TajanaRosing_Latest.jpg\" class=\"media-photo\">\n                      </a>\n                    </div>\n\n                    <div class=\"media-body\">\n                      <span class=\"media-meta pull-right\">December 17, 2017</span>\n                      <h4 class=\"title\">\n                        <a href=\"#\">\n                          Lorem Impsum\n                        </a>\n                      </h4>\n                      <p class=\"summary\">Ut enim ad minim veniam, quis nostrud exercitation...</p>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <div class=\"media\">\n                    <div class=\"thumnail-container\">\n                      <a href=\"#\" class=\"pull-left\">\n                        <img src=\"http://calit2.net/images/articles/2016/PalmyraAtoll_CoralReefDiver.jpg\" class=\"media-photo\">\n                      </a>\n                    </div>\n\n                    <div class=\"media-body\">\n                      <span class=\"media-meta pull-right\">December 17, 2017</span>\n                      <h4 class=\"title\">\n                        <a href=\"#\">\n                          Lorem Impsum\n                        </a>\n                      </h4>\n                      <p class=\"summary\">Ut enim ad minim veniam, quis nostrud exercitation...</p>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n\n\n      <br/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/prototype/prototype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrototypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrototypeComponent = (function () {
    function PrototypeComponent() {
        this.page = 1;
    }
    PrototypeComponent.prototype.ngOnInit = function () {
    };
    return PrototypeComponent;
}());
PrototypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prototype',
        template: __webpack_require__("../../../../../src/app/prototype/prototype.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prototype/prototype.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrototypeComponent);

//# sourceMappingURL=prototype.component.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}\n\nsmall {\n    font-size: 90%;\n}\n\nh6 {\n    font-size: 1.0rem;\n}\n\n.index {\n    text-align: left;\n}\n\n.list {\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-education.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        PUBLICATIONS\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>THE STARTING POINT OF EVERYTHING<hr/></h2>\n          <!--<h6 class=\"description\">We are who we are</h6>-->\n        </div>\n      </div>\n      <br/>\n      <div class=\"row\">\n        <div class=\"col-lg-11 ml-auto mr-auto\">\n          <div class=\"nav-tabs-navigation\">\n            <div class=\"nav-tabs-wrapper\">\n              <ngb-tabset [justify]=\"'center'\">\n                <ngb-tab title=\"Journal\">\n                  <ng-template ngbTabContent >\n                    <table class=\"table\">\n                      <tr>\n                        <td class=\"index\">\n                          <!--2017-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2017</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\"><div class=\"col-md-auto ml-auto mr-auto\">\n                          <ul class=\"list-unstyled journal\">\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>The development of a short-term memory training system for consecutive interpreting<br/>\n                                    <small>Sangwon Kim, Donghyeok An, Jihye Pyo, KeeHyun Park, Jimin Lee</small><br/>\n                                    <small>Asia-pacific Journal of Multimedia Services Convergent with Art, Humanities, and Sociology(AJMAHS).</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>Development of a sight translation training system for simultaneous interpreting practice<br/>\n                                    <small>Sangwon Kim, Jimin Lee, KeeHyun Park, Donghyeok An</small><br/>\n                                    <small>Asia-pacific Journal of Multimedia Services Convergent with Art, Humanities, and Sociology(AJMAHS), 7(3), 841-850.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                          </ul>\n                        </div></td>\n                      </tr>\n                      <!--<tr>-->\n                        <!--<td class=\"index\">-->\n                          <!--&lt;!&ndash;2016&ndash;&gt;-->\n                          <!--<div class=\"col-md-auto mr-auto\">-->\n                            <!--<h2>2016</h2>-->\n                          <!--</div>-->\n                        <!--</td>-->\n                      <!--</tr>-->\n                      <!--<tr>-->\n                        <!--<td class=\"list\">-->\n                          <!--<div class=\"col-md-auto ml-auto mr-auto\">-->\n                            <!--<ul class=\"list-unstyled journal\">-->\n                              <!--<li>-->\n                                <!--<div class=\"row\">-->\n                                  <!--<div class=\"col-md-auto col-sm-auto ml-auto\">-->\n                                    <!--<h6>A design of automatic electric meter read system using drone<br/>-->\n                                      <!--<small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>-->\n                                      <!--<small>Korea Information Processing Society(KIPS), April.</small>-->\n                                    <!--</h6>-->\n                                  <!--</div>-->\n                                <!--</div>-->\n                              <!--</li>-->\n                              <!--<hr />-->\n                              <!--<li>-->\n                                <!--<div class=\"row\">-->\n                                  <!--<div class=\"col-md-auto col-sm-auto ml-auto\">-->\n                                    <!--<h6>A design of automatic electric meter read system using drone<br/>-->\n                                      <!--<small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>-->\n                                      <!--<small>Korea Information Processing Society(KIPS), April.</small>-->\n                                    <!--</h6>-->\n                                  <!--</div>-->\n                                <!--</div>-->\n                              <!--</li>-->\n                              <!--<hr />-->\n                              <!--<li>-->\n                                <!--<div class=\"row\">-->\n                                  <!--<div class=\"col-md-auto col-sm-auto ml-auto\">-->\n                                    <!--<h6>A design of automatic electric meter read system using drone<br/>-->\n                                      <!--<small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>-->\n                                      <!--<small>Korea Information Processing Society(KIPS), April.</small>-->\n                                    <!--</h6>-->\n                                  <!--</div>-->\n                                <!--</div>-->\n                              <!--</li>-->\n                              <!--<hr />-->\n                              <!--<li>-->\n                                <!--<div class=\"row\">-->\n                                  <!--<div class=\"col-md-auto col-sm-auto ml-auto\">-->\n                                    <!--<h6>A design of automatic electric meter read system using drone<br/>-->\n                                      <!--<small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>-->\n                                      <!--<small>Korea Information Processing Society(KIPS), April.</small>-->\n                                    <!--</h6>-->\n                                  <!--</div>-->\n                                <!--</div>-->\n                              <!--</li>-->\n                              <!--<hr />-->\n                              <!--<li>-->\n                                <!--<div class=\"row\">-->\n                                  <!--<div class=\"col-md-auto col-sm-auto ml-auto\">-->\n                                    <!--<h6>A design of automatic electric meter read system using drone<br/>-->\n                                      <!--<small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>-->\n                                      <!--<small>Korea Information Processing Society(KIPS), April.</small>-->\n                                    <!--</h6>-->\n                                  <!--</div>-->\n                                <!--</div>-->\n                              <!--</li>-->\n                              <!--<hr />-->\n                            <!--</ul>-->\n                          <!--</div>-->\n                        <!--</td>-->\n                      <!--</tr>-->\n                    </table>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Conference\">\n                  <ng-template ngbTabContent>\n                    <table class=\"table\">\n                      <tr>\n                        <td class=\"index\">\n                          <!--2017-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2017</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\"><div class=\"col-md-auto ml-auto mr-auto\">\n                          <ul class=\"list-unstyled journal\">\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of restroom monitoring and management system using Arduino<br/>\n                                    <small>Sangwon Kim, Eunsol Kim, Hyejeong Choi, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                          </ul>\n                        </div></td>\n                      </tr>\n                      <tr>\n                        <td class=\"index\">\n                          <!--2016-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2016</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\">\n                          <div class=\"col-md-auto ml-auto mr-auto\">\n                            <ul class=\"list-unstyled journal\">\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>Development of a Sight translation training system for interpretation and translation<br/>\n                                      <small>Sangwon Kim, Jimin Lee, KeeHyun Park, Donghyeok An</small><br/>\n                                      <small>The Convergent Research Society Among Humanities, Sociology, Science, and Technology, October.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>Development of a memory training system for improving short term memory<br/>\n                                      <small>Sangwon Kim, Jimin Lee, Jihye Pyo, KeeHyun Park, Donghyeok An</small><br/>\n                                      <small>The Convergent Research Society Among Humanities, Sociology, Science, and Technology, October.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                            </ul>\n                          </div>\n                        </td>\n                      </tr>\n                    </table>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Patent\">\n                  <ng-template ngbTabContent>\n                    <table class=\"table\">\n                      <tr>\n                        <td class=\"index\">\n                          <!--2017-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2017</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\"><div class=\"col-md-auto ml-auto mr-auto\">\n                          <ul class=\"list-unstyled journal\">\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of restroom monitoring and management system using Arduino<br/>\n                                    <small>Sangwon Kim, Eunsol Kim, Hyejeong Choi, Donghyeok An </small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                          </ul>\n                        </div></td>\n                      </tr>\n                      <tr>\n                        <td class=\"index\">\n                          <!--2016-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2016</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\">\n                          <div class=\"col-md-auto ml-auto mr-auto\">\n                            <ul class=\"list-unstyled journal\">\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                            </ul>\n                          </div>\n                        </td>\n                      </tr>\n                    </table>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Book\">\n                  <ng-template ngbTabContent>\n                    <table class=\"table\">\n                      <tr>\n                        <td class=\"index\">\n                          <!--2017-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2017</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\"><div class=\"col-md-auto ml-auto mr-auto\">\n                          <ul class=\"list-unstyled journal\">\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                            <li>\n                              <div class=\"row\">\n                                <div class=\"col-md-11 ml-auto\">\n                                  <h6>A design of automatic electric meter read system using drone<br/>\n                                    <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                    <small>Korea Information Processing Society(KIPS), April.</small>\n                                  </h6>\n                                </div>\n                              </div>\n                            </li>\n                            <hr />\n                          </ul>\n                        </div></td>\n                      </tr>\n                      <tr>\n                        <td class=\"index\">\n                          <!--2016-->\n                          <div class=\"col-md-auto mr-auto\">\n                            <h2>2016</h2>\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"list\">\n                          <div class=\"col-md-auto ml-auto mr-auto\">\n                            <ul class=\"list-unstyled journal\">\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-md-11 ml-auto\">\n                                    <h6>A design of automatic electric meter read system using drone<br/>\n                                      <small>Sangwon Kim, Donhjin Lee, Dasom Ahn, Jihye Pyo, Donghyeok An</small><br/>\n                                      <small>Korea Information Processing Society(KIPS), April.</small>\n                                    </h6>\n                                  </div>\n                                </div>\n                              </li>\n                              <hr />\n                            </ul>\n                          </div>\n                        </td>\n                      </tr>\n                    </table>\n                  </ng-template>\n                </ngb-tab>\n              </ngb-tabset>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicationsComponent = (function () {
    function PublicationsComponent() {
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    return PublicationsComponent;
}());
PublicationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-publications',
        template: __webpack_require__("../../../../../src/app/publications/publications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/publications/publications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublicationsComponent);

//# sourceMappingURL=publications.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footer-gray\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!--<nav class=\"footer-nav\">-->\n                <!--<ul>-->\n                    <!--<li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>-->\n                    <!--<li><a href=\"http://blog.creative-tim.com\">Blog</a></li>-->\n                    <!--<li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>-->\n                <!--</ul>-->\n            <!--</nav>-->\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    made with <i class=\"fa fa-heart heart\"></i> by Sangwon Kim\n                </span>\n                <br/>\n                <span class=\"copyright\">\n                    Copyright © {{test | date: 'yyyy'}} SANGWON KIM(EDDIE). All rights reserved.\n                </span>\n\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".credits {\n  padding: 1em;\n  line-height: 5px;\n  text-align: right; }\n\n.credits .copyright {\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" routerLink=\"\">\n                <span>\n\n                <img class=\"navbar-logo\" src=\"../../../assets/img/logo@2x.png\">\n                </span>\n                <!--<p style=\"max-width: 200px\">-->\n                    <!--WoodenStick Reasearch group-->\n                <!--</p>-->\n            </a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"about\">\n                        About\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"project\">\n                        Project\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"publications\">\n                        Publications\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"prototype\">\n                        Prototype\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"iot-platform\">\n                        I<small><b>O</b></small>T platform\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"members\">\n                        Members\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"news\">\n                        News\n                    </a>\n                </li>\n                <li class=\"nav-item\" style=\"color: #fff;\">\n                    <a class=\"nav-link\" rel=\"tooltip\" data-placement=\"bottom\" routerLink=\"contact\">\n                        Contact\n                    </a>\n                </li>\n                <!--\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>-->\n                <!-- <li class=\"nav-item\" *ngIf=\"isHome()\">\n                    <a href=\"https://www.creative-tim.com/product/paper-kit-2-pro?ref=pk2-free-local\" target=\"_blank\" class=\"btn btn-danger btn-round disabled\">Upgrade to Pro</a>\n                </li> -->\n\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-logo {\n  width: 130px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%); }\n\n.navbar-brand {\n  margin-top: -20px;\n  margin-bottom: -20px; }\n\n.navbar .navbar-nav .nav-item .nav-link {\n  font-weight: 600;\n  font-size: 11px;\n  margin: 8px;\n  padding: 8px; }\n\n.container {\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n\n                                <label>Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map