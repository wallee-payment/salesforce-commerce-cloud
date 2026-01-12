"use strict";

exports.DunningFlowType = void 0;
var DunningFlowType = /** @class */ (function () {
    function DunningFlowType() {
    }
    DunningFlowType.getAttributeTypeMap = function () {
        return DunningFlowType.attributeTypeMap;
    };
    DunningFlowType.discriminator = undefined;
    DunningFlowType.attributeTypeMap = [
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
            "name": "specificCountry",
            "baseName": "specificCountry",
            "type": "string"
        }
    ];
    return DunningFlowType;
}());
exports.DunningFlowType = DunningFlowType;
module.exports = DunningFlowType;
