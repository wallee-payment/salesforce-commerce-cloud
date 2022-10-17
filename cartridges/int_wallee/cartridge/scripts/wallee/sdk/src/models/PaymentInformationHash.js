"use strict";

var PaymentInformationHash = /** @class */ (function () {
    function PaymentInformationHash() {
    }
    PaymentInformationHash.getAttributeTypeMap = function () {
        return PaymentInformationHash.attributeTypeMap;
    };
    PaymentInformationHash.discriminator = undefined;
    PaymentInformationHash.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentInformationHashType"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return PaymentInformationHash;
}());
exports.PaymentInformationHash = PaymentInformationHash;
module.exports = PaymentInformationHash;
