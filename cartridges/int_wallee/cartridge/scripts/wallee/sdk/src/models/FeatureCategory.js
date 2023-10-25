"use strict";

exports.FeatureCategory = void 0;
var FeatureCategory = /** @class */ (function () {
    function FeatureCategory() {
    }
    FeatureCategory.getAttributeTypeMap = function () {
        return FeatureCategory.attributeTypeMap;
    };
    FeatureCategory.discriminator = undefined;
    FeatureCategory.attributeTypeMap = [
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
            "name": "name",
            "baseName": "name",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "orderWeight",
            "baseName": "orderWeight",
            "type": "number"
        }
    ];
    return FeatureCategory;
}());
exports.FeatureCategory = FeatureCategory;
module.exports = FeatureCategory;
