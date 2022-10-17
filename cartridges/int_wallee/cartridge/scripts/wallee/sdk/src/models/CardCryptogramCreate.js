"use strict";

var CardCryptogramCreate = /** @class */ (function () {
    function CardCryptogramCreate() {
    }
    CardCryptogramCreate.getAttributeTypeMap = function () {
        return CardCryptogramCreate.attributeTypeMap;
    };
    CardCryptogramCreate.discriminator = undefined;
    CardCryptogramCreate.attributeTypeMap = [
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
    return CardCryptogramCreate;
}());
exports.CardCryptogramCreate = CardCryptogramCreate;
module.exports = CardCryptogramCreate;
