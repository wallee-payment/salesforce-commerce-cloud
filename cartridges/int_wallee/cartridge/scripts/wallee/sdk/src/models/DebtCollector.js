"use strict";

exports.DebtCollector = void 0;
var DebtCollector = /** @class */ (function () {
    function DebtCollector() {
    }
    DebtCollector.getAttributeTypeMap = function () {
        return DebtCollector.attributeTypeMap;
    };
    DebtCollector.discriminator = undefined;
    DebtCollector.attributeTypeMap = [
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
        }
    ];
    return DebtCollector;
}());
exports.DebtCollector = DebtCollector;
module.exports = DebtCollector;
