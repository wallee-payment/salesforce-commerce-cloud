"use strict";

var CurrencyBankAccount = /** @class */ (function () {
    function CurrencyBankAccount() {
    }
    CurrencyBankAccount.getAttributeTypeMap = function () {
        return CurrencyBankAccount.attributeTypeMap;
    };
    CurrencyBankAccount.discriminator = undefined;
    CurrencyBankAccount.attributeTypeMap = [
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "BankAccount"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "BankAccountEnvironment"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return CurrencyBankAccount;
}());
exports.CurrencyBankAccount = CurrencyBankAccount;
module.exports = CurrencyBankAccount;
