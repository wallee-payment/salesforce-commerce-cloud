"use strict";

var ShopifySubscriptionSuspension = /** @class */ (function () {
    function ShopifySubscriptionSuspension() {
    }
    ShopifySubscriptionSuspension.getAttributeTypeMap = function () {
        return ShopifySubscriptionSuspension.attributeTypeMap;
    };
    ShopifySubscriptionSuspension.discriminator = undefined;
    ShopifySubscriptionSuspension.attributeTypeMap = [
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "endedBy",
            "baseName": "endedBy",
            "type": "number"
        },
        {
            "name": "endedOn",
            "baseName": "endedOn",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "initiator",
            "baseName": "initiator",
            "type": "ShopifySubscriptionSuspensionInitiator"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "plannedEndDate",
            "baseName": "plannedEndDate",
            "type": "Date"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ShopifySubscriptionSuspensionState"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "ShopifySubscription"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ShopifySubscriptionSuspensionType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifySubscriptionSuspension;
}());
exports.ShopifySubscriptionSuspension = ShopifySubscriptionSuspension;
module.exports = ShopifySubscriptionSuspension;
