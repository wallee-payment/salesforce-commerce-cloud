"use strict";
exports.__esModule = true;
var TokenVersionType = /** @class */ (function () {
    function TokenVersionType() {
    }
    TokenVersionType.getAttributeTypeMap = function () {
        return TokenVersionType.attributeTypeMap;
    };
    TokenVersionType.discriminator = undefined;
    TokenVersionType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return TokenVersionType;
}());
exports.TokenVersionType = TokenVersionType;
module.exports = TokenVersionType;
