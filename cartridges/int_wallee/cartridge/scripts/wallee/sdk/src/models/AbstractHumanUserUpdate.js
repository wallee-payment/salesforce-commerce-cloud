"use strict";

var AbstractHumanUserUpdate = /** @class */ (function () {
    function AbstractHumanUserUpdate() {
    }
    AbstractHumanUserUpdate.getAttributeTypeMap = function () {
        return AbstractHumanUserUpdate.attributeTypeMap;
    };
    AbstractHumanUserUpdate.discriminator = undefined;
    AbstractHumanUserUpdate.attributeTypeMap = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "firstname",
            "baseName": "firstname",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lastname",
            "baseName": "lastname",
            "type": "string"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobilePhoneNumber",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "twoFactorEnabled",
            "baseName": "twoFactorEnabled",
            "type": "boolean"
        }
    ];
    return AbstractHumanUserUpdate;
}());
exports.AbstractHumanUserUpdate = AbstractHumanUserUpdate;
module.exports = AbstractHumanUserUpdate;
