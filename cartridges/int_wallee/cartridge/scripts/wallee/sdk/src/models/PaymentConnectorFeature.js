"use strict";

exports.PaymentConnectorFeature = void 0;
var PaymentConnectorFeature = /** @class */ (function () {
    function PaymentConnectorFeature() {
    }
    PaymentConnectorFeature.getAttributeTypeMap = function () {
        return PaymentConnectorFeature.attributeTypeMap;
    };
    PaymentConnectorFeature.discriminator = undefined;
    PaymentConnectorFeature.attributeTypeMap = [
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        }
    ];
    return PaymentConnectorFeature;
}());
exports.PaymentConnectorFeature = PaymentConnectorFeature;
module.exports = PaymentConnectorFeature;
