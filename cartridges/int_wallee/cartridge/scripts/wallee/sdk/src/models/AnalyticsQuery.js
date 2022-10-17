"use strict";

var AnalyticsQuery = /** @class */ (function () {
    function AnalyticsQuery() {
    }
    AnalyticsQuery.getAttributeTypeMap = function () {
        return AnalyticsQuery.attributeTypeMap;
    };
    AnalyticsQuery.discriminator = undefined;
    AnalyticsQuery.attributeTypeMap = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "maxCacheAge",
            "baseName": "maxCacheAge",
            "type": "number"
        },
        {
            "name": "queryString",
            "baseName": "queryString",
            "type": "string"
        },
        {
            "name": "scannedDataLimit",
            "baseName": "scannedDataLimit",
            "type": "number"
        },
        {
            "name": "spaceIds",
            "baseName": "spaceIds",
            "type": "Array<number>"
        }
    ];
    return AnalyticsQuery;
}());
exports.AnalyticsQuery = AnalyticsQuery;
module.exports = AnalyticsQuery;
