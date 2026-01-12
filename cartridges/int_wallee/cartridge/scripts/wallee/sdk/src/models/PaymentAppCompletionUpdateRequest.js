"use strict";

exports.PaymentAppCompletionUpdateRequest = void 0;
var PaymentAppCompletionUpdateRequest = /** @class */ (function () {
    function PaymentAppCompletionUpdateRequest() {
    }
    PaymentAppCompletionUpdateRequest.getAttributeTypeMap = function () {
        return PaymentAppCompletionUpdateRequest.attributeTypeMap;
    };
    PaymentAppCompletionUpdateRequest.discriminator = undefined;
    PaymentAppCompletionUpdateRequest.attributeTypeMap = [
        {
            "name": "completionId",
            "baseName": "completionId",
            "type": "number"
        },
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
            "name": "targetState",
            "baseName": "targetState",
            "type": "PaymentAppCompletionTargetState"
        }
    ];
    return PaymentAppCompletionUpdateRequest;
}());
exports.PaymentAppCompletionUpdateRequest = PaymentAppCompletionUpdateRequest;
module.exports = PaymentAppCompletionUpdateRequest;
