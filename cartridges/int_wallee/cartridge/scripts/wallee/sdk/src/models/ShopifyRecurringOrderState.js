"use strict";

exports.ShopifyRecurringOrderState = void 0;
var ShopifyRecurringOrderState;
(function (ShopifyRecurringOrderState) {
    ShopifyRecurringOrderState["PENDING"] = "PENDING";
    ShopifyRecurringOrderState["ONHOLD"] = "ONHOLD";
    ShopifyRecurringOrderState["PROCESSING"] = "PROCESSING";
    ShopifyRecurringOrderState["CANCELED"] = "CANCELED";
    ShopifyRecurringOrderState["BILLED"] = "BILLED";
    ShopifyRecurringOrderState["FAILED"] = "FAILED";
})(ShopifyRecurringOrderState = exports.ShopifyRecurringOrderState || (exports.ShopifyRecurringOrderState = {}));
module.exports = ShopifyRecurringOrderState;
