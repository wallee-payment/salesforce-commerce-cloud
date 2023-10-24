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
var ChargeBankTransaction = /** @class */ (function (_super) {
    __extends(ChargeBankTransaction, _super);
    function ChargeBankTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargeBankTransaction.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ChargeBankTransaction.attributeTypeMap);
    };
    ChargeBankTransaction.discriminator = undefined;
    ChargeBankTransaction.attributeTypeMap = [
        {
            "name": "bankTransaction",
            "baseName": "bankTransaction",
            "type": "BankTransaction"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "transactionCurrencyAmount",
            "baseName": "transactionCurrencyAmount",
            "type": "number"
        },
        {
            "name": "transactionCurrencyValueAmount",
            "baseName": "transactionCurrencyValueAmount",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ChargeBankTransaction;
}(TransactionAwareEntity));
exports.ChargeBankTransaction = ChargeBankTransaction;
module.exports = ChargeBankTransaction;
