"use strict";
exports.__esModule = true;
var TransactionGroup = /** @class */ (function () {
    function TransactionGroup() {
    }
    TransactionGroup.getAttributeTypeMap = function () {
        return TransactionGroup.attributeTypeMap;
    };
    TransactionGroup.discriminator = undefined;
    TransactionGroup.attributeTypeMap = [
        {
            "name": "beginDate",
            "baseName": "beginDate",
            "type": "Date"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "TransactionGroupState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TransactionGroup;
}());
exports.TransactionGroup = TransactionGroup;
module.exports = TransactionGroup;
