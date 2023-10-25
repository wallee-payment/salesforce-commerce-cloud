"use strict";

exports.Role = void 0;
var Role = /** @class */ (function () {
    function Role() {
    }
    Role.getAttributeTypeMap = function () {
        return Role.attributeTypeMap;
    };
    Role.discriminator = undefined;
    Role.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
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
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<Permission>"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "RoleState"
        },
        {
            "name": "twoFactorRequired",
            "baseName": "twoFactorRequired",
            "type": "boolean"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Role;
}());
exports.Role = Role;
module.exports = Role;
