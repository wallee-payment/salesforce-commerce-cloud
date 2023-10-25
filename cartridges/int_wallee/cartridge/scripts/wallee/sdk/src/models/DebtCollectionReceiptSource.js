"use strict";

exports.DebtCollectionReceiptSource = void 0;
var DebtCollectionReceiptSource = /** @class */ (function () {
    function DebtCollectionReceiptSource() {
    }
    DebtCollectionReceiptSource.getAttributeTypeMap = function () {
        return DebtCollectionReceiptSource.attributeTypeMap;
    };
    DebtCollectionReceiptSource.discriminator = undefined;
    DebtCollectionReceiptSource.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        }
    ];
    return DebtCollectionReceiptSource;
}());
exports.DebtCollectionReceiptSource = DebtCollectionReceiptSource;
module.exports = DebtCollectionReceiptSource;
