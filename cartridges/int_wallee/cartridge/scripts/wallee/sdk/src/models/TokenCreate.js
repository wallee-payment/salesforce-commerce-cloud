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
exports.__esModule = true;
var AbstractTokenUpdate = require("./AbstractTokenUpdate");
var TokenCreate = /** @class */ (function (_super) {
    __extends(TokenCreate, _super);
    function TokenCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TokenCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TokenCreate.attributeTypeMap);
    };
    TokenCreate.discriminator = undefined;
    TokenCreate.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        }
    ];
    return TokenCreate;
}(AbstractTokenUpdate));
exports.TokenCreate = TokenCreate;
module.exports = TokenCreate;
