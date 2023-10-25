"use strict";

exports.TransactionState = void 0;
var TransactionState;
(function (TransactionState) {
    TransactionState["CREATE"] = "CREATE";
    TransactionState["PENDING"] = "PENDING";
    TransactionState["CONFIRMED"] = "CONFIRMED";
    TransactionState["PROCESSING"] = "PROCESSING";
    TransactionState["FAILED"] = "FAILED";
    TransactionState["AUTHORIZED"] = "AUTHORIZED";
    TransactionState["VOIDED"] = "VOIDED";
    TransactionState["COMPLETED"] = "COMPLETED";
    TransactionState["FULFILL"] = "FULFILL";
    TransactionState["DECLINE"] = "DECLINE";
})(TransactionState = exports.TransactionState || (exports.TransactionState = {}));
module.exports = TransactionState;
