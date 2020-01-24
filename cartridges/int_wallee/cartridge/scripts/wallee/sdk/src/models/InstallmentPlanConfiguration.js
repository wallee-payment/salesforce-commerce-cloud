"use strict";

var InstallmentPlanConfiguration = /** @class */ (function () {
    function InstallmentPlanConfiguration() {
    }
    InstallmentPlanConfiguration.getAttributeTypeMap = function () {
        return InstallmentPlanConfiguration.attributeTypeMap;
    };
    InstallmentPlanConfiguration.discriminator = undefined;
    InstallmentPlanConfiguration.attributeTypeMap = [
        {
            "name": "baseCurrency",
            "baseName": "baseCurrency",
            "type": "string"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<number>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "installmentFee",
            "baseName": "installmentFee",
            "type": "number"
        },
        {
            "name": "interestRate",
            "baseName": "interestRate",
            "type": "number"
        },
        {
            "name": "linkedSpaceId",
            "baseName": "linkedSpaceId",
            "type": "number"
        },
        {
            "name": "minimalAmount",
            "baseName": "minimalAmount",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "paymentMethodConfigurations",
            "baseName": "paymentMethodConfigurations",
            "type": "Array<number>"
        },
        {
            "name": "plannedPurgeDate",
            "baseName": "plannedPurgeDate",
            "type": "Date"
        },
        {
            "name": "sortOrder",
            "baseName": "sortOrder",
            "type": "number"
        },
        {
            "name": "spaceReference",
            "baseName": "spaceReference",
            "type": "SpaceReference"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "CreationEntityState"
        },
        {
            "name": "taxClass",
            "baseName": "taxClass",
            "type": "TaxClass"
        },
        {
            "name": "termsAndConditions",
            "baseName": "termsAndConditions",
            "type": "ResourcePath"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "DatabaseTranslatedString"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        }
    ];
    return InstallmentPlanConfiguration;
}());
exports.InstallmentPlanConfiguration = InstallmentPlanConfiguration;
module.exports = InstallmentPlanConfiguration;
