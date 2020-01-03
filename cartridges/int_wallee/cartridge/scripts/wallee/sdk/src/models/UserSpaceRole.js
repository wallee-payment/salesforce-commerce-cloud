"use strict";
exports.__esModule = true;
var UserSpaceRole = /** @class */ (function () {
    function UserSpaceRole() {
    }
    UserSpaceRole.getAttributeTypeMap = function () {
        return UserSpaceRole.attributeTypeMap;
    };
    UserSpaceRole.discriminator = undefined;
    UserSpaceRole.attributeTypeMap = [
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
            "name": "space",
            "baseName": "space",
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
    return UserSpaceRole;
}());
exports.UserSpaceRole = UserSpaceRole;
module.exports = UserSpaceRole;
