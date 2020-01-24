"use strict";

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
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "ledgerEntryTitle",
            "baseName": "ledgerEntryTitle",
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
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
