"use strict";

exports.InstallmentPlanSliceConfiguration = void 0;
var InstallmentPlanSliceConfiguration = /** @class */ (function () {
    function InstallmentPlanSliceConfiguration() {
    }
    InstallmentPlanSliceConfiguration.getAttributeTypeMap = function () {
        return InstallmentPlanSliceConfiguration.attributeTypeMap;
    };
    InstallmentPlanSliceConfiguration.discriminator = undefined;
    InstallmentPlanSliceConfiguration.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "lineItemTitle",
            "baseName": "lineItemTitle",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "string"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "InstallmentPlanConfiguration"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "proportion",
            "baseName": "proportion",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InstallmentPlanSliceConfiguration;
}());
exports.InstallmentPlanSliceConfiguration = InstallmentPlanSliceConfiguration;
module.exports = InstallmentPlanSliceConfiguration;
