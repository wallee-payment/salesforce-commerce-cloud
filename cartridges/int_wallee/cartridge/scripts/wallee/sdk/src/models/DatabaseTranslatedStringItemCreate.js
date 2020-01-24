"use strict";

var DatabaseTranslatedStringItemCreate = /** @class */ (function () {
    function DatabaseTranslatedStringItemCreate() {
    }
    DatabaseTranslatedStringItemCreate.getAttributeTypeMap = function () {
        return DatabaseTranslatedStringItemCreate.attributeTypeMap;
    };
    DatabaseTranslatedStringItemCreate.discriminator = undefined;
    DatabaseTranslatedStringItemCreate.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "translation",
            "baseName": "translation",
            "type": "string"
        }
    ];
    return DatabaseTranslatedStringItemCreate;
}());
exports.DatabaseTranslatedStringItemCreate = DatabaseTranslatedStringItemCreate;
module.exports = DatabaseTranslatedStringItemCreate;
