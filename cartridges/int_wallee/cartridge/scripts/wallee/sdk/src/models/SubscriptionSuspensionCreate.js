"use strict";
exports.__esModule = true;
var SubscriptionSuspensionCreate = /** @class */ (function () {
    function SubscriptionSuspensionCreate() {
    }
    SubscriptionSuspensionCreate.getAttributeTypeMap = function () {
        return SubscriptionSuspensionCreate.attributeTypeMap;
    };
    SubscriptionSuspensionCreate.discriminator = undefined;
    SubscriptionSuspensionCreate.attributeTypeMap = [
        {
            "name": "endAction",
            "baseName": "endAction",
            "type": "SubscriptionSuspensionAction"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "plannedEndDate",
            "baseName": "plannedEndDate",
            "type": "Date"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "number"
        }
    ];
    return SubscriptionSuspensionCreate;
}());
exports.SubscriptionSuspensionCreate = SubscriptionSuspensionCreate;
module.exports = SubscriptionSuspensionCreate;
