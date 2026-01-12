"use strict";

exports.ShopifyTransaction = void 0;
var ShopifyTransaction = /** @class */ (function () {
    function ShopifyTransaction() {
    }
    ShopifyTransaction.getAttributeTypeMap = function () {
        return ShopifyTransaction.attributeTypeMap;
    };
    ShopifyTransaction.discriminator = undefined;
    ShopifyTransaction.attributeTypeMap = [
        {
            "name": "checkoutId",
            "baseName": "checkoutId",
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
            "name": "draftOrderLegacyId",
            "baseName": "draftOrderLegacyId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "ShopifyV1Integration"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ShopifyTransactionState"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifyTransaction;
}());
exports.ShopifyTransaction = ShopifyTransaction;
module.exports = ShopifyTransaction;
