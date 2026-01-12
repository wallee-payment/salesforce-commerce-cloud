"use strict";

exports.InternalTransferBankTransaction = void 0;
var InternalTransferBankTransaction = /** @class */ (function () {
    function InternalTransferBankTransaction() {
    }
    InternalTransferBankTransaction.getAttributeTypeMap = function () {
        return InternalTransferBankTransaction.attributeTypeMap;
    };
    InternalTransferBankTransaction.discriminator = undefined;
    InternalTransferBankTransaction.attributeTypeMap = [
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
            "name": "sourceBankTransaction",
            "baseName": "sourceBankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "targetBankTransaction",
            "baseName": "targetBankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InternalTransferBankTransaction;
}());
exports.InternalTransferBankTransaction = InternalTransferBankTransaction;
module.exports = InternalTransferBankTransaction;
