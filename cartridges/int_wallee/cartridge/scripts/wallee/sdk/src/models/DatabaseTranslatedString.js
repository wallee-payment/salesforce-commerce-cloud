"use strict";

var DatabaseTranslatedString = /** @class */ (function () {
    function DatabaseTranslatedString() {
    }
    DatabaseTranslatedString.getAttributeTypeMap = function () {
        return DatabaseTranslatedString.attributeTypeMap;
    };
    DatabaseTranslatedString.discriminator = undefined;
    DatabaseTranslatedString.attributeTypeMap = [
        {
            "name": "availableLanguages",
            "baseName": "availableLanguages",
            "type": "Array<string>"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<DatabaseTranslatedStringItem>"
        }
    ];
    return DatabaseTranslatedString;
}());
exports.DatabaseTranslatedString = DatabaseTranslatedString;
module.exports = DatabaseTranslatedString;
