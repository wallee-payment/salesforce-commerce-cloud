"use strict";

exports.SubscriptionUpdate = void 0;
var SubscriptionUpdate = /** @class */ (function () {
    function SubscriptionUpdate() {
    }
    SubscriptionUpdate.getAttributeTypeMap = function () {
        return SubscriptionUpdate.attributeTypeMap;
    };
    SubscriptionUpdate.discriminator = undefined;
    SubscriptionUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "affiliate",
            "baseName": "affiliate",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "plannedTerminationDate",
            "baseName": "plannedTerminationDate",
            "type": "Date"
        }
    ];
    return SubscriptionUpdate;
}());
exports.SubscriptionUpdate = SubscriptionUpdate;
module.exports = SubscriptionUpdate;
