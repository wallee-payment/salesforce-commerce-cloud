"use strict";
exports.__esModule = true;
var SubscriptionProductComponentGroupUpdate = /** @class */ (function () {
    function SubscriptionProductComponentGroupUpdate() {
    }
    SubscriptionProductComponentGroupUpdate.getAttributeTypeMap = function () {
        return SubscriptionProductComponentGroupUpdate.attributeTypeMap;
    };
    SubscriptionProductComponentGroupUpdate.discriminator = undefined;
    SubscriptionProductComponentGroupUpdate.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        },
        {
            "name": "productVersion",
            "baseName": "productVersion",
            "type": "number"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        }
    ];
    return SubscriptionProductComponentGroupUpdate;
}());
exports.SubscriptionProductComponentGroupUpdate = SubscriptionProductComponentGroupUpdate;
module.exports = SubscriptionProductComponentGroupUpdate;
