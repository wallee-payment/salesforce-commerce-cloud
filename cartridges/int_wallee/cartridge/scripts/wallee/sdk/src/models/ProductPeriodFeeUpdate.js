"use strict";

exports.ProductPeriodFeeUpdate = void 0;
var ProductPeriodFeeUpdate = /** @class */ (function () {
    function ProductPeriodFeeUpdate() {
    }
    ProductPeriodFeeUpdate.getAttributeTypeMap = function () {
        return ProductPeriodFeeUpdate.attributeTypeMap;
    };
    ProductPeriodFeeUpdate.discriminator = undefined;
    ProductPeriodFeeUpdate.attributeTypeMap = [
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
            "name": "ledgerEntryTitle",
            "baseName": "ledgerEntryTitle",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "numberOfFreeTrialPeriods",
            "baseName": "numberOfFreeTrialPeriods",
            "type": "number"
        },
        {
            "name": "periodFee",
            "baseName": "periodFee",
            "type": "Array<PersistableCurrencyAmountUpdate>"
        }
    ];
    return ProductPeriodFeeUpdate;
}());
exports.ProductPeriodFeeUpdate = ProductPeriodFeeUpdate;
module.exports = ProductPeriodFeeUpdate;
