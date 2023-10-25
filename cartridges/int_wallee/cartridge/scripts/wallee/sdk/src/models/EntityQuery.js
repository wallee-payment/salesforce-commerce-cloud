"use strict";

exports.EntityQuery = void 0;
var EntityQuery = /** @class */ (function () {
    function EntityQuery() {
    }
    EntityQuery.getAttributeTypeMap = function () {
        return EntityQuery.attributeTypeMap;
    };
    EntityQuery.discriminator = undefined;
    EntityQuery.attributeTypeMap = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "EntityQueryFilter"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "numberOfEntities",
            "baseName": "numberOfEntities",
            "type": "number"
        },
        {
            "name": "orderBys",
            "baseName": "orderBys",
            "type": "Array<EntityQueryOrderBy>"
        },
        {
            "name": "startingEntity",
            "baseName": "startingEntity",
            "type": "number"
        }
    ];
    return EntityQuery;
}());
exports.EntityQuery = EntityQuery;
module.exports = EntityQuery;
