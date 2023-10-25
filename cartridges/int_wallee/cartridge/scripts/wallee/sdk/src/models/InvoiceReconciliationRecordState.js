"use strict";

exports.InvoiceReconciliationRecordState = void 0;
var InvoiceReconciliationRecordState;
(function (InvoiceReconciliationRecordState) {
    InvoiceReconciliationRecordState["CREATE"] = "CREATE";
    InvoiceReconciliationRecordState["PENDING"] = "PENDING";
    InvoiceReconciliationRecordState["UNRESOLVED"] = "UNRESOLVED";
    InvoiceReconciliationRecordState["RESOLVED"] = "RESOLVED";
    InvoiceReconciliationRecordState["DISCARDED"] = "DISCARDED";
})(InvoiceReconciliationRecordState = exports.InvoiceReconciliationRecordState || (exports.InvoiceReconciliationRecordState = {}));
module.exports = InvoiceReconciliationRecordState;
