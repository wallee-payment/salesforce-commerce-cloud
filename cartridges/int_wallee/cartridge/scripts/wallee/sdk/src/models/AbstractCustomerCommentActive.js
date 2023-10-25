"use strict";

exports.AbstractCustomerCommentActive = void 0;
var AbstractCustomerCommentActive = /** @class */ (function () {
    function AbstractCustomerCommentActive() {
    }
    AbstractCustomerCommentActive.getAttributeTypeMap = function () {
        return AbstractCustomerCommentActive.attributeTypeMap;
    };
    AbstractCustomerCommentActive.discriminator = undefined;
    AbstractCustomerCommentActive.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        }
    ];
    return AbstractCustomerCommentActive;
}());
exports.AbstractCustomerCommentActive = AbstractCustomerCommentActive;
module.exports = AbstractCustomerCommentActive;
