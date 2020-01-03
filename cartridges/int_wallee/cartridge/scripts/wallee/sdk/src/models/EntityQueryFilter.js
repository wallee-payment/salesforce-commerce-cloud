"use strict";
exports.__esModule = true;
var EntityQueryFilter = /** @class */ (function () {
    function EntityQueryFilter() {
    }
    EntityQueryFilter.getAttributeTypeMap = function () {
        return EntityQueryFilter.attributeTypeMap;
    };
    EntityQueryFilter.discriminator = undefined;
    EntityQueryFilter.attributeTypeMap = [
        {
            "name": "children",
            "baseName": "children",
            "type": "Array<EntityQueryFilter>"
        },
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "CriteriaOperator"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EntityQueryFilterType"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any"
        }
    ];
    return EntityQueryFilter;
}());
exports.EntityQueryFilter = EntityQueryFilter;
module.exports = EntityQueryFilter;
