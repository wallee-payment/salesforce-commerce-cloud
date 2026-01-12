"use strict";

exports.TransactionInvoiceReplacement = void 0;
var TransactionInvoiceReplacement = /** @class */ (function () {
    function TransactionInvoiceReplacement() {
    }
    TransactionInvoiceReplacement.getAttributeTypeMap = function () {
        return TransactionInvoiceReplacement.attributeTypeMap;
    };
    TransactionInvoiceReplacement.discriminator = undefined;
    TransactionInvoiceReplacement.attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "AddressCreate"
        },
        {
            "name": "dueOn",
            "baseName": "dueOn",
            "type": "Date"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItemCreate>"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "sentToCustomer",
            "baseName": "sentToCustomer",
            "type": "boolean"
        }
    ];
    return TransactionInvoiceReplacement;
}());
exports.TransactionInvoiceReplacement = TransactionInvoiceReplacement;
module.exports = TransactionInvoiceReplacement;
