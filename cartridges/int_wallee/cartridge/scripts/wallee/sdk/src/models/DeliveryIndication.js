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
var DeliveryIndication = /** @class */ (function (_super) {
    __extends(DeliveryIndication, _super);
    function DeliveryIndication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeliveryIndication.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(DeliveryIndication.attributeTypeMap);
    };
    DeliveryIndication.discriminator = undefined;
    DeliveryIndication.attributeTypeMap = [
        {
            "name": "automaticDecisionReason",
            "baseName": "automaticDecisionReason",
            "type": "DeliveryIndicationDecisionReason"
        },
        {
            "name": "automaticallyDecidedOn",
            "baseName": "automaticallyDecidedOn",
            "type": "Date"
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "manualDecisionTimeoutOn",
            "baseName": "manualDecisionTimeoutOn",
            "type": "Date"
        },
        {
            "name": "manuallyDecidedBy",
            "baseName": "manuallyDecidedBy",
            "type": "number"
        },
        {
            "name": "manuallyDecidedOn",
            "baseName": "manuallyDecidedOn",
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
            "type": "DeliveryIndicationState"
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
        }
    ];
    return DeliveryIndication;
}(TransactionAwareEntity));
exports.DeliveryIndication = DeliveryIndication;
module.exports = DeliveryIndication;
