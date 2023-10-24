"use strict";

var WebAppConfirmationRequest = /** @class */ (function () {
    function WebAppConfirmationRequest() {
    }
    WebAppConfirmationRequest.getAttributeTypeMap = function () {
        return WebAppConfirmationRequest.attributeTypeMap;
    };
    WebAppConfirmationRequest.discriminator = undefined;
    WebAppConfirmationRequest.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        }
    ];
    return WebAppConfirmationRequest;
}());
exports.WebAppConfirmationRequest = WebAppConfirmationRequest;
module.exports = WebAppConfirmationRequest;
