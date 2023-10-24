"use strict";

var PaymentAppProcessor = /** @class */ (function () {
    function PaymentAppProcessor() {
    }
    PaymentAppProcessor.getAttributeTypeMap = function () {
        return PaymentAppProcessor.attributeTypeMap;
    };
    PaymentAppProcessor.discriminator = undefined;
    PaymentAppProcessor.attributeTypeMap = [
        {
            "name": "configuredEnvironment",
            "baseName": "configuredEnvironment",
            "type": "ChargeAttemptEnvironment"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "documentationUrl",
            "baseName": "documentationUrl",
            "type": "string"
        },
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
            "name": "installationId",
            "baseName": "installationId",
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
            "name": "processorConfiguration",
            "baseName": "processorConfiguration",
            "type": "PaymentProcessorConfiguration"
        },
        {
            "name": "productionModeUrl",
            "baseName": "productionModeUrl",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PaymentAppProcessorState"
        },
        {
            "name": "svgIcon",
            "baseName": "svgIcon",
            "type": "string"
        },
        {
            "name": "updatedOn",
            "baseName": "updatedOn",
            "type": "Date"
        },
        {
            "name": "usableInProduction",
            "baseName": "usableInProduction",
            "type": "boolean"
        },
        {
            "name": "usableInProductionSince",
            "baseName": "usableInProductionSince",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentAppProcessor;
}());
exports.PaymentAppProcessor = PaymentAppProcessor;
module.exports = PaymentAppProcessor;
