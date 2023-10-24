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

var TransactionAwareEntity = require("./TransactionAwareEntity");
var ShopifyTransaction = /** @class */ (function (_super) {
    __extends(ShopifyTransaction, _super);
    function ShopifyTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopifyTransaction.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ShopifyTransaction.attributeTypeMap);
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
            "name": "integration",
            "baseName": "integration",
            "type": "ShopifyIntegration"
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
}(TransactionAwareEntity));
exports.ShopifyTransaction = ShopifyTransaction;
module.exports = ShopifyTransaction;
