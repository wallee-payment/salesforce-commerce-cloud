"use strict";

var PaymentTerminalLocation = /** @class */ (function () {
    function PaymentTerminalLocation() {
    }
    PaymentTerminalLocation.getAttributeTypeMap = function () {
        return PaymentTerminalLocation.attributeTypeMap;
    };
    PaymentTerminalLocation.discriminator = undefined;
    PaymentTerminalLocation.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
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
