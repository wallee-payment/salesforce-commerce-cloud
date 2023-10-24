"use strict";

var ClientError = /** @class */ (function () {
    function ClientError() {
    }
    ClientError.getAttributeTypeMap = function () {
        return ClientError.attributeTypeMap;
    };
    ClientError.discriminator = undefined;
    ClientError.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "defaultMessage",
            "baseName": "defaultMessage",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ClientErrorType"
        }
    ];
    return ClientError;
}());
exports.ClientError = ClientError;
module.exports = ClientError;
