"use strict";

exports.TransactionCompletionRequest = void 0;
var TransactionCompletionRequest = /** @class */ (function () {
    function TransactionCompletionRequest() {
    }
    TransactionCompletionRequest.getAttributeTypeMap = function () {
        return TransactionCompletionRequest.attributeTypeMap;
    };
    TransactionCompletionRequest.discriminator = undefined;
    TransactionCompletionRequest.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "invoiceMerchantReference",
            "baseName": "invoiceMerchantReference",
            "type": "string"
        },
        {
            "name": "lastCompletion",
            "baseName": "lastCompletion",
            "type": "boolean"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<CompletionLineItemCreate>"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statementDescriptor",
            "type": "string"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "number"
        }
    ];
    return TransactionCompletionRequest;
}());
exports.TransactionCompletionRequest = TransactionCompletionRequest;
module.exports = TransactionCompletionRequest;
