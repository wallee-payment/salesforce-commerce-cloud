"use strict";

var AbstractPaymentLinkUpdate = /** @class */ (function () {
    function AbstractPaymentLinkUpdate() {
    }
    AbstractPaymentLinkUpdate.getAttributeTypeMap = function () {
        return AbstractPaymentLinkUpdate.attributeTypeMap;
    };
    AbstractPaymentLinkUpdate.discriminator = undefined;
    AbstractPaymentLinkUpdate.attributeTypeMap = [
        {
            "name": "allowedPaymentMethodConfigurations",
            "baseName": "allowedPaymentMethodConfigurations",
            "type": "Array<PaymentMethodConfiguration>"
        },
        {
            "name": "appliedSpaceView",
            "baseName": "appliedSpaceView",
            "type": "number"
        },
        {
            "name": "availableFrom",
            "baseName": "availableFrom",
            "type": "Date"
        },
        {
            "name": "availableUntil",
            "baseName": "availableUntil",
            "type": "Date"
        },
        {
            "name": "billingAddressRequired",
            "baseName": "billingAddressRequired",
            "type": "boolean"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItemCreate>"
        },
        {
            "name": "maximalNumberOfTransactions",
            "baseName": "maximalNumberOfTransactions",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "shippingAddressRequired",
            "baseName": "shippingAddressRequired",
            "type": "boolean"
        }
    ];
    return AbstractPaymentLinkUpdate;
}());
exports.AbstractPaymentLinkUpdate = AbstractPaymentLinkUpdate;
module.exports = AbstractPaymentLinkUpdate;
