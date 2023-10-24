"use strict";

var LineItem = /** @class */ (function () {
    function LineItem() {
    }
    LineItem.getAttributeTypeMap = function () {
        return LineItem.attributeTypeMap;
    };
    LineItem.discriminator = undefined;
    LineItem.attributeTypeMap = [
        {
            "name": "aggregatedTaxRate",
            "baseName": "aggregatedTaxRate",
            "type": "number"
        },
        {
            "name": "amountExcludingTax",
            "baseName": "amountExcludingTax",
            "type": "number"
        },
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: LineItemAttribute; }"
        },
        {
            "name": "discountExcludingTax",
            "baseName": "discountExcludingTax",
            "type": "number"
        },
        {
            "name": "discountIncludingTax",
            "baseName": "discountIncludingTax",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "shippingRequired",
            "baseName": "shippingRequired",
            "type": "boolean"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxAmountPerUnit",
            "baseName": "taxAmountPerUnit",
            "type": "number"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LineItemType"
        },
        {
            "name": "undiscountedAmountExcludingTax",
            "baseName": "undiscountedAmountExcludingTax",
            "type": "number"
        },
        {
            "name": "undiscountedAmountIncludingTax",
            "baseName": "undiscountedAmountIncludingTax",
            "type": "number"
        },
        {
            "name": "undiscountedUnitPriceExcludingTax",
            "baseName": "undiscountedUnitPriceExcludingTax",
            "type": "number"
        },
        {
            "name": "undiscountedUnitPriceIncludingTax",
            "baseName": "undiscountedUnitPriceIncludingTax",
            "type": "number"
        },
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
        },
        {
            "name": "unitPriceExcludingTax",
            "baseName": "unitPriceExcludingTax",
            "type": "number"
        },
        {
            "name": "unitPriceIncludingTax",
            "baseName": "unitPriceIncludingTax",
            "type": "number"
        }
    ];
    return LineItem;
}());
exports.LineItem = LineItem;
module.exports = LineItem;
