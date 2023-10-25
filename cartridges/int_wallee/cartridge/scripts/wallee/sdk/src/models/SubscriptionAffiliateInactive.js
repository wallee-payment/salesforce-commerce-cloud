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

exports.SubscriptionAffiliateInactive = void 0;
var SubscriptionAffiliateUpdate = require("./SubscriptionAffiliateUpdate");
var SubscriptionAffiliateInactive = /** @class */ (function (_super) {
    __extends(SubscriptionAffiliateInactive, _super);
    function SubscriptionAffiliateInactive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionAffiliateInactive.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionAffiliateInactive.attributeTypeMap);
    };
    SubscriptionAffiliateInactive.discriminator = undefined;
    SubscriptionAffiliateInactive.attributeTypeMap = [];
    return SubscriptionAffiliateInactive;
}(SubscriptionAffiliateUpdate));
exports.SubscriptionAffiliateInactive = SubscriptionAffiliateInactive;
module.exports = SubscriptionAffiliateInactive;
