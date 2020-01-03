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
var AccountUpdate = /** @class */ (function (_super) {
    __extends(AccountUpdate, _super);
    function AccountUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountUpdate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(AccountUpdate.attributeTypeMap);
    };
    AccountUpdate.discriminator = undefined;
    AccountUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return AccountUpdate;
}(AbstractAccountUpdate));
exports.AccountUpdate = AccountUpdate;
module.exports = AccountUpdate;
