webpackJsonp(["iot-platform.module"],{

/***/ "../../../../../src/app/iot-platform/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n     font-size:1rem; lien-height: 1.7em; margin: 12px\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/iot-platform/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-color: #ffff; min-height: 10vh !important;\">\n    <!--<div class=\"filter\"></div>-->\n    <div style=\"width: 80%\" >\n      <img style=\"width: 100%; height: auto\" src=\"https://www.worldtravelguide.net/wp-content/uploads/2017/04/shu-USA-CA-SanDiego-439256962-Dancestrokes-copy.jpg\">\n    </div>\n  </div>\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto text-left\">\n          <ul class=\"list\" #list_boardContent>\n          </ul>\n          <ul class=\"list\" >\n            <li>\n              <h3 style=\"margin-top: 2em; font-weight: bold\">Previous Editions</h3>\n              <p *ngFor=\"let eachGen of prevList; let i = index;\">\n                <a class=\"alert-link\" [routerLink] = '[\"../prev\", i+1, eachGen[0]]'>{{i+1}}) {{eachGen[0]}}</a>\n                <small>(Certified trainees {{eachGen[1]}} people)</small>\n              </p>\n              <!--<p>-->\n                <!--<a class=\"alert-link\" routerLink=\"../prev/1\">1) Winter 2016</a> (Certified trainees 15 people)<br/>-->\n              <!--</p>-->\n              <!--<p>-->\n                <!--<a class=\"alert-link\" routerLink=\"../prev/2\">2) Summer 2016</a>-->\n              <!--</p>-->\n              <!--<p>-->\n                <!--<a class=\"alert-link\" routerLink=\"../prev/3\">3) Summer 2017</a>-->\n              <!--</p>-->\n              <!--<p>-->\n                <!--<a class=\"alert-link\" routerLink=\"../prev/4\">4) Winter 2017</a>-->\n              <!--</p>-->\n            </li>\n          </ul>\n        </div>\n      </div>\n      <br/>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/iot-platform/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
    function BoardComponent(http, renderer) {
        this.http = http;
        this.renderer = renderer;
        this.prevList = [
            ["Winter 2016", 15],
            ["Summer 2016", 15],
            ["Summer 2017", 15],
            ["Winter 2017", 15]
        ];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.set('node', 'iot-platform');
        params = params.set('target', 'board_content');
        this.http.get('/api', {
            responseType: 'text',
            params: params
        })
            .subscribe(function (res) {
            if (res !== null) {
                _this.convertJson2Component(_this.list_boardContent, JSON.parse(res));
                console.dir(_this.list_boardContent);
            }
            else {
                _this.list_boardContent.nativeElement.innerHTML += 'Nothing yet :-(';
            }
        });
    };
    BoardComponent.prototype.testClick = function () {
        alert('cllc');
    };
    BoardComponent.prototype.convertJson2Component = function (list_boardContent, rcvdJson) {
        var _loop_1 = function (key) {
            console.dir(rcvdJson[key]);
            var item = create_li();
            item = insert_h3(item, key);
            var values = rcvdJson[key];
            var valueType;
            values.forEach(function (chunked) {
                if (chunked.type != undefined) {
                    valueType = chunked.type;
                }
                switch (valueType) {
                    case "plain":
                        item = insert_p(item, chunked["value"]);
                        break;
                    case "ul":
                        var ulItemType_1;
                        var ul_item_1 = create_ul();
                        chunked["value-list"].forEach(function (listItem) {
                            if (listItem.type !== undefined) {
                                ulItemType_1 = listItem.type;
                            }
                            switch (ulItemType_1) {
                                case "plain":
                                    var ul_style_1 = 'line-height: 1.5em; font-size: 0.8rem; margin: 0.7em';
                                    if (listItem.children !== undefined) {
                                        var parent_li_item_1 = create_li(listItem.value, ul_style_1);
                                        var childrenType_1;
                                        listItem.children.forEach(function (child) {
                                            if (child.type !== undefined) {
                                                childrenType_1 = child.type;
                                            }
                                            switch (childrenType_1) {
                                                case "ul":
                                                    var children_ul_1 = create_ul();
                                                    var nestedChildType_1;
                                                    child["value-list"].forEach(function (nestedChild) {
                                                        if (nestedChild.type !== undefined) {
                                                            nestedChildType_1 = nestedChild.type;
                                                        }
                                                        switch (nestedChildType_1) {
                                                            case "plain":
                                                                children_ul_1 = insert_li(children_ul_1, nestedChild.value, ul_style_1);
                                                        }
                                                    });
                                                    parent_li_item_1 = insert_component(parent_li_item_1, children_ul_1);
                                            }
                                        });
                                        ul_item_1 = insert_component(ul_item_1, parent_li_item_1);
                                    }
                                    else {
                                        ul_item_1 = insert_li(ul_item_1, listItem["value"], ul_style_1);
                                    }
                                    break;
                            }
                        });
                        item = insert_component(item, ul_item_1);
                        break;
                    case "ol":
                        var ol_style_1 = 'line-height: 1.5em; font-size: 0.8rem; margin: 0.7em';
                        var nlItemType_1;
                        var nl_item_1 = create_ol();
                        chunked["value-list"].forEach(function (listItem) {
                            if (listItem.type !== undefined) {
                                nlItemType_1 = listItem.type;
                            }
                            switch (nlItemType_1) {
                                case "plain":
                                    nl_item_1 = insert_li(nl_item_1, listItem["value"], ol_style_1);
                                    break;
                            }
                        });
                        item = insert_component(item, nl_item_1);
                        break;
                    case "link":
                        var div = create_div();
                        div = insert_a(div, chunked.value, chunked.link);
                        item = insert_component(item, div);
                }
            });
            console.log(item);
            list_boardContent.nativeElement.appendChild(item);
        };
        for (var key in rcvdJson) {
            _loop_1(key);
        }
    };
    return BoardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('list_boardContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BoardComponent.prototype, "list_boardContent", void 0);
BoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-board',
        template: __webpack_require__("../../../../../src/app/iot-platform/board/board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/iot-platform/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], BoardComponent);

function create_li(text, style) {
    var li = document.createElement('li');
    if (text !== undefined) {
        li.innerText = text;
    }
    if (style) {
        li.style.cssText = style;
    }
    return li;
}
function _create_h3(text) {
    var h3 = document.createElement('h3');
    h3.innerText = text;
    return h3;
}
function _create_p(text) {
    var p = document.createElement('p');
    p.innerText = text;
    return p;
}
function create_ul() {
    var ul = document.createElement('ul');
    return ul;
}
function create_ol() {
    var nl = document.createElement('ol');
    return nl;
}
function create_a(text) {
    var a = document.createElement('a');
    a.innerText = text;
    return a;
}
function create_div() {
    var div = document.createElement('div');
    return div;
}
function insert_a(c, text, link) {
    var a = create_a(text);
    a.className = 'alert-link';
    a.href = link;
    // let a = '<a class="alert-link" (click)="onClick()">'+text+'</a>';
    c.appendChild(a);
    // c.innerHTML += a
    return c;
}
function insert_h3(c, text) {
    var h3 = _create_h3(text);
    h3.style.cssText = 'margin-top: 2em; font-weight: bold';
    c.appendChild(h3);
    return c;
}
function insert_p(c, text) {
    var p = _create_p(text);
    p.style.cssText = 'font-size:1rem; lien-height: 1.7em; margin: 12px';
    c.appendChild(p);
    return c;
}
function insert_li(c, text, style) {
    var li = create_li(text, style);
    c.appendChild(li);
    return c;
}
function insert_component(c1, c2) {
    c1.appendChild(c2);
    return c1;
}
var _a, _b, _c;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "../../../../../src/app/iot-platform/iot-platform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n\n.page-header-xs {\n    min-height: 50vh !important;\n}\n\n.page-subtitle {\n    margin-bottom: 0.3em;\n    width: 100%;\n    font-size: 8vmin;\n    color: #fff;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 200;\n    float: right;\n    text-align: right;\n}\n\n.title {\n    font-size: 5vmin;\n}\n\n@media screen and (min-width: 1200px) {\n    .title {\n        font-size: 2.8em;\n    }\n\n    .page-subtitle {\n        font-size: 5rem;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/iot-platform/iot-platform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('https://farm5.staticflickr.com/4416/36482067020_4e3faf8368_k.jpg');\">\n    <div class=\"filter\">\n    </div>\n    <!--START--by Jumpsnack--->\n    <div class=\"td-name page-subtitle\" >\n      <div class=\"container\" >\n        IoT PLATFORM\n      </div>\n    </div>\n    <!--END--by Jumpsnack--->\n  </div>\n\n  <div class=\"section profile-content\">\n    <div class=\"container\">\n      <div class=\"owner\">\n        <div class=\"name\">\n          <h2 class=\"title\"><hr/>Hands-on IoT Platform Development Project<hr/></h2>\n          <!--<h6 class=\"description\">We are who we are</h6>-->\n        </div>\n      </div>\n      <div class=\"main\">\n        <router-outlet></router-outlet>\n      </div>\n      <br/>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/iot-platform/iot-platform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IotPlatformComponent; });
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

var IotPlatformComponent = (function () {
    function IotPlatformComponent() {
    }
    IotPlatformComponent.prototype.ngOnInit = function () {
    };
    return IotPlatformComponent;
}());
IotPlatformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-iot-platform',
        template: __webpack_require__("../../../../../src/app/iot-platform/iot-platform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/iot-platform/iot-platform.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IotPlatformComponent);

//# sourceMappingURL=iot-platform.component.js.map

/***/ }),

/***/ "../../../../../src/app/iot-platform/iot-platform.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IotPlatformModule", function() { return IotPlatformModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iot_platform_component__ = __webpack_require__("../../../../../src/app/iot-platform/iot-platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board_component__ = __webpack_require__("../../../../../src/app/iot-platform/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iot_platform_routing__ = __webpack_require__("../../../../../src/app/iot-platform/iot-platform.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prev_prev_component__ = __webpack_require__("../../../../../src/app/iot-platform/prev/prev.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IotPlatformModule = (function () {
    function IotPlatformModule() {
    }
    return IotPlatformModule;
}());
IotPlatformModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__iot_platform_routing__["a" /* IotPlatformRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__iot_platform_component__["a" /* IotPlatformComponent */], __WEBPACK_IMPORTED_MODULE_3__board_board_component__["a" /* BoardComponent */], __WEBPACK_IMPORTED_MODULE_5__prev_prev_component__["a" /* PrevComponent */]]
    })
], IotPlatformModule);

//# sourceMappingURL=iot-platform.module.js.map

/***/ }),

