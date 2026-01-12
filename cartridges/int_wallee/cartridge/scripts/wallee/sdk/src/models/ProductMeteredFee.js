"use strict";

exports.ProductMeteredFee = void 0;
var ProductMeteredFee = /** @class */ (function () {
    function ProductMeteredFee() {
    }
    ProductMeteredFee.getAttributeTypeMap = function () {
        return ProductMeteredFee.attributeTypeMap;
    };
    ProductMeteredFee.discriminator = undefined;
    ProductMeteredFee.attributeTypeMap = [
        {
            "name": "component",
            "baseName": "component",
            "type": "SubscriptionProductComponent"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
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
            "name": "metric",
            "baseName": "metric",
            "type": "SubscriptionMetric"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tierPricing",
            "baseName": "tierPricing",
            "type": "ProductMeteredTierPricing"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ProductFeeType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ProductMeteredFee;
}());
exports.ProductMeteredFee = ProductMeteredFee;
module.exports = ProductMeteredFee;
