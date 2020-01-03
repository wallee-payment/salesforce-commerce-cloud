"use strict";
exports.__esModule = true;
var ProductSetupFeeUpdate = /** @class */ (function () {
    function ProductSetupFeeUpdate() {
    }
    ProductSetupFeeUpdate.getAttributeTypeMap = function () {
        return ProductSetupFeeUpdate.attributeTypeMap;
    };
    ProductSetupFeeUpdate.discriminator = undefined;
    ProductSetupFeeUpdate.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "onDowngradeCreditedAmount",
            "baseName": "onDowngradeCreditedAmount",
            "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        {
            "name": "onUpgradeCreditedAmount",
            "baseName": "onUpgradeCreditedAmount",
            "type": "Array<PersistableCurrencyAmountUpdate>"
        },
        {
            "name": "setupFee",
            "baseName": "setupFee",
            "type": "Array<PersistableCurrencyAmountUpdate>"
        }
    ];
    return ProductSetupFeeUpdate;
}());
exports.ProductSetupFeeUpdate = ProductSetupFeeUpdate;
module.exports = ProductSetupFeeUpdate;
