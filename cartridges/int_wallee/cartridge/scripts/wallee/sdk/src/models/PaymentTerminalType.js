"use strict";
exports.__esModule = true;
var PaymentTerminalType = /** @class */ (function () {
    function PaymentTerminalType() {
    }
    PaymentTerminalType.getAttributeTypeMap = function () {
        return PaymentTerminalType.attributeTypeMap;
    };
    PaymentTerminalType.discriminator = undefined;
    PaymentTerminalType.attributeTypeMap = [
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
    return PaymentTerminalType;
}());
exports.PaymentTerminalType = PaymentTerminalType;
module.exports = PaymentTerminalType;
