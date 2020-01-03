"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var ChargeAttempt = /** @class */ (function (_super) {
    __extends(ChargeAttempt, _super);
    function ChargeAttempt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargeAttempt.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ChargeAttempt.attributeTypeMap);
    };
    ChargeAttempt.discriminator = undefined;
    ChargeAttempt.attributeTypeMap = [
        {
            "name": "charge",
            "baseName": "charge",
            "type": "Charge"
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
        }
    ];
    return ChargeAttempt;
}(TransactionAwareEntity));
exports.ChargeAttempt = ChargeAttempt;
module.exports = ChargeAttempt;
