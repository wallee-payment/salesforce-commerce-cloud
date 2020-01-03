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
exports.__esModule = true;
var AbstractWebhookListenerUpdate = require("./AbstractWebhookListenerUpdate");
var WebhookListenerUpdate = /** @class */ (function (_super) {
    __extends(WebhookListenerUpdate, _super);
    function WebhookListenerUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebhookListenerUpdate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(WebhookListenerUpdate.attributeTypeMap);
    };
    WebhookListenerUpdate.discriminator = undefined;
    WebhookListenerUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return WebhookListenerUpdate;
}(AbstractWebhookListenerUpdate));
exports.WebhookListenerUpdate = WebhookListenerUpdate;
module.exports = WebhookListenerUpdate;
