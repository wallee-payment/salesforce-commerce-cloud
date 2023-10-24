"use strict";

var ManualTaskAction = /** @class */ (function () {
    function ManualTaskAction() {
    }
    ManualTaskAction.getAttributeTypeMap = function () {
        return ManualTaskAction.attributeTypeMap;
    };
    ManualTaskAction.discriminator = undefined;
    ManualTaskAction.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "ManualTaskActionStyle"
        },
        {
            "name": "taskType",
            "baseName": "taskType",
            "type": "number"
        }
    ];
    return ManualTaskAction;
}());
exports.ManualTaskAction = ManualTaskAction;
module.exports = ManualTaskAction;
