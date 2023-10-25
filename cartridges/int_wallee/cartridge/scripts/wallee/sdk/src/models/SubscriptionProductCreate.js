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

exports.SubscriptionProductCreate = void 0;
var AbstractSubscriptionProductActive = require("./AbstractSubscriptionProductActive");
var SubscriptionProductCreate = /** @class */ (function (_super) {
    __extends(SubscriptionProductCreate, _super);
    function SubscriptionProductCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionProductCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionProductCreate.attributeTypeMap);
    };
    SubscriptionProductCreate.discriminator = undefined;
    SubscriptionProductCreate.attributeTypeMap = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }
    ];
    return SubscriptionProductCreate;
}(AbstractSubscriptionProductActive));
exports.SubscriptionProductCreate = SubscriptionProductCreate;
module.exports = SubscriptionProductCreate;
