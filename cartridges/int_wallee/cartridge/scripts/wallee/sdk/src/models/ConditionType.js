"use strict";

var ConditionType = /** @class */ (function () {
    function ConditionType() {
    }
    ConditionType.getAttributeTypeMap = function () {
        return ConditionType.attributeTypeMap;
    };
    ConditionType.discriminator = undefined;
    ConditionType.attributeTypeMap = [
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
    return ConditionType;
}());
exports.ConditionType = ConditionType;
module.exports = ConditionType;
