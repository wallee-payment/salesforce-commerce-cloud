"use strict";

exports.SubscriptionMetricUsageReport = void 0;
var SubscriptionMetricUsageReport = /** @class */ (function () {
    function SubscriptionMetricUsageReport() {
    }
    SubscriptionMetricUsageReport.getAttributeTypeMap = function () {
        return SubscriptionMetricUsageReport.attributeTypeMap;
    };
    SubscriptionMetricUsageReport.discriminator = undefined;
    SubscriptionMetricUsageReport.attributeTypeMap = [
        {
            "name": "consumedUnits",
            "baseName": "consumedUnits",
            "type": "number"
        },
        {
            "name": "createdByUserId",
            "baseName": "createdByUserId",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "number"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionMetricUsageReport;
}());
exports.SubscriptionMetricUsageReport = SubscriptionMetricUsageReport;
module.exports = SubscriptionMetricUsageReport;
