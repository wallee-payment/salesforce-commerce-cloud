"use strict";
exports.__esModule = true;
var AbstractCustomerAddressActive = /** @class */ (function () {
    function AbstractCustomerAddressActive() {
    }
    AbstractCustomerAddressActive.getAttributeTypeMap = function () {
        return AbstractCustomerAddressActive.attributeTypeMap;
    };
    AbstractCustomerAddressActive.discriminator = undefined;
    AbstractCustomerAddressActive.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CustomerPostalAddressCreate"
        },
        {
            "name": "addressType",
            "baseName": "addressType",
            "type": "CustomerAddressType"
        }
    ];
    return AbstractCustomerAddressActive;
}());
exports.AbstractCustomerAddressActive = AbstractCustomerAddressActive;
module.exports = AbstractCustomerAddressActive;
