import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HeaderboxComponent = class HeaderboxComponent {
    constructor() { }
    ngOnInit() { }
};
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
export { HeaderboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yYXRpbmctc3Rhci8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXJib3gvaGVhZGVyYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsZ0JBQWUsQ0FBQztJQUloQixRQUFRLEtBQVUsQ0FBQztDQUNwQixDQUFBO0FBSlU7SUFBUixLQUFLLEVBQUU7Z0RBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTtpREFBZTtBQUhaLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixpMENBQXlDOztLQUUxQyxDQUFDO0dBQ1csa0JBQWtCLENBTTlCO1NBTlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyYm94LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlcmJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgQElucHV0KCkgc3RhcjogbnVtYmVyO1xuICBASW5wdXQoKSBzaGFwZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==