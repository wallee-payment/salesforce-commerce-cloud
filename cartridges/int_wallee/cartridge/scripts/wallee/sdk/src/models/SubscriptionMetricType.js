"use strict";
exports.__esModule = true;
var SubscriptionMetricType = /** @class */ (function () {
    function SubscriptionMetricType() {
    }
    SubscriptionMetricType.getAttributeTypeMap = function () {
        return SubscriptionMetricType.attributeTypeMap;
    };
    SubscriptionMetricType.discriminator = undefined;
    SubscriptionMetricType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return SubscriptionMetricType;
}());
exports.SubscriptionMetricType = SubscriptionMetricType;
module.exports = SubscriptionMetricType;
