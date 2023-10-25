"use strict";

exports.AbstractTransactionInvoiceCommentActive = void 0;
var AbstractTransactionInvoiceCommentActive = /** @class */ (function () {
    function AbstractTransactionInvoiceCommentActive() {
    }
    AbstractTransactionInvoiceCommentActive.getAttributeTypeMap = function () {
        return AbstractTransactionInvoiceCommentActive.attributeTypeMap;
    };
    AbstractTransactionInvoiceCommentActive.discriminator = undefined;
    AbstractTransactionInvoiceCommentActive.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }
    ];
    return AbstractTransactionInvoiceCommentActive;
}());
exports.AbstractTransactionInvoiceCommentActive = AbstractTransactionInvoiceCommentActive;
module.exports = AbstractTransactionInvoiceCommentActive;
