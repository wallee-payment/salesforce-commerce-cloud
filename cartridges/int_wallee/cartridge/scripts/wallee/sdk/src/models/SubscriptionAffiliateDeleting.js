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

exports.SubscriptionAffiliateDeleting = void 0;
var SubscriptionAffiliateDeleted = require("./SubscriptionAffiliateDeleted");
var SubscriptionAffiliateDeleting = /** @class */ (function (_super) {
    __extends(SubscriptionAffiliateDeleting, _super);
    function SubscriptionAffiliateDeleting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionAffiliateDeleting.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionAffiliateDeleting.attributeTypeMap);
    };
    SubscriptionAffiliateDeleting.discriminator = undefined;
    SubscriptionAffiliateDeleting.attributeTypeMap = [];
    return SubscriptionAffiliateDeleting;
}(SubscriptionAffiliateDeleted));
exports.SubscriptionAffiliateDeleting = SubscriptionAffiliateDeleting;
module.exports = SubscriptionAffiliateDeleting;
