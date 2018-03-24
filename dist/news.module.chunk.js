webpackJsonp(["news.module"],{

/***/ "../../../../../src/app/news/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-img-top {\n    /*height: 140px;*/\n    overflow: hidden;\n\n    background-position: center center;\n    background-size: cover;\n    min-height: 20vh;\n    max-height: 999px;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n\n.card-img-top img {\n    /*max-width: 100%; height: auto;*/\n\n    /*vertical-align: middle;*/\n    /*display: inline-block;*/\n\n\n}\n\n.card-title {\n    font-size: 1.8em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\"  [ngStyle]=\"{'background-image': 'url(http://calit2.net/images/articles/2016/SMARTfig1.jpg)'}\">\n      <!--<img src=\"http://calit2.net/images/articles/2016/SMARTfig1.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Post title</h2>\n      <p class=\"card-text\">Hello blahblagblahblah....</p>\n      <a href=\"#\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 217\n    </div>\n  </div>\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\"  [ngStyle]=\"{'background-image': 'url(http://calit2.net/images/articles/2016/SMARTfig1.jpg)'}\">\n      <!--<img src=\"http://calit2.net/images/articles/2016/SMARTfig1.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Post title</h2>\n      <p class=\"card-text\">Hello blahblagblahblah....</p>\n      <a href=\"#\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017\n    </div>\n  </div>\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\"  [ngStyle]=\"{'background-image': 'url(http://calit2.net/images/articles/2016/SMARTfig1.jpg)'}\">\n      <!--<img src=\"http://calit2.net/images/articles/2016/SMARTfig1.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Post title</h2>\n      <p class=\"card-text\">Hello blahblagblahblah....</p>\n      <a href=\"#\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\" [ngStyle]=\"{'background-image': 'url('+test+')'}\">\n      <!--<img src=\"http://www.yeongnam.com/Photo/2016/06/06/L20160606.010190756490001i1.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">샌디에이고 스마트시티 해커톤대회, 계명대 박창은씨 1위</h2>\n      <p class=\"card-text\">계명대 컴퓨터공학전공 박창은씨(4학년)가 캘리포니아대학 샌디에이고캠퍼스와 샌디에이고시, 퀄컴 등이 공동으로 주최한....</p>\n      <a [routerLink]=\"['../post']\" [queryParams]=\"{postId: 135}\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017\n    </div>\n  </div>\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\" [ngStyle]=\"{'background-image': 'url(http://img.etnews.com/photonews/1606/808598_20160603153923_141_0002.jpg)'}\">\n      <!--<img src=\"http://img.etnews.com/photonews/1606/808598_20160603153923_141_0002.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Post title</h2>\n      <p class=\"card-text\">Hello blahblagblahblah....</p>\n      <a href=\"#\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017\n    </div>\n  </div>\n  <div class=\"card col-md-4\">\n    <div class=\"card-img-top\"  [ngStyle]=\"{'background-image': 'url(http://calit2.net/images/articles/2016/SMARTfig1.jpg)'}\">\n      <!--<img src=\"http://calit2.net/images/articles/2016/SMARTfig1.jpg\">-->\n    </div>\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Post title</h2>\n      <p class=\"card-text\">Hello blahblagblahblah....</p>\n      <a href=\"#\" class=\"btn-sm  btn-danger btn-round\">Read More &rarr;</a>\n    </div>\n    <div class=\"card-footer text-muted\">\n      Posted on January 1, 2017\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"ml-auto mr-auto text-center\">\n\n    <ngb-pagination  [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = (function () {
    function BoardComponent(newsService) {
        this.newsService = newsService;
        this.test = 'http://www.yeongnam.com/Photo/2016/06/06/L20160606.010190756490001i1.jpg';
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.onClickReadMore = function (postId) {
        this.newsService.goToPost(postId);
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/news/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]) === "function" && _a || Object])
], BoardComponent);

var _a;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n     -webkit-box-align: end;\n         -ms-flex-align: end;\n             align-items: flex-end;\n }\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 100px;\n    padding-left: 20px;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('http://qi.ucsd.edu/images/header-research.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        NEWS\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>THE LATEST FROM WOODENSTICK<hr/></h2>\n          <!--<h6 class=\"description\">We are who we are</h6>-->\n        </div>\n      </div>\n      <div class=\"main\">\n        <router-outlet></router-outlet>\n      </div>\n      <br/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
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

var NewsComponent = (function () {
    function NewsComponent() {
        this.page = 1;
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_board_component__ = __webpack_require__("../../../../../src/app/news/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_post_component__ = __webpack_require__("../../../../../src/app/news/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_routing__ = __webpack_require__("../../../../../src/app/news/news.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_service__ = __webpack_require__("../../../../../src/app/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_6__news_routing__["a" /* NewsRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_2__board_board_component__["a" /* BoardComponent */], __WEBPACK_IMPORTED_MODULE_3__post_post_component__["a" /* PostComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__news_service__["a" /* NewsService */]]
    })
], NewsModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board_component__ = __webpack_require__("../../../../../src/app/news/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_component__ = __webpack_require__("../../../../../src/app/news/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__news_component__["a" /* NewsComponent */], children: [
            { path: 'board', component: __WEBPACK_IMPORTED_MODULE_3__board_board_component__["a" /* BoardComponent */] },
            { path: 'post', component: __WEBPACK_IMPORTED_MODULE_4__post_post_component__["a" /* PostComponent */] },
            //{ path: 'profiles', loadChildren: 'app/members/current/profiles/profiles.module#ProfilesModule' },
            // { path: 'past',       component: PastComponent },
            { path: '', redirectTo: 'board', pathMatch: 'full' }
        ] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var NewsRoutingModule = (function () {
    function NewsRoutingModule() {
    }
    return NewsRoutingModule;
}());
NewsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ],
    })
], NewsRoutingModule);

