"use strict";
exports.__esModule = true;
var AbstractDebtCollectionCaseUpdate = /** @class */ (function () {
    function AbstractDebtCollectionCaseUpdate() {
    }
    AbstractDebtCollectionCaseUpdate.getAttributeTypeMap = function () {
        return AbstractDebtCollectionCaseUpdate.attributeTypeMap;
    };
    AbstractDebtCollectionCaseUpdate.discriminator = undefined;
    AbstractDebtCollectionCaseUpdate.attributeTypeMap = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "AddressCreate"
        },
        {
            "name": "contractDate",
            "baseName": "contractDate",
            "type": "Date"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "DebtCollectionEnvironment"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItemCreate>"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        }
    ];
    return AbstractDebtCollectionCaseUpdate;
}());
exports.AbstractDebtCollectionCaseUpdate = AbstractDebtCollectionCaseUpdate;
module.exports = AbstractDebtCollectionCaseUpdate;
