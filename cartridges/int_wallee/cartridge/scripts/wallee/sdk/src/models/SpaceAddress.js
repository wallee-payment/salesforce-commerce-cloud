"use strict";
exports.__esModule = true;
var SpaceAddress = /** @class */ (function () {
    function SpaceAddress() {
    }
    SpaceAddress.getAttributeTypeMap = function () {
        return SpaceAddress.attributeTypeMap;
    };
    SpaceAddress.discriminator = undefined;
    SpaceAddress.attributeTypeMap = [
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
            "name": "organizationName",
            "baseName": "organizationName",
            "type": "string"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "postalState",
            "baseName": "postalState",
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
    return SpaceAddress;
}());
exports.SpaceAddress = SpaceAddress;
module.exports = SpaceAddress;
