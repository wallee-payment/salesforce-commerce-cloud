"use strict";
exports.__esModule = true;
var LabelDescriptorGroup = /** @class */ (function () {
    function LabelDescriptorGroup() {
    }
    LabelDescriptorGroup.getAttributeTypeMap = function () {
        return LabelDescriptorGroup.attributeTypeMap;
    };
    LabelDescriptorGroup.discriminator = undefined;
    LabelDescriptorGroup.attributeTypeMap = [
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
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }
    ];
    return LabelDescriptorGroup;
}());
exports.LabelDescriptorGroup = LabelDescriptorGroup;
module.exports = LabelDescriptorGroup;
