"use strict";

var WebhookIdentity = /** @class */ (function () {
    function WebhookIdentity() {
    }
    WebhookIdentity.getAttributeTypeMap = function () {
        return WebhookIdentity.attributeTypeMap;
    };
    WebhookIdentity.discriminator = undefined;
    WebhookIdentity.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
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
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return WebhookIdentity;
}());
exports.WebhookIdentity = WebhookIdentity;
module.exports = WebhookIdentity;
