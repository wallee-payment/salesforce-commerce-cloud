"use strict";

var User = /** @class */ (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "UserType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return User;
}());
exports.User = User;
module.exports = User;
