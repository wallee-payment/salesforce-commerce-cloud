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

exports.ShopifySubscriptionAddress = void 0;
var Address = require("./Address");
var ShopifySubscriptionAddress = /** @class */ (function (_super) {
    __extends(ShopifySubscriptionAddress, _super);
    function ShopifySubscriptionAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopifySubscriptionAddress.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ShopifySubscriptionAddress.attributeTypeMap);
    };
    ShopifySubscriptionAddress.discriminator = undefined;
    ShopifySubscriptionAddress.attributeTypeMap = [];
    return ShopifySubscriptionAddress;
}(Address));
exports.ShopifySubscriptionAddress = ShopifySubscriptionAddress;
module.exports = ShopifySubscriptionAddress;
