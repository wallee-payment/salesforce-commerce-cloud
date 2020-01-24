"use strict";

var PaymentLink = /** @class */ (function () {
    function PaymentLink() {
    }
    PaymentLink.getAttributeTypeMap = function () {
        return PaymentLink.attributeTypeMap;
    };
    PaymentLink.discriminator = undefined;
    PaymentLink.attributeTypeMap = [
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
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "protectionMode",
            "baseName": "protectionMode",
            "type": "PaymentLinkProtectionMode"
        },
        {
            "name": "shippingAddressRequired",
            "baseName": "shippingAddressRequired",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return PaymentLink;
}());
exports.PaymentLink = PaymentLink;
module.exports = PaymentLink;
