"use strict";
exports.__esModule = true;
var ManualTaskType = /** @class */ (function () {
    function ManualTaskType() {
    }
    ManualTaskType.getAttributeTypeMap = function () {
        return ManualTaskType.attributeTypeMap;
    };
    ManualTaskType.discriminator = undefined;
    ManualTaskType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<number>"
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
    return ManualTaskType;
}());
exports.ManualTaskType = ManualTaskType;
module.exports = ManualTaskType;
