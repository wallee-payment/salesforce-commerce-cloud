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

var AbstractTransactionInvoiceCommentActive = require("./AbstractTransactionInvoiceCommentActive");
var TransactionInvoiceCommentCreate = /** @class */ (function (_super) {
    __extends(TransactionInvoiceCommentCreate, _super);
    function TransactionInvoiceCommentCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionInvoiceCommentCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionInvoiceCommentCreate.attributeTypeMap);
    };
    TransactionInvoiceCommentCreate.discriminator = undefined;
    TransactionInvoiceCommentCreate.attributeTypeMap = [
        {
            "name": "transactionInvoice",
            "baseName": "transactionInvoice",
            "type": "number"
        }
    ];
    return TransactionInvoiceCommentCreate;
}(AbstractTransactionInvoiceCommentActive));
exports.TransactionInvoiceCommentCreate = TransactionInvoiceCommentCreate;
module.exports = TransactionInvoiceCommentCreate;
