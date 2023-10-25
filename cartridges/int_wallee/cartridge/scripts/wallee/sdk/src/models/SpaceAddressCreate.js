"use strict";

exports.SpaceAddressCreate = void 0;
var SpaceAddressCreate = /** @class */ (function () {
    function SpaceAddressCreate() {
    }
    SpaceAddressCreate.getAttributeTypeMap = function () {
        return SpaceAddressCreate.attributeTypeMap;
    };
    SpaceAddressCreate.discriminator = undefined;
    SpaceAddressCreate.attributeTypeMap = [
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
            "name": "salesTaxNumber",
            "baseName": "salesTaxNumber",
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
    return SpaceAddressCreate;
}());
exports.SpaceAddressCreate = SpaceAddressCreate;
module.exports = SpaceAddressCreate;
