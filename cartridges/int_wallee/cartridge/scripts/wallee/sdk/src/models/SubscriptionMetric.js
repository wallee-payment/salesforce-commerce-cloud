"use strict";

var SubscriptionMetric = /** @class */ (function () {
    function SubscriptionMetric() {
    }
    SubscriptionMetric.getAttributeTypeMap = function () {
        return SubscriptionMetric.attributeTypeMap;
    };
    SubscriptionMetric.discriminator = undefined;
    SubscriptionMetric.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionMetricType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionMetric;
}());
exports.SubscriptionMetric = SubscriptionMetric;
module.exports = SubscriptionMetric;
