"use strict";

exports.PaymentTerminalTransactionSum = void 0;
var PaymentTerminalTransactionSum = /** @class */ (function () {
    function PaymentTerminalTransactionSum() {
    }
    PaymentTerminalTransactionSum.getAttributeTypeMap = function () {
        return PaymentTerminalTransactionSum.attributeTypeMap;
    };
    PaymentTerminalTransactionSum.discriminator = undefined;
    PaymentTerminalTransactionSum.attributeTypeMap = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "dccTipAmount",
            "baseName": "dccTipAmount",
            "type": "number"
        },
        {
            "name": "dccTransactionAmount",
            "baseName": "dccTransactionAmount",
            "type": "number"
        },
        {
            "name": "dccTransactionCount",
            "baseName": "dccTransactionCount",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string"
        },
        {
            "name": "transactionAmount",
            "baseName": "transactionAmount",
            "type": "number"
        },
        {
            "name": "transactionCount",
            "baseName": "transactionCount",
            "type": "number"
        },
        {
            "name": "transactionCurrency",
            "baseName": "transactionCurrency",
            "type": "string"
        },
        {
            "name": "transactionTipAmount",
            "baseName": "transactionTipAmount",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentTerminalTransactionSum;
}());
exports.PaymentTerminalTransactionSum = PaymentTerminalTransactionSum;
module.exports = PaymentTerminalTransactionSum;
