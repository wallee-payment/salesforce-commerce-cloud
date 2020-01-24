"use strict";

var AccountState;
(function (AccountState) {
    AccountState["CREATE"] = "CREATE";
    AccountState["RESTRICTED_ACTIVE"] = "RESTRICTED_ACTIVE";
    AccountState["ACTIVE"] = "ACTIVE";
    AccountState["INACTIVE"] = "INACTIVE";
    AccountState["DELETING"] = "DELETING";
    AccountState["DELETED"] = "DELETED";
})(AccountState = exports.AccountState || (exports.AccountState = {}));
module.exports = AccountState;
