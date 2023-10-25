"use strict";

exports.AbstractSubscriberUpdate = void 0;
var AbstractSubscriberUpdate = /** @class */ (function () {
    function AbstractSubscriberUpdate() {
    }
    AbstractSubscriberUpdate.getAttributeTypeMap = function () {
        return AbstractSubscriberUpdate.attributeTypeMap;
    };
    AbstractSubscriberUpdate.discriminator = undefined;
    AbstractSubscriberUpdate.attributeTypeMap = [
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
    return AbstractSubscriberUpdate;
}());
exports.AbstractSubscriberUpdate = AbstractSubscriberUpdate;
module.exports = AbstractSubscriberUpdate;
