"use strict";

var SubscriptionChargeCreate = /** @class */ (function () {
    function SubscriptionChargeCreate() {
    }
    SubscriptionChargeCreate.getAttributeTypeMap = function () {
        return SubscriptionChargeCreate.attributeTypeMap;
    };
    SubscriptionChargeCreate.discriminator = undefined;
    SubscriptionChargeCreate.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "failedUrl",
            "baseName": "failedUrl",
            "type": "string"
        },
        {
            "name": "plannedExecutionDate",
            "baseName": "plannedExecutionDate",
            "type": "Date"
        },
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "SubscriptionChargeProcessingType"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        }
    ];
    return SubscriptionChargeCreate;
}());
exports.SubscriptionChargeCreate = SubscriptionChargeCreate;
module.exports = SubscriptionChargeCreate;
