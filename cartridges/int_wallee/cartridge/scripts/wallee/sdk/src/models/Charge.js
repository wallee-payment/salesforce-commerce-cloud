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

exports.Charge = void 0;
var TransactionAwareEntity = require("./TransactionAwareEntity");
var Charge = /** @class */ (function (_super) {
    __extends(Charge, _super);
    function Charge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Charge.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(Charge.attributeTypeMap);
    };
    Charge.discriminator = undefined;
    Charge.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "failureReason",
            "baseName": "failureReason",
            "type": "FailureReason"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "spaceViewId",
            "baseName": "spaceViewId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ChargeState"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "timeoutOn",
            "baseName": "timeoutOn",
            "type": "Date"
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ChargeType"
        },
        {
            "name": "userFailureMessage",
            "baseName": "userFailureMessage",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Charge;
}(TransactionAwareEntity));
exports.Charge = Charge;
module.exports = Charge;
