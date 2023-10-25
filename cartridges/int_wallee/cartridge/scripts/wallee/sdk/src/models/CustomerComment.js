"use strict";

exports.CustomerComment = void 0;
var CustomerComment = /** @class */ (function () {
    function CustomerComment() {
    }
    CustomerComment.getAttributeTypeMap = function () {
        return CustomerComment.attributeTypeMap;
    };
    CustomerComment.discriminator = undefined;
    CustomerComment.attributeTypeMap = [
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
            "name": "customer",
            "baseName": "customer",
            "type": "number"
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
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return CustomerComment;
}());
exports.CustomerComment = CustomerComment;
module.exports = CustomerComment;
