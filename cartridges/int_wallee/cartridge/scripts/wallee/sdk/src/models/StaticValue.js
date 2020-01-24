"use strict";

var StaticValue = /** @class */ (function () {
    function StaticValue() {
    }
    StaticValue.getAttributeTypeMap = function () {
        return StaticValue.attributeTypeMap;
    };
    StaticValue.discriminator = undefined;
    StaticValue.attributeTypeMap = [
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
    return StaticValue;
}());
exports.StaticValue = StaticValue;
module.exports = StaticValue;
