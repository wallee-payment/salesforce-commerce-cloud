"use strict";

exports.ShopifyRecurringOrder = void 0;
var ShopifyRecurringOrder = /** @class */ (function () {
    function ShopifyRecurringOrder() {
    }
    ShopifyRecurringOrder.getAttributeTypeMap = function () {
        return ShopifyRecurringOrder.attributeTypeMap;
    };
    ShopifyRecurringOrder.discriminator = undefined;
    ShopifyRecurringOrder.attributeTypeMap = [
        {
            "name": "billedOn",
            "baseName": "billedOn",
            "type": "Date"
        },
        {
            "name": "checkoutToken",
            "baseName": "checkoutToken",
            "type": "string"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "draftOrderId",
            "baseName": "draftOrderId",
            "type": "string"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
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
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        },
        {
            "name": "orderId",
            "baseName": "orderId",
            "type": "string"
        },
        {
            "name": "orderLegacyId",
            "baseName": "orderLegacyId",
            "type": "string"
        },
        {
            "name": "orderName",
            "baseName": "orderName",
            "type": "string"
        },
        {
            "name": "plannedExecutionDate",
            "baseName": "plannedExecutionDate",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "recurrenceNumber",
            "baseName": "recurrenceNumber",
            "type": "number"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "number"
        },
        {
            "name": "startedProcessingOn",
            "baseName": "startedProcessingOn",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ShopifyRecurringOrderState"
        },
        {
            "name": "subscriptionVersion",
            "baseName": "subscriptionVersion",
            "type": "ShopifySubscriptionVersion"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "ShopifyTransaction"
        }
    ];
    return ShopifyRecurringOrder;
}());
exports.ShopifyRecurringOrder = ShopifyRecurringOrder;
module.exports = ShopifyRecurringOrder;
