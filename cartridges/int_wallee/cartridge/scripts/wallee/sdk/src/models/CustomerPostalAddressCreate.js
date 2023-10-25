"use strict";

exports.CustomerPostalAddressCreate = void 0;
var CustomerPostalAddressCreate = /** @class */ (function () {
    function CustomerPostalAddressCreate() {
    }
    CustomerPostalAddressCreate.getAttributeTypeMap = function () {
        return CustomerPostalAddressCreate.attributeTypeMap;
    };
    CustomerPostalAddressCreate.discriminator = undefined;
    CustomerPostalAddressCreate.attributeTypeMap = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "commercialRegisterNumber",
            "baseName": "commercialRegisterNumber",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
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
            "name": "gender",
            "baseName": "gender",
            "type": "Gender"
        },
        {
            "name": "givenName",
            "baseName": "givenName",
            "type": "string"
        },
        {
            "name": "legalOrganizationForm",
            "baseName": "legalOrganizationForm",
            "type": "number"
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
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
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
    return CustomerPostalAddressCreate;
}());
exports.CustomerPostalAddressCreate = CustomerPostalAddressCreate;
module.exports = CustomerPostalAddressCreate;
