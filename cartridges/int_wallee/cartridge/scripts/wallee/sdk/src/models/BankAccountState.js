"use strict";

var BankAccountState;
(function (BankAccountState) {
    BankAccountState["CREATE"] = "CREATE";
    BankAccountState["ACTIVE"] = "ACTIVE";
    BankAccountState["DELETING"] = "DELETING";
    BankAccountState["DELETED"] = "DELETED";
})(BankAccountState = exports.BankAccountState || (exports.BankAccountState = {}));
module.exports = BankAccountState;
