"use strict";

exports.PaymentAdjustment = void 0;
var PaymentAdjustment = /** @class */ (function () {
    function PaymentAdjustment() {
    }
    PaymentAdjustment.getAttributeTypeMap = function () {
        return PaymentAdjustment.attributeTypeMap;
    };
    PaymentAdjustment.discriminator = undefined;
    PaymentAdjustment.attributeTypeMap = [
        {
            "name": "amountExcludingTax",
            "baseName": "amountExcludingTax",
            "type": "number"
        },
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "rateInPercentage",
            "baseName": "rateInPercentage",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "Tax"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }
    ];
    return PaymentAdjustment;
}());
exports.PaymentAdjustment = PaymentAdjustment;
module.exports = PaymentAdjustment;
