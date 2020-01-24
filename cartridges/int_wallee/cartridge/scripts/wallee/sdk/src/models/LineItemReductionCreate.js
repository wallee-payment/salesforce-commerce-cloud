"use strict";

var LineItemReductionCreate = /** @class */ (function () {
    function LineItemReductionCreate() {
    }
    LineItemReductionCreate.getAttributeTypeMap = function () {
        return LineItemReductionCreate.attributeTypeMap;
    };
    LineItemReductionCreate.discriminator = undefined;
    LineItemReductionCreate.attributeTypeMap = [
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
    return LineItemReductionCreate;
}());
exports.LineItemReductionCreate = LineItemReductionCreate;
module.exports = LineItemReductionCreate;
