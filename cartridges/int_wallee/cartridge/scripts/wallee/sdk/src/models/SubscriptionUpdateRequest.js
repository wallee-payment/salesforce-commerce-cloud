"use strict";

exports.SubscriptionUpdateRequest = void 0;
var SubscriptionUpdateRequest = /** @class */ (function () {
    function SubscriptionUpdateRequest() {
    }
    SubscriptionUpdateRequest.getAttributeTypeMap = function () {
        return SubscriptionUpdateRequest.attributeTypeMap;
    };
    SubscriptionUpdateRequest.discriminator = undefined;
    SubscriptionUpdateRequest.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }
    ];
    return SubscriptionUpdateRequest;
}());
exports.SubscriptionUpdateRequest = SubscriptionUpdateRequest;
module.exports = SubscriptionUpdateRequest;
