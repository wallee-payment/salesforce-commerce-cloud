"use strict";

exports.DebtCollectionCaseDocument = void 0;
var DebtCollectionCaseDocument = /** @class */ (function () {
    function DebtCollectionCaseDocument() {
    }
    DebtCollectionCaseDocument.getAttributeTypeMap = function () {
        return DebtCollectionCaseDocument.attributeTypeMap;
    };
    DebtCollectionCaseDocument.discriminator = undefined;
    DebtCollectionCaseDocument.attributeTypeMap = [
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
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
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
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "storageId",
            "baseName": "storageId",
            "type": "string"
        },
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DebtCollectionCaseDocument;
}());
exports.DebtCollectionCaseDocument = DebtCollectionCaseDocument;
module.exports = DebtCollectionCaseDocument;
