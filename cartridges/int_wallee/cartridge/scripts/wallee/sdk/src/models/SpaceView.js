"use strict";

var SpaceView = /** @class */ (function () {
    function SpaceView() {
    }
    SpaceView.getAttributeTypeMap = function () {
        return SpaceView.attributeTypeMap;
    };
    SpaceView.discriminator = undefined;
    SpaceView.attributeTypeMap = [
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
            "name": "space",
            "baseName": "space",
            "type": "Space"
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
    return SpaceView;
}());
exports.SpaceView = SpaceView;
module.exports = SpaceView;
