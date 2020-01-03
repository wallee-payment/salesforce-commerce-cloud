"use strict";
exports.__esModule = true;
var ProductMeteredTierFee = /** @class */ (function () {
    function ProductMeteredTierFee() {
    }
    ProductMeteredTierFee.getAttributeTypeMap = function () {
        return ProductMeteredTierFee.attributeTypeMap;
    };
    ProductMeteredTierFee.discriminator = undefined;
    ProductMeteredTierFee.attributeTypeMap = [
        {
            "name": "fee",
            "baseName": "fee",
            "type": "Array<PersistableCurrencyAmount>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "meteredFee",
            "baseName": "meteredFee",
            "type": "ProductMeteredFee"
        },
        {
            "name": "startRange",
            "baseName": "startRange",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ProductMeteredTierFee;
}());
exports.ProductMeteredTierFee = ProductMeteredTierFee;
module.exports = ProductMeteredTierFee;
