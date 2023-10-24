"use strict";

var SubscriptionCreateRequest = /** @class */ (function () {
    function SubscriptionCreateRequest() {
    }
    SubscriptionCreateRequest.getAttributeTypeMap = function () {
        return SubscriptionCreateRequest.attributeTypeMap;
    };
    SubscriptionCreateRequest.discriminator = undefined;
    SubscriptionCreateRequest.attributeTypeMap = [
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
            "name": "selectedComponents",
            "baseName": "selectedComponents",
            "type": "Array<SubscriptionProductComponentReference>"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionPending"
        }
    ];
    return SubscriptionCreateRequest;
}());
exports.SubscriptionCreateRequest = SubscriptionCreateRequest;
module.exports = SubscriptionCreateRequest;
