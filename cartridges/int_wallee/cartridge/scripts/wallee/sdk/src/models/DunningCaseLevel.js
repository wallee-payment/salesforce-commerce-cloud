"use strict";

exports.DunningCaseLevel = void 0;
var DunningCaseLevel = /** @class */ (function () {
    function DunningCaseLevel() {
    }
    DunningCaseLevel.getAttributeTypeMap = function () {
        return DunningCaseLevel.attributeTypeMap;
    };
    DunningCaseLevel.discriminator = undefined;
    DunningCaseLevel.attributeTypeMap = [
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
            "name": "dunningCase",
            "baseName": "dunningCase",
            "type": "DunningCase"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Environment"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "flowLevel",
            "baseName": "flowLevel",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "number"
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
            "name": "mostRecentLevel",
            "baseName": "mostRecentLevel",
            "type": "boolean"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DunningCaseLevelState"
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
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DunningCaseLevel;
}());
exports.DunningCaseLevel = DunningCaseLevel;
module.exports = DunningCaseLevel;
