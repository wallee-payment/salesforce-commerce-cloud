"use strict";

var InvoiceReimbursementState;
(function (InvoiceReimbursementState) {
    InvoiceReimbursementState["PENDING"] = "PENDING";
    InvoiceReimbursementState["MANUAL_REVIEW"] = "MANUAL_REVIEW";
    InvoiceReimbursementState["PROCESSING"] = "PROCESSING";
    InvoiceReimbursementState["PROCESSED"] = "PROCESSED";
    InvoiceReimbursementState["DISCARDED"] = "DISCARDED";
})(InvoiceReimbursementState = exports.InvoiceReimbursementState || (exports.InvoiceReimbursementState = {}));
module.exports = InvoiceReimbursementState;
