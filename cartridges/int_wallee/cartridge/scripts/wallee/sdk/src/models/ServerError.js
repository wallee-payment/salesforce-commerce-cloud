"use strict";
exports.__esModule = true;
var ServerError = /** @class */ (function () {
    function ServerError() {
    }
    ServerError.getAttributeTypeMap = function () {
        return ServerError.attributeTypeMap;
    };
    ServerError.discriminator = undefined;
    ServerError.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
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
        }
    ];
    return ServerError;
}());
exports.ServerError = ServerError;
module.exports = ServerError;
