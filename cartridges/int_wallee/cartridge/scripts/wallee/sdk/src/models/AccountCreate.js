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
var AbstractAccountUpdate = require("./AbstractAccountUpdate");
var AccountCreate = /** @class */ (function (_super) {
    __extends(AccountCreate, _super);
    function AccountCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(AccountCreate.attributeTypeMap);
    };
    AccountCreate.discriminator = undefined;
    AccountCreate.attributeTypeMap = [
        {
            "name": "parentAccount",
            "baseName": "parentAccount",
            "type": "number"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "number"
        }
    ];
    return AccountCreate;
}(AbstractAccountUpdate));
exports.AccountCreate = AccountCreate;
module.exports = AccountCreate;
