"use strict";

var SubscriptionProductComponentGroup = /** @class */ (function () {
    function SubscriptionProductComponentGroup() {
    }
    SubscriptionProductComponentGroup.getAttributeTypeMap = function () {
        return SubscriptionProductComponentGroup.attributeTypeMap;
    };
    SubscriptionProductComponentGroup.discriminator = undefined;
    SubscriptionProductComponentGroup.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedString"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        },
        {
            "name": "productVersion",
            "baseName": "productVersion",
            "type": "SubscriptionProductVersion"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProductComponentGroup;
}());
exports.SubscriptionProductComponentGroup = SubscriptionProductComponentGroup;
module.exports = SubscriptionProductComponentGroup;
