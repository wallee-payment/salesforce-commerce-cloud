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

exports.TransactionPending = void 0;
var AbstractTransactionPending = require("./AbstractTransactionPending");
var TransactionPending = /** @class */ (function (_super) {
    __extends(TransactionPending, _super);
    function TransactionPending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionPending.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(TransactionPending.attributeTypeMap);
    };
    TransactionPending.discriminator = undefined;
    TransactionPending.attributeTypeMap = [
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
    return TransactionPending;
}(AbstractTransactionPending));
exports.TransactionPending = TransactionPending;
module.exports = TransactionPending;
