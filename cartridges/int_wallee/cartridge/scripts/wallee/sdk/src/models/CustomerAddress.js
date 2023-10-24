"use strict";

var CustomerAddress = /** @class */ (function () {
    function CustomerAddress() {
    }
    CustomerAddress.getAttributeTypeMap = function () {
        return CustomerAddress.attributeTypeMap;
    };
    CustomerAddress.discriminator = undefined;
    CustomerAddress.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CustomerPostalAddress"
        },
        {
            "name": "addressType",
            "baseName": "addressType",
            "type": "CustomerAddressType"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "Customer"
        },
        {
            "name": "defaultAddress",
            "baseName": "defaultAddress",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return CustomerAddress;
}());
exports.CustomerAddress = CustomerAddress;
module.exports = CustomerAddress;
