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

exports.TransactionCommentCreate = void 0;
var AbstractTransactionCommentActive = require("./AbstractTransactionCommentActive");
var TransactionCommentCreate = /** @class */ (function (_super) {
    __extends(TransactionCommentCreate, _super);
    function TransactionCommentCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionCommentCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionCommentCreate.attributeTypeMap);
    };
    TransactionCommentCreate.discriminator = undefined;
    TransactionCommentCreate.attributeTypeMap = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "number"
        }
    ];
    return TransactionCommentCreate;
}(AbstractTransactionCommentActive));
exports.TransactionCommentCreate = TransactionCommentCreate;
module.exports = TransactionCommentCreate;
