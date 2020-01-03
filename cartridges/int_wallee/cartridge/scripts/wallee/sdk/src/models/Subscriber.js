"use strict";
exports.__esModule = true;
var Subscriber = /** @class */ (function () {
    function Subscriber() {
    }
    Subscriber.getAttributeTypeMap = function () {
        return Subscriber.attributeTypeMap;
    };
    Subscriber.discriminator = undefined;
    Subscriber.attributeTypeMap = [
        {
            "name": "additionalAllowedPaymentMethodConfigurations",
            "baseName": "additionalAllowedPaymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
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
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "Address"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Subscriber;
}());
exports.Subscriber = Subscriber;
module.exports = Subscriber;
