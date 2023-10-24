"use strict";

var Space = /** @class */ (function () {
    function Space() {
    }
    Space.getAttributeTypeMap = function () {
        return Space.attributeTypeMap;
    };
    Space.discriminator = undefined;
    Space.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "activeOrRestrictedActive",
            "baseName": "activeOrRestrictedActive",
            "type": "boolean"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "number"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "database",
            "baseName": "database",
            "type": "TenantDatabase"
        },
        {
            "name": "deletedBy",
            "baseName": "deletedBy",
            "type": "number"
        },
        {
            "name": "deletedOn",
            "baseName": "deletedOn",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "lastModifiedDate",
            "baseName": "lastModifiedDate",
            "type": "Date"
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
            "name": "postalAddress",
            "baseName": "postalAddress",
            "type": "SpaceAddress"
        },
        {
            "name": "primaryCurrency",
            "baseName": "primaryCurrency",
            "type": "string"
        },
        {
            "name": "requestLimit",
            "baseName": "requestLimit",
            "type": "number"
        },
        {
            "name": "restrictedActive",
            "baseName": "restrictedActive",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "technicalContactAddresses",
            "baseName": "technicalContactAddresses",
            "type": "Array<string>"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Space;
}());
exports.Space = Space;
module.exports = Space;
