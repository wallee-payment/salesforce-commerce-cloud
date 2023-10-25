"use strict";

exports.AnalyticsSchemaTable = void 0;
var AnalyticsSchemaTable = /** @class */ (function () {
    function AnalyticsSchemaTable() {
    }
    AnalyticsSchemaTable.getAttributeTypeMap = function () {
        return AnalyticsSchemaTable.attributeTypeMap;
    };
    AnalyticsSchemaTable.discriminator = undefined;
    AnalyticsSchemaTable.attributeTypeMap = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<AnalyticsSchemaColumn>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tableName",
            "baseName": "tableName",
            "type": "string"
        }
    ];
    return AnalyticsSchemaTable;
}());
exports.AnalyticsSchemaTable = AnalyticsSchemaTable;
module.exports = AnalyticsSchemaTable;
