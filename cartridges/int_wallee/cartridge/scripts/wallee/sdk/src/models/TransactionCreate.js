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

exports.TransactionCreate = void 0;
var AbstractTransactionPending = require("./AbstractTransactionPending");
var TransactionCreate = /** @class */ (function (_super) {
    __extends(TransactionCreate, _super);
    function TransactionCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionCreate.attributeTypeMap);
    };
    TransactionCreate.discriminator = undefined;
    TransactionCreate.attributeTypeMap = [
        {
            "name": "autoConfirmationEnabled",
            "baseName": "autoConfirmationEnabled",
            "type": "boolean"
        },
        {
            "name": "chargeRetryEnabled",
            "baseName": "chargeRetryEnabled",
            "type": "boolean"
        },
        {
            "name": "customersPresence",
            "baseName": "customersPresence",
            "type": "CustomersPresence"
        },
        {
            "name": "deviceSessionIdentifier",
            "baseName": "deviceSessionIdentifier",
            "type": "string"
        },
        {
            "name": "emailsDisabled",
            "baseName": "emailsDisabled",
            "type": "boolean"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Environment"
        },
        {
            "name": "environmentSelectionStrategy",
            "baseName": "environmentSelectionStrategy",
            "type": "TransactionEnvironmentSelectionStrategy"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        }
    ];
    return TransactionCreate;
}(AbstractTransactionPending));
exports.TransactionCreate = TransactionCreate;
module.exports = TransactionCreate;
