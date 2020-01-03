"use strict";
exports.__esModule = true;
var SubscriptionProductVersionRetirement = /** @class */ (function () {
    function SubscriptionProductVersionRetirement() {
    }
    SubscriptionProductVersionRetirement.getAttributeTypeMap = function () {
        return SubscriptionProductVersionRetirement.attributeTypeMap;
    };
    SubscriptionProductVersionRetirement.discriminator = undefined;
    SubscriptionProductVersionRetirement.attributeTypeMap = [
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
            "name": "productVersion",
            "baseName": "productVersion",
            "type": "SubscriptionProductVersion"
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
    return SubscriptionProductVersionRetirement;
}());
exports.SubscriptionProductVersionRetirement = SubscriptionProductVersionRetirement;
module.exports = SubscriptionProductVersionRetirement;
