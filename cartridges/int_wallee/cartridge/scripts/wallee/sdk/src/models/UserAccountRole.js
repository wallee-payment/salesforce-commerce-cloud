"use strict";

var UserAccountRole = /** @class */ (function () {
    function UserAccountRole() {
    }
    UserAccountRole.getAttributeTypeMap = function () {
        return UserAccountRole.attributeTypeMap;
    };
    UserAccountRole.discriminator = undefined;
    UserAccountRole.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "number"
        },
        {
            "name": "appliesOnSubAccount",
            "baseName": "appliesOnSubAccount",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "number"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return UserAccountRole;
}());
exports.UserAccountRole = UserAccountRole;
module.exports = UserAccountRole;
