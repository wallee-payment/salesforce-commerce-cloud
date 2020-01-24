"use strict";

var PaymentMethod = /** @class */ (function () {
    function PaymentMethod() {
    }
    PaymentMethod.getAttributeTypeMap = function () {
        return PaymentMethod.attributeTypeMap;
    };
    PaymentMethod.discriminator = undefined;
    PaymentMethod.attributeTypeMap = [
        {
            "name": "dataCollectionTypes",
            "baseName": "dataCollectionTypes",
            "type": "Array<DataCollectionType>"
        },
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
            "name": "imagePath",
            "baseName": "imagePath",
            "type": "string"
        },
        {
            "name": "merchantDescription",
            "baseName": "merchantDescription",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "supportedCurrencies",
            "baseName": "supportedCurrencies",
            "type": "Array<string>"
        }
    ];
    return PaymentMethod;
}());
exports.PaymentMethod = PaymentMethod;
module.exports = PaymentMethod;
