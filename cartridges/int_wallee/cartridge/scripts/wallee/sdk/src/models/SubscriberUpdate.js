"use strict";

exports.SubscriberUpdate = void 0;
var SubscriberUpdate = /** @class */ (function () {
    function SubscriberUpdate() {
    }
    SubscriberUpdate.getAttributeTypeMap = function () {
        return SubscriberUpdate.attributeTypeMap;
    };
    SubscriberUpdate.discriminator = undefined;
    SubscriberUpdate.attributeTypeMap = [
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
            "name": "additionalAllowedPaymentMethodConfigurations",
            "baseName": "additionalAllowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "AddressCreate"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "disallowedPaymentMethodConfigurations",
            "baseName": "disallowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
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
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "AddressCreate"
        }
    ];
    return SubscriberUpdate;
}());
exports.SubscriberUpdate = SubscriberUpdate;
module.exports = SubscriberUpdate;
