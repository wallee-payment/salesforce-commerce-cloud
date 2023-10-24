"use strict";

var TransactionVoidState;
(function (TransactionVoidState) {
    TransactionVoidState["CREATE"] = "CREATE";
    TransactionVoidState["PENDING"] = "PENDING";
    TransactionVoidState["FAILED"] = "FAILED";
    TransactionVoidState["SUCCESSFUL"] = "SUCCESSFUL";
})(TransactionVoidState = exports.TransactionVoidState || (exports.TransactionVoidState = {}));
module.exports = TransactionVoidState;
