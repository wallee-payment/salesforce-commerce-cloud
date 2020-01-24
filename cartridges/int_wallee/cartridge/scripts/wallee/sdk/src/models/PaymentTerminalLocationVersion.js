"use strict";

var PaymentTerminalLocationVersion = /** @class */ (function () {
    function PaymentTerminalLocationVersion() {
    }
    PaymentTerminalLocationVersion.getAttributeTypeMap = function () {
        return PaymentTerminalLocationVersion.attributeTypeMap;
    };
    PaymentTerminalLocationVersion.discriminator = undefined;
    PaymentTerminalLocationVersion.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "PaymentTerminalAddress"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
            "name": "location",
            "baseName": "location",
            "type": "PaymentTerminalLocation"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PaymentTerminalLocationVersionState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "versionAppliedImmediately",
            "baseName": "versionAppliedImmediately",
            "type": "boolean"
        }
    ];
    return PaymentTerminalLocationVersion;
}());
exports.PaymentTerminalLocationVersion = PaymentTerminalLocationVersion;
module.exports = PaymentTerminalLocationVersion;
