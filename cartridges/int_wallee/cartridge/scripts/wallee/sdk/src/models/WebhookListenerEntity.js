"use strict";

exports.WebhookListenerEntity = void 0;
var WebhookListenerEntity = /** @class */ (function () {
    function WebhookListenerEntity() {
    }
    WebhookListenerEntity.getAttributeTypeMap = function () {
        return WebhookListenerEntity.attributeTypeMap;
    };
    WebhookListenerEntity.discriminator = undefined;
    WebhookListenerEntity.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "technicalName",
            "baseName": "technicalName",
            "type": "string"
        }
    ];
    return WebhookListenerEntity;
}());
exports.WebhookListenerEntity = WebhookListenerEntity;
module.exports = WebhookListenerEntity;
