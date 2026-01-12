"use strict";

exports.ResourcePath = void 0;
var ResourcePath = /** @class */ (function () {
    function ResourcePath() {
    }
    ResourcePath.getAttributeTypeMap = function () {
        return ResourcePath.attributeTypeMap;
    };
    ResourcePath.discriminator = undefined;
    ResourcePath.attributeTypeMap = [
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
            "name": "path",
            "baseName": "path",
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
            "type": "ResourceState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return ResourcePath;
}());
exports.ResourcePath = ResourcePath;
module.exports = ResourcePath;
