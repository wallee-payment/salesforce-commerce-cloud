"use strict";

exports.WebhookEncryptionPublicKey = void 0;
var WebhookEncryptionPublicKey = /** @class */ (function () {
    function WebhookEncryptionPublicKey() {
    }
    WebhookEncryptionPublicKey.getAttributeTypeMap = function () {
        return WebhookEncryptionPublicKey.attributeTypeMap;
    };
    WebhookEncryptionPublicKey.discriminator = undefined;
    WebhookEncryptionPublicKey.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string"
        }
    ];
    return WebhookEncryptionPublicKey;
}());
exports.WebhookEncryptionPublicKey = WebhookEncryptionPublicKey;
module.exports = WebhookEncryptionPublicKey;
