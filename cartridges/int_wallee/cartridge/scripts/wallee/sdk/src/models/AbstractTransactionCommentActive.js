"use strict";
exports.__esModule = true;
var AbstractTransactionCommentActive = /** @class */ (function () {
    function AbstractTransactionCommentActive() {
    }
    AbstractTransactionCommentActive.getAttributeTypeMap = function () {
        return AbstractTransactionCommentActive.attributeTypeMap;
    };
    AbstractTransactionCommentActive.discriminator = undefined;
    AbstractTransactionCommentActive.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }
    ];
    return AbstractTransactionCommentActive;
}());
exports.AbstractTransactionCommentActive = AbstractTransactionCommentActive;
module.exports = AbstractTransactionCommentActive;
