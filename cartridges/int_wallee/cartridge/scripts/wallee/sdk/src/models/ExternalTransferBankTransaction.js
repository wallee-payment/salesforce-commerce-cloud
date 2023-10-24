"use strict";

var ExternalTransferBankTransaction = /** @class */ (function () {
    function ExternalTransferBankTransaction() {
    }
    ExternalTransferBankTransaction.getAttributeTypeMap = function () {
        return ExternalTransferBankTransaction.attributeTypeMap;
    };
    ExternalTransferBankTransaction.discriminator = undefined;
    ExternalTransferBankTransaction.attributeTypeMap = [
        {
            "name": "bankTransaction",
            "baseName": "bankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "externalAccountIdentifier",
            "baseName": "externalAccountIdentifier",
            "type": "string"
        },
        {
            "name": "externalAccountType",
            "baseName": "externalAccountType",
            "type": "string"
        },
        {
            "name": "externalBankName",
            "baseName": "externalBankName",
            "type": "string"
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
    return ExternalTransferBankTransaction;
}());
exports.ExternalTransferBankTransaction = ExternalTransferBankTransaction;
module.exports = ExternalTransferBankTransaction;
