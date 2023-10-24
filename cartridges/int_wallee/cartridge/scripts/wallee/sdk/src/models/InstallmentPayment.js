"use strict";

var InstallmentPayment = /** @class */ (function () {
    function InstallmentPayment() {
    }
    InstallmentPayment.getAttributeTypeMap = function () {
        return InstallmentPayment.attributeTypeMap;
    };
    InstallmentPayment.discriminator = undefined;
    InstallmentPayment.attributeTypeMap = [
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
            "name": "initialTransaction",
            "baseName": "initialTransaction",
            "type": "Transaction"
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
            "name": "planConfiguration",
            "baseName": "planConfiguration",
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
            "type": "InstallmentPaymentState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InstallmentPayment;
}());
exports.InstallmentPayment = InstallmentPayment;
module.exports = InstallmentPayment;
