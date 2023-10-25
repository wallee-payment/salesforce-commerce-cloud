"use strict";

exports.AbstractSpaceUpdate = void 0;
var AbstractSpaceUpdate = /** @class */ (function () {
    function AbstractSpaceUpdate() {
    }
    AbstractSpaceUpdate.getAttributeTypeMap = function () {
        return AbstractSpaceUpdate.attributeTypeMap;
    };
    AbstractSpaceUpdate.discriminator = undefined;
    AbstractSpaceUpdate.attributeTypeMap = [
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
            "name": "postalAddress",
            "baseName": "postalAddress",
            "type": "SpaceAddressCreate"
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
        }
    ];
    return AbstractSpaceUpdate;
}());
exports.AbstractSpaceUpdate = AbstractSpaceUpdate;
module.exports = AbstractSpaceUpdate;
