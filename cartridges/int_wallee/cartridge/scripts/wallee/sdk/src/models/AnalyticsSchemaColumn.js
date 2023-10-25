"use strict";

exports.AnalyticsSchemaColumn = void 0;
var AnalyticsSchemaColumn = /** @class */ (function () {
    function AnalyticsSchemaColumn() {
    }
    AnalyticsSchemaColumn.getAttributeTypeMap = function () {
        return AnalyticsSchemaColumn.attributeTypeMap;
    };
    AnalyticsSchemaColumn.discriminator = undefined;
    AnalyticsSchemaColumn.attributeTypeMap = [
        {
            "name": "aliasName",
            "baseName": "aliasName",
            "type": "string"
        },
        {
            "name": "columnName",
            "baseName": "columnName",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "precision",
            "baseName": "precision",
            "type": "number"
        },
        {
            "name": "referencedTable",
            "baseName": "referencedTable",
            "type": "string"
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "number"
        },
        {
            "name": "tableName",
            "baseName": "tableName",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return AnalyticsSchemaColumn;
}());
exports.AnalyticsSchemaColumn = AnalyticsSchemaColumn;
module.exports = AnalyticsSchemaColumn;
