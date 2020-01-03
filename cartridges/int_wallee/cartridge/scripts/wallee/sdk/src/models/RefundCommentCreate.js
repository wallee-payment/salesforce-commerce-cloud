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
var AbstractRefundCommentActive = require("./AbstractRefundCommentActive");
var RefundCommentCreate = /** @class */ (function (_super) {
    __extends(RefundCommentCreate, _super);
    function RefundCommentCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefundCommentCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(RefundCommentCreate.attributeTypeMap);
    };
    RefundCommentCreate.discriminator = undefined;
    RefundCommentCreate.attributeTypeMap = [
        {
            "name": "refund",
            "baseName": "refund",
            "type": "number"
        }
    ];
    return RefundCommentCreate;
}(AbstractRefundCommentActive));
exports.RefundCommentCreate = RefundCommentCreate;
module.exports = RefundCommentCreate;
