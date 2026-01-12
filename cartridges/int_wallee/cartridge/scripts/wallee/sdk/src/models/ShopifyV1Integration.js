"use strict";

exports.ShopifyV1Integration = void 0;
var ShopifyV1Integration = /** @class */ (function () {
    function ShopifyV1Integration() {
    }
    ShopifyV1Integration.getAttributeTypeMap = function () {
        return ShopifyV1Integration.attributeTypeMap;
    };
    ShopifyV1Integration.discriminator = undefined;
    ShopifyV1Integration.attributeTypeMap = [
        {
            "name": "additionalLineItemData",
            "baseName": "additionalLineItemData",
            "type": "Array<ShopifyAdditionalLineItemData>"
        },
        {
            "name": "allowInvoiceDownload",
            "baseName": "allowInvoiceDownload",
            "type": "boolean"
        },
        {
            "name": "allowPaymentWithTaxDiscrepancy",
            "baseName": "allowPaymentWithTaxDiscrepancy",
            "type": "boolean"
        },
        {
            "name": "allowedPaymentMethodConfigurations",
            "baseName": "allowedPaymentMethodConfigurations",
            "type": "Array<PaymentMethodConfiguration>"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "integratedPaymentFormEnabled",
            "baseName": "integratedPaymentFormEnabled",
            "type": "boolean"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "loginName",
            "baseName": "loginName",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentAppVersion",
            "baseName": "paymentAppVersion",
            "type": "ShopifyIntegrationPaymentAppVersion"
        },
        {
            "name": "paymentInstalled",
            "baseName": "paymentInstalled",
            "type": "boolean"
        },
        {
            "name": "paymentProxyPath",
            "baseName": "paymentProxyPath",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "replacePaymentMethodImage",
            "baseName": "replacePaymentMethodImage",
            "type": "boolean"
        },
        {
            "name": "shopName",
            "baseName": "shopName",
            "type": "string"
        },
        {
            "name": "showPaymentInformation",
            "baseName": "showPaymentInformation",
            "type": "boolean"
        },
        {
            "name": "showSubscriptionInformation",
            "baseName": "showSubscriptionInformation",
            "type": "boolean"
        },
        {
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "number"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "subscriptionAppVersion",
            "baseName": "subscriptionAppVersion",
            "type": "ShopifyIntegrationSubscriptionAppVersion"
        },
        {
            "name": "subscriptionInstalled",
            "baseName": "subscriptionInstalled",
            "type": "boolean"
        },
        {
            "name": "subscriptionProxyPath",
            "baseName": "subscriptionProxyPath",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifyV1Integration;
}());
exports.ShopifyV1Integration = ShopifyV1Integration;
module.exports = ShopifyV1Integration;
