"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.DebtCollectionCaseCreate = void 0;
var AbstractDebtCollectionCaseUpdate = require("./AbstractDebtCollectionCaseUpdate");
var DebtCollectionCaseCreate = /** @class */ (function (_super) {
    __extends(DebtCollectionCaseCreate, _super);
    function DebtCollectionCaseCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebtCollectionCaseCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(DebtCollectionCaseCreate.attributeTypeMap);
    };
    DebtCollectionCaseCreate.discriminator = undefined;
    DebtCollectionCaseCreate.attributeTypeMap = [
        {
            "name": "collectorConfiguration",
            "baseName": "collectorConfiguration",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }
    ];
    return DebtCollectionCaseCreate;
}(AbstractDebtCollectionCaseUpdate));
exports.DebtCollectionCaseCreate = DebtCollectionCaseCreate;
module.exports = DebtCollectionCaseCreate;
