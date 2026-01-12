"use strict";

exports.BillingConfiguration = void 0;
var BillingConfiguration = /** @class */ (function () {
    function BillingConfiguration() {
    }
    BillingConfiguration.getAttributeTypeMap = function () {
        return BillingConfiguration.attributeTypeMap;
    };
    BillingConfiguration.discriminator = undefined;
    BillingConfiguration.attributeTypeMap = [
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
    return BillingConfiguration;
}());
exports.BillingConfiguration = BillingConfiguration;
module.exports = BillingConfiguration;
