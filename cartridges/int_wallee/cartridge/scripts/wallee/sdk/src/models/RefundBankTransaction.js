"use strict";

exports.RefundBankTransaction = void 0;
var RefundBankTransaction = /** @class */ (function () {
    function RefundBankTransaction() {
    }
    RefundBankTransaction.getAttributeTypeMap = function () {
        return RefundBankTransaction.attributeTypeMap;
    };
    RefundBankTransaction.discriminator = undefined;
    RefundBankTransaction.attributeTypeMap = [
        {
            "name": "bankTransaction",
            "baseName": "bankTransaction",
            "type": "BankTransaction"
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
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        },
        {
            "name": "refund",
            "baseName": "refund",
            "type": "Refund"
        },
        {
            "name": "refundCurrencyAmount",
            "baseName": "refundCurrencyAmount",
            "type": "number"
        },
        {
            "name": "refundCurrencyValueAmount",
            "baseName": "refundCurrencyValueAmount",
            "type": "number"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return RefundBankTransaction;
}());
exports.RefundBankTransaction = RefundBankTransaction;
module.exports = RefundBankTransaction;
