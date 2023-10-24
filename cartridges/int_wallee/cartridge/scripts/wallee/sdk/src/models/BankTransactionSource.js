"use strict";

var BankTransactionSource = /** @class */ (function () {
    function BankTransactionSource() {
    }
    BankTransactionSource.getAttributeTypeMap = function () {
        return BankTransactionSource.attributeTypeMap;
    };
    BankTransactionSource.discriminator = undefined;
    BankTransactionSource.attributeTypeMap = [
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
    return BankTransactionSource;
}());
exports.BankTransactionSource = BankTransactionSource;
module.exports = BankTransactionSource;
