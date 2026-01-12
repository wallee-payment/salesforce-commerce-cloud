"use strict";

exports.BillingCycleModel = void 0;
var BillingCycleModel = /** @class */ (function () {
    function BillingCycleModel() {
    }
    BillingCycleModel.getAttributeTypeMap = function () {
        return BillingCycleModel.attributeTypeMap;
    };
    BillingCycleModel.discriminator = undefined;
    BillingCycleModel.attributeTypeMap = [
        {
            "name": "billingCycleType",
            "baseName": "billingCycleType",
            "type": "BillingCycleType"
        },
        {
            "name": "customization",
            "baseName": "customization",
            "type": "BillingDayCustomization"
        },
        {
            "name": "dayOfMonth",
            "baseName": "dayOfMonth",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "DisplayableMonth"
        },
        {
            "name": "numberOfPeriods",
            "baseName": "numberOfPeriods",
            "type": "number"
        },
        {
            "name": "weeklyDay",
            "baseName": "weeklyDay",
            "type": "DisplayableDayOfWeek"
        }
    ];
    return BillingCycleModel;
}());
exports.BillingCycleModel = BillingCycleModel;
module.exports = BillingCycleModel;
