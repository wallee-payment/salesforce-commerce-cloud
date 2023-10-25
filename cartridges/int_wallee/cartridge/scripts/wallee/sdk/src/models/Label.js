"use strict";

exports.Label = void 0;
var Label = /** @class */ (function () {
    function Label() {
    }
    Label.getAttributeTypeMap = function () {
        return Label.attributeTypeMap;
    };
    Label.discriminator = undefined;
    Label.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "any"
        },
        {
            "name": "contentAsString",
            "baseName": "contentAsString",
            "type": "string"
        },
        {
            "name": "descriptor",
            "baseName": "descriptor",
            "type": "LabelDescriptor"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Label;
}());
exports.Label = Label;
module.exports = Label;
