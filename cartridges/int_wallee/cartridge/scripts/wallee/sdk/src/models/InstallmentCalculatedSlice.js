"use strict";

exports.InstallmentCalculatedSlice = void 0;
var InstallmentCalculatedSlice = /** @class */ (function () {
    function InstallmentCalculatedSlice() {
    }
    InstallmentCalculatedSlice.getAttributeTypeMap = function () {
        return InstallmentCalculatedSlice.attributeTypeMap;
    };
    InstallmentCalculatedSlice.discriminator = undefined;
    InstallmentCalculatedSlice.attributeTypeMap = [
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "dueOn",
            "baseName": "dueOn",
            "type": "Date"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        }
    ];
    return InstallmentCalculatedSlice;
}());
exports.InstallmentCalculatedSlice = InstallmentCalculatedSlice;
module.exports = InstallmentCalculatedSlice;
