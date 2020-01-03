"use strict";
exports.__esModule = true;
var HumanUser = /** @class */ (function () {
    function HumanUser() {
    }
    HumanUser.getAttributeTypeMap = function () {
        return HumanUser.attributeTypeMap;
    };
    HumanUser.discriminator = undefined;
    HumanUser.attributeTypeMap = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "emailAddressVerified",
            "baseName": "emailAddressVerified",
            "type": "boolean"
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
            "name": "mobilePhoneVerified",
            "baseName": "mobilePhoneVerified",
            "type": "boolean"
        },
        {
            "name": "primaryAccount",
            "baseName": "primaryAccount",
            "type": "Account"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "Scope"
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
        },
        {
            "name": "twoFactorType",
            "baseName": "twoFactorType",
            "type": "TwoFactorAuthenticationType"
        }
    ];
    return HumanUser;
}());
exports.HumanUser = HumanUser;
module.exports = HumanUser;
