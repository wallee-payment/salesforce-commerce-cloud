"use strict";

exports.PaymentTerminalAddress = void 0;
var PaymentTerminalAddress = /** @class */ (function () {
    function PaymentTerminalAddress() {
    }
    PaymentTerminalAddress.getAttributeTypeMap = function () {
        return PaymentTerminalAddress.attributeTypeMap;
    };
    PaymentTerminalAddress.discriminator = undefined;
    PaymentTerminalAddress.attributeTypeMap = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "dependentLocality",
            "baseName": "dependentLocality",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "familyName",
            "baseName": "familyName",
            "type": "string"
        },
        {
            "name": "givenName",
            "baseName": "givenName",
            "type": "string"
        },
        {
            "name": "mobilePhoneNumber",
            "baseName": "mobilePhoneNumber",
            "type": "string"
        },
        {
            "name": "organizationName",
            "baseName": "organizationName",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "postalState",
            "baseName": "postalState",
            "type": "string"
        },
        {
            "name": "postcode",
            "baseName": "postcode",
            "type": "string"
        },
        {
            "name": "salutation",
            "baseName": "salutation",
            "type": "string"
        },
        {
            "name": "sortingCode",
            "baseName": "sortingCode",
            "type": "string"
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        }
    ];
    return PaymentTerminalAddress;
}());
exports.PaymentTerminalAddress = PaymentTerminalAddress;
module.exports = PaymentTerminalAddress;
