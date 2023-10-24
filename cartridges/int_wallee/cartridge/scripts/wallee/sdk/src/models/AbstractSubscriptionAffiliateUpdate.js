"use strict";

var AbstractSubscriptionAffiliateUpdate = /** @class */ (function () {
    function AbstractSubscriptionAffiliateUpdate() {
    }
    AbstractSubscriptionAffiliateUpdate.getAttributeTypeMap = function () {
        return AbstractSubscriptionAffiliateUpdate.attributeTypeMap;
    };
    AbstractSubscriptionAffiliateUpdate.discriminator = undefined;
    AbstractSubscriptionAffiliateUpdate.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        }
    ];
    return AbstractSubscriptionAffiliateUpdate;
}());
exports.AbstractSubscriptionAffiliateUpdate = AbstractSubscriptionAffiliateUpdate;
module.exports = AbstractSubscriptionAffiliateUpdate;
