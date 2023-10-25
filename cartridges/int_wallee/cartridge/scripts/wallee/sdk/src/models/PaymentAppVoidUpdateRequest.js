"use strict";

exports.PaymentAppVoidUpdateRequest = void 0;
var PaymentAppVoidUpdateRequest = /** @class */ (function () {
    function PaymentAppVoidUpdateRequest() {
    }
    PaymentAppVoidUpdateRequest.getAttributeTypeMap = function () {
        return PaymentAppVoidUpdateRequest.attributeTypeMap;
    };
    PaymentAppVoidUpdateRequest.discriminator = undefined;
    PaymentAppVoidUpdateRequest.attributeTypeMap = [
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
            "type": "PaymentAppVoidTargetState"
        },
        {
            "name": "voidId",
            "baseName": "voidId",
            "type": "number"
        }
    ];
    return PaymentAppVoidUpdateRequest;
}());
exports.PaymentAppVoidUpdateRequest = PaymentAppVoidUpdateRequest;
module.exports = PaymentAppVoidUpdateRequest;
