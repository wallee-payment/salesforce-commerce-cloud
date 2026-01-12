"use strict";

exports.RefundRecoveryBankTransaction = void 0;
var RefundRecoveryBankTransaction = /** @class */ (function () {
    function RefundRecoveryBankTransaction() {
    }
    RefundRecoveryBankTransaction.getAttributeTypeMap = function () {
        return RefundRecoveryBankTransaction.attributeTypeMap;
    };
    RefundRecoveryBankTransaction.discriminator = undefined;
    RefundRecoveryBankTransaction.attributeTypeMap = [
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
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
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
    return RefundRecoveryBankTransaction;
}());
exports.RefundRecoveryBankTransaction = RefundRecoveryBankTransaction;
module.exports = RefundRecoveryBankTransaction;
