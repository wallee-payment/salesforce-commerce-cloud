"use strict";

exports.DunningFlow = void 0;
var DunningFlow = /** @class */ (function () {
    function DunningFlow() {
    }
    DunningFlow.getAttributeTypeMap = function () {
        return DunningFlow.attributeTypeMap;
    };
    DunningFlow.discriminator = undefined;
    DunningFlow.attributeTypeMap = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<number>"
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
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DunningFlowType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DunningFlow;
}());
exports.DunningFlow = DunningFlow;
module.exports = DunningFlow;
