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

var AbstractSubscriptionProductActive = require("./AbstractSubscriptionProductActive");
var SubscriptionProductActive = /** @class */ (function (_super) {
    __extends(SubscriptionProductActive, _super);
    function SubscriptionProductActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionProductActive.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionProductActive.attributeTypeMap);
    };
    SubscriptionProductActive.discriminator = undefined;
    SubscriptionProductActive.attributeTypeMap = [
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
    return SubscriptionProductActive;
}(AbstractSubscriptionProductActive));
exports.SubscriptionProductActive = SubscriptionProductActive;
module.exports = SubscriptionProductActive;
