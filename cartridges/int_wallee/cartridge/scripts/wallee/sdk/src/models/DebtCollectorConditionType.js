"use strict";

exports.DebtCollectorConditionType = void 0;
var DebtCollectorConditionType = /** @class */ (function () {
    function DebtCollectorConditionType() {
    }
    DebtCollectorConditionType.getAttributeTypeMap = function () {
        return DebtCollectorConditionType.attributeTypeMap;
    };
    DebtCollectorConditionType.discriminator = undefined;
    DebtCollectorConditionType.attributeTypeMap = [
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
    return DebtCollectorConditionType;
}());
exports.DebtCollectorConditionType = DebtCollectorConditionType;
module.exports = DebtCollectorConditionType;
