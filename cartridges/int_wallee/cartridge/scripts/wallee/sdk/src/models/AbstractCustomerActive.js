"use strict";
exports.__esModule = true;
var AbstractCustomerActive = /** @class */ (function () {
    function AbstractCustomerActive() {
    }
    AbstractCustomerActive.getAttributeTypeMap = function () {
        return AbstractCustomerActive.attributeTypeMap;
    };
    AbstractCustomerActive.discriminator = undefined;
    AbstractCustomerActive.attributeTypeMap = [
        {
            "name": "customerId",
            "baseName": "customerId",
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
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "preferredCurrency",
            "baseName": "preferredCurrency",
            "type": "string"
        }
    ];
    return AbstractCustomerActive;
}());
exports.AbstractCustomerActive = AbstractCustomerActive;
module.exports = AbstractCustomerActive;
