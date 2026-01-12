"use strict";

exports.ShopifySubscriptionUpdateAddressesRequest = void 0;
var ShopifySubscriptionUpdateAddressesRequest = /** @class */ (function () {
    function ShopifySubscriptionUpdateAddressesRequest() {
    }
    ShopifySubscriptionUpdateAddressesRequest.getAttributeTypeMap = function () {
        return ShopifySubscriptionUpdateAddressesRequest.attributeTypeMap;
    };
    ShopifySubscriptionUpdateAddressesRequest.discriminator = undefined;
    ShopifySubscriptionUpdateAddressesRequest.attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "ShopifySubscriptionAddressCreate"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "ShopifySubscriptionAddressCreate"
        }
    ];
    return ShopifySubscriptionUpdateAddressesRequest;
}());
exports.ShopifySubscriptionUpdateAddressesRequest = ShopifySubscriptionUpdateAddressesRequest;
module.exports = ShopifySubscriptionUpdateAddressesRequest;
