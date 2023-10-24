"use strict";

var SubscriptionMetricUpdate = /** @class */ (function () {
    function SubscriptionMetricUpdate() {
    }
    SubscriptionMetricUpdate.getAttributeTypeMap = function () {
        return SubscriptionMetricUpdate.attributeTypeMap;
    };
    SubscriptionMetricUpdate.discriminator = undefined;
    SubscriptionMetricUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return SubscriptionMetricUpdate;
}());
exports.SubscriptionMetricUpdate = SubscriptionMetricUpdate;
module.exports = SubscriptionMetricUpdate;
