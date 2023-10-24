"use strict";

var ProductPeriodFee = /** @class */ (function () {
    function ProductPeriodFee() {
    }
    ProductPeriodFee.getAttributeTypeMap = function () {
        return ProductPeriodFee.attributeTypeMap;
    };
    ProductPeriodFee.discriminator = undefined;
    ProductPeriodFee.attributeTypeMap = [
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
            "name": "ledgerEntryTitle",
            "baseName": "ledgerEntryTitle",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
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
            "type": "Array<PersistableCurrencyAmount>"
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
    return ProductPeriodFee;
}());
exports.ProductPeriodFee = ProductPeriodFee;
module.exports = ProductPeriodFee;
