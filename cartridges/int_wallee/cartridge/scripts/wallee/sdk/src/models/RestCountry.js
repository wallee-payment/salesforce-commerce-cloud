"use strict";
exports.__esModule = true;
var RestCountry = /** @class */ (function () {
    function RestCountry() {
    }
    RestCountry.getAttributeTypeMap = function () {
        return RestCountry.attributeTypeMap;
    };
    RestCountry.discriminator = undefined;
    RestCountry.attributeTypeMap = [
        {
            "name": "iSOCode2Letter",
            "baseName": "ISOCode2Letter",
            "type": "string"
        },
        {
            "name": "iSOCode3Letter",
            "baseName": "ISOCode3Letter",
            "type": "string"
        },
        {
            "name": "addressFormat",
            "baseName": "addressFormat",
            "type": "RestAddressFormat"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "numericCode",
            "baseName": "numericCode",
            "type": "string"
        },
        {
            "name": "stateCodes",
            "baseName": "stateCodes",
            "type": "Array<string>"
        }
    ];
    return RestCountry;
}());
exports.RestCountry = RestCountry;
module.exports = RestCountry;
