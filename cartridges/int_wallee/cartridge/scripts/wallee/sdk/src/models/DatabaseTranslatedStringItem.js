"use strict";
exports.__esModule = true;
var DatabaseTranslatedStringItem = /** @class */ (function () {
    function DatabaseTranslatedStringItem() {
    }
    DatabaseTranslatedStringItem.getAttributeTypeMap = function () {
        return DatabaseTranslatedStringItem.attributeTypeMap;
    };
    DatabaseTranslatedStringItem.discriminator = undefined;
    DatabaseTranslatedStringItem.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "languageCode",
            "baseName": "languageCode",
            "type": "string"
        },
        {
            "name": "translation",
            "baseName": "translation",
            "type": "string"
        }
    ];
    return DatabaseTranslatedStringItem;
}());
exports.DatabaseTranslatedStringItem = DatabaseTranslatedStringItem;
module.exports = DatabaseTranslatedStringItem;
