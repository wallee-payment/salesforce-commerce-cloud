"use strict";

exports.ChargeBankTransaction = void 0;
var ChargeBankTransaction = /** @class */ (function () {
    function ChargeBankTransaction() {
    }
    ChargeBankTransaction.getAttributeTypeMap = function () {
        return ChargeBankTransaction.attributeTypeMap;
    };
    ChargeBankTransaction.discriminator = undefined;
    ChargeBankTransaction.attributeTypeMap = [
        {
            "name": "bankTransaction",
            "baseName": "bankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
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
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "transactionCurrencyAmount",
            "baseName": "transactionCurrencyAmount",
            "type": "number"
        },
        {
            "name": "transactionCurrencyValueAmount",
            "baseName": "transactionCurrencyValueAmount",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ChargeBankTransaction;
}());
exports.ChargeBankTransaction = ChargeBankTransaction;
module.exports = ChargeBankTransaction;
