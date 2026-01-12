"use strict";

exports.PaymentAppChargeAttemptUpdateRequest = void 0;
var PaymentAppChargeAttemptUpdateRequest = /** @class */ (function () {
    function PaymentAppChargeAttemptUpdateRequest() {
    }
    PaymentAppChargeAttemptUpdateRequest.getAttributeTypeMap = function () {
        return PaymentAppChargeAttemptUpdateRequest.attributeTypeMap;
    };
    PaymentAppChargeAttemptUpdateRequest.discriminator = undefined;
    PaymentAppChargeAttemptUpdateRequest.attributeTypeMap = [
        {
            "name": "chargeAttemptId",
            "baseName": "chargeAttemptId",
            "type": "number"
        },
        {
            "name": "endUserFailureMessage",
            "baseName": "endUserFailureMessage",
            "type": "string"
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
            "type": "PaymentAppChargeAttemptTargetState"
        }
    ];
    return PaymentAppChargeAttemptUpdateRequest;
}());
exports.PaymentAppChargeAttemptUpdateRequest = PaymentAppChargeAttemptUpdateRequest;
module.exports = PaymentAppChargeAttemptUpdateRequest;
