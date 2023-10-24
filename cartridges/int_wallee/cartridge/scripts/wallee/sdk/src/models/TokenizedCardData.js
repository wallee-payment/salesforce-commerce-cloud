"use strict";

var TokenizedCardData = /** @class */ (function () {
    function TokenizedCardData() {
    }
    TokenizedCardData.getAttributeTypeMap = function () {
        return TokenizedCardData.attributeTypeMap;
    };
    TokenizedCardData.discriminator = undefined;
    TokenizedCardData.attributeTypeMap = [
        {
            "name": "cryptogram",
            "baseName": "cryptogram",
            "type": "CardCryptogram"
        },
        {
            "name": "recurringIndicator",
            "baseName": "recurringIndicator",
            "type": "RecurringIndicator"
        },
        {
            "name": "tokenRequestorId",
            "baseName": "tokenRequestorId",
            "type": "string"
        }
    ];
    return TokenizedCardData;
}());
exports.TokenizedCardData = TokenizedCardData;
module.exports = TokenizedCardData;
