"use strict";

var Tax = /** @class */ (function () {
    function Tax() {
    }
    Tax.getAttributeTypeMap = function () {
        return Tax.attributeTypeMap;
    };
    Tax.discriminator = undefined;
    Tax.attributeTypeMap = [
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }
    ];
    return Tax;
}());
exports.Tax = Tax;
module.exports = Tax;
