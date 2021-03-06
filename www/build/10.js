webpackJsonp([10],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout2Module", function() { return WizardLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout2Module = /** @class */ (function () {
    function WizardLayout2Module() {
    }
    WizardLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], WizardLayout2Module);
    return WizardLayout2Module;
}());

//# sourceMappingURL=wizard-layout-2.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardLayout2 = /** @class */ (function () {
    function WizardLayout2() {
        this.next = true;
        this.finish = true;
        this.next = true;
        this.finish = false;
    }
    WizardLayout2.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout2.prototype.slideHasChanged = function (index) {
        try {
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout2.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], WizardLayout2.prototype, "slider", void 0);
    WizardLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'wizard-layout-2',template:/*ion-inline-start:"C:\Users\Bender\Desktop\ionicapp\src\components\wizard\layout-2\wizard.html"*/'<!--Theme Wizard Big Image -->\n\n<!--Content-->\n\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n\n    <ion-slide background-size *ngFor="let item of data.items;" [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n\n        <h1 wizard-title>{{item.title}}</h1>\n\n    </ion-slide>\n\n</ion-slides>\n\n<!--Button section-->\n\n<div *ngIf="data != null">\n\n    <button default-button full ion-button (click)="changeSlide(1)" *ngIf="next">\n\n    {{data.btnNext}}\n\n  </button>\n\n    <button default-button full ion-button (click)="onEvent(\'onFinish\')" *ngIf="finish">\n\n    {{data.btnFinish}}\n\n  </button>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Bender\Desktop\ionicapp\src\components\wizard\layout-2\wizard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout2);
    return WizardLayout2;
}());

//# sourceMappingURL=wizard-layout-2.js.map

/***/ })

});
//# sourceMappingURL=10.js.map