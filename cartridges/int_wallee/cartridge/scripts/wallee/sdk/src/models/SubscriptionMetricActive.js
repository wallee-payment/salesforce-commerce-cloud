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

exports.SubscriptionMetricActive = void 0;
var SubscriptionMetricUpdate = require("./SubscriptionMetricUpdate");
var SubscriptionMetricActive = /** @class */ (function (_super) {
    __extends(SubscriptionMetricActive, _super);
    function SubscriptionMetricActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionMetricActive.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionMetricActive.attributeTypeMap);
    };
    SubscriptionMetricActive.discriminator = undefined;
    SubscriptionMetricActive.attributeTypeMap = [];
    return SubscriptionMetricActive;
}(SubscriptionMetricUpdate));
exports.SubscriptionMetricActive = SubscriptionMetricActive;
module.exports = SubscriptionMetricActive;
