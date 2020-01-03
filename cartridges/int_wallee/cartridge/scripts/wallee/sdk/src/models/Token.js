"use strict";
exports.__esModule = true;
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.getAttributeTypeMap = function () {
        return Token.attributeTypeMap;
    };
    Token.discriminator = undefined;
    Token.attributeTypeMap = [
        {
            "name": "createdOn",
            "baseName": "createdOn",
            "type": "Date"
        },
        {
            "name": "customerEmailAddress",
            "baseName": "customerEmailAddress",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "enabledForOneClickPayment",
            "baseName": "enabledForOneClickPayment",
            "type": "boolean"
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
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "tokenReference",
            "baseName": "tokenReference",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return Token;
}());
exports.Token = Token;
module.exports = Token;
