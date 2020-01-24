"use strict";

var RefundCreate = /** @class */ (function () {
    function RefundCreate() {
    }
    RefundCreate.getAttributeTypeMap = function () {
        return RefundCreate.attributeTypeMap;
    };
    RefundCreate.discriminator = undefined;
    RefundCreate.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "reductions",
            "baseName": "reductions",
            "type": "Array<LineItemReductionCreate>"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RefundType"
        }
    ];
    return RefundCreate;
}());
exports.RefundCreate = RefundCreate;
module.exports = RefundCreate;
