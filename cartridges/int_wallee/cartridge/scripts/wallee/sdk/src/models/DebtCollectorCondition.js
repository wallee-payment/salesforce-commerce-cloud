"use strict";

exports.DebtCollectorCondition = void 0;
var DebtCollectorCondition = /** @class */ (function () {
    function DebtCollectorCondition() {
    }
    DebtCollectorCondition.getAttributeTypeMap = function () {
        return DebtCollectorCondition.attributeTypeMap;
    };
    DebtCollectorCondition.discriminator = undefined;
    DebtCollectorCondition.attributeTypeMap = [
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
    return DebtCollectorCondition;
}());
exports.DebtCollectorCondition = DebtCollectorCondition;
module.exports = DebtCollectorCondition;
