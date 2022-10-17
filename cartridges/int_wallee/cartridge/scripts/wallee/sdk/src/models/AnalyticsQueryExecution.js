"use strict";

var AnalyticsQueryExecution = /** @class */ (function () {
    function AnalyticsQueryExecution() {
    }
    AnalyticsQueryExecution.getAttributeTypeMap = function () {
        return AnalyticsQueryExecution.attributeTypeMap;
    };
    AnalyticsQueryExecution.discriminator = undefined;
    AnalyticsQueryExecution.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "processingEndTime",
            "baseName": "processingEndTime",
            "type": "Date"
        },
        {
            "name": "processingStartTime",
            "baseName": "processingStartTime",
            "type": "Date"
        },
        {
            "name": "queryString",
            "baseName": "queryString",
            "type": "string"
        },
        {
            "name": "scannedDataInGb",
            "baseName": "scannedDataInGb",
            "type": "number"
        },
        {
            "name": "scannedDataLimit",
            "baseName": "scannedDataLimit",
            "type": "number"
        },
        {
            "name": "spaces",
            "baseName": "spaces",
            "type": "Array<number>"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AnalyticsQueryExecutionState"
        }
    ];
    return AnalyticsQueryExecution;
}());
exports.AnalyticsQueryExecution = AnalyticsQueryExecution;
module.exports = AnalyticsQueryExecution;
