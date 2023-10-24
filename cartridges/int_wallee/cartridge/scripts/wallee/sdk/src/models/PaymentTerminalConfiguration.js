"use strict";

var PaymentTerminalConfiguration = /** @class */ (function () {
    function PaymentTerminalConfiguration() {
    }
    PaymentTerminalConfiguration.getAttributeTypeMap = function () {
        return PaymentTerminalConfiguration.attributeTypeMap;
    };
    PaymentTerminalConfiguration.discriminator = undefined;
    PaymentTerminalConfiguration.attributeTypeMap = [
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
            "type": "PaymentTerminalConfigurationState"
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
    return PaymentTerminalConfiguration;
}());
exports.PaymentTerminalConfiguration = PaymentTerminalConfiguration;
module.exports = PaymentTerminalConfiguration;
