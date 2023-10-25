"use strict";

exports.CompletionLineItemCreate = void 0;
var CompletionLineItemCreate = /** @class */ (function () {
    function CompletionLineItemCreate() {
    }
    CompletionLineItemCreate.getAttributeTypeMap = function () {
        return CompletionLineItemCreate.attributeTypeMap;
    };
    CompletionLineItemCreate.discriminator = undefined;
    CompletionLineItemCreate.attributeTypeMap = [
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
    return CompletionLineItemCreate;
}());
exports.CompletionLineItemCreate = CompletionLineItemCreate;
module.exports = CompletionLineItemCreate;
