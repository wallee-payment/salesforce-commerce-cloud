"use strict";

exports.LineItemAttribute = void 0;
var LineItemAttribute = /** @class */ (function () {
    function LineItemAttribute() {
    }
    LineItemAttribute.getAttributeTypeMap = function () {
        return LineItemAttribute.attributeTypeMap;
    };
    LineItemAttribute.discriminator = undefined;
    LineItemAttribute.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return LineItemAttribute;
}());
exports.LineItemAttribute = LineItemAttribute;
module.exports = LineItemAttribute;
