"use strict";

var SubscriptionVersion = /** @class */ (function () {
    function SubscriptionVersion() {
    }
    SubscriptionVersion.getAttributeTypeMap = function () {
        return SubscriptionVersion.attributeTypeMap;
    };
    SubscriptionVersion.discriminator = undefined;
    SubscriptionVersion.attributeTypeMap = [
        {
            "name": "activatedOn",
            "baseName": "activatedOn",
            "type": "Date"
        },
        {
            "name": "billingCurrency",
            "baseName": "billingCurrency",
            "type": "string"
        },
        {
            "name": "componentConfigurations",
            "baseName": "componentConfigurations",
            "type": "Array<SubscriptionComponentConfiguration>"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "expectedLastPeriodEnd",
            "baseName": "expectedLastPeriodEnd",
            "type": "Date"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "plannedTerminationDate",
            "baseName": "plannedTerminationDate",
            "type": "Date"
        },
        {
            "name": "productVersion",
            "baseName": "productVersion",
            "type": "SubscriptionProductVersion"
        },
        {
            "name": "selectedComponents",
            "baseName": "selectedComponents",
            "type": "Array<SubscriptionProductComponent>"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionVersionState"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "Subscription"
        },
        {
            "name": "terminatedOn",
            "baseName": "terminatedOn",
            "type": "Date"
        },
        {
            "name": "terminatingOn",
            "baseName": "terminatingOn",
            "type": "Date"
        },
        {
            "name": "terminationIssuedOn",
            "baseName": "terminationIssuedOn",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionVersion;
}());
exports.SubscriptionVersion = SubscriptionVersion;
module.exports = SubscriptionVersion;
