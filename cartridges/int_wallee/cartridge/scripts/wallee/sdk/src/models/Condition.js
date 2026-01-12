"use strict";

exports.Condition = void 0;
var Condition = /** @class */ (function () {
    function Condition() {
    }
    Condition.getAttributeTypeMap = function () {
        return Condition.attributeTypeMap;
    };
    Condition.discriminator = undefined;
    Condition.attributeTypeMap = [
        {
            "name": "conditionType",
            "baseName": "conditionType",
            "type": "number"
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
    return Condition;
}());
exports.Condition = Condition;
module.exports = Condition;
