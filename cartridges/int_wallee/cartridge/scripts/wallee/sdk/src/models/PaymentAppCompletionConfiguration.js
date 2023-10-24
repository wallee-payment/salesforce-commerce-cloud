"use strict";

var PaymentAppCompletionConfiguration = /** @class */ (function () {
    function PaymentAppCompletionConfiguration() {
    }
    PaymentAppCompletionConfiguration.getAttributeTypeMap = function () {
        return PaymentAppCompletionConfiguration.attributeTypeMap;
    };
    PaymentAppCompletionConfiguration.discriminator = undefined;
    PaymentAppCompletionConfiguration.attributeTypeMap = [
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
    return PaymentAppCompletionConfiguration;
}());
exports.PaymentAppCompletionConfiguration = PaymentAppCompletionConfiguration;
module.exports = PaymentAppCompletionConfiguration;
