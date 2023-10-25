"use strict";

exports.SubscriptionProductRetirement = void 0;
var SubscriptionProductRetirement = /** @class */ (function () {
    function SubscriptionProductRetirement() {
    }
    SubscriptionProductRetirement.getAttributeTypeMap = function () {
        return SubscriptionProductRetirement.attributeTypeMap;
    };
    SubscriptionProductRetirement.discriminator = undefined;
    SubscriptionProductRetirement.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
            "name": "product",
            "baseName": "product",
            "type": "SubscriptionProduct"
        },
        {
            "name": "respectTerminiationPeriodsEnabled",
            "baseName": "respectTerminiationPeriodsEnabled",
            "type": "boolean"
        },
        {
            "name": "targetProduct",
            "baseName": "targetProduct",
            "type": "SubscriptionProduct"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProductRetirement;
}());
exports.SubscriptionProductRetirement = SubscriptionProductRetirement;
module.exports = SubscriptionProductRetirement;
