"use strict";

var ShopifySubscriptionModelTaxLine = /** @class */ (function () {
    function ShopifySubscriptionModelTaxLine() {
    }
    ShopifySubscriptionModelTaxLine.getAttributeTypeMap = function () {
        return ShopifySubscriptionModelTaxLine.attributeTypeMap;
    };
    ShopifySubscriptionModelTaxLine.discriminator = undefined;
    ShopifySubscriptionModelTaxLine.attributeTypeMap = [
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }
    ];
    return ShopifySubscriptionModelTaxLine;
}());
exports.ShopifySubscriptionModelTaxLine = ShopifySubscriptionModelTaxLine;
module.exports = ShopifySubscriptionModelTaxLine;
