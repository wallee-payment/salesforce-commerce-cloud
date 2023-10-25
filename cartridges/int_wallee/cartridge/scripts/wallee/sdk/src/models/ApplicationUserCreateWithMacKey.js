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

exports.ApplicationUserCreateWithMacKey = void 0;
var ApplicationUser = require("./ApplicationUser");
var ApplicationUserCreateWithMacKey = /** @class */ (function (_super) {
    __extends(ApplicationUserCreateWithMacKey, _super);
    function ApplicationUserCreateWithMacKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationUserCreateWithMacKey.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ApplicationUserCreateWithMacKey.attributeTypeMap);
    };
    ApplicationUserCreateWithMacKey.discriminator = undefined;
    ApplicationUserCreateWithMacKey.attributeTypeMap = [
        {
            "name": "macKey",
            "baseName": "macKey",
            "type": "string"
        }
    ];
    return ApplicationUserCreateWithMacKey;
}(ApplicationUser));
exports.ApplicationUserCreateWithMacKey = ApplicationUserCreateWithMacKey;
module.exports = ApplicationUserCreateWithMacKey;
