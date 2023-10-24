"use strict";

var SubscriptionAffiliate = /** @class */ (function () {
    function SubscriptionAffiliate() {
    }
    SubscriptionAffiliate.getAttributeTypeMap = function () {
        return SubscriptionAffiliate.attributeTypeMap;
    };
    SubscriptionAffiliate.discriminator = undefined;
    SubscriptionAffiliate.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
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
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionAffiliate;
}());
exports.SubscriptionAffiliate = SubscriptionAffiliate;
module.exports = SubscriptionAffiliate;
