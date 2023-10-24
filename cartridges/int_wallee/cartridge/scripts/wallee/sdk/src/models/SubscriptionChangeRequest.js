"use strict";

var SubscriptionChangeRequest = /** @class */ (function () {
    function SubscriptionChangeRequest() {
    }
    SubscriptionChangeRequest.getAttributeTypeMap = function () {
        return SubscriptionChangeRequest.attributeTypeMap;
    };
    SubscriptionChangeRequest.discriminator = undefined;
    SubscriptionChangeRequest.attributeTypeMap = [
        {
            "name": "componentConfigurations",
            "baseName": "componentConfigurations",
            "type": "Array<SubscriptionComponentReferenceConfiguration>"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "number"
        },
        {
            "name": "respectTerminationPeriod",
            "baseName": "respectTerminationPeriod",
            "type": "boolean"
        },
        {
            "name": "selectedComponents",
            "baseName": "selectedComponents",
            "type": "Array<SubscriptionProductComponentReference>"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        }
    ];
    return SubscriptionChangeRequest;
}());
exports.SubscriptionChangeRequest = SubscriptionChangeRequest;
module.exports = SubscriptionChangeRequest;
