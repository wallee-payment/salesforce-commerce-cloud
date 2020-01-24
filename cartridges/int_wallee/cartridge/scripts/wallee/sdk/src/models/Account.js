"use strict";

var Account = /** @class */ (function () {
    function Account() {
    }
    Account.getAttributeTypeMap = function () {
        return Account.attributeTypeMap;
    };
    Account.discriminator = undefined;
    Account.attributeTypeMap = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "activeOrRestrictedActive",
            "baseName": "activeOrRestrictedActive",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "parentAccount",
            "baseName": "parentAccount",
            "type": "Account"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "restrictedActive",
            "baseName": "restrictedActive",
            "type": "boolean"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AccountState"
        },
        {
            "name": "subaccountLimit",
            "baseName": "subaccountLimit",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AccountType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Account;
}());
exports.Account = Account;
module.exports = Account;
