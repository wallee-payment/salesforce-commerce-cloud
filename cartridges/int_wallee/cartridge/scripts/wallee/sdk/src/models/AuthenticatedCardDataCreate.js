"use strict";

var AuthenticatedCardDataCreate = /** @class */ (function () {
    function AuthenticatedCardDataCreate() {
    }
    AuthenticatedCardDataCreate.getAttributeTypeMap = function () {
        return AuthenticatedCardDataCreate.attributeTypeMap;
    };
    AuthenticatedCardDataCreate.discriminator = undefined;
    AuthenticatedCardDataCreate.attributeTypeMap = [
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
            "name": "cardholderAuthentication",
            "baseName": "cardholderAuthentication",
            "type": "CardholderAuthenticationCreate"
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
    return AuthenticatedCardDataCreate;
}());
exports.AuthenticatedCardDataCreate = AuthenticatedCardDataCreate;
module.exports = AuthenticatedCardDataCreate;
