"use strict";

exports.InvoiceReconciliationRecordType = void 0;
var InvoiceReconciliationRecordType = /** @class */ (function () {
    function InvoiceReconciliationRecordType() {
    }
    InvoiceReconciliationRecordType.getAttributeTypeMap = function () {
        return InvoiceReconciliationRecordType.attributeTypeMap;
    };
    InvoiceReconciliationRecordType.discriminator = undefined;
    InvoiceReconciliationRecordType.attributeTypeMap = [
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
    return InvoiceReconciliationRecordType;
}());
exports.InvoiceReconciliationRecordType = InvoiceReconciliationRecordType;
module.exports = InvoiceReconciliationRecordType;
