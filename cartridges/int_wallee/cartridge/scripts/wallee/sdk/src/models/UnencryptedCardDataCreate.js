"use strict";

var UnencryptedCardDataCreate = /** @class */ (function () {
    function UnencryptedCardDataCreate() {
    }
    UnencryptedCardDataCreate.getAttributeTypeMap = function () {
        return UnencryptedCardDataCreate.attributeTypeMap;
    };
    UnencryptedCardDataCreate.discriminator = undefined;
    UnencryptedCardDataCreate.attributeTypeMap = [
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
    return UnencryptedCardDataCreate;
}());
exports.UnencryptedCardDataCreate = UnencryptedCardDataCreate;
module.exports = UnencryptedCardDataCreate;
