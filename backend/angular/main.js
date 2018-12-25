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

module.exports = "li{\n    padding-right: 30px;\n    float:left;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<ul style=\"display:inline\">\n    <li><a routerLink=''>Home</a></li>\n    <li><a routerLink='booklist'>Book List</a></li>\n    <li><a routerLink='bookInstance'>Book Instances</a></li>   \n    <li><a routerLink='authorList'>Authors</a></li>   \n    <li><a routerLink='genreList'>Genres</a></li>   \n    <li><a routerLink='genreEditForm'>Create Genres</a></li>   \n    <li><a routerLink='genreAddForm'>Update Genres</a></li>   \n\n</ul><br><br><br>\n<router-outlet></router-outlet>"

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
        this.title = 'local-library';
    }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_instance_book_instance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-instance/book-instance.component */ "./src/app/book-instance/book-instance.component.ts");
/* harmony import */ var _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./author-list/author-list.component */ "./src/app/author-list/author-list.component.ts");
/* harmony import */ var _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./genre-list/genre-list.component */ "./src/app/genre-list/genre-list.component.ts");
/* harmony import */ var _genre_detail_genre_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./genre-detail/genre-detail.component */ "./src/app/genre-detail/genre-detail.component.ts");
/* harmony import */ var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-detail/book-detail.component */ "./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var _author_detail_author_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./author-detail/author-detail.component */ "./src/app/author-detail/author-detail.component.ts");
/* harmony import */ var _book_instance_detail_book_instance_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-instance-detail/book-instance-detail.component */ "./src/app/book-instance-detail/book-instance-detail.component.ts");
/* harmony import */ var _forms_genre_form_genre_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/genre-form/genre-form.component */ "./src/app/forms/genre-form/genre-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'booklist', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__["BookListComponent"] },
    { path: 'bookInstance', component: _book_instance_book_instance_component__WEBPACK_IMPORTED_MODULE_8__["BookInstanceComponent"] },
    { path: 'authorList', component: _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_9__["AuthorListComponent"] },
    { path: 'genreList', component: _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_10__["GenreListComponent"] },
    { path: 'genre/:id', component: _genre_detail_genre_detail_component__WEBPACK_IMPORTED_MODULE_11__["GenreDetailComponent"] },
    { path: 'book/:id', component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailComponent"] },
    { path: 'author/:id', component: _author_detail_author_detail_component__WEBPACK_IMPORTED_MODULE_13__["AuthorDetailComponent"] },
    { path: 'bookInstance/:id', component: _book_instance_detail_book_instance_detail_component__WEBPACK_IMPORTED_MODULE_14__["BookInstanceDetailComponent"] },
    { path: 'genreEditForm', component: _forms_genre_form_genre_form_component__WEBPACK_IMPORTED_MODULE_15__["GenreFormComponent"] },
    { path: 'genreAddForm', component: _forms_genre_form_genre_form_component__WEBPACK_IMPORTED_MODULE_15__["GenreFormComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_7__["BookListComponent"],
                _book_instance_book_instance_component__WEBPACK_IMPORTED_MODULE_8__["BookInstanceComponent"],
                _author_list_author_list_component__WEBPACK_IMPORTED_MODULE_9__["AuthorListComponent"],
                _genre_list_genre_list_component__WEBPACK_IMPORTED_MODULE_10__["GenreListComponent"],
                _genre_detail_genre_detail_component__WEBPACK_IMPORTED_MODULE_11__["GenreDetailComponent"],
                _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailComponent"],
                _author_detail_author_detail_component__WEBPACK_IMPORTED_MODULE_13__["AuthorDetailComponent"],
                _book_instance_detail_book_instance_detail_component__WEBPACK_IMPORTED_MODULE_14__["BookInstanceDetailComponent"],
                _forms_genre_form_genre_form_component__WEBPACK_IMPORTED_MODULE_15__["GenreFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-detail/author-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/author-detail/author-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-detail/author-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/author-detail/author-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authorDetail\">\n  <h1>Author : {{ authorDetail.author.name }}</h1>\n<p>{{ authorDetail.author.lifespan }}</p>\n  <span *ngFor=\"let book of authorDetail.books;let i = index\">\n  <h3 >Books {{ i+1 }}: {{ book.title }}</h3><h5>{{ book.summary }} </h5>\n  </span>\n  </div>"

/***/ }),

/***/ "./src/app/author-detail/author-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/author-detail/author-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorDetailComponent", function() { return AuthorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorDetailComponent = /** @class */ (function () {
    function AuthorDetailComponent(_baseService, router) {
        this._baseService = _baseService;
        this.router = router;
    }
    AuthorDetailComponent.prototype.ngOnInit = function () {
        this.getAuthorDetail();
    };
    AuthorDetailComponent.prototype.getAuthorDetail = function () {
        var _this = this;
        this._baseService.getAuthorDetail(this.router.snapshot.params.id).subscribe(function (res) {
            console.log(res);
            _this.authorDetail = res;
        });
    };
    AuthorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-detail',
            template: __webpack_require__(/*! ./author-detail.component.html */ "./src/app/author-detail/author-detail.component.html"),
            styles: [__webpack_require__(/*! ./author-detail.component.css */ "./src/app/author-detail/author-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthorDetailComponent);
    return AuthorDetailComponent;
}());



/***/ }),

/***/ "./src/app/author-list/author-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-list/author-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-list/author-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-list/author-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let author of authorList\">\n  <a [routerLink]=\"['/author',author.id]\">{{ author.name }}</a> | {{ author.date_of_birth | date }}&nbsp;, {{ author.date_of_death | date }}<br>\n</span>\n\n<p *ngIf=\"!authorList\">No Authors available</p>"

/***/ }),

/***/ "./src/app/author-list/author-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-list/author-list.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorListComponent", function() { return AuthorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorListComponent = /** @class */ (function () {
    function AuthorListComponent(_baseService) {
        this._baseService = _baseService;
    }
    AuthorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._baseService.getAuthorList().subscribe(function (res) {
            _this.authorList = res.data;
            console.log(_this.authorList.data);
        });
    };
    AuthorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-list',
            template: __webpack_require__(/*! ./author-list.component.html */ "./src/app/author-list/author-list.component.html"),
            styles: [__webpack_require__(/*! ./author-list.component.css */ "./src/app/author-list/author-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], AuthorListComponent);
    return AuthorListComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"result\">\n  <h1>{{ result.book.title }}</h1>\n  <p><strong>Author:</strong> {{ result.book.author.name }} </p>\n  <p><strong>Summary:</strong> {{ result.book.summary }} </p>\n  <p><strong>ISBN:</strong> {{ result.book.isbn }} </p>\n\n  <br><hr>\n  <h1>Copies</h1>\n  <hr>\n  <span *ngFor=\"let copy of result.bookInstance;let i = index\">\n  <p><strong>COPY {{ i+1 }}:</strong>\n    <p><strong>Status:</strong> {{ copy.status }} </p>\n    <p><strong>Imprint:</strong> {{ copy.imprint }} </p>\n    <p><strong>Due Back:</strong> {{ copy.due_back_formatted}} </p>\n\n  </span>\n  </div>"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-detail/book-detail.component.ts ***!
  \******************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(_baseService, router) {
        this._baseService = _baseService;
        this.router = router;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.id = this.router.snapshot.params.id;
        console.log(this.id);
        this.getDetailOfBook();
    };
    BookDetailComponent.prototype.getDetailOfBook = function () {
        var _this = this;
        this._baseService.getBookDetail(this.id).subscribe(function (res) {
            _this.result = res;
            console.log(_this.result);
        });
    };
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.css */ "./src/app/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-instance-detail/book-instance-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/book-instance-detail/book-instance-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-instance-detail/book-instance-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/book-instance-detail/book-instance-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bookInstanceDetail.bookInstance\">\n  <h1><strong>ID</strong> : {{ bookInstanceDetail.bookInstance.id }}</h1>\n  <p><strong>Imprint:</strong> {{ bookInstanceDetail.bookInstance.imprint }} </p>\n  <p><strong>Title:</strong> {{ bookInstanceDetail.bookInstance.book.title }} </p>\n  <p><strong>Status:</strong> {{ bookInstanceDetail.bookInstance.status }} </p>\n  <p><strong>Due Bacj:</strong> {{ bookInstanceDetail.bookInstance.due_back_formatted }} </p>\n</div>"

/***/ }),

/***/ "./src/app/book-instance-detail/book-instance-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/book-instance-detail/book-instance-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: BookInstanceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInstanceDetailComponent", function() { return BookInstanceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookInstanceDetailComponent = /** @class */ (function () {
    function BookInstanceDetailComponent(_baseService, router) {
        this._baseService = _baseService;
        this.router = router;
    }
    BookInstanceDetailComponent.prototype.ngOnInit = function () {
        this.getBookInstanceDetail();
    };
    BookInstanceDetailComponent.prototype.getBookInstanceDetail = function () {
        var _this = this;
        this._baseService.getBookInstanceDetail(this.router.snapshot.params.id).subscribe(function (res) {
            console.log(res);
            _this.bookInstanceDetail = res;
        });
    };
    BookInstanceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-instance-detail',
            template: __webpack_require__(/*! ./book-instance-detail.component.html */ "./src/app/book-instance-detail/book-instance-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-instance-detail.component.css */ "./src/app/book-instance-detail/book-instance-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BookInstanceDetailComponent);
    return BookInstanceDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-instance/book-instance.component.css":
/*!***********************************************************!*\
  !*** ./src/app/book-instance/book-instance.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-instance/book-instance.component.html":
/*!************************************************************!*\
  !*** ./src/app/book-instance/book-instance.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let bookInstance of bookAvailibility\">\n  <a [routerLink]=\"['/bookInstance',bookInstance.id]\">{{ bookInstance.book.title }}</a> | {{ bookInstance.imprint }}&nbsp;{{ bookInstance.status }}&nbsp; {{ bookInstance.due_back_formatted }}<br>\n</span>\n\n<p *ngIf=\"!bookAvailibility\">No book instances available</p>"

/***/ }),

/***/ "./src/app/book-instance/book-instance.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/book-instance/book-instance.component.ts ***!
  \**********************************************************/
/*! exports provided: BookInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInstanceComponent", function() { return BookInstanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookInstanceComponent = /** @class */ (function () {
    function BookInstanceComponent(_baseService, route) {
        this._baseService = _baseService;
        this.route = route;
    }
    BookInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._baseService.getBookAvailibility().subscribe(function (res) {
            _this.bookAvailibility = res.data;
        });
    };
    BookInstanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-instance',
            template: __webpack_require__(/*! ./book-instance.component.html */ "./src/app/book-instance/book-instance.component.html"),
            styles: [__webpack_require__(/*! ./book-instance.component.css */ "./src/app/book-instance/book-instance.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BookInstanceComponent);
    return BookInstanceComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let book of bookList\">\n  <a [routerLink]=\"['/book',book.id]\" routerLinkActive=\"router-link-active\"  >{{ book.title }}</a> | {{ book.author.first_name }}&nbsp;{{ book.author.family_name }}\n</p>\n\n<p *ngIf=\"!bookList\">No books available</p>"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = /** @class */ (function () {
    function BookListComponent(_baseService) {
        this._baseService = _baseService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._baseService.getBookList().subscribe(function (res) {
            console.log(res);
            _this.bookList = res.data;
        });
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/forms/genre-form/genre-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forms/genre-form/genre-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/genre-form/genre-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/forms/genre-form/genre-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> {{title}}</h1>\n\n<form method='POST' action=''>\n  <div class=\"form-group\">\n    <label for='name'> Genre:</label><br>\n   <input #name class=\"form-control\" type='text' placeholder='Fantasy, Poetry etc.' name='name' [value]=\"undefined===genre ? '' : genre.name\">\n  <button class=\"btn btn-primary\" type='submit' (click)=\"addGenreValue()\">Submit</button>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/forms/genre-form/genre-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/genre-form/genre-form.component.ts ***!
  \**********************************************************/
/*! exports provided: GenreFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreFormComponent", function() { return GenreFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/base.service */ "./src/app/service/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenreFormComponent = /** @class */ (function () {
    function GenreFormComponent(_baseService) {
        this._baseService = _baseService;
    }
    GenreFormComponent.prototype.ngOnInit = function () {
    };
    GenreFormComponent.prototype.addGenreValue = function () {
        this._baseService.addGenre(this.input.nativeElement.value).subscribe(function () {
            console.log("posted");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GenreFormComponent.prototype, "input", void 0);
    GenreFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genre-form',
            template: __webpack_require__(/*! ./genre-form.component.html */ "./src/app/forms/genre-form/genre-form.component.html"),
            styles: [__webpack_require__(/*! ./genre-form.component.css */ "./src/app/forms/genre-form/genre-form.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], GenreFormComponent);
    return GenreFormComponent;
}());



/***/ }),

/***/ "./src/app/genre-detail/genre-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/genre-detail/genre-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/genre-detail/genre-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/genre-detail/genre-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"result\">\n<h1>Genre : {{ result.genre.name }}</h1>\n<span *ngFor=\"let book of result.bookList;let i = index\">\n<h3 >Books {{ i+1 }}: {{ book.title }}</h3><h5>{{ book.summary }} </h5>\n</span>\n</div>"

/***/ }),

/***/ "./src/app/genre-detail/genre-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/genre-detail/genre-detail.component.ts ***!
  \********************************************************/
/*! exports provided: GenreDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreDetailComponent", function() { return GenreDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreDetailComponent = /** @class */ (function () {
    function GenreDetailComponent(_baseService, router) {
        this._baseService = _baseService;
        this.router = router;
    }
    GenreDetailComponent.prototype.ngOnInit = function () {
        this.id = this.router.snapshot.params.id;
        this.getDetailOfGenre();
    };
    GenreDetailComponent.prototype.getDetailOfGenre = function () {
        var _this = this;
        this._baseService.getGenreDetail(this.id).subscribe(function (res) {
            _this.result = res;
            console.log(_this.result);
        });
    };
    GenreDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genre-detail',
            template: __webpack_require__(/*! ./genre-detail.component.html */ "./src/app/genre-detail/genre-detail.component.html"),
            styles: [__webpack_require__(/*! ./genre-detail.component.css */ "./src/app/genre-detail/genre-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GenreDetailComponent);
    return GenreDetailComponent;
}());



/***/ }),

/***/ "./src/app/genre-list/genre-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/genre-list/genre-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/genre-list/genre-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/genre-list/genre-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let genre of genreList\">\n  <li [routerLink]=\"['/genre',genre.id]\" routerLinkActive=\"router-link-active\" >{{ genre.name }}</li><br>\n</ul>\n\n<p *ngIf=\"!genreList\">No genres available</p>"

/***/ }),

/***/ "./src/app/genre-list/genre-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/genre-list/genre-list.component.ts ***!
  \****************************************************/
/*! exports provided: GenreListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreListComponent", function() { return GenreListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenreListComponent = /** @class */ (function () {
    function GenreListComponent(_baseService, router) {
        this._baseService = _baseService;
        this.router = router;
    }
    GenreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._baseService.getGenreList().subscribe(function (res) {
            _this.genreList = res.data;
            console.log(_this.genreList.data);
        });
    };
    GenreListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genre-list',
            template: __webpack_require__(/*! ./genre-list.component.html */ "./src/app/genre-list/genre-list.component.html"),
            styles: [__webpack_require__(/*! ./genre-list.component.css */ "./src/app/genre-list/genre-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GenreListComponent);
    return GenreListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Local Library Home</h1>\n<h2>Dynamic Content</h2>\n<ul>\n    <li *ngIf=\"result\">Books : {{ result.data.book_count }}</li>\n      <li *ngIf=\"result\">Copies :  {{ result.data.book_instance_count}}</li>\n      <li *ngIf=\"result\">Copies Available : {{ result.data.book_instance_available_count}}</li> \n      <li *ngIf=\"result\">Authors : {{ result.data.author_count}}</li>\n      <li *ngIf=\"result\">Genres : {{ result.data.genre_count}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
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
    function HomeComponent(_baseService) {
        this._baseService = _baseService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._baseService.getCountings().subscribe(function (res) {
            _this.result = res;
            console.log(_this.result.data.book_count);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/base.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/base.service.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.getCountings = function () {
        return this.http.get('http://localhost:8000/catalog');
    };
    BaseService.prototype.getBookList = function () {
        return this.http.get('http://localhost:8000/catalog/books');
    };
    // getBookInstance(id)
    // {
    //   return this.http.get<{ title:string, error:string , data:any }>('http://localhost:8000/catalog/books/'+id);
    // }
    BaseService.prototype.getBookAvailibility = function () {
        return this.http.get('http://localhost:8000/catalog/bookinstances');
    };
    BaseService.prototype.getAuthorList = function () {
        return this.http.get('http://localhost:8000/catalog/authors');
    };
    BaseService.prototype.getGenreList = function () {
        return this.http.get('http://localhost:8000/catalog/genres');
    };
    BaseService.prototype.getGenreDetail = function (id) {
        console.log('service get genre detail', id);
        return this.http.get('http://localhost:8000/catalog/genre/' + id);
    };
    BaseService.prototype.getBookDetail = function (id) {
        return this.http.get('http://localhost:8000/catalog/book/' + id);
    };
    BaseService.prototype.getAuthorDetail = function (id) {
        return this.http.get('http://localhost:8000/catalog/author/' + id);
    };
    BaseService.prototype.getBookInstanceDetail = function (id) {
        return this.http.get('http://localhost:8000/catalog/bookinstance/' + id);
    };
    BaseService.prototype.addGenre = function (value) {
        console.log(value);
        return this.http.post('http://localhost:8000/genre/create', value);
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BaseService);
    return BaseService;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /home/sarthak/Projects/Node projects/local-library/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map