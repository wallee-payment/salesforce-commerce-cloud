"use strict";

exports.DebtCollectionCase = void 0;
var DebtCollectionCase = /** @class */ (function () {
    function DebtCollectionCase() {
    }
    DebtCollectionCase.getAttributeTypeMap = function () {
        return DebtCollectionCase.attributeTypeMap;
    };
    DebtCollectionCase.discriminator = undefined;
    DebtCollectionCase.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "closedOn",
            "baseName": "closedOn",
            "type": "Date"
        },
        {
            "name": "collectorConfiguration",
            "baseName": "collectorConfiguration",
            "type": "DebtCollectorConfiguration"
        },
        {
            "name": "contractDate",
            "baseName": "contractDate",
            "type": "Date"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "DebtCollectionEnvironment"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "failedOn",
            "baseName": "failedOn",
            "type": "Date"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<Label>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "nextAttemptOn",
            "baseName": "nextAttemptOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processingStartedOn",
            "baseName": "processingStartedOn",
            "type": "Date"
        },
        {
            "name": "processingTimeoutOn",
            "baseName": "processingTimeoutOn",
            "type": "Date"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "reviewStartedOn",
            "baseName": "reviewStartedOn",
            "type": "Date"
        },
        {
            "name": "reviewedOn",
            "baseName": "reviewedOn",
            "type": "Date"
        },
        {
            "name": "reviewer",
            "baseName": "reviewer",
            "type": "number"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "DebtCollectionCaseSource"
        },
        {
            "name": "sourceEntityId",
            "baseName": "sourceEntityId",
            "type": "number"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DebtCollectionCaseState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return DebtCollectionCase;
}());
exports.DebtCollectionCase = DebtCollectionCase;
module.exports = DebtCollectionCase;
