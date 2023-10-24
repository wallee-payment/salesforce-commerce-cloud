"use strict";

var TransactionComment = /** @class */ (function () {
    function TransactionComment() {
    }
    TransactionComment.getAttributeTypeMap = function () {
        return TransactionComment.attributeTypeMap;
    };
    TransactionComment.discriminator = undefined;
    TransactionComment.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
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
            "name": "editedBy",
            "baseName": "editedBy",
            "type": "number"
        },
        {
            "name": "editedOn",
            "baseName": "editedOn",
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
            "name": "pinned",
            "baseName": "pinned",
            "type": "boolean"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionComment;
}());
exports.TransactionComment = TransactionComment;
module.exports = TransactionComment;
