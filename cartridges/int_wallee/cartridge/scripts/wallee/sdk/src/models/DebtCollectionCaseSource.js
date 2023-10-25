"use strict";

exports.DebtCollectionCaseSource = void 0;
var DebtCollectionCaseSource = /** @class */ (function () {
    function DebtCollectionCaseSource() {
    }
    DebtCollectionCaseSource.getAttributeTypeMap = function () {
        return DebtCollectionCaseSource.attributeTypeMap;
    };
    DebtCollectionCaseSource.discriminator = undefined;
    DebtCollectionCaseSource.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "forcedPreparingState",
            "baseName": "forcedPreparingState",
            "type": "boolean"
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
    return DebtCollectionCaseSource;
}());
exports.DebtCollectionCaseSource = DebtCollectionCaseSource;
module.exports = DebtCollectionCaseSource;
