"use strict";

var ShopifySubscriptionModelBillingConfiguration = /** @class */ (function () {
    function ShopifySubscriptionModelBillingConfiguration() {
    }
    ShopifySubscriptionModelBillingConfiguration.getAttributeTypeMap = function () {
        return ShopifySubscriptionModelBillingConfiguration.attributeTypeMap;
    };
    ShopifySubscriptionModelBillingConfiguration.discriminator = undefined;
    ShopifySubscriptionModelBillingConfiguration.attributeTypeMap = [
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
            "name": "terminationBillingCycles",
            "baseName": "terminationBillingCycles",
            "type": "number"
        }
    ];
    return ShopifySubscriptionModelBillingConfiguration;
}());
exports.ShopifySubscriptionModelBillingConfiguration = ShopifySubscriptionModelBillingConfiguration;
module.exports = ShopifySubscriptionModelBillingConfiguration;
