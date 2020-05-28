import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

var Ng9AppLibService = /** @class */ (function () {
    function Ng9AppLibService() {
    }
    Ng9AppLibService.ɵprov = ɵɵdefineInjectable({ factory: function Ng9AppLibService_Factory() { return new Ng9AppLibService(); }, token: Ng9AppLibService, providedIn: "root" });
    Ng9AppLibService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], Ng9AppLibService);
    return Ng9AppLibService;
}());

var Ng9AppLibComponent = /** @class */ (function () {
    function Ng9AppLibComponent() {
    }
    Ng9AppLibComponent.prototype.ngOnInit = function () { };
    Ng9AppLibComponent = __decorate([
        Component({
            selector: 'enl-ng9-app-lib',
            template: "\n    <p>\n      ng9-app-lib works!\n    </p>\n  "
        })
    ], Ng9AppLibComponent);
    return Ng9AppLibComponent;
}());

var HeaderboxComponent = /** @class */ (function () {
    function HeaderboxComponent() {
    }
    HeaderboxComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], HeaderboxComponent.prototype, "star", void 0);
    __decorate([
        Input()
    ], HeaderboxComponent.prototype, "shape", void 0);
    HeaderboxComponent = __decorate([
        Component({
            selector: 'ngx-rating',
            template: "<div class=\"box\" [style.display]=\"shape === 'star' ? 'inline-flex' : 'none'\">\n  <div class=\"like\" [hidden]=\"star < 1\">\n    \u2605\n  </div>\n  <div class=\"like\" [hidden]=\"star < 2\">\n    \u2605\n  </div>\n  <div class=\"like\" [hidden]=\"star < 3\">\n    \u2605\n  </div>\n  <div class=\"like\" [hidden]=\"star < 4\">\n    \u2605\n  </div>\n  <div class=\"like\" [hidden]=\"star < 5\">\n    \u2605\n  </div>\n</div>\n<div\n  class=\"box\"\n  [style.display]=\"shape === 'multistar' ? 'inline-flex' : 'none'\"\n>\n  <div class=\"like2\" [hidden]=\"star < 1\">\n    \u2B50\n  </div>\n  <div class=\"like2\" [hidden]=\"star < 2\">\n    \u2B50\n  </div>\n  <div class=\"like2\" [hidden]=\"star < 3\">\n    \u2B50\n  </div>\n  <div class=\"like2\" [hidden]=\"star < 4\">\n    \u2B50\n  </div>\n  <div class=\"like2\" [hidden]=\"star < 5\">\n    \u2B50\n  </div>\n</div>\n\n<div\n  class=\"box\"\n  [style.display]=\"shape === 'fill' ? 'inline-flex' : 'none'\"\n>\n  <div class=\"like3\" [hidden]=\"star < 1\">\n    \u2605 \n  </div>\n  <div class=\"like3\" [hidden]=\"star < 2\">\n    \u2605 \n  </div>\n  <div class=\"like3\" [hidden]=\"star < 3\">\n    \u2605 \n  </div>\n  <div class=\"like3\" [hidden]=\"star < 4\">\n    \u2605 \n  </div>\n  <div class=\"like3\" [hidden]=\"star < 5\">\n    \u2605 \n  </div>\n</div>\n\n",
            styles: [".box{display:inline-flex}.like{padding:5px 10px;margin:10px 10px 10px 0;border-radius:100%;background-color:#ff9800;color:#fff;text-align:center;box-shadow:0 0 5px 5px #dcdcdc;-webkit-animation:1s ease-in alternate fadeIn;animation:1s ease-in alternate fadeIn}.like2{margin:10px 10px 10px 0;border-radius:100%;background-color:#fff;color:#fff;padding:5px 6px;text-align:center;box-shadow:0 0 5px 5px #dcdcdc;-webkit-animation:1s ease-in alternate fadeIn;animation:1s ease-in alternate fadeIn}.like3{margin:10px 10px 10px 0;border-radius:100%;background-color:#6495ed;color:#fff;padding:5px 10px;text-align:center;box-shadow:0 0 5px 5px #dcdcdc;-webkit-animation:1s ease-in alternate fadeIn;animation:1s ease-in alternate fadeIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}"]
        })
    ], HeaderboxComponent);
    return HeaderboxComponent;
}());

var ngxRatingModule = /** @class */ (function () {
    function ngxRatingModule() {
    }
    ngxRatingModule = __decorate([
        NgModule({
            declarations: [Ng9AppLibComponent, HeaderboxComponent],
            imports: [],
            exports: [Ng9AppLibComponent, HeaderboxComponent],
        })
    ], ngxRatingModule);
    return ngxRatingModule;
}());

/*
 * Public API Surface of ng9-app-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderboxComponent, Ng9AppLibComponent, Ng9AppLibService, ngxRatingModule };
//# sourceMappingURL=ngx-rating-star.js.map
