"use strict";
exports.__esModule = true;
var AbstractRefundCommentActive = /** @class */ (function () {
    function AbstractRefundCommentActive() {
    }
    AbstractRefundCommentActive.getAttributeTypeMap = function () {
        return AbstractRefundCommentActive.attributeTypeMap;
    };
    AbstractRefundCommentActive.discriminator = undefined;
    AbstractRefundCommentActive.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }
    ];
    return AbstractRefundCommentActive;
}());
exports.AbstractRefundCommentActive = AbstractRefundCommentActive;
module.exports = AbstractRefundCommentActive;
