"use strict";

var SubscriptionProductRetirementCreate = /** @class */ (function () {
    function SubscriptionProductRetirementCreate() {
    }
    SubscriptionProductRetirementCreate.getAttributeTypeMap = function () {
        return SubscriptionProductRetirementCreate.attributeTypeMap;
    };
    SubscriptionProductRetirementCreate.discriminator = undefined;
    SubscriptionProductRetirementCreate.attributeTypeMap = [
        {
            "name": "product",
            "baseName": "product",
            "type": "number"
        },
        {
            "name": "respectTerminiationPeriodsEnabled",
            "baseName": "respectTerminiationPeriodsEnabled",
            "type": "boolean"
        },
        {
            "name": "targetProduct",
            "baseName": "targetProduct",
            "type": "number"
        }
    ];
    return SubscriptionProductRetirementCreate;
}());
exports.SubscriptionProductRetirementCreate = SubscriptionProductRetirementCreate;
module.exports = SubscriptionProductRetirementCreate;
