"use strict";

exports.AbstractAccountUpdate = void 0;
var AbstractAccountUpdate = /** @class */ (function () {
    function AbstractAccountUpdate() {
    }
    AbstractAccountUpdate.getAttributeTypeMap = function () {
        return AbstractAccountUpdate.attributeTypeMap;
    };
    AbstractAccountUpdate.discriminator = undefined;
    AbstractAccountUpdate.attributeTypeMap = [
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
            "name": "subaccountLimit",
            "baseName": "subaccountLimit",
            "type": "number"
        }
    ];
    return AbstractAccountUpdate;
}());
exports.AbstractAccountUpdate = AbstractAccountUpdate;
module.exports = AbstractAccountUpdate;
