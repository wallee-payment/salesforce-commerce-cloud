"use strict";

exports.PaymentContractType = void 0;
var PaymentContractType = /** @class */ (function () {
    function PaymentContractType() {
    }
    PaymentContractType.getAttributeTypeMap = function () {
        return PaymentContractType.attributeTypeMap;
    };
    PaymentContractType.discriminator = undefined;
    PaymentContractType.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
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
    return PaymentContractType;
}());
exports.PaymentContractType = PaymentContractType;
module.exports = PaymentContractType;
