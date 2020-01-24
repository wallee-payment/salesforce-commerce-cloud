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

var TransactionAwareEntity = require("./TransactionAwareEntity");
var TransactionCompletion = /** @class */ (function (_super) {
    __extends(TransactionCompletion, _super);
    function TransactionCompletion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionCompletion.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionCompletion.attributeTypeMap);
    };
    TransactionCompletion.discriminator = undefined;
    TransactionCompletion.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "baseLineItems",
            "baseName": "baseLineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
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
            "name": "lastCompletion",
            "baseName": "lastCompletion",
            "type": "boolean"
        },
        {
            "name": "lineItemVersion",
            "baseName": "lineItemVersion",
            "type": "TransactionLineItemVersion"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "TransactionCompletionMode"
        },
        {
            "name": "nextUpdateOn",
            "baseName": "nextUpdateOn",
            "type": "Date"
        },
        {
            "name": "paymentInformation",
            "baseName": "paymentInformation",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processingOn",
            "baseName": "processingOn",
            "type": "Date"
        },
        {
            "name": "processorReference",
            "baseName": "processorReference",
            "type": "string"
        },
        {
            "name": "remainingLineItems",
            "baseName": "remainingLineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "TransactionCompletionState"
        },
        {
            "name": "succeededOn",
            "baseName": "succeededOn",
            "type": "Date"
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
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionCompletion;
}(TransactionAwareEntity));
exports.TransactionCompletion = TransactionCompletion;
module.exports = TransactionCompletion;
