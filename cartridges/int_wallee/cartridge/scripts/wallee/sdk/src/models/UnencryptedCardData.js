"use strict";
exports.__esModule = true;
var UnencryptedCardData = /** @class */ (function () {
    function UnencryptedCardData() {
    }
    UnencryptedCardData.getAttributeTypeMap = function () {
        return UnencryptedCardData.attributeTypeMap;
    };
    UnencryptedCardData.discriminator = undefined;
    UnencryptedCardData.attributeTypeMap = [
        {
            "name": "cardHolderName",
            "baseName": "cardHolderName",
            "type": "string"
        },
        {
            "name": "cardVerificationCode",
            "baseName": "cardVerificationCode",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string"
        },
        {
            "name": "primaryAccountNumber",
            "baseName": "primaryAccountNumber",
            "type": "string"
        }
    ];
    return UnencryptedCardData;
}());
exports.UnencryptedCardData = UnencryptedCardData;
module.exports = UnencryptedCardData;
