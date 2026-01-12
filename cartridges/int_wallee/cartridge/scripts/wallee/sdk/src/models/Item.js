"use strict";

exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.getAttributeTypeMap = function () {
        return Item.attributeTypeMap;
    };
    Item.discriminator = undefined;
    Item.attributeTypeMap = [
        {
            "name": "priceIncludingTax",
            "baseName": "priceIncludingTax",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "recalculatePrice",
            "baseName": "recalculatePrice",
            "type": "boolean"
        },
        {
            "name": "taxLines",
            "baseName": "taxLines",
            "type": "Array<TaxLine>"
        }
    ];
    return Item;
}());
exports.Item = Item;
module.exports = Item;
