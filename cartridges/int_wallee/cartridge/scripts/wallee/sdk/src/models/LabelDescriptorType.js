"use strict";
exports.__esModule = true;
var LabelDescriptorType = /** @class */ (function () {
    function LabelDescriptorType() {
    }
    LabelDescriptorType.getAttributeTypeMap = function () {
        return LabelDescriptorType.attributeTypeMap;
    };
    LabelDescriptorType.discriminator = undefined;
    LabelDescriptorType.attributeTypeMap = [
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
    return LabelDescriptorType;
}());
exports.LabelDescriptorType = LabelDescriptorType;
module.exports = LabelDescriptorType;
