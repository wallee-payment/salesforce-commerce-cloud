"use strict";

var LineItemAttributeCreate = /** @class */ (function () {
    function LineItemAttributeCreate() {
    }
    LineItemAttributeCreate.getAttributeTypeMap = function () {
        return LineItemAttributeCreate.attributeTypeMap;
    };
    LineItemAttributeCreate.discriminator = undefined;
    LineItemAttributeCreate.attributeTypeMap = [
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
    return LineItemAttributeCreate;
}());
exports.LineItemAttributeCreate = LineItemAttributeCreate;
module.exports = LineItemAttributeCreate;
