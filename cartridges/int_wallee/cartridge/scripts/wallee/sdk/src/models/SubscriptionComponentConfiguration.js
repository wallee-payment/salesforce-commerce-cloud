"use strict";

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
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionComponentConfiguration;
}());
exports.SubscriptionComponentConfiguration = SubscriptionComponentConfiguration;
module.exports = SubscriptionComponentConfiguration;
