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

exports.SpaceCreate = void 0;
var AbstractSpaceUpdate = require("./AbstractSpaceUpdate");
var SpaceCreate = /** @class */ (function (_super) {
    __extends(SpaceCreate, _super);
    function SpaceCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SpaceCreate.attributeTypeMap);
    };
    SpaceCreate.discriminator = undefined;
    SpaceCreate.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "number"
        }
    ];
    return SpaceCreate;
}(AbstractSpaceUpdate));
exports.SpaceCreate = SpaceCreate;
module.exports = SpaceCreate;
