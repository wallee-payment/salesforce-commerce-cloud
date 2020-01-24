"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var User = require("./User");
var ApplicationUser = /** @class */ (function (_super) {
    __extends(ApplicationUser, _super);
    function ApplicationUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationUser.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ApplicationUser.attributeTypeMap);
    };
    ApplicationUser.discriminator = undefined;
    ApplicationUser.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "primaryAccount",
            "baseName": "primaryAccount",
            "type": "Account"
        },
        {
            "name": "requestLimit",
            "baseName": "requestLimit",
            "type": "number"
        }
    ];
    return ApplicationUser;
}(User));
exports.ApplicationUser = ApplicationUser;
module.exports = ApplicationUser;
