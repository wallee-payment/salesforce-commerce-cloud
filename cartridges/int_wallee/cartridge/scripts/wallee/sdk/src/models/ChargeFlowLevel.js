"use strict";

exports.ChargeFlowLevel = void 0;
var ChargeFlowLevel = /** @class */ (function () {
    function ChargeFlowLevel() {
    }
    ChargeFlowLevel.getAttributeTypeMap = function () {
        return ChargeFlowLevel.attributeTypeMap;
    };
    ChargeFlowLevel.discriminator = undefined;
    ChargeFlowLevel.attributeTypeMap = [
        {
            "name": "asynchronousCharge",
            "baseName": "asynchronousCharge",
            "type": "number"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "ChargeFlowLevelConfiguration"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
            "type": "ChargeFlowLevelState"
        },
        {
            "name": "synchronousCharge",
            "baseName": "synchronousCharge",
            "type": "number"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "tokenCharge",
            "baseName": "tokenCharge",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ChargeFlowLevel;
}());
exports.ChargeFlowLevel = ChargeFlowLevel;
module.exports = ChargeFlowLevel;
