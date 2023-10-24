"use strict";

var FailureReason = /** @class */ (function () {
    function FailureReason() {
    }
    FailureReason.getAttributeTypeMap = function () {
        return FailureReason.attributeTypeMap;
    };
    FailureReason.discriminator = undefined;
    FailureReason.attributeTypeMap = [
        {
            "name": "category",
            "baseName": "category",
            "type": "FailureCategory"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<number>"
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
        }
    ];
    return FailureReason;
}());
exports.FailureReason = FailureReason;
module.exports = FailureReason;
