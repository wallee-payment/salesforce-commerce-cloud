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

var AbstractSpaceUpdate = require("./AbstractSpaceUpdate");
var SpaceUpdate = /** @class */ (function (_super) {
    __extends(SpaceUpdate, _super);
    function SpaceUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpaceUpdate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SpaceUpdate.attributeTypeMap);
    };
    SpaceUpdate.discriminator = undefined;
    SpaceUpdate.attributeTypeMap = [
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
    return SpaceUpdate;
}(AbstractSpaceUpdate));
exports.SpaceUpdate = SpaceUpdate;
module.exports = SpaceUpdate;
