"use strict";

exports.PaymentMethodBrand = void 0;
var PaymentMethodBrand = /** @class */ (function () {
    function PaymentMethodBrand() {
    }
    PaymentMethodBrand.getAttributeTypeMap = function () {
        return PaymentMethodBrand.attributeTypeMap;
    };
    PaymentMethodBrand.discriminator = undefined;
    PaymentMethodBrand.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "grayImagePath",
            "baseName": "grayImagePath",
            "type": "string"
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        }
    ];
    return PaymentMethodBrand;
}());
exports.PaymentMethodBrand = PaymentMethodBrand;
module.exports = PaymentMethodBrand;
