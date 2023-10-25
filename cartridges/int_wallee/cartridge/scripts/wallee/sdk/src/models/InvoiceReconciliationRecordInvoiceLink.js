"use strict";

exports.InvoiceReconciliationRecordInvoiceLink = void 0;
var InvoiceReconciliationRecordInvoiceLink = /** @class */ (function () {
    function InvoiceReconciliationRecordInvoiceLink() {
    }
    InvoiceReconciliationRecordInvoiceLink.getAttributeTypeMap = function () {
        return InvoiceReconciliationRecordInvoiceLink.attributeTypeMap;
    };
    InvoiceReconciliationRecordInvoiceLink.discriminator = undefined;
    InvoiceReconciliationRecordInvoiceLink.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
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
            "name": "invoice",
            "baseName": "invoice",
            "type": "TransactionInvoice"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "record",
            "baseName": "record",
            "type": "InvoiceReconciliationRecord"
        }
    ];
    return InvoiceReconciliationRecordInvoiceLink;
}());
exports.InvoiceReconciliationRecordInvoiceLink = InvoiceReconciliationRecordInvoiceLink;
module.exports = InvoiceReconciliationRecordInvoiceLink;
