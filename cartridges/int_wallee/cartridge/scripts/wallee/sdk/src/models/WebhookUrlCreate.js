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
var AbstractWebhookUrlUpdate = require("./AbstractWebhookUrlUpdate");
var WebhookUrlCreate = /** @class */ (function (_super) {
    __extends(WebhookUrlCreate, _super);
    function WebhookUrlCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebhookUrlCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(WebhookUrlCreate.attributeTypeMap);
    };
    WebhookUrlCreate.discriminator = undefined;
    WebhookUrlCreate.attributeTypeMap = [];
    return WebhookUrlCreate;
}(AbstractWebhookUrlUpdate));
exports.WebhookUrlCreate = WebhookUrlCreate;
module.exports = WebhookUrlCreate;
