"use strict";
exports.__esModule = true;
var RestCurrency = /** @class */ (function () {
    function RestCurrency() {
    }
    RestCurrency.getAttributeTypeMap = function () {
        return RestCurrency.attributeTypeMap;
    };
    RestCurrency.discriminator = undefined;
    RestCurrency.attributeTypeMap = [
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "fractionDigits",
            "baseName": "fractionDigits",
            "type": "number"
        },
        {
            "name": "numericCode",
            "baseName": "numericCode",
            "type": "number"
        }
    ];
    return RestCurrency;
}());
exports.RestCurrency = RestCurrency;
module.exports = RestCurrency;
