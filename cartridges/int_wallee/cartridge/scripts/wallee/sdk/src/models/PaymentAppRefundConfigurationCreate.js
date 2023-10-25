"use strict";

exports.PaymentAppRefundConfigurationCreate = void 0;
var PaymentAppRefundConfigurationCreate = /** @class */ (function () {
    function PaymentAppRefundConfigurationCreate() {
    }
    PaymentAppRefundConfigurationCreate.getAttributeTypeMap = function () {
        return PaymentAppRefundConfigurationCreate.attributeTypeMap;
    };
    PaymentAppRefundConfigurationCreate.discriminator = undefined;
    PaymentAppRefundConfigurationCreate.attributeTypeMap = [
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
    return PaymentAppRefundConfigurationCreate;
}());
exports.PaymentAppRefundConfigurationCreate = PaymentAppRefundConfigurationCreate;
module.exports = PaymentAppRefundConfigurationCreate;
