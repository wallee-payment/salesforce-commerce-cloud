"use strict";

exports.DunningFlowLevelProcessor = void 0;
var DunningFlowLevelProcessor = /** @class */ (function () {
    function DunningFlowLevelProcessor() {
    }
    DunningFlowLevelProcessor.getAttributeTypeMap = function () {
        return DunningFlowLevelProcessor.attributeTypeMap;
    };
    DunningFlowLevelProcessor.discriminator = undefined;
    DunningFlowLevelProcessor.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "Feature"
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
    return DunningFlowLevelProcessor;
}());
exports.DunningFlowLevelProcessor = DunningFlowLevelProcessor;
module.exports = DunningFlowLevelProcessor;
