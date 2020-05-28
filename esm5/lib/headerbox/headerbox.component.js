import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { HeaderboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yYXRpbmctc3Rhci8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXJib3gvaGVhZGVyYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFDRTtJQUFlLENBQUM7SUFJaEIscUNBQVEsR0FBUixjQUFrQixDQUFDO0lBSFY7UUFBUixLQUFLLEVBQUU7b0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTtxREFBZTtJQUhaLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixpMENBQXlDOztTQUUxQyxDQUFDO09BQ1csa0JBQWtCLENBTTlCO0lBQUQseUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXJib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXJib3guY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBASW5wdXQoKSBzdGFyOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19