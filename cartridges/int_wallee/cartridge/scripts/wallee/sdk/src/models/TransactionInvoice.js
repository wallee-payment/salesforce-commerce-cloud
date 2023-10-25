"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.TransactionInvoice = void 0;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var TransactionInvoice = /** @class */ (function (_super) {
    __extends(TransactionInvoice, _super);
    function TransactionInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionInvoice.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionInvoice.attributeTypeMap);
    };
    TransactionInvoice.discriminator = undefined;
    TransactionInvoice.attributeTypeMap = [
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
            "name": "completion",
            "baseName": "completion",
            "type": "TransactionCompletion"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "derecognizedBy",
            "baseName": "derecognizedBy",
            "type": "number"
        },
        {
            "name": "derecognizedOn",
            "baseName": "derecognizedOn",
            "type": "Date"
        },
        {
            "name": "dueOn",
            "baseName": "dueOn",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Environment"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
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
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "outstandingAmount",
            "baseName": "outstandingAmount",
            "type": "number"
        },
        {
            "name": "paidOn",
            "baseName": "paidOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "TransactionInvoiceState"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionInvoice;
}(TransactionAwareEntity));
exports.TransactionInvoice = TransactionInvoice;
module.exports = TransactionInvoice;
