"use strict";

exports.TenantDatabase = void 0;
var TenantDatabase = /** @class */ (function () {
    function TenantDatabase() {
    }
    TenantDatabase.getAttributeTypeMap = function () {
        return TenantDatabase.attributeTypeMap;
    };
    TenantDatabase.discriminator = undefined;
    TenantDatabase.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TenantDatabase;
}());
exports.TenantDatabase = TenantDatabase;
module.exports = TenantDatabase;
