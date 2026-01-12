"use strict";

exports.DunningFlowLevel = void 0;
var DunningFlowLevel = /** @class */ (function () {
    function DunningFlowLevel() {
    }
    DunningFlowLevel.getAttributeTypeMap = function () {
        return DunningFlowLevel.attributeTypeMap;
    };
    DunningFlowLevel.discriminator = undefined;
    DunningFlowLevel.attributeTypeMap = [
        {
            "name": "documentText",
            "baseName": "documentText",
            "type": "{ [key: string]: string; }"
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
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "number"
        },
        {
            "name": "reminderTemplate",
            "baseName": "reminderTemplate",
            "type": "DocumentTemplate"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DunningFlowLevel;
}());
exports.DunningFlowLevel = DunningFlowLevel;
module.exports = DunningFlowLevel;
