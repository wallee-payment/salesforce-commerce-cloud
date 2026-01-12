"use strict";

exports.SubscriptionMetricUsageReportCreate = void 0;
var SubscriptionMetricUsageReportCreate = /** @class */ (function () {
    function SubscriptionMetricUsageReportCreate() {
    }
    SubscriptionMetricUsageReportCreate.getAttributeTypeMap = function () {
        return SubscriptionMetricUsageReportCreate.attributeTypeMap;
    };
    SubscriptionMetricUsageReportCreate.discriminator = undefined;
    SubscriptionMetricUsageReportCreate.attributeTypeMap = [
        {
            "name": "consumedUnits",
            "baseName": "consumedUnits",
            "type": "number"
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
            "name": "metric",
            "baseName": "metric",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        }
    ];
    return SubscriptionMetricUsageReportCreate;
}());
exports.SubscriptionMetricUsageReportCreate = SubscriptionMetricUsageReportCreate;
module.exports = SubscriptionMetricUsageReportCreate;
