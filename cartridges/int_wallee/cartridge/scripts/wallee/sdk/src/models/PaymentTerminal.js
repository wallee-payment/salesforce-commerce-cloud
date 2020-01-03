"use strict";
exports.__esModule = true;
var PaymentTerminal = /** @class */ (function () {
    function PaymentTerminal() {
    }
    PaymentTerminal.getAttributeTypeMap = function () {
        return PaymentTerminal.attributeTypeMap;
    };
    PaymentTerminal.discriminator = undefined;
    PaymentTerminal.attributeTypeMap = [
        {
            "name": "configurationVersion",
            "baseName": "configurationVersion",
            "type": "PaymentTerminalConfigurationVersion"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "locationVersion",
            "baseName": "locationVersion",
            "type": "PaymentTerminalLocationVersion"
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
            "type": "PaymentTerminalState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentTerminalType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentTerminal;
}());
exports.PaymentTerminal = PaymentTerminal;
module.exports = PaymentTerminal;
