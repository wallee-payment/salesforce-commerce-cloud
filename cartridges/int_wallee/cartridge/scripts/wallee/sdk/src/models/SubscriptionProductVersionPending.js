"use strict";

exports.SubscriptionProductVersionPending = void 0;
var SubscriptionProductVersionPending = /** @class */ (function () {
    function SubscriptionProductVersionPending() {
    }
    SubscriptionProductVersionPending.getAttributeTypeMap = function () {
        return SubscriptionProductVersionPending.attributeTypeMap;
    };
    SubscriptionProductVersionPending.discriminator = undefined;
    SubscriptionProductVersionPending.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
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
            "name": "product",
            "baseName": "product",
            "type": "number"
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
        }
    ];
    return SubscriptionProductVersionPending;
}());
exports.SubscriptionProductVersionPending = SubscriptionProductVersionPending;
module.exports = SubscriptionProductVersionPending;
