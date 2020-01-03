"use strict";
exports.__esModule = true;
var SubscriptionLedgerEntryCreate = /** @class */ (function () {
    function SubscriptionLedgerEntryCreate() {
    }
    SubscriptionLedgerEntryCreate.getAttributeTypeMap = function () {
        return SubscriptionLedgerEntryCreate.attributeTypeMap;
    };
    SubscriptionLedgerEntryCreate.discriminator = undefined;
    SubscriptionLedgerEntryCreate.attributeTypeMap = [
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "subscriptionVersion",
            "baseName": "subscriptionVersion",
            "type": "number"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<TaxCreate>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }
    ];
    return SubscriptionLedgerEntryCreate;
}());
exports.SubscriptionLedgerEntryCreate = SubscriptionLedgerEntryCreate;
module.exports = SubscriptionLedgerEntryCreate;
