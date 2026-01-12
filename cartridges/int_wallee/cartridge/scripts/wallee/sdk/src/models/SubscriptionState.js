"use strict";

exports.SubscriptionState = void 0;
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["PENDING"] = "PENDING";
    SubscriptionState["INITIALIZING"] = "INITIALIZING";
    SubscriptionState["FAILED"] = "FAILED";
    SubscriptionState["ACTIVE"] = "ACTIVE";
    SubscriptionState["SUSPENDED"] = "SUSPENDED";
    SubscriptionState["TERMINATION_SCHEDULED"] = "TERMINATION_SCHEDULED";
    SubscriptionState["TERMINATING"] = "TERMINATING";
    SubscriptionState["TERMINATED"] = "TERMINATED";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
module.exports = SubscriptionState;
