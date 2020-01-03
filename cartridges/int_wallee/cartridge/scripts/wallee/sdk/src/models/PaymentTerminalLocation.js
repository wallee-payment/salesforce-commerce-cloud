"use strict";
exports.__esModule = true;
var PaymentTerminalLocation = /** @class */ (function () {
    function PaymentTerminalLocation() {
    }
    PaymentTerminalLocation.getAttributeTypeMap = function () {
        return PaymentTerminalLocation.attributeTypeMap;
    };
    PaymentTerminalLocation.discriminator = undefined;
    PaymentTerminalLocation.attributeTypeMap = [
        {
            "name": "defaultConfiguration",
            "baseName": "defaultConfiguration",
            "type": "PaymentTerminalConfiguration"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "PaymentTerminalAddress"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PaymentTerminalLocationState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentTerminalLocation;
}());
exports.PaymentTerminalLocation = PaymentTerminalLocation;
module.exports = PaymentTerminalLocation;
