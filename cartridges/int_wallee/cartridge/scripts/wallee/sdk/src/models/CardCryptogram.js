"use strict";

exports.CardCryptogram = void 0;
var CardCryptogram = /** @class */ (function () {
    function CardCryptogram() {
    }
    CardCryptogram.getAttributeTypeMap = function () {
        return CardCryptogram.attributeTypeMap;
    };
    CardCryptogram.discriminator = undefined;
    CardCryptogram.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CardCryptogramType"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return CardCryptogram;
}());
exports.CardCryptogram = CardCryptogram;
module.exports = CardCryptogram;
