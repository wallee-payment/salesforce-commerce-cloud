"use strict";

exports.TransactionEnvironmentSelectionStrategy = void 0;
var TransactionEnvironmentSelectionStrategy;
(function (TransactionEnvironmentSelectionStrategy) {
    TransactionEnvironmentSelectionStrategy["FORCE_TEST_ENVIRONMENT"] = "FORCE_TEST_ENVIRONMENT";
    TransactionEnvironmentSelectionStrategy["FORCE_PRODUCTION_ENVIRONMENT"] = "FORCE_PRODUCTION_ENVIRONMENT";
    TransactionEnvironmentSelectionStrategy["USE_CONFIGURATION"] = "USE_CONFIGURATION";
})(TransactionEnvironmentSelectionStrategy = exports.TransactionEnvironmentSelectionStrategy || (exports.TransactionEnvironmentSelectionStrategy = {}));
module.exports = TransactionEnvironmentSelectionStrategy;
