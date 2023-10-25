"use strict";

exports.ShopifySubscriptionCreationRequest = void 0;
var ShopifySubscriptionCreationRequest = /** @class */ (function () {
    function ShopifySubscriptionCreationRequest() {
    }
    ShopifySubscriptionCreationRequest.getAttributeTypeMap = function () {
        return ShopifySubscriptionCreationRequest.attributeTypeMap;
    };
    ShopifySubscriptionCreationRequest.discriminator = undefined;
    ShopifySubscriptionCreationRequest.attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "ShopifySubscriptionAddressCreate"
        },
        {
            "name": "billingConfiguration",
            "baseName": "billingConfiguration",
            "type": "ShopifySubscriptionModelBillingConfiguration"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "initialExecutionDate",
            "baseName": "initialExecutionDate",
            "type": "Date"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ShopifySubscriptionModelItem>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "ShopifySubscriptionAddressCreate"
        },
        {
            "name": "shippingMethodName",
            "baseName": "shippingMethodName",
            "type": "string"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "storeOrderConfirmationEmailEnabled",
            "baseName": "storeOrderConfirmationEmailEnabled",
            "type": "boolean"
        },
        {
            "name": "subscriber",
            "baseName": "subscriber",
            "type": "ShopifySubscriberCreation"
        },
        {
            "name": "subscriberSuspensionAllowed",
            "baseName": "subscriberSuspensionAllowed",
            "type": "boolean"
        }
    ];
    return ShopifySubscriptionCreationRequest;
}());
exports.ShopifySubscriptionCreationRequest = ShopifySubscriptionCreationRequest;
module.exports = ShopifySubscriptionCreationRequest;
