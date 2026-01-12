"use strict";

exports.DunningConditionType = void 0;
var DunningConditionType = /** @class */ (function () {
    function DunningConditionType() {
    }
    DunningConditionType.getAttributeTypeMap = function () {
        return DunningConditionType.attributeTypeMap;
    };
    DunningConditionType.discriminator = undefined;
    DunningConditionType.attributeTypeMap = [
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
    return DunningConditionType;
}());
exports.DunningConditionType = DunningConditionType;
module.exports = DunningConditionType;
