"use strict";

exports.ShopifySubscriptionUpdateRequest = void 0;
var ShopifySubscriptionUpdateRequest = /** @class */ (function () {
    function ShopifySubscriptionUpdateRequest() {
    }
    ShopifySubscriptionUpdateRequest.getAttributeTypeMap = function () {
        return ShopifySubscriptionUpdateRequest.attributeTypeMap;
    };
    ShopifySubscriptionUpdateRequest.discriminator = undefined;
    ShopifySubscriptionUpdateRequest.attributeTypeMap = [
        {
            "name": "billingConfiguration",
            "baseName": "billingConfiguration",
            "type": "BillingConfiguration"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>"
        },
        {
            "name": "storeOrderConfirmationEmailEnabled",
            "baseName": "storeOrderConfirmationEmailEnabled",
            "type": "boolean"
        },
        {
            "name": "subscriberSuspensionAllowed",
            "baseName": "subscriberSuspensionAllowed",
            "type": "boolean"
        }
    ];
    return ShopifySubscriptionUpdateRequest;
}());
exports.ShopifySubscriptionUpdateRequest = ShopifySubscriptionUpdateRequest;
module.exports = ShopifySubscriptionUpdateRequest;
