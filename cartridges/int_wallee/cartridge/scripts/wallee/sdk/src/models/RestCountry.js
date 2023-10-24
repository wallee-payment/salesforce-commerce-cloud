"use strict";

var RestCountry = /** @class */ (function () {
    function RestCountry() {
    }
    RestCountry.getAttributeTypeMap = function () {
        return RestCountry.attributeTypeMap;
    };
    RestCountry.discriminator = undefined;
    RestCountry.attributeTypeMap = [
        {
            "name": "addressFormat",
            "baseName": "addressFormat",
            "type": "RestAddressFormat"
        },
        {
            "name": "isoCode2",
            "baseName": "isoCode2",
            "type": "string"
        },
        {
            "name": "isoCode3",
            "baseName": "isoCode3",
            "type": "string"
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
