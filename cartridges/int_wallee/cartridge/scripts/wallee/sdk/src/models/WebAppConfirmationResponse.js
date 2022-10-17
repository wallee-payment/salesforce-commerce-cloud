"use strict";

var WebAppConfirmationResponse = /** @class */ (function () {
    function WebAppConfirmationResponse() {
    }
    WebAppConfirmationResponse.getAttributeTypeMap = function () {
        return WebAppConfirmationResponse.attributeTypeMap;
    };
    WebAppConfirmationResponse.discriminator = undefined;
    WebAppConfirmationResponse.attributeTypeMap = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "space",
            "baseName": "space",
            "type": "Space"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "tokenType",
            "baseName": "token_type",
            "type": "string"
        }
    ];
    return WebAppConfirmationResponse;
}());
exports.WebAppConfirmationResponse = WebAppConfirmationResponse;
module.exports = WebAppConfirmationResponse;
