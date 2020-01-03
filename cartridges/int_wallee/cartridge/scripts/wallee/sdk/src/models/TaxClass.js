"use strict";
exports.__esModule = true;
var TaxClass = /** @class */ (function () {
    function TaxClass() {
    }
    TaxClass.getAttributeTypeMap = function () {
        return TaxClass.attributeTypeMap;
    };
    TaxClass.discriminator = undefined;
    TaxClass.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TaxClass;
}());
exports.TaxClass = TaxClass;
module.exports = TaxClass;
