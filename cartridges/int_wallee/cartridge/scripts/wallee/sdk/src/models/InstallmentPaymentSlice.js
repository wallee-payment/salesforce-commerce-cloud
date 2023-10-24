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
var InstallmentPaymentSlice = /** @class */ (function (_super) {
    __extends(InstallmentPaymentSlice, _super);
    function InstallmentPaymentSlice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstallmentPaymentSlice.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(InstallmentPaymentSlice.attributeTypeMap);
    };
    InstallmentPaymentSlice.discriminator = undefined;
    InstallmentPaymentSlice.attributeTypeMap = [
        {
            "name": "chargeOn",
            "baseName": "chargeOn",
            "type": "Date"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "installmentPayment",
            "baseName": "installmentPayment",
            "type": "InstallmentPayment"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InstallmentPaymentSliceState"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InstallmentPaymentSlice;
}(TransactionAwareEntity));
exports.InstallmentPaymentSlice = InstallmentPaymentSlice;
module.exports = InstallmentPaymentSlice;
