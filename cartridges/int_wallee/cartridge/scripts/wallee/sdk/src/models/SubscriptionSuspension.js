"use strict";

var SubscriptionSuspension = /** @class */ (function () {
    function SubscriptionSuspension() {
    }
    SubscriptionSuspension.getAttributeTypeMap = function () {
        return SubscriptionSuspension.attributeTypeMap;
    };
    SubscriptionSuspension.discriminator = undefined;
    SubscriptionSuspension.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "effectiveEndDate",
            "baseName": "effectiveEndDate",
            "type": "Date"
        },
        {
            "name": "endAction",
            "baseName": "endAction",
            "type": "SubscriptionSuspensionAction"
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
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "periodBill",
            "baseName": "periodBill",
            "type": "number"
        },
        {
            "name": "plannedEndDate",
            "baseName": "plannedEndDate",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "SubscriptionSuspensionReason"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionSuspensionState"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionSuspension;
}());
exports.SubscriptionSuspension = SubscriptionSuspension;
module.exports = SubscriptionSuspension;
