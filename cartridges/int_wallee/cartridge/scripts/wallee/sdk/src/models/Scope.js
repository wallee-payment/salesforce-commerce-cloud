"use strict";
exports.__esModule = true;
var Scope = /** @class */ (function () {
    function Scope() {
    }
    Scope.getAttributeTypeMap = function () {
        return Scope.attributeTypeMap;
    };
    Scope.discriminator = undefined;
    Scope.attributeTypeMap = [
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<Feature>"
        },
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "sslActive",
            "baseName": "sslActive",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "themes",
            "baseName": "themes",
            "type": "Array<string>"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Scope;
}());
exports.Scope = Scope;
module.exports = Scope;
