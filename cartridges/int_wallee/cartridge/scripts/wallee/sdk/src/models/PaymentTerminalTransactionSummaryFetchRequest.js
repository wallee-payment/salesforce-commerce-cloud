"use strict";

var PaymentTerminalTransactionSummaryFetchRequest = /** @class */ (function () {
    function PaymentTerminalTransactionSummaryFetchRequest() {
    }
    PaymentTerminalTransactionSummaryFetchRequest.getAttributeTypeMap = function () {
        return PaymentTerminalTransactionSummaryFetchRequest.attributeTypeMap;
    };
    PaymentTerminalTransactionSummaryFetchRequest.discriminator = undefined;
    PaymentTerminalTransactionSummaryFetchRequest.attributeTypeMap = [
        {
            "name": "format",
            "baseName": "format",
            "type": "TerminalReceiptFormat"
        },
        {
            "name": "summaryId",
            "baseName": "summaryId",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }
    ];
    return PaymentTerminalTransactionSummaryFetchRequest;
}());
exports.PaymentTerminalTransactionSummaryFetchRequest = PaymentTerminalTransactionSummaryFetchRequest;
module.exports = PaymentTerminalTransactionSummaryFetchRequest;
