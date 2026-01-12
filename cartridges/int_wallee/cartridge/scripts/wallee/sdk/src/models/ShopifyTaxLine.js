"use strict";

exports.ShopifyTaxLine = void 0;
var ShopifyTaxLine = /** @class */ (function () {
    function ShopifyTaxLine() {
    }
    ShopifyTaxLine.getAttributeTypeMap = function () {
        return ShopifyTaxLine.attributeTypeMap;
    };
    ShopifyTaxLine.discriminator = undefined;
    ShopifyTaxLine.attributeTypeMap = [
        {
            "name": "fractionRate",
            "baseName": "fractionRate",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifyTaxLine;
}());
exports.ShopifyTaxLine = ShopifyTaxLine;
module.exports = ShopifyTaxLine;
