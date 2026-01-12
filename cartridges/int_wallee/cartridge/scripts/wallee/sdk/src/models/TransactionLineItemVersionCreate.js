"use strict";

exports.TransactionLineItemVersionCreate = void 0;
var TransactionLineItemVersionCreate = /** @class */ (function () {
    function TransactionLineItemVersionCreate() {
    }
    TransactionLineItemVersionCreate.getAttributeTypeMap = function () {
        return TransactionLineItemVersionCreate.attributeTypeMap;
    };
    TransactionLineItemVersionCreate.discriminator = undefined;
    TransactionLineItemVersionCreate.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItemCreate>"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        }
    ];
    return TransactionLineItemVersionCreate;
}());
exports.TransactionLineItemVersionCreate = TransactionLineItemVersionCreate;
module.exports = TransactionLineItemVersionCreate;
