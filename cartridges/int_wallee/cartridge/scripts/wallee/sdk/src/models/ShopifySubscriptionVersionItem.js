"use strict";

var ShopifySubscriptionVersionItem = /** @class */ (function () {
    function ShopifySubscriptionVersionItem() {
    }
    ShopifySubscriptionVersionItem.getAttributeTypeMap = function () {
        return ShopifySubscriptionVersionItem.attributeTypeMap;
    };
    ShopifySubscriptionVersionItem.discriminator = undefined;
    ShopifySubscriptionVersionItem.attributeTypeMap = [
        {
            "name": "priceIncludingTax",
            "baseName": "priceIncludingTax",
            "type": "number"
        },
        {
            "name": "priceStrategy",
            "baseName": "priceStrategy",
            "type": "ShopifySubscriptionVersionItemPriceStrategy"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "taxLines",
            "baseName": "taxLines",
            "type": "Array<ShopifyTaxLine>"
        }
    ];
    return ShopifySubscriptionVersionItem;
}());
exports.ShopifySubscriptionVersionItem = ShopifySubscriptionVersionItem;
module.exports = ShopifySubscriptionVersionItem;
