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

exports.InvoiceReimbursementWithRefundReference = void 0;
var InvoiceReimbursement = require("./InvoiceReimbursement");
var InvoiceReimbursementWithRefundReference = /** @class */ (function (_super) {
    __extends(InvoiceReimbursementWithRefundReference, _super);
    function InvoiceReimbursementWithRefundReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvoiceReimbursementWithRefundReference.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(InvoiceReimbursementWithRefundReference.attributeTypeMap);
    };
    InvoiceReimbursementWithRefundReference.discriminator = undefined;
    InvoiceReimbursementWithRefundReference.attributeTypeMap = [
        {
            "name": "refundMerchantReference",
            "baseName": "refundMerchantReference",
            "type": "string"
        }
    ];
    return InvoiceReimbursementWithRefundReference;
}(InvoiceReimbursement));
exports.InvoiceReimbursementWithRefundReference = InvoiceReimbursementWithRefundReference;
module.exports = InvoiceReimbursementWithRefundReference;
