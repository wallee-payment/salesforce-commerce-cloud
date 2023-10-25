"use strict";

exports.TokenizedCardDataCreate = void 0;
var TokenizedCardDataCreate = /** @class */ (function () {
    function TokenizedCardDataCreate() {
    }
    TokenizedCardDataCreate.getAttributeTypeMap = function () {
        return TokenizedCardDataCreate.attributeTypeMap;
    };
    TokenizedCardDataCreate.discriminator = undefined;
    TokenizedCardDataCreate.attributeTypeMap = [
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
            "name": "cryptogram",
            "baseName": "cryptogram",
            "type": "CardCryptogramCreate"
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
        },
        {
            "name": "recurringIndicator",
            "baseName": "recurringIndicator",
            "type": "RecurringIndicator"
        },
        {
            "name": "schemeTransactionReference",
            "baseName": "schemeTransactionReference",
            "type": "string"
        },
        {
            "name": "tokenRequestorId",
            "baseName": "tokenRequestorId",
            "type": "string"
        }
    ];
    return TokenizedCardDataCreate;
}());
exports.TokenizedCardDataCreate = TokenizedCardDataCreate;
module.exports = TokenizedCardDataCreate;
