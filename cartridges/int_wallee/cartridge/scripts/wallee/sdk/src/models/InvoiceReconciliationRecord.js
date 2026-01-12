"use strict";

exports.InvoiceReconciliationRecord = void 0;
var InvoiceReconciliationRecord = /** @class */ (function () {
    function InvoiceReconciliationRecord() {
    }
    InvoiceReconciliationRecord.getAttributeTypeMap = function () {
        return InvoiceReconciliationRecord.attributeTypeMap;
    };
    InvoiceReconciliationRecord.discriminator = undefined;
    InvoiceReconciliationRecord.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "discardedBy",
            "baseName": "discardedBy",
            "type": "number"
        },
        {
            "name": "discardedOn",
            "baseName": "discardedOn",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ChargeAttemptEnvironment"
        },
        {
            "name": "familyName",
            "baseName": "familyName",
            "type": "string"
        },
        {
            "name": "givenName",
            "baseName": "givenName",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "lastResolutionFailure",
            "baseName": "lastResolutionFailure",
            "type": "FailureReason"
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
            "name": "participantNumber",
            "baseName": "participantNumber",
            "type": "string"
        },
        {
            "name": "paymentFeeAmount",
            "baseName": "paymentFeeAmount",
            "type": "number"
        },
        {
            "name": "paymentFeeCurrency",
            "baseName": "paymentFeeCurrency",
            "type": "string"
        },
        {
            "name": "paymentReason",
            "baseName": "paymentReason",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string"
        },
        {
            "name": "referenceNumber",
            "baseName": "referenceNumber",
            "type": "string"
        },
        {
            "name": "rejectionStatus",
            "baseName": "rejectionStatus",
            "type": "InvoiceReconciliationRecordRejectionStatus"
        },
        {
            "name": "resolvedBy",
            "baseName": "resolvedBy",
            "type": "number"
        },
        {
            "name": "resolvedOn",
            "baseName": "resolvedOn",
            "type": "Date"
        },
        {
            "name": "senderBankAccount",
            "baseName": "senderBankAccount",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InvoiceReconciliationRecordState"
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "InvoiceReconciliationRecordType"
        },
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
        },
        {
            "name": "valueDate",
            "baseName": "valueDate",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InvoiceReconciliationRecord;
}());
exports.InvoiceReconciliationRecord = InvoiceReconciliationRecord;
module.exports = InvoiceReconciliationRecord;
