"use strict";

var AbstractTokenUpdate = /** @class */ (function () {
    function AbstractTokenUpdate() {
    }
    AbstractTokenUpdate.getAttributeTypeMap = function () {
        return AbstractTokenUpdate.attributeTypeMap;
    };
    AbstractTokenUpdate.discriminator = undefined;
    AbstractTokenUpdate.attributeTypeMap = [
        {
            "name": "customerEmailAddress",
            "baseName": "customerEmailAddress",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "enabledForOneClickPayment",
            "baseName": "enabledForOneClickPayment",
            "type": "boolean"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "tokenReference",
            "baseName": "tokenReference",
            "type": "string"
        }
    ];
    return AbstractTokenUpdate;
}());
exports.AbstractTokenUpdate = AbstractTokenUpdate;
module.exports = AbstractTokenUpdate;
