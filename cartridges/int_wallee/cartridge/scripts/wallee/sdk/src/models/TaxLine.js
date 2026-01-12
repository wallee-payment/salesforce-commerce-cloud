"use strict";

exports.TaxLine = void 0;
var TaxLine = /** @class */ (function () {
    function TaxLine() {
    }
    TaxLine.getAttributeTypeMap = function () {
        return TaxLine.attributeTypeMap;
    };
    TaxLine.discriminator = undefined;
    TaxLine.attributeTypeMap = [
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
    return TaxLine;
}());
exports.TaxLine = TaxLine;
module.exports = TaxLine;
