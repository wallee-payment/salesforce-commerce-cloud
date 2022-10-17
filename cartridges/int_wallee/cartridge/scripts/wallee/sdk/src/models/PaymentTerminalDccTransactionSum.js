"use strict";

var PaymentTerminalDccTransactionSum = /** @class */ (function () {
    function PaymentTerminalDccTransactionSum() {
    }
    PaymentTerminalDccTransactionSum.getAttributeTypeMap = function () {
        return PaymentTerminalDccTransactionSum.attributeTypeMap;
    };
    PaymentTerminalDccTransactionSum.discriminator = undefined;
    PaymentTerminalDccTransactionSum.attributeTypeMap = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "dccAmount",
            "baseName": "dccAmount",
            "type": "number"
        },
        {
            "name": "dccCurrency",
            "baseName": "dccCurrency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
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
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentTerminalDccTransactionSum;
}());
exports.PaymentTerminalDccTransactionSum = PaymentTerminalDccTransactionSum;
module.exports = PaymentTerminalDccTransactionSum;
