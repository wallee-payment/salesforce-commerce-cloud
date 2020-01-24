"use strict";

var SpaceReference = /** @class */ (function () {
    function SpaceReference() {
    }
    SpaceReference.getAttributeTypeMap = function () {
        return SpaceReference.attributeTypeMap;
    };
    SpaceReference.discriminator = undefined;
    SpaceReference.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
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
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SpaceReferenceState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SpaceReference;
}());
exports.SpaceReference = SpaceReference;
module.exports = SpaceReference;
