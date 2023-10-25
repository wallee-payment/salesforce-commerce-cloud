"use strict";

exports.ShopifySubscriptionModelItem = void 0;
var ShopifySubscriptionModelItem = /** @class */ (function () {
    function ShopifySubscriptionModelItem() {
    }
    ShopifySubscriptionModelItem.getAttributeTypeMap = function () {
        return ShopifySubscriptionModelItem.attributeTypeMap;
    };
    ShopifySubscriptionModelItem.discriminator = undefined;
    ShopifySubscriptionModelItem.attributeTypeMap = [
        {
            "name": "priceIncludingTax",
            "baseName": "priceIncludingTax",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "recalculatePrice",
            "baseName": "recalculatePrice",
            "type": "boolean"
        },
        {
            "name": "taxLines",
            "baseName": "taxLines",
            "type": "Array<ShopifySubscriptionModelTaxLine>"
        }
    ];
    return ShopifySubscriptionModelItem;
}());
exports.ShopifySubscriptionModelItem = ShopifySubscriptionModelItem;
module.exports = ShopifySubscriptionModelItem;
