"use strict";

exports.ShopifyTransactionState = void 0;
var ShopifyTransactionState;
(function (ShopifyTransactionState) {
    ShopifyTransactionState["PENDING"] = "PENDING";
    ShopifyTransactionState["AUTHORIZED"] = "AUTHORIZED";
    ShopifyTransactionState["COMPLETED"] = "COMPLETED";
    ShopifyTransactionState["FAILED"] = "FAILED";
    ShopifyTransactionState["CONFLICTING"] = "CONFLICTING";
})(ShopifyTransactionState = exports.ShopifyTransactionState || (exports.ShopifyTransactionState = {}));
module.exports = ShopifyTransactionState;
