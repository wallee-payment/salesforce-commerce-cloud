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
exports.__esModule = true;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var ChargeFlowLevel = /** @class */ (function (_super) {
    __extends(ChargeFlowLevel, _super);
    function ChargeFlowLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargeFlowLevel.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ChargeFlowLevel.attributeTypeMap);
    };
    ChargeFlowLevel.discriminator = undefined;
    ChargeFlowLevel.attributeTypeMap = [
        {
            "name": "asynchronousCharge",
            "baseName": "asynchronousCharge",
            "type": "number"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "ChargeFlowLevelConfiguration"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ChargeFlowLevelState"
        },
        {
            "name": "synchronousCharge",
            "baseName": "synchronousCharge",
            "type": "number"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "tokenCharge",
            "baseName": "tokenCharge",
            "type": "number"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ChargeFlowLevel;
}(TransactionAwareEntity));
exports.ChargeFlowLevel = ChargeFlowLevel;
module.exports = ChargeFlowLevel;
