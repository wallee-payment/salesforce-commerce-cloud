"use strict";

exports.InstallmentPaymentSliceState = void 0;
var InstallmentPaymentSliceState;
(function (InstallmentPaymentSliceState) {
    InstallmentPaymentSliceState["CREATE"] = "CREATE";
    InstallmentPaymentSliceState["SCHEDULED"] = "SCHEDULED";
    InstallmentPaymentSliceState["CANCELED"] = "CANCELED";
    InstallmentPaymentSliceState["PREPARE_PROCESSING"] = "PREPARE_PROCESSING";
    InstallmentPaymentSliceState["PROCESSING"] = "PROCESSING";
    InstallmentPaymentSliceState["FAILED"] = "FAILED";
    InstallmentPaymentSliceState["SUCCESSFUL"] = "SUCCESSFUL";
})(InstallmentPaymentSliceState = exports.InstallmentPaymentSliceState || (exports.InstallmentPaymentSliceState = {}));
module.exports = InstallmentPaymentSliceState;
