"use strict";
exports.__esModule = true;
var ChargeFlow = /** @class */ (function () {
    function ChargeFlow() {
    }
    ChargeFlow.getAttributeTypeMap = function () {
        return ChargeFlow.attributeTypeMap;
    };
    ChargeFlow.discriminator = undefined;
    ChargeFlow.attributeTypeMap = [
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
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ChargeFlow;
}());
exports.ChargeFlow = ChargeFlow;
module.exports = ChargeFlow;
