"use strict";
exports.__esModule = true;
var RestCountryState = /** @class */ (function () {
    function RestCountryState() {
    }
    RestCountryState.getAttributeTypeMap = function () {
        return RestCountryState.attributeTypeMap;
    };
    RestCountryState.discriminator = undefined;
    RestCountryState.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return RestCountryState;
}());
exports.RestCountryState = RestCountryState;
module.exports = RestCountryState;
