"use strict";

exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.getAttributeTypeMap = function () {
        return BankAccount.attributeTypeMap;
    };
    BankAccount.discriminator = undefined;
    BankAccount.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "BankAccountState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return BankAccount;
}());
exports.BankAccount = BankAccount;
module.exports = BankAccount;
