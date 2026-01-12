"use strict";

exports.SubscriptionProductComponent = void 0;
var SubscriptionProductComponent = /** @class */ (function () {
    function SubscriptionProductComponent() {
    }
    SubscriptionProductComponent.getAttributeTypeMap = function () {
        return SubscriptionProductComponent.attributeTypeMap;
    };
    SubscriptionProductComponent.discriminator = undefined;
    SubscriptionProductComponent.attributeTypeMap = [
        {
            "name": "componentChangeWeight",
            "baseName": "componentChangeWeight",
            "type": "number"
        },
        {
            "name": "componentGroup",
            "baseName": "componentGroup",
            "type": "SubscriptionProductComponentGroup"
        },
        {
            "name": "defaultComponent",
            "baseName": "defaultComponent",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
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
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "quantityStep",
            "baseName": "quantityStep",
            "type": "number"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "SubscriptionProductComponentReference"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "taxClass",
            "baseName": "taxClass",
            "type": "TaxClass"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return SubscriptionProductComponent;
}());
exports.SubscriptionProductComponent = SubscriptionProductComponent;
module.exports = SubscriptionProductComponent;
