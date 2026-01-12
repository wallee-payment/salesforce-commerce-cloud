"use strict";

exports.DebtCollectionReceipt = void 0;
var DebtCollectionReceipt = /** @class */ (function () {
    function DebtCollectionReceipt() {
    }
    DebtCollectionReceipt.getAttributeTypeMap = function () {
        return DebtCollectionReceipt.attributeTypeMap;
    };
    DebtCollectionReceipt.discriminator = undefined;
    DebtCollectionReceipt.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
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
            "name": "debtCollectionCase",
            "baseName": "debtCollectionCase",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DebtCollectionReceipt;
}());
exports.DebtCollectionReceipt = DebtCollectionReceipt;
module.exports = DebtCollectionReceipt;
