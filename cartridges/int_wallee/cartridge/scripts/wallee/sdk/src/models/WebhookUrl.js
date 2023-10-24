"use strict";

var WebhookUrl = /** @class */ (function () {
    function WebhookUrl() {
    }
    WebhookUrl.getAttributeTypeMap = function () {
        return WebhookUrl.attributeTypeMap;
    };
    WebhookUrl.discriminator = undefined;
    WebhookUrl.attributeTypeMap = [
        {
            "name": "applicationManaged",
            "baseName": "applicationManaged",
            "type": "boolean"
        },
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
    return WebhookUrl;
}());
exports.WebhookUrl = WebhookUrl;
module.exports = WebhookUrl;
