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

var TokenizedCardData = require("./TokenizedCardData");
var AuthenticatedCardData = /** @class */ (function (_super) {
    __extends(AuthenticatedCardData, _super);
    function AuthenticatedCardData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthenticatedCardData.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(AuthenticatedCardData.attributeTypeMap);
    };
    AuthenticatedCardData.discriminator = undefined;
    AuthenticatedCardData.attributeTypeMap = [
        {
            "name": "cardholderAuthentication",
            "baseName": "cardholderAuthentication",
            "type": "CardholderAuthentication"
        }
    ];
    return AuthenticatedCardData;
}(TokenizedCardData));
exports.AuthenticatedCardData = AuthenticatedCardData;
module.exports = AuthenticatedCardData;
