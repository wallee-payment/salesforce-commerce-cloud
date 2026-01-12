"use strict";

exports.AbstractTransactionPending = void 0;
var AbstractTransactionPending = /** @class */ (function () {
    function AbstractTransactionPending() {
    }
    AbstractTransactionPending.getAttributeTypeMap = function () {
        return AbstractTransactionPending.attributeTypeMap;
    };
    AbstractTransactionPending.discriminator = undefined;
    AbstractTransactionPending.attributeTypeMap = [
        {
            "name": "allowedPaymentMethodBrands",
            "baseName": "allowedPaymentMethodBrands",
            "type": "Array<number>"
        },
        {
            "name": "allowedPaymentMethodConfigurations",
            "baseName": "allowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "AddressCreate"
        },
        {
            "name": "completionBehavior",
            "baseName": "completionBehavior",
            "type": "TransactionCompletionBehavior"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customerEmailAddress",
            "baseName": "customerEmailAddress",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "failedUrl",
            "baseName": "failedUrl",
            "type": "string"
        },
        {
            "name": "invoiceMerchantReference",
            "baseName": "invoiceMerchantReference",
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
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "AddressCreate"
        },
        {
            "name": "shippingMethod",
            "baseName": "shippingMethod",
            "type": "string"
        },
        {
            "name": "successUrl",
            "baseName": "successUrl",
            "type": "string"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "number"
        },
        {
            "name": "tokenizationMode",
            "baseName": "tokenizationMode",
            "type": "TokenizationMode"
        }
    ];
    return AbstractTransactionPending;
}());
exports.AbstractTransactionPending = AbstractTransactionPending;
module.exports = AbstractTransactionPending;
