"use strict";

var SubscriptionProduct = /** @class */ (function () {
    function SubscriptionProduct() {
    }
    SubscriptionProduct.getAttributeTypeMap = function () {
        return SubscriptionProduct.attributeTypeMap;
    };
    SubscriptionProduct.discriminator = undefined;
    SubscriptionProduct.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionProductState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProduct;
}());
exports.SubscriptionProduct = SubscriptionProduct;
module.exports = SubscriptionProduct;
