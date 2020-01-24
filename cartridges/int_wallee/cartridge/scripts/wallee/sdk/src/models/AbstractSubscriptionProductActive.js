"use strict";

var AbstractSubscriptionProductActive = /** @class */ (function () {
    function AbstractSubscriptionProductActive() {
    }
    AbstractSubscriptionProductActive.getAttributeTypeMap = function () {
        return AbstractSubscriptionProductActive.attributeTypeMap;
    };
    AbstractSubscriptionProductActive.discriminator = undefined;
    AbstractSubscriptionProductActive.attributeTypeMap = [
        {
            "name": "allowedPaymentMethodConfigurations",
            "baseName": "allowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "failedPaymentSuspensionPeriod",
            "baseName": "failedPaymentSuspensionPeriod",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionProductState"
        }
    ];
    return AbstractSubscriptionProductActive;
}());
exports.AbstractSubscriptionProductActive = AbstractSubscriptionProductActive;
module.exports = AbstractSubscriptionProductActive;
