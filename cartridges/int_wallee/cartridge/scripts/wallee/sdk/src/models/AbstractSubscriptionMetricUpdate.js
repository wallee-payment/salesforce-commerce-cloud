"use strict";

var AbstractSubscriptionMetricUpdate = /** @class */ (function () {
    function AbstractSubscriptionMetricUpdate() {
    }
    AbstractSubscriptionMetricUpdate.getAttributeTypeMap = function () {
        return AbstractSubscriptionMetricUpdate.attributeTypeMap;
    };
    AbstractSubscriptionMetricUpdate.discriminator = undefined;
    AbstractSubscriptionMetricUpdate.attributeTypeMap = [
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
    return AbstractSubscriptionMetricUpdate;
}());
exports.AbstractSubscriptionMetricUpdate = AbstractSubscriptionMetricUpdate;
module.exports = AbstractSubscriptionMetricUpdate;
