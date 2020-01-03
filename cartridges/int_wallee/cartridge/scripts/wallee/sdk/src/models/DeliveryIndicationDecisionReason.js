"use strict";
exports.__esModule = true;
var DeliveryIndicationDecisionReason = /** @class */ (function () {
    function DeliveryIndicationDecisionReason() {
    }
    DeliveryIndicationDecisionReason.getAttributeTypeMap = function () {
        return DeliveryIndicationDecisionReason.attributeTypeMap;
    };
    DeliveryIndicationDecisionReason.discriminator = undefined;
    DeliveryIndicationDecisionReason.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return DeliveryIndicationDecisionReason;
}());
exports.DeliveryIndicationDecisionReason = DeliveryIndicationDecisionReason;
module.exports = DeliveryIndicationDecisionReason;
