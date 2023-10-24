"use strict";

var TransactionCompletionState;
(function (TransactionCompletionState) {
    TransactionCompletionState["CREATE"] = "CREATE";
    TransactionCompletionState["SCHEDULED"] = "SCHEDULED";
    TransactionCompletionState["PENDING"] = "PENDING";
    TransactionCompletionState["FAILED"] = "FAILED";
    TransactionCompletionState["SUCCESSFUL"] = "SUCCESSFUL";
})(TransactionCompletionState = exports.TransactionCompletionState || (exports.TransactionCompletionState = {}));
module.exports = TransactionCompletionState;
