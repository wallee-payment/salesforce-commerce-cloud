"use strict";

exports.Subscription = void 0;
var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    Subscription.getAttributeTypeMap = function () {
        return Subscription.attributeTypeMap;
    };
    Subscription.discriminator = undefined;
    Subscription.attributeTypeMap = [
        {
            "name": "activatedOn",
            "baseName": "activatedOn",
            "type": "Date"
        },
        {
            "name": "affiliate",
            "baseName": "affiliate",
            "type": "SubscriptionAffiliate"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "currentProductVersion",
            "baseName": "currentProductVersion",
            "type": "SubscriptionProductVersion"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "initializedOn",
            "baseName": "initializedOn",
            "type": "Date"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "plannedTerminationDate",
            "baseName": "plannedTerminationDate",
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
            "type": "SubscriptionState"
        },
        {
            "name": "subscriber",
            "baseName": "subscriber",
            "type": "Subscriber"
        },
        {
            "name": "terminatedBy",
            "baseName": "terminatedBy",
            "type": "number"
        },
        {
            "name": "terminatedOn",
            "baseName": "terminatedOn",
            "type": "Date"
        },
        {
            "name": "terminatingOn",
            "baseName": "terminatingOn",
            "type": "Date"
        },
        {
            "name": "terminationScheduledOn",
            "baseName": "terminationScheduledOn",
            "type": "Date"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Token"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Subscription;
}());
exports.Subscription = Subscription;
module.exports = Subscription;
