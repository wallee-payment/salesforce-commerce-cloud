"use strict";
exports.__esModule = true;
var DebtCollectorConfiguration = /** @class */ (function () {
    function DebtCollectorConfiguration() {
    }
    DebtCollectorConfiguration.getAttributeTypeMap = function () {
        return DebtCollectorConfiguration.attributeTypeMap;
    };
    DebtCollectorConfiguration.discriminator = undefined;
    DebtCollectorConfiguration.attributeTypeMap = [
        {
            "name": "collector",
            "baseName": "collector",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<number>"
        },
        {
            "name": "enabledSpaceViews",
            "baseName": "enabledSpaceViews",
            "type": "Array<number>"
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
            "name": "name",
            "baseName": "name",
            "type": "string"
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
            "name": "skipReviewEnabled",
            "baseName": "skipReviewEnabled",
            "type": "boolean"
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
    return DebtCollectorConfiguration;
}());
exports.DebtCollectorConfiguration = DebtCollectorConfiguration;
module.exports = DebtCollectorConfiguration;
