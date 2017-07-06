"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SeversComponent = (function () {
    function SeversComponent() {
        var _this = this;
        this.allowNewServer = true;
        this.serverCreationStatus = 'No Server was created!';
        this.serverName = '';
        this.serverCreated = false;
        this.servers = ['TestServer 1', 'TestServer 2'];
        this.items = [1, 2, 3];
        setTimeout(function () {
            _this.allowNewServer = false;
        }, 1000);
    }
    SeversComponent.prototype.ngOnInit = function () {
    };
    SeversComponent.prototype.onCreateServer = function () {
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
        this.serverCreated = true;
    };
    SeversComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    SeversComponent.prototype.addItems = function () {
        this.items.push(this.items.length + 1);
    };
    return SeversComponent;
}());
SeversComponent = __decorate([
    core_1.Component({
        selector: '[app-servers-container]',
        templateUrl: './app/servers/servers.component.html',
        styles: ["\n\t\t.box{\n\t\t\t\tpadding: 2rem;\n\t\t\t    font-size: 2rem;\n\t\t\t    font-family: 'Helvetica', sans-serif;\n\t\t\t    font-weight: 300;\n\t\t\t    background: #e3f2fd;\n\t\t\t    margin: 1rem;\n\t\t\t    display: inline-block;\n\t\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], SeversComponent);
exports.SeversComponent = SeversComponent;
//# sourceMappingURL=servers.component.js.map