/***/ "../../../../../src/app/iot-platform/iot-platform.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IotPlatformRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iot_platform_component__ = __webpack_require__("../../../../../src/app/iot-platform/iot-platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__board_board_component__ = __webpack_require__("../../../../../src/app/iot-platform/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prev_prev_component__ = __webpack_require__("../../../../../src/app/iot-platform/prev/prev.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__iot_platform_component__["a" /* IotPlatformComponent */], children: [
            { path: 'board', component: __WEBPACK_IMPORTED_MODULE_3__board_board_component__["a" /* BoardComponent */] },
            { path: 'prev/:id/:title', component: __WEBPACK_IMPORTED_MODULE_4__prev_prev_component__["a" /* PrevComponent */] },
            { path: '', redirectTo: 'board', pathMatch: 'full' }
        ] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var IotPlatformRoutingModule = (function () {
    function IotPlatformRoutingModule() {
    }
    return IotPlatformRoutingModule;
}());
IotPlatformRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ],
    })
], IotPlatformRoutingModule);

//# sourceMappingURL=iot-platform.routing.js.map

/***/ }),

/***/ "../../../../../src/app/iot-platform/prev/prev.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/iot-platform/prev/prev.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"text-center ml-auto mr-auto\">\n    <h2 class=\"info-title\" #title></h2>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-10 ml-auto mr-auto text-left\">\n    <ul class=\"list\" #prevContainer>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/iot-platform/prev/prev.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrevComponent = (function () {
    function PrevComponent(route, http) {
        this.route = route;
        this.http = http;
        this.id = -1;
    }
    PrevComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
        params = params.set('node', 'iot-platform');
        params = params.set('target', 'prev_content');
        this.route.params.subscribe(function (input) {
            console.dir(input);
            _this.id = input['id'];
            if (_this.id > 0 && _this.id) {
                params = params.set('id', _this.id.toString());
                _this.http.get('/api', {
                    responseType: 'text',
                    params: params
                })
                    .subscribe(function (res) {
                    if (res !== null) {
                        _this.convertJson2Component(_this.prevContainer, JSON.parse(res));
                        _this.title.nativeElement.innerText = input.title;
                    }
                    else {
                        _this.prevContainer.nativeElement.innerHTML += 'Nothing yet :-(';
                    }
                });
            }
        });
    };
    PrevComponent.prototype.convertJson2Component = function (targetComponent, rcvdJson) {
        var _loop_1 = function (key) {
            console.dir(rcvdJson[key]);
            var item = create_li();
            item = insert_h3(item, key);
            var values = rcvdJson[key];
            var valueType;
            values.forEach(function (chunked) {
                if (chunked.type != undefined) {
                    valueType = chunked.type;
                }
                switch (valueType) {
                    case "plain":
                        item = insert_p(item, chunked["value"]);
                        break;
                    case "ul":
                        var ulItemType_1;
                        var ul_item_1 = create_ul();
                        chunked["value-list"].forEach(function (listItem) {
                            if (listItem.type !== undefined) {
                                ulItemType_1 = listItem.type;
                            }
                            switch (ulItemType_1) {
                                case "plain":
                                    var ul_style_1 = 'line-height: 1.5em; font-size: 16px; margin: 0.7em';
                                    if (listItem.children !== undefined) {
                                        var parent_li_item_1 = create_li(listItem.value, ul_style_1);
                                        var childrenType_1;
                                        listItem.children.forEach(function (child) {
                                            if (child.type !== undefined) {
                                                childrenType_1 = child.type;
                                            }
                                            switch (childrenType_1) {
                                                case "ul":
                                                    var children_ul_1 = create_ul();
                                                    var nestedChildType_1;
                                                    child["value-list"].forEach(function (nestedChild) {
                                                        if (nestedChild.type !== undefined) {
                                                            nestedChildType_1 = nestedChild.type;
                                                        }
                                                        switch (nestedChildType_1) {
                                                            case "plain":
                                                                children_ul_1 = insert_li(children_ul_1, nestedChild.value, ul_style_1);
                                                        }
                                                    });
                                                    parent_li_item_1 = insert_component(parent_li_item_1, children_ul_1);
                                            }
                                        });
                                        ul_item_1 = insert_component(ul_item_1, parent_li_item_1);
                                    }
                                    else {
                                        ul_item_1 = insert_li(ul_item_1, listItem["value"], ul_style_1);
                                    }
                                    break;
                            }
                        });
                        item = insert_component(item, ul_item_1);
                        break;
                    case "ol":
                        var ol_style_1 = 'line-height: 1.5em; font-size: 16px; margin: 0.7em';
                        var nlItemType_1;
                        var nl_item_1 = create_ol();
                        chunked["value-list"].forEach(function (listItem) {
                            if (listItem.type !== undefined) {
                                nlItemType_1 = listItem.type;
                            }
                            switch (nlItemType_1) {
                                case "plain":
                                    nl_item_1 = insert_li(nl_item_1, listItem["value"], ol_style_1);
                                    break;
                            }
                        });
                        item = insert_component(item, nl_item_1);
                        break;
                    case "link":
                        var div = create_div();
                        div = insert_a(div, chunked.value, chunked.link);
                        item = insert_component(item, div);
                        break;
                    case "trainee":
                        item = insert_p(item, chunked["value"], chunked["email"]);
                        break;
                }
            });
            console.log(item);
            targetComponent.nativeElement.appendChild(item);
        };
        for (var key in rcvdJson) {
            _loop_1(key);
        }
    };
    return PrevComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('title'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PrevComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('prevContainer'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], PrevComponent.prototype, "prevContainer", void 0);
PrevComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prev',
        template: __webpack_require__("../../../../../src/app/iot-platform/prev/prev.component.html"),
        styles: [__webpack_require__("../../../../../src/app/iot-platform/prev/prev.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object])
], PrevComponent);

function create_li(text, style) {
    var li = document.createElement('li');
    if (text !== undefined) {
        li.innerText = text;
    }
    if (style) {
        li.style.cssText = style;
    }
    return li;
}
function _create_h3(text) {
    var h3 = document.createElement('h3');
    h3.innerText = text;
    return h3;
}
function _create_p(text, email) {
    var p = document.createElement('p');
    p.innerText = text;
    if (email) {
        var small = document.createElement('small');
        small.innerText = email;
        small.style.cssText = 'margin-left: 2em';
        p.appendChild(small);
    }
    return p;
}
function create_ul() {
    var ul = document.createElement('ul');
    return ul;
}
function create_ol() {
    var nl = document.createElement('ol');
    return nl;
}
function create_a(text) {
    var a = document.createElement('a');
    a.innerText = text;
    return a;
}
function create_div() {
    var div = document.createElement('div');
    return div;
}
function insert_a(c, text, link) {
    var a = create_a(text);
    a.className = 'alert-link';
    a.href = link;
    a.style.cssText = 'margin: 12px';
    // let a = '<a class="alert-link" (click)="onClick()">'+text+'</a>';
    c.appendChild(a);
    // c.innerHTML += a
    return c;
}
function insert_h3(c, text) {
    var h3 = _create_h3(text);
    h3.style.cssText = 'margin-top: 2em';
    c.appendChild(h3);
    return c;
}
function insert_p(c, text, email) {
    var p = _create_p(text, email);
    p.style.cssText = 'font-size:1rem; lien-height: 1.7em; margin: 12px';
    c.appendChild(p);
    return c;
}
function insert_li(c, text, style) {
    var li = create_li(text, style);
    c.appendChild(li);
    return c;
}
function insert_component(c1, c2) {
    c1.appendChild(c2);
    return c1;
}
var _a, _b, _c, _d;
//# sourceMappingURL=prev.component.js.map

/***/ })

});
//# sourceMappingURL=iot-platform.module.chunk.js.map