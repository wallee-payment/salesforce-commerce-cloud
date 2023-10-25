"use strict";

exports.CardholderAuthenticationCreate = void 0;
var CardholderAuthenticationCreate = /** @class */ (function () {
    function CardholderAuthenticationCreate() {
    }
    CardholderAuthenticationCreate.getAttributeTypeMap = function () {
        return CardholderAuthenticationCreate.attributeTypeMap;
    };
    CardholderAuthenticationCreate.discriminator = undefined;
    CardholderAuthenticationCreate.attributeTypeMap = [
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
    return CardholderAuthenticationCreate;
}());
exports.CardholderAuthenticationCreate = CardholderAuthenticationCreate;
module.exports = CardholderAuthenticationCreate;
