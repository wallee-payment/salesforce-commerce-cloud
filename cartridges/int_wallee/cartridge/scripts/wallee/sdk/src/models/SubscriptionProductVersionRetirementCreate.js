"use strict";

exports.SubscriptionProductVersionRetirementCreate = void 0;
var SubscriptionProductVersionRetirementCreate = /** @class */ (function () {
    function SubscriptionProductVersionRetirementCreate() {
    }
    SubscriptionProductVersionRetirementCreate.getAttributeTypeMap = function () {
        return SubscriptionProductVersionRetirementCreate.attributeTypeMap;
    };
    SubscriptionProductVersionRetirementCreate.discriminator = undefined;
    SubscriptionProductVersionRetirementCreate.attributeTypeMap = [
        {
            "name": "productVersion",
            "baseName": "productVersion",
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
    return SubscriptionProductVersionRetirementCreate;
}());
exports.SubscriptionProductVersionRetirementCreate = SubscriptionProductVersionRetirementCreate;
module.exports = SubscriptionProductVersionRetirementCreate;
