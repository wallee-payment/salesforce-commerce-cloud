"use strict";

var RefundComment = /** @class */ (function () {
    function RefundComment() {
    }
    RefundComment.getAttributeTypeMap = function () {
        return RefundComment.attributeTypeMap;
    };
    RefundComment.discriminator = undefined;
    RefundComment.attributeTypeMap = [
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
            "name": "refund",
            "baseName": "refund",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return RefundComment;
}());
exports.RefundComment = RefundComment;
module.exports = RefundComment;
