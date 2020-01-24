"use strict";

var ChargeFlowLevelConfiguration = /** @class */ (function () {
    function ChargeFlowLevelConfiguration() {
    }
    ChargeFlowLevelConfiguration.getAttributeTypeMap = function () {
        return ChargeFlowLevelConfiguration.attributeTypeMap;
    };
    ChargeFlowLevelConfiguration.discriminator = undefined;
    ChargeFlowLevelConfiguration.attributeTypeMap = [
        {
            "name": "flow",
            "baseName": "flow",
            "type": "ChargeFlow"
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
    return ChargeFlowLevelConfiguration;
}());
exports.ChargeFlowLevelConfiguration = ChargeFlowLevelConfiguration;
module.exports = ChargeFlowLevelConfiguration;
