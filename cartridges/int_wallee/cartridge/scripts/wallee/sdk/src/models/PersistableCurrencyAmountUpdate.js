"use strict";

var PersistableCurrencyAmountUpdate = /** @class */ (function () {
    function PersistableCurrencyAmountUpdate() {
    }
    PersistableCurrencyAmountUpdate.getAttributeTypeMap = function () {
        return PersistableCurrencyAmountUpdate.attributeTypeMap;
    };
    PersistableCurrencyAmountUpdate.discriminator = undefined;
    PersistableCurrencyAmountUpdate.attributeTypeMap = [
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
    return PersistableCurrencyAmountUpdate;
}());
exports.PersistableCurrencyAmountUpdate = PersistableCurrencyAmountUpdate;
module.exports = PersistableCurrencyAmountUpdate;
