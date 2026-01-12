"use strict";

exports.PaymentTerminalTransactionSummaryReference = void 0;
var PaymentTerminalTransactionSummaryReference = /** @class */ (function () {
    function PaymentTerminalTransactionSummaryReference() {
    }
    PaymentTerminalTransactionSummaryReference.getAttributeTypeMap = function () {
        return PaymentTerminalTransactionSummaryReference.attributeTypeMap;
    };
    PaymentTerminalTransactionSummaryReference.discriminator = undefined;
    PaymentTerminalTransactionSummaryReference.attributeTypeMap = [
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
            "name": "terminalId",
            "baseName": "terminalId",
            "type": "number"
        },
        {
            "name": "terminalIdentifier",
            "baseName": "terminalIdentifier",
            "type": "string"
        }
    ];
    return PaymentTerminalTransactionSummaryReference;
}());
exports.PaymentTerminalTransactionSummaryReference = PaymentTerminalTransactionSummaryReference;
module.exports = PaymentTerminalTransactionSummaryReference;
