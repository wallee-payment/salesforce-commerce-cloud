"use strict";

var TransactionLineItemUpdateRequest = /** @class */ (function () {
    function TransactionLineItemUpdateRequest() {
    }
    TransactionLineItemUpdateRequest.getAttributeTypeMap = function () {
        return TransactionLineItemUpdateRequest.attributeTypeMap;
    };
    TransactionLineItemUpdateRequest.discriminator = undefined;
    TransactionLineItemUpdateRequest.attributeTypeMap = [
        {
            "name": "newLineItems",
            "baseName": "newLineItems",
            "type": "Array<LineItemCreate>"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "number"
        }
    ];
    return TransactionLineItemUpdateRequest;
}());
exports.TransactionLineItemUpdateRequest = TransactionLineItemUpdateRequest;
module.exports = TransactionLineItemUpdateRequest;
