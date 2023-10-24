"use strict";

var PaymentAppConnectorCreationRequest = /** @class */ (function () {
    function PaymentAppConnectorCreationRequest() {
    }
    PaymentAppConnectorCreationRequest.getAttributeTypeMap = function () {
        return PaymentAppConnectorCreationRequest.attributeTypeMap;
    };
    PaymentAppConnectorCreationRequest.discriminator = undefined;
    PaymentAppConnectorCreationRequest.attributeTypeMap = [
        {
            "name": "authorizationTimeoutInMinutes",
            "baseName": "authorizationTimeoutInMinutes",
            "type": "number"
        },
        {
            "name": "completionConfiguration",
            "baseName": "completionConfiguration",
            "type": "PaymentAppCompletionConfigurationCreate"
        },
        {
            "name": "connector",
            "baseName": "connector",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentPageEndpoint",
            "baseName": "paymentPageEndpoint",
            "type": "string"
        },
        {
            "name": "processorExternalId",
            "baseName": "processorExternalId",
            "type": "string"
        },
        {
            "name": "refundConfiguration",
            "baseName": "refundConfiguration",
            "type": "PaymentAppRefundConfigurationCreate"
        }
    ];
    return PaymentAppConnectorCreationRequest;
}());
exports.PaymentAppConnectorCreationRequest = PaymentAppConnectorCreationRequest;
module.exports = PaymentAppConnectorCreationRequest;
