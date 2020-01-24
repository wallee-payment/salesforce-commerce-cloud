"use strict";

var PersistableCurrencyAmount = /** @class */ (function () {
    function PersistableCurrencyAmount() {
    }
    PersistableCurrencyAmount.getAttributeTypeMap = function () {
        return PersistableCurrencyAmount.attributeTypeMap;
    };
    PersistableCurrencyAmount.discriminator = undefined;
    PersistableCurrencyAmount.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }
    ];
    return PersistableCurrencyAmount;
}());
exports.PersistableCurrencyAmount = PersistableCurrencyAmount;
module.exports = PersistableCurrencyAmount;
