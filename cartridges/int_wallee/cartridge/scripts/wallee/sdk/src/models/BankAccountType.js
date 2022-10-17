"use strict";

var BankAccountType = /** @class */ (function () {
    function BankAccountType() {
    }
    BankAccountType.getAttributeTypeMap = function () {
        return BankAccountType.attributeTypeMap;
    };
    BankAccountType.discriminator = undefined;
    BankAccountType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "identifierName",
            "baseName": "identifierName",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return BankAccountType;
}());
exports.BankAccountType = BankAccountType;
module.exports = BankAccountType;
