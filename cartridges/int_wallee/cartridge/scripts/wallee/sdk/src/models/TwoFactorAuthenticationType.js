"use strict";

var TwoFactorAuthenticationType = /** @class */ (function () {
    function TwoFactorAuthenticationType() {
    }
    TwoFactorAuthenticationType.getAttributeTypeMap = function () {
        return TwoFactorAuthenticationType.attributeTypeMap;
    };
    TwoFactorAuthenticationType.discriminator = undefined;
    TwoFactorAuthenticationType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "number"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string"
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
        }
    ];
    return TwoFactorAuthenticationType;
}());
exports.TwoFactorAuthenticationType = TwoFactorAuthenticationType;
module.exports = TwoFactorAuthenticationType;
