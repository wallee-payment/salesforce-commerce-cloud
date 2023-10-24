"use strict";

var PaymentTerminalTransactionSummary = /** @class */ (function () {
    function PaymentTerminalTransactionSummary() {
    }
    PaymentTerminalTransactionSummary.getAttributeTypeMap = function () {
        return PaymentTerminalTransactionSummary.attributeTypeMap;
    };
    PaymentTerminalTransactionSummary.discriminator = undefined;
    PaymentTerminalTransactionSummary.attributeTypeMap = [
        {
            "name": "dccTransactionSums",
            "baseName": "dccTransactionSums",
            "type": "Array<PaymentTerminalDccTransactionSum>"
        },
        {
            "name": "endedOn",
            "baseName": "endedOn",
            "type": "Date"
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
            "name": "numberOfTransactions",
            "baseName": "numberOfTransactions",
            "type": "number"
        },
        {
            "name": "paymentTerminal",
            "baseName": "paymentTerminal",
            "type": "number"
        },
        {
            "name": "receipt",
            "baseName": "receipt",
            "type": "string"
        },
        {
            "name": "startedOn",
            "baseName": "startedOn",
            "type": "Date"
        },
        {
            "name": "transactionSums",
            "baseName": "transactionSums",
            "type": "Array<PaymentTerminalTransactionSum>"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentTerminalTransactionSummary;
}());
exports.PaymentTerminalTransactionSummary = PaymentTerminalTransactionSummary;
module.exports = PaymentTerminalTransactionSummary;
