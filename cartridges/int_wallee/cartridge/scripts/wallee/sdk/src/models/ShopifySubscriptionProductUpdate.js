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

var AbstractShopifySubscriptionProductUpdate = require("./AbstractShopifySubscriptionProductUpdate");
var ShopifySubscriptionProductUpdate = /** @class */ (function (_super) {
    __extends(ShopifySubscriptionProductUpdate, _super);
    function ShopifySubscriptionProductUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopifySubscriptionProductUpdate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ShopifySubscriptionProductUpdate.attributeTypeMap);
    };
    ShopifySubscriptionProductUpdate.discriminator = undefined;
    ShopifySubscriptionProductUpdate.attributeTypeMap = [
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
    return ShopifySubscriptionProductUpdate;
}(AbstractShopifySubscriptionProductUpdate));
exports.ShopifySubscriptionProductUpdate = ShopifySubscriptionProductUpdate;
module.exports = ShopifySubscriptionProductUpdate;
