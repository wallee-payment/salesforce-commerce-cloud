"use strict";

var PaymentAppCompletionConfigurationCreate = /** @class */ (function () {
    function PaymentAppCompletionConfigurationCreate() {
    }
    PaymentAppCompletionConfigurationCreate.getAttributeTypeMap = function () {
        return PaymentAppCompletionConfigurationCreate.attributeTypeMap;
    };
    PaymentAppCompletionConfigurationCreate.discriminator = undefined;
    PaymentAppCompletionConfigurationCreate.attributeTypeMap = [
        {
            "name": "completionEndpoint",
            "baseName": "completionEndpoint",
            "type": "string"
        },
        {
            "name": "completionTimeoutInMinutes",
            "baseName": "completionTimeoutInMinutes",
            "type": "number"
        },
        {
            "name": "maximalCompletionDelayInDays",
            "baseName": "maximalCompletionDelayInDays",
            "type": "number"
        },
        {
            "name": "multipleCompletionsSupported",
            "baseName": "multipleCompletionsSupported",
            "type": "boolean"
        },
        {
            "name": "voidEndpoint",
            "baseName": "voidEndpoint",
            "type": "string"
        }
    ];
    return PaymentAppCompletionConfigurationCreate;
}());
exports.PaymentAppCompletionConfigurationCreate = PaymentAppCompletionConfigurationCreate;
module.exports = PaymentAppCompletionConfigurationCreate;
