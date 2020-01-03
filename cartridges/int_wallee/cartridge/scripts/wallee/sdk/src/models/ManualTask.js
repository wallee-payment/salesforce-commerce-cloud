"use strict";
exports.__esModule = true;
var ManualTask = /** @class */ (function () {
    function ManualTask() {
    }
    ManualTask.getAttributeTypeMap = function () {
        return ManualTask.attributeTypeMap;
    };
    ManualTask.discriminator = undefined;
    ManualTask.attributeTypeMap = [
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<number>"
        },
        {
            "name": "contextEntityId",
            "baseName": "contextEntityId",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "expiresOn",
            "baseName": "expiresOn",
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
            "type": "ManualTaskState"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }
    ];
    return ManualTask;
}());
exports.ManualTask = ManualTask;
module.exports = ManualTask;
