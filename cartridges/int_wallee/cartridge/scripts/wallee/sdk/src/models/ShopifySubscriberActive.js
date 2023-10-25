"use strict";

exports.ShopifySubscriberActive = void 0;
var ShopifySubscriberActive = /** @class */ (function () {
    function ShopifySubscriberActive() {
    }
    ShopifySubscriberActive.getAttributeTypeMap = function () {
        return ShopifySubscriberActive.attributeTypeMap;
    };
    ShopifySubscriberActive.discriminator = undefined;
    ShopifySubscriberActive.attributeTypeMap = [
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
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        }
    ];
    return ShopifySubscriberActive;
}());
exports.ShopifySubscriberActive = ShopifySubscriberActive;
module.exports = ShopifySubscriberActive;
