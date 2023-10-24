"use strict";

var PaymentAdjustmentType = /** @class */ (function () {
    function PaymentAdjustmentType() {
    }
    PaymentAdjustmentType.getAttributeTypeMap = function () {
        return PaymentAdjustmentType.attributeTypeMap;
    };
    PaymentAdjustmentType.discriminator = undefined;
    PaymentAdjustmentType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return PaymentAdjustmentType;
}());
exports.PaymentAdjustmentType = PaymentAdjustmentType;
module.exports = PaymentAdjustmentType;
