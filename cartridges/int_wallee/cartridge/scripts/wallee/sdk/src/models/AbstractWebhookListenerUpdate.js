"use strict";

exports.AbstractWebhookListenerUpdate = void 0;
var AbstractWebhookListenerUpdate = /** @class */ (function () {
    function AbstractWebhookListenerUpdate() {
    }
    AbstractWebhookListenerUpdate.getAttributeTypeMap = function () {
        return AbstractWebhookListenerUpdate.attributeTypeMap;
    };
    AbstractWebhookListenerUpdate.discriminator = undefined;
    AbstractWebhookListenerUpdate.attributeTypeMap = [
        {
            "name": "entityStates",
            "baseName": "entityStates",
            "type": "Array<string>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "notifyEveryChange",
            "baseName": "notifyEveryChange",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        }
    ];
    return AbstractWebhookListenerUpdate;
}());
exports.AbstractWebhookListenerUpdate = AbstractWebhookListenerUpdate;
module.exports = AbstractWebhookListenerUpdate;
