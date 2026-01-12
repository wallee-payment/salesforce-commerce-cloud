"use strict";

exports.ChargeAttempt = void 0;
var ChargeAttempt = /** @class */ (function () {
    function ChargeAttempt() {
    }
    ChargeAttempt.getAttributeTypeMap = function () {
        return ChargeAttempt.attributeTypeMap;
    };
    ChargeAttempt.discriminator = undefined;
    ChargeAttempt.attributeTypeMap = [
        {
            "name": "charge",
            "baseName": "charge",
            "type": "Charge"
        },
        {
            "name": "completionBehavior",
            "baseName": "completionBehavior",
            "type": "TransactionCompletionBehavior"
        },
        {
            "name": "connectorConfiguration",
            "baseName": "connectorConfiguration",
            "type": "PaymentConnectorConfiguration"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "customersPresence",
            "baseName": "customersPresence",
            "type": "CustomersPresence"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ChargeAttemptEnvironment"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "initializingTokenVersion",
            "baseName": "initializingTokenVersion",
            "type": "boolean"
        },
        {
            "name": "invocation",
            "baseName": "invocation",
            "type": "ConnectorInvocation"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<Label>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        },
        {
            "name": "nextUpdateOn",
            "baseName": "nextUpdateOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "redirectionUrl",
            "baseName": "redirectionUrl",
            "type": "string"
        },
        {
            "name": "salesChannel",
            "baseName": "salesChannel",
            "type": "number"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ChargeAttemptState"
        },
        {
            "name": "succeededOn",
            "baseName": "succeededOn",
            "type": "Date"
        },
        {
            "name": "terminal",
            "baseName": "terminal",
            "type": "PaymentTerminal"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "tokenVersion",
            "baseName": "tokenVersion",
            "type": "TokenVersion"
        },
        {
            "name": "userFailureMessage",
            "baseName": "userFailureMessage",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "WalletType"
        }
    ];
    return ChargeAttempt;
}());
exports.ChargeAttempt = ChargeAttempt;
module.exports = ChargeAttempt;
