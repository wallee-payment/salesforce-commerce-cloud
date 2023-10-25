"use strict";

exports.ShopifySubscriberCreation = void 0;
var ShopifySubscriberCreation = /** @class */ (function () {
    function ShopifySubscriberCreation() {
    }
    ShopifySubscriberCreation.getAttributeTypeMap = function () {
        return ShopifySubscriberCreation.attributeTypeMap;
    };
    ShopifySubscriberCreation.discriminator = undefined;
    ShopifySubscriberCreation.attributeTypeMap = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "shopifyCustomerId",
            "baseName": "shopifyCustomerId",
            "type": "string"
        }
    ];
    return ShopifySubscriberCreation;
}());
exports.ShopifySubscriberCreation = ShopifySubscriberCreation;
module.exports = ShopifySubscriberCreation;
