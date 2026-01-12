"use strict";

exports.CardCryptogramCreate = void 0;
var CardCryptogramCreate = /** @class */ (function () {
    function CardCryptogramCreate() {
    }
    CardCryptogramCreate.getAttributeTypeMap = function () {
        return CardCryptogramCreate.attributeTypeMap;
    };
    CardCryptogramCreate.discriminator = undefined;
    CardCryptogramCreate.attributeTypeMap = [
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
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
