"use strict";

exports.DunningCondition = void 0;
var DunningCondition = /** @class */ (function () {
    function DunningCondition() {
    }
    DunningCondition.getAttributeTypeMap = function () {
        return DunningCondition.attributeTypeMap;
    };
    DunningCondition.discriminator = undefined;
    DunningCondition.attributeTypeMap = [
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
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DunningCondition;
}());
exports.DunningCondition = DunningCondition;
module.exports = DunningCondition;
