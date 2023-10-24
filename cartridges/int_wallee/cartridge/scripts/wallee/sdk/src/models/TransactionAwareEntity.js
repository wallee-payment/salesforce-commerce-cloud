"use strict";

var TransactionAwareEntity = /** @class */ (function () {
    function TransactionAwareEntity() {
    }
    TransactionAwareEntity.getAttributeTypeMap = function () {
        return TransactionAwareEntity.attributeTypeMap;
    };
    TransactionAwareEntity.discriminator = undefined;
    TransactionAwareEntity.attributeTypeMap = [
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
            "name": "linkedTransaction",
            "baseName": "linkedTransaction",
            "type": "number"
        }
    ];
    return TransactionAwareEntity;
}());
exports.TransactionAwareEntity = TransactionAwareEntity;
module.exports = TransactionAwareEntity;
