"use strict";
exports.__esModule = true;
var AbstractWebhookUrlUpdate = /** @class */ (function () {
    function AbstractWebhookUrlUpdate() {
    }
    AbstractWebhookUrlUpdate.getAttributeTypeMap = function () {
        return AbstractWebhookUrlUpdate.attributeTypeMap;
    };
    AbstractWebhookUrlUpdate.discriminator = undefined;
    AbstractWebhookUrlUpdate.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
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
        }
    ];
    return AbstractWebhookUrlUpdate;
}());
exports.AbstractWebhookUrlUpdate = AbstractWebhookUrlUpdate;
module.exports = AbstractWebhookUrlUpdate;
