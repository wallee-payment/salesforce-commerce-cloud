"use strict";

var ShopifySubscriptionProduct = /** @class */ (function () {
    function ShopifySubscriptionProduct() {
    }
    ShopifySubscriptionProduct.getAttributeTypeMap = function () {
        return ShopifySubscriptionProduct.attributeTypeMap;
    };
    ShopifySubscriptionProduct.discriminator = undefined;
    ShopifySubscriptionProduct.attributeTypeMap = [
        {
            "name": "absolutePriceAdjustment",
            "baseName": "absolutePriceAdjustment",
            "type": "number"
        },
        {
            "name": "billingDayOfMonth",
            "baseName": "billingDayOfMonth",
            "type": "number"
        },
        {
            "name": "billingIntervalAmount",
            "baseName": "billingIntervalAmount",
            "type": "number"
        },
        {
            "name": "billingIntervalUnit",
            "baseName": "billingIntervalUnit",
            "type": "ShopifySubscriptionBillingIntervalUnit"
        },
        {
            "name": "billingWeekday",
            "baseName": "billingWeekday",
            "type": "ShopifySubscriptionWeekday"
        },
        {
            "name": "fixedPrice",
            "baseName": "fixedPrice",
            "type": "number"
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
            "name": "maximalBillingCycles",
            "baseName": "maximalBillingCycles",
            "type": "number"
        },
        {
            "name": "maximalSuspendableCycles",
            "baseName": "maximalSuspendableCycles",
            "type": "number"
        },
        {
            "name": "minimalBillingCycles",
            "baseName": "minimalBillingCycles",
            "type": "number"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "pricingOption",
            "baseName": "pricingOption",
            "type": "ShopifySubscriptionProductPricingOption"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string"
        },
        {
            "name": "productPrice",
            "baseName": "productPrice",
            "type": "number"
        },
        {
            "name": "productSku",
            "baseName": "productSku",
            "type": "string"
        },
        {
            "name": "productVariantId",
            "baseName": "productVariantId",
            "type": "string"
        },
        {
            "name": "productVariantName",
            "baseName": "productVariantName",
            "type": "string"
        },
        {
            "name": "relativePriceAdjustment",
            "baseName": "relativePriceAdjustment",
            "type": "number"
        },
        {
            "name": "shippingRequired",
            "baseName": "shippingRequired",
            "type": "boolean"
        },
        {
            "name": "shop",
            "baseName": "shop",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ShopifySubscriptionProductState"
        },
        {
            "name": "stockCheckRequired",
            "baseName": "stockCheckRequired",
            "type": "boolean"
        },
        {
            "name": "storeOrderConfirmationEmailEnabled",
            "baseName": "storeOrderConfirmationEmailEnabled",
            "type": "boolean"
        },
        {
            "name": "subscriberSuspensionAllowed",
            "baseName": "subscriberSuspensionAllowed",
            "type": "boolean"
        },
        {
            "name": "terminationBillingCycles",
            "baseName": "terminationBillingCycles",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ShopifySubscriptionProduct;
}());
exports.ShopifySubscriptionProduct = ShopifySubscriptionProduct;
module.exports = ShopifySubscriptionProduct;
