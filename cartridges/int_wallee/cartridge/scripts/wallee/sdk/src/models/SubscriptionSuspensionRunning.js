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
var SubscriptionSuspension = require("./SubscriptionSuspension");
var SubscriptionSuspensionRunning = /** @class */ (function (_super) {
    __extends(SubscriptionSuspensionRunning, _super);
    function SubscriptionSuspensionRunning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionSuspensionRunning.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionSuspensionRunning.attributeTypeMap);
    };
    SubscriptionSuspensionRunning.discriminator = undefined;
    SubscriptionSuspensionRunning.attributeTypeMap = [];
    return SubscriptionSuspensionRunning;
}(SubscriptionSuspension));
exports.SubscriptionSuspensionRunning = SubscriptionSuspensionRunning;
module.exports = SubscriptionSuspensionRunning;
