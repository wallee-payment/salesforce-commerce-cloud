"use strict";

var PaymentTerminalReceiptType = /** @class */ (function () {
    function PaymentTerminalReceiptType() {
    }
    PaymentTerminalReceiptType.getAttributeTypeMap = function () {
        return PaymentTerminalReceiptType.attributeTypeMap;
    };
    PaymentTerminalReceiptType.discriminator = undefined;
    PaymentTerminalReceiptType.attributeTypeMap = [
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
    return PaymentTerminalReceiptType;
}());
exports.PaymentTerminalReceiptType = PaymentTerminalReceiptType;
module.exports = PaymentTerminalReceiptType;
