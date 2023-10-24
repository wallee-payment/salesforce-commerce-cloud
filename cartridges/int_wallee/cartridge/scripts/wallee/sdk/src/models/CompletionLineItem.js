"use strict";

var CompletionLineItem = /** @class */ (function () {
    function CompletionLineItem() {
    }
    CompletionLineItem.getAttributeTypeMap = function () {
        return CompletionLineItem.attributeTypeMap;
    };
    CompletionLineItem.discriminator = undefined;
    CompletionLineItem.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
        }
    ];
    return CompletionLineItem;
}());
exports.CompletionLineItem = CompletionLineItem;
module.exports = CompletionLineItem;
