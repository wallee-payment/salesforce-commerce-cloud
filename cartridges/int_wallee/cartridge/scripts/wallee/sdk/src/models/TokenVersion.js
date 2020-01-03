"use strict";
exports.__esModule = true;
var TokenVersion = /** @class */ (function () {
    function TokenVersion() {
    }
    TokenVersion.getAttributeTypeMap = function () {
        return TokenVersion.attributeTypeMap;
    };
    TokenVersion.discriminator = undefined;
    TokenVersion.attributeTypeMap = [
        {
            "name": "activatedOn",
            "baseName": "activatedOn",
            "type": "Date"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ChargeAttemptEnvironment"
        },
        {
            "name": "expiresOn",
            "baseName": "expiresOn",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<Label>"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "obsoletedOn",
            "baseName": "obsoletedOn",
            "type": "Date"
        },
        {
            "name": "paymentConnectorConfiguration",
            "baseName": "paymentConnectorConfiguration",
            "type": "PaymentConnectorConfiguration"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "number"
        },
        {
            "name": "paymentMethodBrand",
            "baseName": "paymentMethodBrand",
            "type": "number"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "processorToken",
            "baseName": "processorToken",
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
            "type": "TokenVersionState"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "Token"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TokenVersionType"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return TokenVersion;
}());
exports.TokenVersion = TokenVersion;
module.exports = TokenVersion;
