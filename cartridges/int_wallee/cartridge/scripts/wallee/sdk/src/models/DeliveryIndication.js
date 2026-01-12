"use strict";

exports.DeliveryIndication = void 0;
var DeliveryIndication = /** @class */ (function () {
    function DeliveryIndication() {
    }
    DeliveryIndication.getAttributeTypeMap = function () {
        return DeliveryIndication.attributeTypeMap;
    };
    DeliveryIndication.discriminator = undefined;
    DeliveryIndication.attributeTypeMap = [
        {
            "name": "automaticDecisionReason",
            "baseName": "automaticDecisionReason",
            "type": "DeliveryIndicationDecisionReason"
        },
        {
            "name": "automaticallyDecidedOn",
            "baseName": "automaticallyDecidedOn",
            "type": "Date"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        },
        {
            "name": "manualDecisionTimeoutOn",
            "baseName": "manualDecisionTimeoutOn",
            "type": "Date"
        },
        {
            "name": "manuallyDecidedBy",
            "baseName": "manuallyDecidedBy",
            "type": "number"
        },
        {
            "name": "manuallyDecidedOn",
            "baseName": "manuallyDecidedOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DeliveryIndicationState"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        }
    ];
    return DeliveryIndication;
}());
exports.DeliveryIndication = DeliveryIndication;
module.exports = DeliveryIndication;
