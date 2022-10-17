"use strict";

var Permission = /** @class */ (function () {
    function Permission() {
    }
    Permission.getAttributeTypeMap = function () {
        return Permission.attributeTypeMap;
    };
    Permission.discriminator = undefined;
    Permission.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "number"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "leaf",
            "baseName": "leaf",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "number"
        },
        {
            "name": "pathToRoot",
            "baseName": "pathToRoot",
            "type": "Array<number>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "twoFactorRequired",
            "baseName": "twoFactorRequired",
            "type": "boolean"
        },
        {
            "name": "webAppEnabled",
            "baseName": "webAppEnabled",
            "type": "boolean"
        }
    ];
    return Permission;
}());
exports.Permission = Permission;
module.exports = Permission;
