"use strict";
exports.__esModule = true;
var DatabaseTranslatedStringCreate = /** @class */ (function () {
    function DatabaseTranslatedStringCreate() {
    }
    DatabaseTranslatedStringCreate.getAttributeTypeMap = function () {
        return DatabaseTranslatedStringCreate.attributeTypeMap;
    };
    DatabaseTranslatedStringCreate.discriminator = undefined;
    DatabaseTranslatedStringCreate.attributeTypeMap = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<DatabaseTranslatedStringItemCreate>"
        }
    ];
    return DatabaseTranslatedStringCreate;
}());
exports.DatabaseTranslatedStringCreate = DatabaseTranslatedStringCreate;
module.exports = DatabaseTranslatedStringCreate;
