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

exports.ShopifySubscriptionProductCreate = void 0;
var AbstractShopifySubscriptionProductUpdate = require("./AbstractShopifySubscriptionProductUpdate");
var ShopifySubscriptionProductCreate = /** @class */ (function (_super) {
    __extends(ShopifySubscriptionProductCreate, _super);
    function ShopifySubscriptionProductCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopifySubscriptionProductCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ShopifySubscriptionProductCreate.attributeTypeMap);
    };
    ShopifySubscriptionProductCreate.discriminator = undefined;
    ShopifySubscriptionProductCreate.attributeTypeMap = [
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "productVariantId",
            "baseName": "productVariantId",
            "type": "string"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "number"
        }
    ];
    return ShopifySubscriptionProductCreate;
}(AbstractShopifySubscriptionProductUpdate));
exports.ShopifySubscriptionProductCreate = ShopifySubscriptionProductCreate;
module.exports = ShopifySubscriptionProductCreate;
