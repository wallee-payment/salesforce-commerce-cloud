"use strict";
exports.__esModule = true;
var SubscriptionComponentConfiguration = /** @class */ (function () {
    function SubscriptionComponentConfiguration() {
    }
    SubscriptionComponentConfiguration.getAttributeTypeMap = function () {
        return SubscriptionComponentConfiguration.attributeTypeMap;
    };
    SubscriptionComponentConfiguration.discriminator = undefined;
    SubscriptionComponentConfiguration.attributeTypeMap = [
        {
            "name": "component",
            "baseName": "component",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }
    ];
    return SubscriptionComponentConfiguration;
}());
exports.SubscriptionComponentConfiguration = SubscriptionComponentConfiguration;
module.exports = SubscriptionComponentConfiguration;
