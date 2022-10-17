"use strict";

var ChargeFlowLevelConfigurationType = /** @class */ (function () {
    function ChargeFlowLevelConfigurationType() {
    }
    ChargeFlowLevelConfigurationType.getAttributeTypeMap = function () {
        return ChargeFlowLevelConfigurationType.attributeTypeMap;
    };
    ChargeFlowLevelConfigurationType.discriminator = undefined;
    ChargeFlowLevelConfigurationType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return ChargeFlowLevelConfigurationType;
}());
exports.ChargeFlowLevelConfigurationType = ChargeFlowLevelConfigurationType;
module.exports = ChargeFlowLevelConfigurationType;
