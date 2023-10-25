"use strict";

exports.RestLanguage = void 0;
var RestLanguage = /** @class */ (function () {
    function RestLanguage() {
    }
    RestLanguage.getAttributeTypeMap = function () {
        return RestLanguage.attributeTypeMap;
    };
    RestLanguage.discriminator = undefined;
    RestLanguage.attributeTypeMap = [
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "ietfCode",
            "baseName": "ietfCode",
            "type": "string"
        },
        {
            "name": "iso2Code",
            "baseName": "iso2Code",
            "type": "string"
        },
        {
            "name": "iso3Code",
            "baseName": "iso3Code",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pluralExpression",
            "baseName": "pluralExpression",
            "type": "string"
        },
        {
            "name": "primaryOfGroup",
            "baseName": "primaryOfGroup",
            "type": "boolean"
        }
    ];
    return RestLanguage;
}());
exports.RestLanguage = RestLanguage;
module.exports = RestLanguage;
