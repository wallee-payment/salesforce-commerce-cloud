"use strict";

var ProductMeteredFeeUpdate = /** @class */ (function () {
    function ProductMeteredFeeUpdate() {
    }
    ProductMeteredFeeUpdate.getAttributeTypeMap = function () {
        return ProductMeteredFeeUpdate.attributeTypeMap;
    };
    ProductMeteredFeeUpdate.discriminator = undefined;
    ProductMeteredFeeUpdate.attributeTypeMap = [
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
            "name": "component",
            "baseName": "component",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "number"
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
        }
    ];
    return ProductMeteredFeeUpdate;
}());
exports.ProductMeteredFeeUpdate = ProductMeteredFeeUpdate;
module.exports = ProductMeteredFeeUpdate;
