"use strict";

var BankTransactionType = /** @class */ (function () {
    function BankTransactionType() {
    }
    BankTransactionType.getAttributeTypeMap = function () {
        return BankTransactionType.attributeTypeMap;
    };
    BankTransactionType.discriminator = undefined;
    BankTransactionType.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return BankTransactionType;
}());
exports.BankTransactionType = BankTransactionType;
module.exports = BankTransactionType;
