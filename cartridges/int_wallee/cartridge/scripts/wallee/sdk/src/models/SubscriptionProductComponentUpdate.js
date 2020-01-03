"use strict";
exports.__esModule = true;
var SubscriptionProductComponentUpdate = /** @class */ (function () {
    function SubscriptionProductComponentUpdate() {
    }
    SubscriptionProductComponentUpdate.getAttributeTypeMap = function () {
        return SubscriptionProductComponentUpdate.attributeTypeMap;
    };
    SubscriptionProductComponentUpdate.discriminator = undefined;
    SubscriptionProductComponentUpdate.attributeTypeMap = [
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
            "name": "componentChangeWeight",
            "baseName": "componentChangeWeight",
            "type": "number"
        },
        {
            "name": "componentGroup",
            "baseName": "componentGroup",
            "type": "number"
        },
        {
            "name": "defaultComponent",
            "baseName": "defaultComponent",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "maximalQuantity",
            "baseName": "maximalQuantity",
            "type": "number"
        },
        {
            "name": "minimalQuantity",
            "baseName": "minimalQuantity",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "DatabaseTranslatedStringCreate"
        },
        {
            "name": "quantityStep",
            "baseName": "quantityStep",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "number"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "taxClass",
            "baseName": "taxClass",
            "type": "number"
        }
    ];
    return SubscriptionProductComponentUpdate;
}());
exports.SubscriptionProductComponentUpdate = SubscriptionProductComponentUpdate;
module.exports = SubscriptionProductComponentUpdate;
