"use strict";

exports.PaymentInformationHashType = void 0;
var PaymentInformationHashType = /** @class */ (function () {
    function PaymentInformationHashType() {
    }
    PaymentInformationHashType.getAttributeTypeMap = function () {
        return PaymentInformationHashType.attributeTypeMap;
    };
    PaymentInformationHashType.discriminator = undefined;
    PaymentInformationHashType.attributeTypeMap = [
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
    return PaymentInformationHashType;
}());
exports.PaymentInformationHashType = PaymentInformationHashType;
module.exports = PaymentInformationHashType;
