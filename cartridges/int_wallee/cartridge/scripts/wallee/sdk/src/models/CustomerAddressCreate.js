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

exports.CustomerAddressCreate = void 0;
var AbstractCustomerAddressActive = require("./AbstractCustomerAddressActive");
var CustomerAddressCreate = /** @class */ (function (_super) {
    __extends(CustomerAddressCreate, _super);
    function CustomerAddressCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerAddressCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(CustomerAddressCreate.attributeTypeMap);
    };
    CustomerAddressCreate.discriminator = undefined;
    CustomerAddressCreate.attributeTypeMap = [
        {
            "name": "customer",
            "baseName": "customer",
            "type": "number"
        }
    ];
    return CustomerAddressCreate;
}(AbstractCustomerAddressActive));
exports.CustomerAddressCreate = CustomerAddressCreate;
module.exports = CustomerAddressCreate;
