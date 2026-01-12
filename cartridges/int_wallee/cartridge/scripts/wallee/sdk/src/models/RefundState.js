"use strict";

exports.RefundState = void 0;
var RefundState;
(function (RefundState) {
    RefundState["CREATE"] = "CREATE";
    RefundState["SCHEDULED"] = "SCHEDULED";
    RefundState["PENDING"] = "PENDING";
    RefundState["MANUAL_CHECK"] = "MANUAL_CHECK";
    RefundState["FAILED"] = "FAILED";
    RefundState["SUCCESSFUL"] = "SUCCESSFUL";
})(RefundState = exports.RefundState || (exports.RefundState = {}));
module.exports = RefundState;
