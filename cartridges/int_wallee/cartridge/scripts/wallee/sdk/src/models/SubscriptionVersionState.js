"use strict";

exports.SubscriptionVersionState = void 0;
var SubscriptionVersionState;
(function (SubscriptionVersionState) {
    SubscriptionVersionState["PENDING"] = "PENDING";
    SubscriptionVersionState["INITIALIZING"] = "INITIALIZING";
    SubscriptionVersionState["FAILED"] = "FAILED";
    SubscriptionVersionState["ACTIVE"] = "ACTIVE";
    SubscriptionVersionState["TERMINATING"] = "TERMINATING";
    SubscriptionVersionState["TERMINATED"] = "TERMINATED";
})(SubscriptionVersionState = exports.SubscriptionVersionState || (exports.SubscriptionVersionState = {}));
module.exports = SubscriptionVersionState;
