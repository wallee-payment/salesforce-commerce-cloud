"use strict";

exports.SubscriptionProductComponentReference = void 0;
var SubscriptionProductComponentReference = /** @class */ (function () {
    function SubscriptionProductComponentReference() {
    }
    SubscriptionProductComponentReference.getAttributeTypeMap = function () {
        return SubscriptionProductComponentReference.attributeTypeMap;
    };
    SubscriptionProductComponentReference.discriminator = undefined;
    SubscriptionProductComponentReference.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionProductComponentReferenceState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProductComponentReference;
}());
exports.SubscriptionProductComponentReference = SubscriptionProductComponentReference;
module.exports = SubscriptionProductComponentReference;
