"use strict";
exports.__esModule = true;
var SubscriptionComponentReferenceConfiguration = /** @class */ (function () {
    function SubscriptionComponentReferenceConfiguration() {
    }
    SubscriptionComponentReferenceConfiguration.getAttributeTypeMap = function () {
        return SubscriptionComponentReferenceConfiguration.attributeTypeMap;
    };
    SubscriptionComponentReferenceConfiguration.discriminator = undefined;
    SubscriptionComponentReferenceConfiguration.attributeTypeMap = [
        {
            "name": "productComponentReferenceId",
            "baseName": "productComponentReferenceId",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }
    ];
    return SubscriptionComponentReferenceConfiguration;
}());
exports.SubscriptionComponentReferenceConfiguration = SubscriptionComponentReferenceConfiguration;
module.exports = SubscriptionComponentReferenceConfiguration;
