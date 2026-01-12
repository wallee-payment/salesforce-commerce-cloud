"use strict";

exports.DunningCase = void 0;
var DunningCase = /** @class */ (function () {
    function DunningCase() {
    }
    DunningCase.getAttributeTypeMap = function () {
        return DunningCase.attributeTypeMap;
    };
    DunningCase.discriminator = undefined;
    DunningCase.attributeTypeMap = [
        {
            "name": "canceledOn",
            "baseName": "canceledOn",
            "type": "Date"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "derecognizedOn",
            "baseName": "derecognizedOn",
            "type": "Date"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "DunningFlow"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "initialInvoice",
            "baseName": "initialInvoice",
            "type": "TransactionInvoice"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DunningCaseState"
        },
        {
            "name": "succeededOn",
            "baseName": "succeededOn",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DunningCase;
}());
exports.DunningCase = DunningCase;
module.exports = DunningCase;
