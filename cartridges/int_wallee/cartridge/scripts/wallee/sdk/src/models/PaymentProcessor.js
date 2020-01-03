"use strict";
exports.__esModule = true;
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.getAttributeTypeMap = function () {
        return PaymentProcessor.attributeTypeMap;
    };
    PaymentProcessor.discriminator = undefined;
    PaymentProcessor.attributeTypeMap = [
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "number"
        },
        {
            "name": "headquartersLocation",
            "baseName": "headquartersLocation",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "logoPath",
            "baseName": "logoPath",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "{ [key: string]: string; }"
        }
    ];
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;
module.exports = PaymentProcessor;
