"use strict";

var AnalyticsQueryResultBatch = /** @class */ (function () {
    function AnalyticsQueryResultBatch() {
    }
    AnalyticsQueryResultBatch.getAttributeTypeMap = function () {
        return AnalyticsQueryResultBatch.attributeTypeMap;
    };
    AnalyticsQueryResultBatch.discriminator = undefined;
    AnalyticsQueryResultBatch.attributeTypeMap = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<AnalyticsSchemaColumn>"
        },
        {
            "name": "nextToken",
            "baseName": "nextToken",
            "type": "string"
        },
        {
            "name": "queryExecution",
            "baseName": "queryExecution",
            "type": "AnalyticsQueryExecution"
        },
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<Array<string>>"
        }
    ];
    return AnalyticsQueryResultBatch;
}());
exports.AnalyticsQueryResultBatch = AnalyticsQueryResultBatch;
module.exports = AnalyticsQueryResultBatch;
