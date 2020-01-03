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
exports.__esModule = true;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var TransactionLineItemVersion = /** @class */ (function (_super) {
    __extends(TransactionLineItemVersion, _super);
    function TransactionLineItemVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionLineItemVersion.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionLineItemVersion.attributeTypeMap);
    };
    TransactionLineItemVersion.discriminator = undefined;
    TransactionLineItemVersion.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
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
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionLineItemVersion;
}(TransactionAwareEntity));
exports.TransactionLineItemVersion = TransactionLineItemVersion;
module.exports = TransactionLineItemVersion;
