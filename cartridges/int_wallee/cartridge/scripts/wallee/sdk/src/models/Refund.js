"use strict";
exports.__esModule = true;
var Refund = /** @class */ (function () {
    function Refund() {
    }
    Refund.getAttributeTypeMap = function () {
        return Refund.attributeTypeMap;
    };
    Refund.discriminator = undefined;
    Refund.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "baseLineItems",
            "baseName": "baseLineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Environment"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<Label>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "nextUpdateOn",
            "baseName": "nextUpdateOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processingOn",
            "baseName": "processingOn",
            "type": "Date"
        },
        {
            "name": "processorReference",
            "baseName": "processorReference",
            "type": "string"
        },
        {
            "name": "reducedLineItems",
            "baseName": "reducedLineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "reductions",
            "baseName": "reductions",
            "type": "Array<LineItemReduction>"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "RefundState"
        },
        {
            "name": "succeededOn",
            "baseName": "succeededOn",
            "type": "Date"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RefundType"
        },
        {
            "name": "updatedInvoice",
            "baseName": "updatedInvoice",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Refund;
}());
exports.Refund = Refund;
module.exports = Refund;
