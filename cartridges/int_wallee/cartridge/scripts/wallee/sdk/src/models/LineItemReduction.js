"use strict";
exports.__esModule = true;
var LineItemReduction = /** @class */ (function () {
    function LineItemReduction() {
    }
    LineItemReduction.getAttributeTypeMap = function () {
        return LineItemReduction.attributeTypeMap;
    };
    LineItemReduction.discriminator = undefined;
    LineItemReduction.attributeTypeMap = [
        {
            "name": "lineItemUniqueId",
            "baseName": "lineItemUniqueId",
            "type": "string"
        },
        {
            "name": "quantityReduction",
            "baseName": "quantityReduction",
            "type": "number"
        },
        {
            "name": "unitPriceReduction",
            "baseName": "unitPriceReduction",
            "type": "number"
        }
    ];
    return LineItemReduction;
}());
exports.LineItemReduction = LineItemReduction;
module.exports = LineItemReduction;
