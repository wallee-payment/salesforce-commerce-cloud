"use strict";

var SubscriptionProductVersion = /** @class */ (function () {
    function SubscriptionProductVersion() {
    }
    SubscriptionProductVersion.getAttributeTypeMap = function () {
        return SubscriptionProductVersion.attributeTypeMap;
    };
    SubscriptionProductVersion.discriminator = undefined;
    SubscriptionProductVersion.attributeTypeMap = [
        {
            "name": "activatedOn",
            "baseName": "activatedOn",
            "type": "Date"
        },
        {
            "name": "billingCycle",
            "baseName": "billingCycle",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "defaultCurrency",
            "baseName": "defaultCurrency",
            "type": "string"
        },
        {
            "name": "enabledCurrencies",
            "baseName": "enabledCurrencies",
            "type": "Array<string>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "incrementNumber",
            "baseName": "incrementNumber",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "minimalNumberOfPeriods",
            "baseName": "minimalNumberOfPeriods",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "numberOfNoticePeriods",
            "baseName": "numberOfNoticePeriods",
            "type": "number"
        },
        {
            "name": "obsoletedOn",
            "baseName": "obsoletedOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "SubscriptionProduct"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "retiringFinishedOn",
            "baseName": "retiringFinishedOn",
            "type": "Date"
        },
        {
            "name": "retiringStartedOn",
            "baseName": "retiringStartedOn",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionProductVersionState"
        },
        {
            "name": "taxCalculation",
            "baseName": "taxCalculation",
            "type": "TaxCalculation"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProductVersion;
}());
exports.SubscriptionProductVersion = SubscriptionProductVersion;
module.exports = SubscriptionProductVersion;
