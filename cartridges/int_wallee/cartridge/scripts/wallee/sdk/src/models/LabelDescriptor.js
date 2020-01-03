"use strict";
exports.__esModule = true;
var LabelDescriptor = /** @class */ (function () {
    function LabelDescriptor() {
    }
    LabelDescriptor.getAttributeTypeMap = function () {
        return LabelDescriptor.attributeTypeMap;
    };
    LabelDescriptor.discriminator = undefined;
    LabelDescriptor.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "LabelDescriptorCategory"
        },
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
            "name": "group",
            "baseName": "group",
            "type": "number"
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
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number"
        }
    ];
    return LabelDescriptor;
}());
exports.LabelDescriptor = LabelDescriptor;
module.exports = LabelDescriptor;
