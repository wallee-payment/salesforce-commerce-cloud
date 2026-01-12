"use strict";

exports.EntityExportRequest = void 0;
var EntityExportRequest = /** @class */ (function () {
    function EntityExportRequest() {
    }
    EntityExportRequest.getAttributeTypeMap = function () {
        return EntityExportRequest.attributeTypeMap;
    };
    EntityExportRequest.discriminator = undefined;
    EntityExportRequest.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<string>"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "EntityQuery"
        }
    ];
    return EntityExportRequest;
}());
exports.EntityExportRequest = EntityExportRequest;
module.exports = EntityExportRequest;
