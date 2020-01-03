"use strict";
exports.__esModule = true;
var SubscriptionAffiliateUpdate = /** @class */ (function () {
    function SubscriptionAffiliateUpdate() {
    }
    SubscriptionAffiliateUpdate.getAttributeTypeMap = function () {
        return SubscriptionAffiliateUpdate.attributeTypeMap;
    };
    SubscriptionAffiliateUpdate.discriminator = undefined;
    SubscriptionAffiliateUpdate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
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
    return SubscriptionAffiliateUpdate;
}());
exports.SubscriptionAffiliateUpdate = SubscriptionAffiliateUpdate;
module.exports = SubscriptionAffiliateUpdate;
