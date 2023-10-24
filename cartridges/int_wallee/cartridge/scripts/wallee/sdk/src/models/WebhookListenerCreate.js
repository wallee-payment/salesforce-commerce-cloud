"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AbstractWebhookListenerUpdate = require("./AbstractWebhookListenerUpdate");
var WebhookListenerCreate = /** @class */ (function (_super) {
    __extends(WebhookListenerCreate, _super);
    function WebhookListenerCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebhookListenerCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(WebhookListenerCreate.attributeTypeMap);
    };
    WebhookListenerCreate.discriminator = undefined;
    WebhookListenerCreate.attributeTypeMap = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "number"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "number"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "number"
        }
    ];
    return WebhookListenerCreate;
}(AbstractWebhookListenerUpdate));
exports.WebhookListenerCreate = WebhookListenerCreate;
module.exports = WebhookListenerCreate;
