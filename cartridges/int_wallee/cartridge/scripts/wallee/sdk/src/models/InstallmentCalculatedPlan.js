"use strict";
exports.__esModule = true;
var InstallmentCalculatedPlan = /** @class */ (function () {
    function InstallmentCalculatedPlan() {
    }
    InstallmentCalculatedPlan.getAttributeTypeMap = function () {
        return InstallmentCalculatedPlan.attributeTypeMap;
    };
    InstallmentCalculatedPlan.discriminator = undefined;
    InstallmentCalculatedPlan.attributeTypeMap = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "InstallmentPlanConfiguration"
        },
        {
            "name": "paymentMethodConfigurations",
            "baseName": "paymentMethodConfigurations",
            "type": "Array<PaymentMethodConfiguration>"
        },
        {
            "name": "slices",
            "baseName": "slices",
            "type": "Array<InstallmentCalculatedSlice>"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        }
    ];
    return InstallmentCalculatedPlan;
}());
exports.InstallmentCalculatedPlan = InstallmentCalculatedPlan;
module.exports = InstallmentCalculatedPlan;
