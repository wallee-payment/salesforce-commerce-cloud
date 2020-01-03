"use strict";
exports.__esModule = true;
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
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
        }
    ];
    return SubscriptionMetricUpdate;
}());
exports.SubscriptionMetricUpdate = SubscriptionMetricUpdate;
module.exports = SubscriptionMetricUpdate;
