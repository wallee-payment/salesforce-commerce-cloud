"use strict";

exports.MetricUsage = void 0;
var MetricUsage = /** @class */ (function () {
    function MetricUsage() {
    }
    MetricUsage.getAttributeTypeMap = function () {
        return MetricUsage.attributeTypeMap;
    };
    MetricUsage.discriminator = undefined;
    MetricUsage.attributeTypeMap = [
        {
            "name": "consumedUnits",
            "baseName": "consumedUnits",
            "type": "number"
        },
        {
            "name": "metricDescription",
            "baseName": "metricDescription",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "metricId",
            "baseName": "metricId",
            "type": "number"
        },
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "{ [key: string]: string; }"
        }
    ];
    return MetricUsage;
}());
exports.MetricUsage = MetricUsage;
module.exports = MetricUsage;
