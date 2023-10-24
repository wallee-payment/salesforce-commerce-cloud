"use strict";

var ShopifySubscriptionState;
(function (ShopifySubscriptionState) {
    ShopifySubscriptionState["INITIATING"] = "INITIATING";
    ShopifySubscriptionState["FAILED"] = "FAILED";
    ShopifySubscriptionState["ACTIVE"] = "ACTIVE";
    ShopifySubscriptionState["SUSPENDED"] = "SUSPENDED";
    ShopifySubscriptionState["TERMINATING"] = "TERMINATING";
    ShopifySubscriptionState["TERMINATED"] = "TERMINATED";
})(ShopifySubscriptionState = exports.ShopifySubscriptionState || (exports.ShopifySubscriptionState = {}));
module.exports = ShopifySubscriptionState;
