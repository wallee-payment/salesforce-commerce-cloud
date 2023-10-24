"use strict";

var ShopifySubscriptionSuspensionCreate = /** @class */ (function () {
    function ShopifySubscriptionSuspensionCreate() {
    }
    ShopifySubscriptionSuspensionCreate.getAttributeTypeMap = function () {
        return ShopifySubscriptionSuspensionCreate.attributeTypeMap;
    };
    ShopifySubscriptionSuspensionCreate.discriminator = undefined;
    ShopifySubscriptionSuspensionCreate.attributeTypeMap = [
        {
            "name": "plannedEndDate",
            "baseName": "plannedEndDate",
            "type": "Date"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ShopifySubscriptionSuspensionType"
        }
    ];
    return ShopifySubscriptionSuspensionCreate;
}());
exports.ShopifySubscriptionSuspensionCreate = ShopifySubscriptionSuspensionCreate;
module.exports = ShopifySubscriptionSuspensionCreate;
