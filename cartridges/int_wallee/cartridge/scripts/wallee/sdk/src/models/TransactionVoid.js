"use strict";

exports.TransactionVoid = void 0;
var TransactionVoid = /** @class */ (function () {
    function TransactionVoid() {
    }
    TransactionVoid.getAttributeTypeMap = function () {
        return TransactionVoid.attributeTypeMap;
    };
    TransactionVoid.discriminator = undefined;
    TransactionVoid.attributeTypeMap = [
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
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "TransactionVoidMode"
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
            "name": "processorReference",
            "baseName": "processorReference",
            "type": "string"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "TransactionVoidState"
        },
        {
            "name": "succeededOn",
            "baseName": "succeededOn",
            "type": "Date"
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
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionVoid;
}());
exports.TransactionVoid = TransactionVoid;
module.exports = TransactionVoid;
