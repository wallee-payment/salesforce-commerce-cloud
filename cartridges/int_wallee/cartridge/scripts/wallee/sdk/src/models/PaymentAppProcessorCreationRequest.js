"use strict";

exports.PaymentAppProcessorCreationRequest = void 0;
var PaymentAppProcessorCreationRequest = /** @class */ (function () {
    function PaymentAppProcessorCreationRequest() {
    }
    PaymentAppProcessorCreationRequest.getAttributeTypeMap = function () {
        return PaymentAppProcessorCreationRequest.attributeTypeMap;
    };
    PaymentAppProcessorCreationRequest.discriminator = undefined;
    PaymentAppProcessorCreationRequest.attributeTypeMap = [
        {
            "name": "documentationUrl",
            "baseName": "documentationUrl",
            "type": "string"
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
            "name": "productionModeUrl",
            "baseName": "productionModeUrl",
            "type": "string"
        },
        {
            "name": "svgIcon",
            "baseName": "svgIcon",
            "type": "string"
        }
    ];
    return PaymentAppProcessorCreationRequest;
}());
exports.PaymentAppProcessorCreationRequest = PaymentAppProcessorCreationRequest;
module.exports = PaymentAppProcessorCreationRequest;
