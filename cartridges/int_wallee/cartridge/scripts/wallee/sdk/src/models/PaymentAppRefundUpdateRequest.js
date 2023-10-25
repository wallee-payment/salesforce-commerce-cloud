"use strict";

exports.PaymentAppRefundUpdateRequest = void 0;
var PaymentAppRefundUpdateRequest = /** @class */ (function () {
    function PaymentAppRefundUpdateRequest() {
    }
    PaymentAppRefundUpdateRequest.getAttributeTypeMap = function () {
        return PaymentAppRefundUpdateRequest.attributeTypeMap;
    };
    PaymentAppRefundUpdateRequest.discriminator = undefined;
    PaymentAppRefundUpdateRequest.attributeTypeMap = [
        {
            "name": "failureReasonId",
            "baseName": "failureReasonId",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "refundId",
            "baseName": "refundId",
            "type": "number"
        },
        {
            "name": "targetState",
            "baseName": "targetState",
            "type": "PaymentAppRefundTargetState"
        }
    ];
    return PaymentAppRefundUpdateRequest;
}());
exports.PaymentAppRefundUpdateRequest = PaymentAppRefundUpdateRequest;
module.exports = PaymentAppRefundUpdateRequest;
