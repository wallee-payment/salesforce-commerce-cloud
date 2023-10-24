"use strict";

var PaymentAppRefundConfiguration = /** @class */ (function () {
    function PaymentAppRefundConfiguration() {
    }
    PaymentAppRefundConfiguration.getAttributeTypeMap = function () {
        return PaymentAppRefundConfiguration.attributeTypeMap;
    };
    PaymentAppRefundConfiguration.discriminator = undefined;
    PaymentAppRefundConfiguration.attributeTypeMap = [
        {
            "name": "multipleRefundsSupported",
            "baseName": "multipleRefundsSupported",
            "type": "boolean"
        },
        {
            "name": "refundEndpoint",
            "baseName": "refundEndpoint",
            "type": "string"
        },
        {
            "name": "refundTimeoutInMinutes",
            "baseName": "refundTimeoutInMinutes",
            "type": "number"
        }
    ];
    return PaymentAppRefundConfiguration;
}());
exports.PaymentAppRefundConfiguration = PaymentAppRefundConfiguration;
module.exports = PaymentAppRefundConfiguration;
