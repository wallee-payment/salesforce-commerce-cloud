"use strict";

var TransactionInvoiceState;
(function (TransactionInvoiceState) {
    TransactionInvoiceState["CREATE"] = "CREATE";
    TransactionInvoiceState["OPEN"] = "OPEN";
    TransactionInvoiceState["OVERDUE"] = "OVERDUE";
    TransactionInvoiceState["CANCELED"] = "CANCELED";
    TransactionInvoiceState["PAID"] = "PAID";
    TransactionInvoiceState["DERECOGNIZED"] = "DERECOGNIZED";
    TransactionInvoiceState["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(TransactionInvoiceState = exports.TransactionInvoiceState || (exports.TransactionInvoiceState = {}));
module.exports = TransactionInvoiceState;
