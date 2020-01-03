"use strict";
exports.__esModule = true;
var TaxCreate = /** @class */ (function () {
    function TaxCreate() {
    }
    TaxCreate.getAttributeTypeMap = function () {
        return TaxCreate.attributeTypeMap;
    };
    TaxCreate.discriminator = undefined;
    TaxCreate.attributeTypeMap = [
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
    return TaxCreate;
}());
exports.TaxCreate = TaxCreate;
module.exports = TaxCreate;
