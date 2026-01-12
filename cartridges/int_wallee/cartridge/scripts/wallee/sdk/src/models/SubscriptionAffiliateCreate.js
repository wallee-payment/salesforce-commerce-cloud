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

exports.SubscriptionAffiliateCreate = void 0;
var AbstractSubscriptionAffiliateUpdate = require("./AbstractSubscriptionAffiliateUpdate");
var SubscriptionAffiliateCreate = /** @class */ (function (_super) {
    __extends(SubscriptionAffiliateCreate, _super);
    function SubscriptionAffiliateCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionAffiliateCreate.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(SubscriptionAffiliateCreate.attributeTypeMap);
    };
    SubscriptionAffiliateCreate.discriminator = undefined;
    SubscriptionAffiliateCreate.attributeTypeMap = [
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }
    ];
    return SubscriptionAffiliateCreate;
}(AbstractSubscriptionAffiliateUpdate));
exports.SubscriptionAffiliateCreate = SubscriptionAffiliateCreate;
module.exports = SubscriptionAffiliateCreate;
