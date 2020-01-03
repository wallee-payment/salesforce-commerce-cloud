"use strict";
exports.__esModule = true;
var ProductSetupFee = /** @class */ (function () {
    function ProductSetupFee() {
    }
    ProductSetupFee.getAttributeTypeMap = function () {
        return ProductSetupFee.attributeTypeMap;
    };
    ProductSetupFee.discriminator = undefined;
    ProductSetupFee.attributeTypeMap = [
        {
            "name": "component",
            "baseName": "component",
            "type": "SubscriptionProductComponent"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "DatabaseTranslatedString"
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
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedString"
        },
        {
            "name": "onDowngradeCreditedAmount",
            "baseName": "onDowngradeCreditedAmount",
            "type": "Array<PersistableCurrencyAmount>"
        },
        {
            "name": "onUpgradeCreditedAmount",
            "baseName": "onUpgradeCreditedAmount",
            "type": "Array<PersistableCurrencyAmount>"
        },
        {
            "name": "setupFee",
            "baseName": "setupFee",
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
    return ProductSetupFee;
}());
exports.ProductSetupFee = ProductSetupFee;
module.exports = ProductSetupFee;
