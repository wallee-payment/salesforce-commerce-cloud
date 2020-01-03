"use strict";
exports.__esModule = true;
var AbstractAccountUpdate = /** @class */ (function () {
    function AbstractAccountUpdate() {
    }
    AbstractAccountUpdate.getAttributeTypeMap = function () {
        return AbstractAccountUpdate.attributeTypeMap;
    };
    AbstractAccountUpdate.discriminator = undefined;
    AbstractAccountUpdate.attributeTypeMap = [
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
