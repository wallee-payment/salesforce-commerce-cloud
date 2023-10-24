"use strict";

var RestAddressFormat = /** @class */ (function () {
    function RestAddressFormat() {
    }
    RestAddressFormat.getAttributeTypeMap = function () {
        return RestAddressFormat.attributeTypeMap;
    };
    RestAddressFormat.discriminator = undefined;
    RestAddressFormat.attributeTypeMap = [
        {
            "name": "postCodeExamples",
            "baseName": "postCodeExamples",
            "type": "Array<string>"
        },
        {
            "name": "postCodeRegex",
            "baseName": "postCodeRegex",
            "type": "string"
        },
        {
            "name": "requiredFields",
            "baseName": "requiredFields",
            "type": "Array<RestAddressFormatField>"
        },
        {
            "name": "usedFields",
            "baseName": "usedFields",
            "type": "Array<RestAddressFormatField>"
        }
    ];
    return RestAddressFormat;
}());
exports.RestAddressFormat = RestAddressFormat;
module.exports = RestAddressFormat;
