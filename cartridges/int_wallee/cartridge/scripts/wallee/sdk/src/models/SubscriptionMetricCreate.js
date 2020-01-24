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

var AbstractSubscriptionMetricUpdate = require("./AbstractSubscriptionMetricUpdate");
var SubscriptionMetricCreate = /** @class */ (function (_super) {
    __extends(SubscriptionMetricCreate, _super);
    function SubscriptionMetricCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionMetricCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionMetricCreate.attributeTypeMap);
    };
    SubscriptionMetricCreate.discriminator = undefined;
    SubscriptionMetricCreate.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        }
    ];
    return SubscriptionMetricCreate;
}(AbstractSubscriptionMetricUpdate));
exports.SubscriptionMetricCreate = SubscriptionMetricCreate;
module.exports = SubscriptionMetricCreate;
