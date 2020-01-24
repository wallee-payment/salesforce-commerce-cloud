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
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
        }
    ];
    return AbstractSubscriptionMetricUpdate;
}());
exports.AbstractSubscriptionMetricUpdate = AbstractSubscriptionMetricUpdate;
module.exports = AbstractSubscriptionMetricUpdate;
