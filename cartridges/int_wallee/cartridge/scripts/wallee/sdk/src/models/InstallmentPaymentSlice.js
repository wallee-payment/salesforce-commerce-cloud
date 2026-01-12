"use strict";

exports.InstallmentPaymentSlice = void 0;
var InstallmentPaymentSlice = /** @class */ (function () {
    function InstallmentPaymentSlice() {
    }
    InstallmentPaymentSlice.getAttributeTypeMap = function () {
        return InstallmentPaymentSlice.attributeTypeMap;
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
            "name": "id",
            "baseName": "id",
            "type": "number"
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
}());
exports.InstallmentPaymentSlice = InstallmentPaymentSlice;
module.exports = InstallmentPaymentSlice;
