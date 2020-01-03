"use strict";
exports.__esModule = true;
var EntityQueryOrderBy = /** @class */ (function () {
    function EntityQueryOrderBy() {
    }
    EntityQueryOrderBy.getAttributeTypeMap = function () {
        return EntityQueryOrderBy.attributeTypeMap;
    };
    EntityQueryOrderBy.discriminator = undefined;
    EntityQueryOrderBy.attributeTypeMap = [
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "string"
        },
        {
            "name": "sorting",
            "baseName": "sorting",
            "type": "EntityQueryOrderByType"
        }
    ];
    return EntityQueryOrderBy;
}());
exports.EntityQueryOrderBy = EntityQueryOrderBy;
module.exports = EntityQueryOrderBy;
