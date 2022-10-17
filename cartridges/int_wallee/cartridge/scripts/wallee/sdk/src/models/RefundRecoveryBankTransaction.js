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

var TransactionAwareEntity = require("./TransactionAwareEntity");
var RefundRecoveryBankTransaction = /** @class */ (function (_super) {
    __extends(RefundRecoveryBankTransaction, _super);
    function RefundRecoveryBankTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefundRecoveryBankTransaction.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(RefundRecoveryBankTransaction.attributeTypeMap);
    };
    RefundRecoveryBankTransaction.discriminator = undefined;
    RefundRecoveryBankTransaction.attributeTypeMap = [
        {
            "name": "bankTransaction",
            "baseName": "bankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "refund",
            "baseName": "refund",
            "type": "Refund"
        },
        {
            "name": "refundCurrencyAmount",
            "baseName": "refundCurrencyAmount",
            "type": "number"
        },
        {
            "name": "refundCurrencyValueAmount",
            "baseName": "refundCurrencyValueAmount",
            "type": "number"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return RefundRecoveryBankTransaction;
}(TransactionAwareEntity));
exports.RefundRecoveryBankTransaction = RefundRecoveryBankTransaction;
module.exports = RefundRecoveryBankTransaction;
