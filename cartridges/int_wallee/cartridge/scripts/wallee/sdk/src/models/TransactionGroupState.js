"use strict";

var TransactionGroupState;
(function (TransactionGroupState) {
    TransactionGroupState["PENDING"] = "PENDING";
    TransactionGroupState["FAILED"] = "FAILED";
    TransactionGroupState["SUCCESSFUL"] = "SUCCESSFUL";
})(TransactionGroupState = exports.TransactionGroupState || (exports.TransactionGroupState = {}));
module.exports = TransactionGroupState;
