"use strict";

var PaymentConnectorConfiguration = /** @class */ (function () {
    function PaymentConnectorConfiguration() {
    }
    PaymentConnectorConfiguration.getAttributeTypeMap = function () {
        return PaymentConnectorConfiguration.attributeTypeMap;
    };
    PaymentConnectorConfiguration.discriminator = undefined;
    PaymentConnectorConfiguration.attributeTypeMap = [
        {
            "name": "applicableForTransactionProcessing",
            "baseName": "applicableForTransactionProcessing",
            "type": "boolean"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<number>"
        },
        {
            "name": "connector",
            "baseName": "connector",
            "type": "number"
        },
        {
            "name": "enabledSpaceViews",
            "baseName": "enabledSpaceViews",
            "type": "Array<number>"
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
            "name": "paymentMethodConfiguration",
            "baseName": "paymentMethodConfiguration",
            "type": "PaymentMethodConfiguration"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "processorConfiguration",
            "baseName": "processorConfiguration",
            "type": "PaymentProcessorConfiguration"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentConnectorConfiguration;
}());
exports.PaymentConnectorConfiguration = PaymentConnectorConfiguration;
module.exports = PaymentConnectorConfiguration;
