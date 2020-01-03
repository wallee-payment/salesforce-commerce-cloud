"use strict";
exports.__esModule = true;
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return ChargeFlowLevelConfigurationType;
}());
exports.ChargeFlowLevelConfigurationType = ChargeFlowLevelConfigurationType;
module.exports = ChargeFlowLevelConfigurationType;
