"use strict";

var RoleState;
(function (RoleState) {
    RoleState["CREATE"] = "CREATE";
    RoleState["ACTIVE"] = "ACTIVE";
    RoleState["DELETING"] = "DELETING";
    RoleState["DELETED"] = "DELETED";
})(RoleState = exports.RoleState || (exports.RoleState = {}));
module.exports = RoleState;
