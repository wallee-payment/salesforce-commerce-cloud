"use strict";

var InstallmentPaymentState;
(function (InstallmentPaymentState) {
    InstallmentPaymentState["CREATE"] = "CREATE";
    InstallmentPaymentState["CONFIRMED"] = "CONFIRMED";
    InstallmentPaymentState["AUTHORIZED"] = "AUTHORIZED";
    InstallmentPaymentState["REJECTED"] = "REJECTED";
    InstallmentPaymentState["COMPLETED"] = "COMPLETED";
    InstallmentPaymentState["RUNNING"] = "RUNNING";
    InstallmentPaymentState["DONE"] = "DONE";
    InstallmentPaymentState["DEFAULTED"] = "DEFAULTED";
})(InstallmentPaymentState = exports.InstallmentPaymentState || (exports.InstallmentPaymentState = {}));
module.exports = InstallmentPaymentState;
