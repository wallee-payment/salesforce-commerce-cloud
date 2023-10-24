"use strict";

var PaymentLinkUpdate = /** @class */ (function () {
    function PaymentLinkUpdate() {
    }
    PaymentLinkUpdate.getAttributeTypeMap = function () {
        return PaymentLinkUpdate.attributeTypeMap;
    };
    PaymentLinkUpdate.discriminator = undefined;
    PaymentLinkUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
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
            "name": "billingAddressHandlingMode",
            "baseName": "billingAddressHandlingMode",
            "type": "PaymentLinkAddressHandlingMode"
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
            "name": "shippingAddressHandlingMode",
            "baseName": "shippingAddressHandlingMode",
            "type": "PaymentLinkAddressHandlingMode"
        }
    ];
    return PaymentLinkUpdate;
}());
exports.PaymentLinkUpdate = PaymentLinkUpdate;
module.exports = PaymentLinkUpdate;
