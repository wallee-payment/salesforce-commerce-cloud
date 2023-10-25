"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.ShopifyRecurringOrder = void 0;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var ShopifyRecurringOrder = /** @class */ (function (_super) {
    __extends(ShopifyRecurringOrder, _super);
    function ShopifyRecurringOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopifyRecurringOrder.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ShopifyRecurringOrder.attributeTypeMap);
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
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "orderId",
            "baseName": "orderId",
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
}(TransactionAwareEntity));
exports.ShopifyRecurringOrder = ShopifyRecurringOrder;
module.exports = ShopifyRecurringOrder;
