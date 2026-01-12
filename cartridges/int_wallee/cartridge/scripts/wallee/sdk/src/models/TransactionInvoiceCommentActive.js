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

exports.TransactionInvoiceCommentActive = void 0;
var AbstractTransactionInvoiceCommentActive = require("./AbstractTransactionInvoiceCommentActive");
var TransactionInvoiceCommentActive = /** @class */ (function (_super) {
    __extends(TransactionInvoiceCommentActive, _super);
    function TransactionInvoiceCommentActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionInvoiceCommentActive.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionInvoiceCommentActive.attributeTypeMap);
    };
    TransactionInvoiceCommentActive.discriminator = undefined;
    TransactionInvoiceCommentActive.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionInvoiceCommentActive;
}(AbstractTransactionInvoiceCommentActive));
exports.TransactionInvoiceCommentActive = TransactionInvoiceCommentActive;
module.exports = TransactionInvoiceCommentActive;