//# sourceMappingURL=news.routing.js.map

/***/ }),

/***/ "../../../../../src/app/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
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


var NewsService = (function () {
    function NewsService(router) {
        this.router = router;
    }
    NewsService.prototype.goToPost = function (postId) {
        this.router.navigate(['post'], { queryParams: { postId: postId } });
    };
    NewsService.prototype.getPost = function (postId) {
        return { img: 'http://www.yeongnam.com/Photo/2016/06/06/L20160606.010190756490001i1.jpg',
            title: '샌디에이고 스마트시티 해커톤대회, 계명대 박창은씨 1위',
            date: 'Posted on June 6, 2016',
            body: '계명대 컴퓨터공학전공 박창은씨(4학년)가 캘리포니아대학 샌디에이고캠퍼스와 샌디에이고시, 퀄컴 등이 공동으로 주최한 ‘샌디에이고 스마트시티 해커톤’ 대회에 참가해 1위를 차지했다. 같은 과 박준희(4학년), 이호준씨(4학년)는 우수 아이디어로 선정되는 등 우수한 성적을 거뒀다.\n' +
                '\n' +
                '지난 5월20일부터 22일까지 미국 캘리포니아대학 샌디에이고캠퍼스에서 열린 해커톤대회는 샌디에이고 시를 스마트하고 친환경적인 시로 만들기 위한 정책 수립을 위해 개최됐다.\n' +
                '\n' +
                '이 대회는 샌디에이고시가 대회 참가자에게 시가 보유하고 있는 에너지, 물, 도로, 폐기물, 공기오염 등과 같은 다양한 실제 데이터를 제공하고, 참여자는 이 데이터를 활용한 혁신적인 아이디어와 기술적인 실현 방안을 도출하는 형태로 진행됐다.\n' +
                '\n' +
                '계명대 컴퓨터공학전공 학생들은 대회에 참가한 전 세계 학생들과 함께 프로젝트 팀을 구성해 샌디에이고 시의 물 사용량을 줄이는 아이디어를 제출했는데, 박창은 학생이 속한 2MAX팀이 대회 1위를 차지했다. 박준희, 이호준 학생이 소속된 SPECTRE팀은 우수 아이디어로 선정되며, 계명대 학생들이 세계적으로 실력을 인정받았다. \n' +
                '\n' +
                '이들은 샌디에이고시 가정마다 물 사용량을 체크하기 위한 센서를 설치하고, 센서마다 물이 얼마만큼 지나가는지 비교해서 누수가 일어나는 곳을 발견, 물 사용량을 줄이는 아이디어를 제출했다. 학생들은 3D프린터를 이용해 시제품을 제작해 실험하고, 물 사용량을 쉽게 체크할 수 있도록 iOS와 안드로이드 2가지 버전의 앱을 만들어 데이터를 관리하도록 했다.\n' +
                '\n' +
                '이들 학생들의 참가는 계명대 산학협력선도대학 (LINC·Leaders in INdustry-university Cooperation) 육성사업의 후원으로 이루어졌다. ' };
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/news/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-title {\n    font-size: 3em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8 mr-auto ml-auto\">\n    <h1 class=\"mt-4 post-title\">{{title}}</h1>\n<br/>\n    <p class=\"pull-right\">{{date}}</p>\n    <hr/>\n\n    <img class=\"img-fluid rounded\" src={{img}}>\n    <hr/>\n\n    <p class=\"text-justify text-dark\" style=\"line-height: 2em\">{{body}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/news/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__("../../../../../src/app/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = (function () {
    function PostComponent(route, newsService, router) {
        this.route = route;
        this.newsService = newsService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.postId = +params['postId'] || 0;
            if (_this.postId !== undefined && _this.postId > 0) {
                _this.post = _this.newsService.getPost(_this.postId);
                if (_this.post === undefined) {
                    _this.router.navigate(['../']);
                }
                else {
                    _this.img = _this.post.img;
                    _this.title = _this.post.title;
                    _this.date = _this.post.date;
                    _this.body = _this.post.body;
                }
            }
        });
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PostComponent;
}());
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post',
        template: __webpack_require__("../../../../../src/app/news/post/post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/news/post/post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__news_service__["a" /* NewsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PostComponent);

var _a, _b, _c;
//# sourceMappingURL=post.component.js.map

/***/ })

});
//# sourceMappingURL=news.module.chunk.js.map