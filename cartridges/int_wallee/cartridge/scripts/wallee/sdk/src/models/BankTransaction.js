"use strict";

var BankTransaction = /** @class */ (function () {
    function BankTransaction() {
    }
    BankTransaction.getAttributeTypeMap = function () {
        return BankTransaction.attributeTypeMap;
    };
    BankTransaction.discriminator = undefined;
    BankTransaction.attributeTypeMap = [
        {
            "name": "adjustments",
            "baseName": "adjustments",
            "type": "Array<PaymentAdjustment>"
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
            "name": "currencyBankAccount",
            "baseName": "currencyBankAccount",
            "type": "CurrencyBankAccount"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "flowDirection",
            "baseName": "flowDirection",
            "type": "BankTransactionFlowDirection"
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
            "name": "postingAmount",
            "baseName": "postingAmount",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "BankTransactionState"
        },
        {
            "name": "totalAdjustmentAmountIncludingTax",
            "baseName": "totalAdjustmentAmountIncludingTax",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "valueAmount",
            "baseName": "valueAmount",
            "type": "number"
        },
        {
            "name": "valueDate",
            "baseName": "valueDate",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return BankTransaction;
}());
exports.BankTransaction = BankTransaction;
module.exports = BankTransaction;
