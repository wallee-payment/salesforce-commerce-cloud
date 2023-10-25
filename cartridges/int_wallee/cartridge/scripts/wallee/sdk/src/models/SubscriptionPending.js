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

exports.SubscriptionPending = void 0;
var SubscriptionUpdate = require("./SubscriptionUpdate");
var SubscriptionPending = /** @class */ (function (_super) {
    __extends(SubscriptionPending, _super);
    function SubscriptionPending() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionPending.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionPending.attributeTypeMap);
    };
    SubscriptionPending.discriminator = undefined;
    SubscriptionPending.attributeTypeMap = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "subscriber",
            "baseName": "subscriber",
            "type": "number"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "number"
        }
    ];
    return SubscriptionPending;
}(SubscriptionUpdate));
exports.SubscriptionPending = SubscriptionPending;
module.exports = SubscriptionPending;
