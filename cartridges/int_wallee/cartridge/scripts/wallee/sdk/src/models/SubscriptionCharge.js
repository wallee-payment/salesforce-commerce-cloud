"use strict";

exports.SubscriptionCharge = void 0;
var SubscriptionCharge = /** @class */ (function () {
    function SubscriptionCharge() {
    }
    SubscriptionCharge.getAttributeTypeMap = function () {
        return SubscriptionCharge.attributeTypeMap;
    };
    SubscriptionCharge.discriminator = undefined;
    SubscriptionCharge.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "discardedBy",
            "baseName": "discardedBy",
            "type": "number"
        },
        {
            "name": "discardedOn",
            "baseName": "discardedOn",
            "type": "Date"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "failedUrl",
            "baseName": "failedUrl",
            "type": "string"
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
            "name": "ledgerEntries",
            "baseName": "ledgerEntries",
            "type": "Array<SubscriptionLedgerEntry>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "plannedExecutionDate",
            "baseName": "plannedExecutionDate",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "SubscriptionChargeProcessingType"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionChargeState"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "Subscription"
        },
        {
            "name": "succeedOn",
            "baseName": "succeedOn",
            "type": "Date"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionChargeType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionCharge;
}());
exports.SubscriptionCharge = SubscriptionCharge;
module.exports = SubscriptionCharge;
