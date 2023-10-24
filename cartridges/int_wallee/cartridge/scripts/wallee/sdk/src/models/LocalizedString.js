"use strict";

var LocalizedString = /** @class */ (function () {
    function LocalizedString() {
    }
    LocalizedString.getAttributeTypeMap = function () {
        return LocalizedString.attributeTypeMap;
    };
    LocalizedString.discriminator = undefined;
    LocalizedString.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "string",
            "baseName": "string",
            "type": "string"
        }
    ];
    return LocalizedString;
}());
exports.LocalizedString = LocalizedString;
module.exports = LocalizedString;
