"use strict";

var InvoiceReimbursement = /** @class */ (function () {
    function InvoiceReimbursement() {
    }
    InvoiceReimbursement.getAttributeTypeMap = function () {
        return InvoiceReimbursement.attributeTypeMap;
    };
    InvoiceReimbursement.discriminator = undefined;
    InvoiceReimbursement.attributeTypeMap = [
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
            "name": "paymentConnectorConfiguration",
            "baseName": "paymentConnectorConfiguration",
            "type": "PaymentConnectorConfiguration"
        },
        {
            "name": "paymentInitiationAdviceFile",
            "baseName": "paymentInitiationAdviceFile",
            "type": "PaymentInitiationAdviceFile"
        },
        {
            "name": "processedBy",
            "baseName": "processedBy",
            "type": "number"
        },
        {
            "name": "processedOn",
            "baseName": "processedOn",
            "type": "Date"
        },
        {
            "name": "recipientCity",
            "baseName": "recipientCity",
            "type": "string"
        },
        {
            "name": "recipientCountry",
            "baseName": "recipientCountry",
            "type": "string"
        },
        {
            "name": "recipientFamilyName",
            "baseName": "recipientFamilyName",
            "type": "string"
        },
        {
            "name": "recipientGivenName",
            "baseName": "recipientGivenName",
            "type": "string"
        },
        {
            "name": "recipientIban",
            "baseName": "recipientIban",
            "type": "string"
        },
        {
            "name": "recipientPostcode",
            "baseName": "recipientPostcode",
            "type": "string"
        },
        {
            "name": "recipientStreet",
            "baseName": "recipientStreet",
            "type": "string"
        },
        {
            "name": "senderIban",
            "baseName": "senderIban",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InvoiceReimbursementState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InvoiceReimbursement;
}());
exports.InvoiceReimbursement = InvoiceReimbursement;
module.exports = InvoiceReimbursement;
