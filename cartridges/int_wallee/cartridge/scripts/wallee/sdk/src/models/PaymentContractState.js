"use strict";

exports.PaymentContractState = void 0;
var PaymentContractState;
(function (PaymentContractState) {
    PaymentContractState["PENDING"] = "PENDING";
    PaymentContractState["ACTIVE"] = "ACTIVE";
    PaymentContractState["TERMINATING"] = "TERMINATING";
    PaymentContractState["TERMINATED"] = "TERMINATED";
    PaymentContractState["REJECTED"] = "REJECTED";
})(PaymentContractState = exports.PaymentContractState || (exports.PaymentContractState = {}));
module.exports = PaymentContractState;
