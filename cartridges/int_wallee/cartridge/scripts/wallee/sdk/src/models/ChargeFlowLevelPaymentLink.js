"use strict";

exports.ChargeFlowLevelPaymentLink = void 0;
var ChargeFlowLevelPaymentLink = /** @class */ (function () {
    function ChargeFlowLevelPaymentLink() {
    }
    ChargeFlowLevelPaymentLink.getAttributeTypeMap = function () {
        return ChargeFlowLevelPaymentLink.attributeTypeMap;
    };
    ChargeFlowLevelPaymentLink.discriminator = undefined;
    ChargeFlowLevelPaymentLink.attributeTypeMap = [
        {
            "name": "chargeFlowLevel",
            "baseName": "chargeFlowLevel",
            "type": "ChargeFlowLevel"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "paymentLink",
            "baseName": "paymentLink",
            "type": "string"
        }
    ];
    return ChargeFlowLevelPaymentLink;
}());
exports.ChargeFlowLevelPaymentLink = ChargeFlowLevelPaymentLink;
module.exports = ChargeFlowLevelPaymentLink;
