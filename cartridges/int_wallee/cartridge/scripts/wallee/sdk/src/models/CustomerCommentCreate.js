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

var AbstractCustomerCommentActive = require("./AbstractCustomerCommentActive");
var CustomerCommentCreate = /** @class */ (function (_super) {
    __extends(CustomerCommentCreate, _super);
    function CustomerCommentCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerCommentCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(CustomerCommentCreate.attributeTypeMap);
    };
    CustomerCommentCreate.discriminator = undefined;
    CustomerCommentCreate.attributeTypeMap = [
        {
            "name": "customer",
            "baseName": "customer",
            "type": "number"
        }
    ];
    return CustomerCommentCreate;
}(AbstractCustomerCommentActive));
exports.CustomerCommentCreate = CustomerCommentCreate;
module.exports = CustomerCommentCreate;
