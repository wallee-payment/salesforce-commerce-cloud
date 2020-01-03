"use strict";
exports.__esModule = true;
var ProductMeteredTierFeeUpdate = /** @class */ (function () {
    function ProductMeteredTierFeeUpdate() {
    }
    ProductMeteredTierFeeUpdate.getAttributeTypeMap = function () {
        return ProductMeteredTierFeeUpdate.attributeTypeMap;
    };
    ProductMeteredTierFeeUpdate.discriminator = undefined;
    ProductMeteredTierFeeUpdate.attributeTypeMap = [
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
            "name": "fee",
            "baseName": "fee",
            "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        {
            "name": "meteredFee",
            "baseName": "meteredFee",
            "type": "number"
        },
        {
            "name": "startRange",
            "baseName": "startRange",
            "type": "number"
        }
    ];
    return ProductMeteredTierFeeUpdate;
}());
exports.ProductMeteredTierFeeUpdate = ProductMeteredTierFeeUpdate;
module.exports = ProductMeteredTierFeeUpdate;
