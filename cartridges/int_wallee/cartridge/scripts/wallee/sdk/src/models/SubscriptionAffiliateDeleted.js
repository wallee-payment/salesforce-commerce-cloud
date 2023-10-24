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

var SubscriptionAffiliate = require("./SubscriptionAffiliate");
var SubscriptionAffiliateDeleted = /** @class */ (function (_super) {
    __extends(SubscriptionAffiliateDeleted, _super);
    function SubscriptionAffiliateDeleted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionAffiliateDeleted.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionAffiliateDeleted.attributeTypeMap);
    };
    SubscriptionAffiliateDeleted.discriminator = undefined;
    SubscriptionAffiliateDeleted.attributeTypeMap = [];
    return SubscriptionAffiliateDeleted;
}(SubscriptionAffiliate));
exports.SubscriptionAffiliateDeleted = SubscriptionAffiliateDeleted;
module.exports = SubscriptionAffiliateDeleted;
