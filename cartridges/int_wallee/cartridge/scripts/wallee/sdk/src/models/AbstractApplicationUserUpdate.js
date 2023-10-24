"use strict";

var AbstractApplicationUserUpdate = /** @class */ (function () {
    function AbstractApplicationUserUpdate() {
    }
    AbstractApplicationUserUpdate.getAttributeTypeMap = function () {
        return AbstractApplicationUserUpdate.attributeTypeMap;
    };
    AbstractApplicationUserUpdate.discriminator = undefined;
    AbstractApplicationUserUpdate.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
        }
    ];
    return AbstractApplicationUserUpdate;
}());
exports.AbstractApplicationUserUpdate = AbstractApplicationUserUpdate;
module.exports = AbstractApplicationUserUpdate;
