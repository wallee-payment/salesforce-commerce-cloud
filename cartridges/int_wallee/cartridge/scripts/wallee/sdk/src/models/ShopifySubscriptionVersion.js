"use strict";

exports.ShopifySubscriptionVersion = void 0;
var ShopifySubscriptionVersion = /** @class */ (function () {
    function ShopifySubscriptionVersion() {
    }
    ShopifySubscriptionVersion.getAttributeTypeMap = function () {
        return ShopifySubscriptionVersion.attributeTypeMap;
    };
    ShopifySubscriptionVersion.discriminator = undefined;
    ShopifySubscriptionVersion.attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "ShopifySubscriptionAddress"
        },
        {
            "name": "billingDayOfMonth",
            "baseName": "billingDayOfMonth",
            "type": "number"
        },
        {
            "name": "billingIntervalAmount",
            "baseName": "billingIntervalAmount",
            "type": "number"
        },
        {
            "name": "billingIntervalUnit",
            "baseName": "billingIntervalUnit",
            "type": "ShopifySubscriptionBillingIntervalUnit"
        },
        {
            "name": "billingReferenceDate",
            "baseName": "billingReferenceDate",
            "type": "Date"
        },
        {
            "name": "billingWeekday",
            "baseName": "billingWeekday",
            "type": "ShopifySubscriptionWeekday"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "dischargedBy",
            "baseName": "dischargedBy",
            "type": "number"
        },
        {
            "name": "dischargedOn",
            "baseName": "dischargedOn",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ShopifySubscriptionVersionItem>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "maximalBillingCycles",
            "baseName": "maximalBillingCycles",
            "type": "number"
        },
        {
            "name": "maximalSuspendableCycles",
            "baseName": "maximalSuspendableCycles",
            "type": "number"
        },
        {
            "name": "minimalBillingCycles",
            "baseName": "minimalBillingCycles",
            "type": "number"
        },
        {
            "name": "paymentGateway",
            "baseName": "paymentGateway",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "ShopifySubscriptionAddress"
        },
        {
            "name": "shippingRate",
            "baseName": "shippingRate",
            "type": "string"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ShopifySubscriptionVersionState"
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
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "ShopifySubscription"
        },
        {
            "name": "terminationBillingCycles",
            "baseName": "terminationBillingCycles",
            "type": "number"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifySubscriptionVersion;
}());
exports.ShopifySubscriptionVersion = ShopifySubscriptionVersion;
module.exports = ShopifySubscriptionVersion;
