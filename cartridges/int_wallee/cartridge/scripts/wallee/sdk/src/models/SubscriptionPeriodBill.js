"use strict";

exports.SubscriptionPeriodBill = void 0;
var SubscriptionPeriodBill = /** @class */ (function () {
    function SubscriptionPeriodBill() {
    }
    SubscriptionPeriodBill.getAttributeTypeMap = function () {
        return SubscriptionPeriodBill.attributeTypeMap;
    };
    SubscriptionPeriodBill.discriminator = undefined;
    SubscriptionPeriodBill.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "effectivePeriodEndDate",
            "baseName": "effectivePeriodEndDate",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "periodStartDate",
            "baseName": "periodStartDate",
            "type": "Date"
        },
        {
            "name": "plannedPeriodEndDate",
            "baseName": "plannedPeriodEndDate",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionPeriodBillState"
        },
        {
            "name": "subscriptionVersion",
            "baseName": "subscriptionVersion",
            "type": "SubscriptionVersion"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionPeriodBill;
}());
exports.SubscriptionPeriodBill = SubscriptionPeriodBill;
module.exports = SubscriptionPeriodBill;
