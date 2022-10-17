"use strict";

var SubscriptionLedgerEntry = /** @class */ (function () {
    function SubscriptionLedgerEntry() {
    }
    SubscriptionLedgerEntry.getAttributeTypeMap = function () {
        return SubscriptionLedgerEntry.attributeTypeMap;
    };
    SubscriptionLedgerEntry.discriminator = undefined;
    SubscriptionLedgerEntry.attributeTypeMap = [
        {
            "name": "aggregatedTaxRate",
            "baseName": "aggregatedTaxRate",
            "type": "number"
        },
        {
            "name": "amountExcludingTax",
            "baseName": "amountExcludingTax",
            "type": "number"
        },
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
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
            "name": "discountIncludingTax",
            "baseName": "discountIncludingTax",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
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
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionLedgerEntryState"
        },
        {
            "name": "subscriptionVersion",
            "baseName": "subscriptionVersion",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionLedgerEntry;
}());
exports.SubscriptionLedgerEntry = SubscriptionLedgerEntry;
module.exports = SubscriptionLedgerEntry;
