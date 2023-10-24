"use strict";

var CardholderAuthentication = /** @class */ (function () {
    function CardholderAuthentication() {
    }
    CardholderAuthentication.getAttributeTypeMap = function () {
        return CardholderAuthentication.attributeTypeMap;
    };
    CardholderAuthentication.discriminator = undefined;
    CardholderAuthentication.attributeTypeMap = [
        {
            "name": "authenticationIdentifier",
            "baseName": "authenticationIdentifier",
            "type": "string"
        },
        {
            "name": "authenticationResponse",
            "baseName": "authenticationResponse",
            "type": "CardAuthenticationResponse"
        },
        {
            "name": "authenticationValue",
            "baseName": "authenticationValue",
            "type": "string"
        },
        {
            "name": "electronicCommerceIndicator",
            "baseName": "electronicCommerceIndicator",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "CardAuthenticationVersion"
        }
    ];
    return CardholderAuthentication;
}());
exports.CardholderAuthentication = CardholderAuthentication;
module.exports = CardholderAuthentication;
