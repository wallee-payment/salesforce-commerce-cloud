"use strict";

var PaymentTerminalConfigurationVersion = /** @class */ (function () {
    function PaymentTerminalConfigurationVersion() {
    }
    PaymentTerminalConfigurationVersion.getAttributeTypeMap = function () {
        return PaymentTerminalConfigurationVersion.attributeTypeMap;
    };
    PaymentTerminalConfigurationVersion.discriminator = undefined;
    PaymentTerminalConfigurationVersion.attributeTypeMap = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "PaymentTerminalConfiguration"
        },
        {
            "name": "connectorConfigurations",
            "baseName": "connectorConfigurations",
            "type": "Array<number>"
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
            "name": "defaultCurrency",
            "baseName": "defaultCurrency",
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
            "name": "maintenanceWindowDuration",
            "baseName": "maintenanceWindowDuration",
            "type": "string"
        },
        {
            "name": "maintenanceWindowStart",
            "baseName": "maintenanceWindowStart",
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
            "type": "PaymentTerminalConfigurationVersionState"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
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
    return PaymentTerminalConfigurationVersion;
}());
exports.PaymentTerminalConfigurationVersion = PaymentTerminalConfigurationVersion;
module.exports = PaymentTerminalConfigurationVersion;
