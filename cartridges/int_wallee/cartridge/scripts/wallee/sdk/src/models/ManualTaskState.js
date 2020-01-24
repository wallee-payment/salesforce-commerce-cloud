"use strict";

var ManualTaskState;
(function (ManualTaskState) {
    ManualTaskState["OPEN"] = "OPEN";
    ManualTaskState["DONE"] = "DONE";
    ManualTaskState["EXPIRED"] = "EXPIRED";
})(ManualTaskState = exports.ManualTaskState || (exports.ManualTaskState = {}));
module.exports = ManualTaskState;
