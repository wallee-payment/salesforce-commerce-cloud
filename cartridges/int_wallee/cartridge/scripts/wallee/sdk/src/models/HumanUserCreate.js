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
var AbstractHumanUserUpdate = require("./AbstractHumanUserUpdate");
var HumanUserCreate = /** @class */ (function (_super) {
    __extends(HumanUserCreate, _super);
    function HumanUserCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HumanUserCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(HumanUserCreate.attributeTypeMap);
    };
    HumanUserCreate.discriminator = undefined;
    HumanUserCreate.attributeTypeMap = [
        {
            "name": "primaryAccount",
            "baseName": "primaryAccount",
            "type": "number"
        }
    ];
    return HumanUserCreate;
}(AbstractHumanUserUpdate));
exports.HumanUserCreate = HumanUserCreate;
module.exports = HumanUserCreate;
